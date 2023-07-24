import React, { Children } from 'react'
import { Navbar } from '../Navbar/Navbar'
// import { SlideBar } from '../slideBar/slideBar'
import styled from 'styled-components'
import { SlideBar } from '../SlideBar/SlideBar';

export default function LayoutC({children}) {
  return (
    <Conatiner>

     
      {/* <SlideBar/> */}
      <div className='slide'>
 
      <SlideBar/>

      </div>

      <div className='home'>
      <Navbar/>
      <div className='content'>
        {children}
      </div>
      </div>
  
    </Conatiner>
  )
}




export const Conatiner=styled.div`
display:flex;
 width:auto;
 height:auto;
 .slide{

  display:flex;
  justify-content:center;
  align-items:center;

flex:1.1 ;

 }


 .home{
  flex:3;
 }

 .content{
  background-color:hsl(0,0%,95%);
  padding: 5vw 20px;
  height:100vh; 
 }


`