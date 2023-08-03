import React, { useEffect } from 'react';
import { TbMenu } from 'react-icons/tb';
import { MdLightMode, MdNightlight } from "react-icons/md";
import { IoMdClose } from "react-icons/io";
import {CgProfile,CgLogOut} from "react-icons/cg"
import { IconContext } from 'react-icons/lib';
import {
  Nav, NavContainer, NavLogo, MobileIcon, NavItem, Navlinks, NavMenu
} from './style';
import { Button, Tooltip } from '@mui/material';
import { useAuth } from '../../hook/useAuth';
import { useLogout } from '../../hook/useLogout';

import { Link, useNavigate } from 'react-router-dom';
import { useTheme } from '../../hook/useTheme';

export const NavItemLinks = [
  {
    id: 1,
    href: "/",
    name: "home"
  },
  {
    id: 2,
    href: "/about",
    name: "about"
  },
  {
    id: 3,
    href: "/services",
    name: "services"
  },

]


function Navbar({ click, setClick, setOpen }) {

  const { user } = useAuth()

  const {logout}=useLogout()
   const {theme,toggelTheme}=useTheme()

   const navigate = useNavigate()
const handeLogOut=()=>{

  logout()

 navigate('/')

}

console.log(theme);

  const handelClick = () => setClick(!click);
  return (
    <IconContext.Provider value={{ color: '#1CC4CF' }}>
      <Nav >
        <NavContainer theme={theme} >
          <NavLogo to='/'>
            TEC
          </NavLogo>
          <MobileIcon onClick={handelClick}>{click ? <IoMdClose /> : <TbMenu />}</MobileIcon>
          <NavMenu click={click} theme={theme}  >


            {
              NavItemLinks.map(item=>(
                <NavItem onClick={handelClick} key={item.id}>
                <Navlinks  to={item.href} theme={theme}>{item.name}</Navlinks>
              </NavItem>
              ))
            }
            {/* <NavItem  onClick={handelClick}>
                <Navlinks dark={dark} to='/cantact'>cantact us</Navlinks>
              </NavItem> */}


            <Tooltip title={"login pages"}>
              <Button>en</Button>
            </Tooltip>

            <Tooltip title={theme=="dark" ? "dark mode" : "light mode"}>
              <Button variant='text' onClick={() => toggelTheme()} >

                {
                  theme=="dark" ? <MdNightlight color={theme=="dark" ? "white" : "black"} fontSize={"30px"} /> : <MdLightMode color=' #f5b400' fontSize={"30px"} />
                }
              </Button>
            </Tooltip>


            {
              !user ?


                <Tooltip title={"login pages"}>
                  <Button  onClick={() => { setOpen(true); setClick(false) }} sx={{ borderRadius: "18px", margin: "13px" }} variant='contained'>login</Button>
                </Tooltip>
                :
                <>
                       <Link to={`/profile`}  ><CgProfile fontSize={"40px"}/></Link>
                       <Tooltip title={"logout"}>
                      <Button onClick={handeLogOut} sx={{ borderRadius: "18px", margin: "13px" ,color:theme=="dark" ?"white":"black"}} variant='text'><CgLogOut fontSize={'20px'}/> log out</Button>

                </Tooltip>

                </>


            }


          </NavMenu>
        </NavContainer>
      </Nav>
    </IconContext.Provider>
  )
}

export default Navbar
