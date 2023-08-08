
import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import axios from 'axios';
import Alert from 'react-bootstrap/Alert';
import styled from 'styled-components'
import { useTheme } from '../hook/useTheme';
import { Back_end_Url } from '../api/URLs';

export default function Restpassword() {
const [email,setEmail]=useState("")
const [error,setError]=useState("")
const [status,setStatus]=useState("")
  const {theme}=useTheme()






  const handelSubmit=async(e)=>{
     e.preventDefault()


        await axios.post(`${Back_end_Url}/api/restpassword`,{email}).then((response)=>{


            console.log(response);
            setStatus(response.data.message)
        })
        .catch (({response})=>{
            if (response.status === 422) {
                setError(response.data.message);

            } else {
                setError(response.data);
                console.log(error);

            }
        }
        )









  }
  return (
    <Container>
       <div style={{ width:"80%" }}>

      <Form onSubmit={handelSubmit}   >
        {
            status && <Alert  variant="success"  > {status} </Alert>
        }
        {
            error && <Alert  variant="success"  > {error} </Alert>
        }
        <Form.Group className='my-4 pt-5'>

          <Form.Label style={{ color: theme=="dark" ? "#fcfcfc":"#010c10"  }}>Enter your email address:</Form.Label>

          <Form.Control  type="email"
                        placeholder="Enter your your email address" value={email}  onChange={e=>setEmail(e.target.value)}/>
        </Form.Group>
        <Button variant="primary" type="submit">
            send to mail
        </Button>
      </Form>
    </div>
    </Container>
  )
}



export const Container=styled.div`
 display:flex;
 flex-direction:row;
 justify-content:center;
 padding:40px;
 height:59vh;

`
