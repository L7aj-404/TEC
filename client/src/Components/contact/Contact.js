import React, { useEffect, useRef, useState } from 'react'
import "./style.css"
import { Container } from '../../golobalStyle'
import emailjs from '@emailjs/browser';
import { Alert } from '@mui/material';
export default function Contact() {
const [name,setName]=useState('')
const [email,setemail]=useState('')
const [number,setNumber]=useState('')
const [messager,setMessage]=useState('')
const [error,setError]=useState('')
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    if (!email || !name || !number || !messager) {
         setError("aLL fields must be filled")
         setInterval(()=>{
            setError("")
         },5000)
    }
    if (email && name && number  && messager) {


    emailjs.sendForm('service_pnmwd8n',
     'template_1c8dodw',
      form.current, 'attcGULGv8EpYM0CA')
      .then((result) => {
          if(result.text){
            setName("")
            setemail("")
            setNumber("")
            setMessage("")
            setError("")
          }

      }, (error) => {
          setError(error.text);
      });
    }}




  return (
    <Container>
    <div className="background">
    <div className="container">
      <div className="screen">
        <div className="screen-header">


        </div>
        <div className="screen-body">
          <div className="screen-body-item left">
            <div className="app-title">
              <span>CONTACT</span>
              <span>US</span>
            </div>
            <div className="app-contact">CONTACT INFO : +07 08 08 09 09 </div>
          </div>

          <div className="screen-body-item">


            <form className="app-form"  ref={form} onSubmit={sendEmail}>

              {error &&
            <Alert severity="error">{error}</Alert>}
              <div className="app-form-group">
                <input className="app-form-control" name='user_name'

                value={name}
                onChange={(e)=>setName(e.target.value)}
                placeholder="NAME" />
              </div>
              <div className="app-form-group">
                <input className="app-form-control" name='user_email'
                    value={email}
                    onChange={(e)=>setemail(e.target.value)}

                placeholder="EMAIL"/>
              </div>
              <div className="app-form-group">
                <input className="app-form-control" name='user_nb'

                value={number}
                onChange={(e)=>setNumber(e.target.value)}

                placeholder="CONTACT numb"/>
              </div>
              <div className="app-form-group message">
                <input className="app-form-control"
                 value={messager}
                 onChange={(e)=>setMessage(e.target.value)}

                name='message'

                placeholder="MESSAGE"/>
              </div>
              <div className="app-form-group buttons">
                <button type='reset' className="app-form-button">CANCEL</button>
                <button type="submit" className="app-form-button">SEND</button>
              </div>
            </form>
          </div>
        </div>
      </div>
     </div>
     </div>
     </Container>
  )
}
