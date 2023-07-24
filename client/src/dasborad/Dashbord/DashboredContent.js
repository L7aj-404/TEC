import React from 'react';
import { Navigate, Route,Routes } from 'react-router-dom';
import { Home } from './dashbordpages/Home';
import Admin from './dashbordpages/Admin';
import Users from './dashbordpages/Users';
import News from './dashbordpages/News'
import Requests from './dashbordpages/Requests'
import Services from './dashbordpages/Services'
import { useAuth } from '../../hook/useAuth';
import Homepage from '../../pages/Homepage';
import AddPost from './dashbordpages/AddPost';
const DashboredContent = () => {

  const {user} =useAuth()
  console.log(user.role);
  return (
    <Routes>
    <Route  path="/dash" element={!user ?<Homepage/>: <Home/>}></Route>
    <Route  path="/users" element={<Users/>}></Route>
    <Route  path="/news" element={<News/>}></Route>
    <Route  path="/addpost" element={<AddPost/>}></Route>
    <Route  path="/request" element={<Requests/>}></Route>
    <Route  path="/admin" element={<Admin/>}></Route>
    <Route  path="/services" element={<Services/>}></Route>

  </Routes>
  );
}

export default DashboredContent;