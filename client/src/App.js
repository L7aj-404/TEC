import { useState, } from "react";
import {  Navigate, Route, Routes } from "react-router-dom";
import Navbar from "./Components/Nabar/Navbar";
import GlobleStyle, { Container } from "./golobalStyle";

import Footer from "./Components/Footer/Footer";
import BasicModal from "./Components/login/BasicModal";
import SignIn from "./Components/login/Login";
import SignUp from "./Components/login/SignUp";
import styled from "styled-components";
import Servicespage from "./pages/Servicespage";
import AboutPage from "./pages/AboutPage";
import Homepage from "./pages/Homepage";
import { Profile } from "./Components/Profile/Profile";
import { useAuth } from "./hook/useAuth";
import { useTheme } from "./hook/useTheme";
import LayoutC from "./dasborad/Dashbord/Layout/LayoutC";
import DashboredContent from "./dasborad/Dashbord/DashboredContent";
import Verifypassword from "./pages/Verifypassword";
import Restpassword from "./pages/Restpassword";


function App() {

  const [click, setClick] =useState(false)
  const [open, setOpen] = useState(false);
  const [SignInFirst, setSignInFirst] =useState(false);


const {user}=useAuth()
console.log(user);
const {theme}=useTheme()


    if (

       user?.role=="admin"
    ) {
      return <LayoutC children={<DashboredContent/>}/>
    }

  return (


    <ConatinerApp theme={theme} click={click}>
     <GlobleStyle/>
     <Navbar open={open} setOpen={setOpen} click={click} setClick={setClick}/>
     <BasicModal open={open} setClick={setClick}   setOpen={setOpen} >


        {
          SignInFirst && !user  ? <SignUp setSignInFirst={setSignInFirst}/> :<SignIn  setSignInFirst={setSignInFirst}/>
        }



       </BasicModal>
       <Routes>
        <Route index path="/" element={<Homepage />} />
        <Route path="/Verifypassword/:id/:token" element={<Verifypassword />} />
        <Route path="/restpassword" element={<Restpassword />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/services" element={<Servicespage />} />
         <Route path="/profile" element={user  ?  <Profile />: <Navigate to="/"/>} />
         {/* <Route path="/login" element={  <BasicModal open={open} setClick={setClick}   setOpen={setOpen} >
                 hello



       </BasicModal>} /> */}


      </Routes>



    <Footer/>




    </ConatinerApp>

  );
}


export default App;




const ConatinerApp=styled.div`
padding:0;
margin-top:0;
background-color:${({theme})=>theme=="dark" ? "#000e12 " :"white"};




`
