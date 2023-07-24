
import React ,{useEffect, useState}from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import styled from 'styled-components'
import { useTheme } from '../hook/useTheme';
import { useNavigate, useParams } from 'react-router-dom';

export default function Verifypassword() {

    const {theme}=useTheme();


    const [password ,setPassord]=useState('')

    const {id,token}=useParams();
     const nav= useNavigate()


    const userValid = async () =>{

      
      const response = await fetch(`http://localhost:4040/api/user/Verifypassword/${id}/${token}`, {
        method: 'GET',
        headers: {'Content-Type': 'application/json'},
       
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
       const response = await fetch(`http://localhost:4040/api/user/Verifypassword/${id}/${token}`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({ password })
            });

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

  return (
    <Container>
       <div style={{ width:"80%" }}>
   
      <Form>
     
        <Form.Group className='my-4 pt-5'>
          <Form.Label style={{ color: theme=="dark" ? "#fcfcfc":"#010c10"  }}>Enter new password:</Form.Label>
          <Form.Control  type="password" 
          value={password}
          onChange={(e)=>setPassord(e.target.value)}
          placeholder="Enter your new  password" />
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