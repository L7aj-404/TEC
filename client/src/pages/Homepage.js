import React from 'react'
import Intro from '../Components/LandingPage/intro/Intro'
import About from '../Components/About/About'
import Services from '../Components/Services/Services'
import Contact from '../Components/contact/Contact'
import Accordian from '../Components/accordion/Accordian'

export default function Homepage( {open, setClick, setOpen }) {
  return (
   <>

    <Intro  setOpen={setOpen}  setClick={setClick}/>
    <About />
     <Services/>
     <Accordian/>
     <Contact/>


    </>
  )
}
