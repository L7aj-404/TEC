
import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Alert from 'react-bootstrap/Alert';
import styled from 'styled-components'
import { useTheme } from '../hook/useTheme';

export default function Restpassword() {
const [email,setEmail]=useState("")
  const {theme}=useTheme()

   const [messageEmail,setMessageEmail]=useState({})




  const handelSubmit=async(e)=>{
     e.preventDefault()
      
    const response = await fetch('http://localhost:4040/api/user/Restpassword', {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({ email })
    })
    const json = await response.json()



    if(json.status==201){
      setMessageEmail(json)
      setInterval(()=>{
        setMessageEmail("")
     },5000)
    }
    if(json.status==401){
      setMessageEmail(json)
      setInterval(()=>{
        setMessageEmail("")
     },5000)
    }


    // console.log(message);
 
  
  }
  return (
    <Container>
       <div style={{ width:"80%" }}>
   
      <Form onSubmit={handelSubmit}   >
    
        <Form.Group className='my-4 pt-5'>

          <Form.Label style={{ color: theme=="dark" ? "#fcfcfc":"#010c10"  }}>Enter your email address:</Form.Label>


         {
        messageEmail?.status==201  && <Alert  variant="success"  >
   {    messageEmail?.message}
       </Alert>
         }
                 {
        messageEmail?.status==401  && <Alert  variant="danger"  >
   {    messageEmail?.message}
       </Alert>
         }
         



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