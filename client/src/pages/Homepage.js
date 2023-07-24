import React from 'react'
import Intro from '../Components/LandingPage/intro/Intro'
import About from '../Components/About/About'
import Services from '../Components/Services/Services'
import Contact from '../Components/contact/Contact'
import Accordian from '../Components/accordion/Accordian'

export default function Homepage() {
  return (
   <>
     
    <Intro/>
    <About />
     <Services/>
     <Accordian/>
     <Contact/>
     
       
    </>
  )
}
