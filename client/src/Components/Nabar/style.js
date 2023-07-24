import styled from 'styled-components'
import { Container } from '../../golobalStyle'
import {TbMovie} from 'react-icons/tb'
import { Link } from 'react-router-dom'
import { useTheme } from '../../hook/useTheme';


 export const Nav=styled.nav`
 
    height:80px;
    display:flex;
    justify-content: center;
    align-items:center; 
    font-size: 1.2rem; 
    position: sticky;
    top:0;
    z-index:999;
`
export const NavContainer=styled(Container)`
background-color:${({theme})=> theme=="dark" ? "#010c10" :"#fcfcfc"};

 display:flex;
 justify-content:space-between;
 align-items:center;
 

 height:80px;

`


export const NavLogo = styled(Link)`

color:#1CC4CF;
    justify-self:flex-start;
    cursor: pointer;
    text-decoration:none;
    font-size:2rem;
    display:flex;
    align-items:center;
    @media screen and (max-width:700px) {
        font-size:1.8rem;
    }

`
export const NavIcon = styled(TbMovie)`
 
margin-right:0.5rem;

`  
export const MobileIcon = styled.div`
    display:none;
   
    @media screen and (max-width:960px){
        display:block;
        position:absolute;
        top:-8px;
        right:0;
        transform:translate(-100%,60%);
        font-size:1.8rem;
        cursor: pointer;
    
      
    }
`


export const NavMenu=styled.ul`
display:flex;
align-items:center;
list-style:none;
text-align:center;
margin-top:15px;
color:${({theme})=>theme=="dark" ? "#fff" : "#000"};

@media screen and (max-width:960px){
      display:flex;
      flex-direction:column;
      width:100%;
      height:90vh;
      position:absolute;
      top:60px;
      left:${({click})=>(click ? 0:'-100%')};
      opacity:1;
      transition:all 0.5 ease;
      background-color:${({theme})=>theme=="dark" ? "#000e12":"#fff"};
  
    }

    
`;


export const NavItem=styled.li`
    height:60px;
   
  
  

    @media screen and (max-width:960px){
        width:100%;
        &:hover{
        border:none;
    }
    }
`

export const Navlinks=styled(Link)`
    color:hsl(216,3%,35%);
    display:flex;
    align-items:center;
    text-decoration:none;
    padding:0.5rem 1rem;
    height:100%;
    color:${({theme})=> theme=="dark" ? "#fff" :"#000"};
    @media screen and (max-width:960px){
        overflow:hidden;
      text-align:center;
      padding:2rem;
      width:100%;
      display:table;
    }
    
`