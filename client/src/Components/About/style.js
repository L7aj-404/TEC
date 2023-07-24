import styled from 'styled-components'
import { motion } from 'framer-motion'
import { Card } from '@mui/material'
import { Container } from '../../golobalStyle'






export const AbouteContainer=styled(Container)`
    display:flex;
    flex-direction:column;
    color:${({theme})=>theme=="dark" ? "white":"#000"};
    
    ${Container}
   

  
`
 export const Info=styled(motion.div)`


  
 `

export const PuLL=styled(motion.div)`
width:120px;
font-size:12px;
color:white;
padding:9px 13px;
background: #000;
border-radius:30px;
text-align:center;
background-color:${({theme})=>theme=="dark" ? "#fff":"#000"};
color:${({theme})=>theme=="dark" ? "#000":"#fff"};
`

export const Title=styled.h1`
     padding:22px 0px;
`

export const Pargraphe=styled.p`
     padding:8px 0px;
   
`

export const ContainerCard=styled(motion.div)`
display:flex;
justify-content:center;

flex-direction:row;
flex-wrap:wrap;

@media screen and (max-width:700px){
        display:block;
        justify-content:center;
     
      
    }
`

export const CradContainer=styled(Card)`
width:280px;
height:auto;
margin:10px;
@media screen and (max-width:700px){
      margin-top:10px;
       width:100%;
      
    }

`

export const Icon=styled.div`
color:red;

`