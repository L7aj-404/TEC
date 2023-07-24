import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import styled from 'styled-components'
import { CgProfile } from 'react-icons/cg';
import { BiLogOut  } from 'react-icons/bi';
import { useLogout } from '../../../hook/useLogout';
export const Navbar = () => {
    const {logout}=useLogout()
    let nav=useNavigate()
    const handlLougout=()=>{
        nav("/")
        logout()
         
    }
    return (
        <Nav>
            <nav>
            
                <div className='profile'>
                    <Link to="/admin">
                        <CgProfile/>
                    </Link>
                    <span>
                     <BiLogOut onClick={handlLougout}/>
                    </span>
                </div>
            </nav>

        </Nav>
    )
}

export const Nav = styled.div`
flex:4;
background-color:#fcfcfc;
height:60px;
/* border:1px solid black; */

position:sticky;

nav{
    

    padding:0 10px;
    height:100%;
    display: flex;
    flex-direction:row;

    justify-content:end;
    align-items:center;
    border-left:none;
    box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;
}
.profile{
    width:15%;

    padding:9px;
    display:flex;
    justify-content:center;
    align-items:center;
    gap:30%;
}
span{
    position:relative;

    font-size:24px;
    padding:6px;
}


a{
    text-decoration:none;
  color:black;
    font-size:30px;
    margin-top:3px;
}
`