import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import styled from 'styled-components'
import { RxDashboard  } from 'react-icons/rx'
import { FiUsers  } from 'react-icons/fi'
import { GrUserAdmin  } from 'react-icons/gr'
import { BsFillFilePostFill  } from 'react-icons/bs'
import { GoGitPullRequest  } from 'react-icons/go'

export const SlideBar = () => {

  return (
    <Bar className='bar'>
        <div className='logo'>
                  <GrUserAdmin/>

                </div>
     <div className='group-btn'>

        <NavLink to="/dash"><RxDashboard/>Dashboard</NavLink>
        <NavLink  to="/users"><FiUsers/>Users</NavLink>
        <NavLink  to="/news"><BsFillFilePostFill/> news</NavLink>
        <NavLink to="/request"><GoGitPullRequest/> request</NavLink>
        <NavLink to="/services"><GoGitPullRequest/> Services</NavLink>
        <NavLink to="/about"><GoGitPullRequest/> About</NavLink>


     </div>

    </Bar>
  )
}




export const Bar=styled.main`

height: 100%;

.group-btn{
    display:flex;
    flex-direction:column;
    height:95vh;

    padding-top:50px;
   a{
    text-decoration:none;

    padding:14px 70px;
    color:white;

    margin:3px;
    border-radius:6px;
    display: flex;
  border-radius: 6px;
  gap:10px;
  color: #3D3D3D;
  background: #fff;
  border: none;
  box-shadow: 0px 0.5px 1px rgba(0, 0, 0, 0.1);
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
&:focus {
  box-shadow: 0px 0.5px 1px rgba(0, 0, 0, 0.1), 0px 0px 0px 3.5px rgba(58, 108, 217, 0.5);
  outline: 0;


   }

   @media screen and (max-width:960px){
   padding:14px;

    }
}}


.logo{
height:60px;
display:flex;
justify-content:center;
align-items:center;

svg{

  font-size:40px;
}
}


`

