
import React ,{useEffect, useState}from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import styled from 'styled-components'
import Alert from 'react-bootstrap/Alert';
import { useTheme } from '../hook/useTheme';
import { useNavigate, useParams } from 'react-router-dom';
import { Back_end_Url } from '../api/URLs';

export default function Verifypassword() {

    const {theme}=useTheme();

    const [error,setError]=useState("")
    const [email ,setEmail]=useState('')
    const [password ,setPassord]=useState('')
    const [password_confirmation ,setPasswordConfirmation]=useState('')

    const {id,token}=useParams();
     const nav= useNavigate()


    const userValid = async () =>{


      const response = await fetch(`${Back_end_Url}/api/user/Verifypassword/${id}/${token}`, {
        method: 'GET',
        headers: {'Content-Type': 'application/json',
                'Accept': 'application/json'},

      })

      console.log(response);
      const data = await response.json()
     console.log(data);

      if (data.status==201) {
        console.log("user valid");
      }
      if (data.status==401) {
        nav("/")
      }





    }




    useEffect(()=>{
      userValid();
    },[])



    const sendpassword=async(e)=>{
      e.preventDefault();
       const response = await fetch(`${Back_end_Url}/api/user/Verifypassword/${id}/${token}`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    'Accept': 'application/json'
                },
                body: JSON.stringify({ password, email, token, password_confirmation})
            });


            const data = await response.json()
           console.log(data);

            if (data.status==201) {
              console.log("user valid");
              nav("/")
            }
            if (data.status==422) {
                setError(data.message)
            }
    }

  return (
    <Container>
       <div style={{ width:"80%" }}>
       {
            error && <Alert  variant="success"  > {error} </Alert>
        }

      <Form>

        <Form.Group className='my-4 pt-2'>
          <Form.Label style={{ color: theme=="dark" ? "#fcfcfc":"#010c10"  }}>Enter Email:</Form.Label>
          <Form.Control  type="email"
          value={email}
          onChange={(e)=>setEmail(e.target.value)}
          placeholder="Enter your Email" />
        </Form.Group>
        <Form.Group className='my-4 pt-2'>
          <Form.Label style={{ color: theme=="dark" ? "#fcfcfc":"#010c10"  }}>Enter new password:</Form.Label>
          <Form.Control  type="password"
          value={password}
          onChange={(e)=>setPassord(e.target.value)}
          placeholder="Enter your new  password" />
        </Form.Group>
        <Form.Group className='my-4 pt-2'>
          <Form.Label style={{ color: theme=="dark" ? "#fcfcfc":"#010c10"  }}>Enter new password:</Form.Label>
          <Form.Control  type="password"
          value={password_confirmation}
          onChange={(e)=>setPasswordConfirmation(e.target.value)}
          placeholder="Enter your Password Confirmation" />
        </Form.Group>
        <Button variant="primary" type="submit"  onClick={sendpassword}>
           confirmed
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
