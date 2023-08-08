import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import {FcBusinessman,FcPositiveDynamic,FcCandleSticks} from 'react-icons/fc'
import Requests from './Requests'
import { useAuth } from '../../../hook/useAuth';
import axios from 'axios';
import { Back_end_Url } from '../../../api/URLs'
// import {FcAnswers} from 'react-icons/fc'

export const Home = () => {
  const {user} =useAuth()
  const [contUser,setContUsers] = useState(0)
  const [contPost,setContPost] = useState(0)
  const [contRequest,setContRequest] = useState(0)
  console.log(user.role);
  useEffect(() => {
    async function fetchUsers() {
        try {
            const response = await axios.get(Back_end_Url+'/api/user/count');
            setContUsers(response.data);
            console.log(response.data); // Check if data is received
        } catch (err) {
            console.error(err);
        }
    }
    fetchUsers();
    async function fetchPoste() {
        try {
            const response = await axios.get(Back_end_Url+'/api/postecount');
            setContPost(response.data);
            console.log(response.data); // Check if data is received
        } catch (err) {
            console.error(err);
        }
    }
    fetchPoste();
    async function fetchRequeste() {
        try {
            const response = await axios.get(Back_end_Url+'/api/requestecount');
            setContRequest(response.data);
            console.log(response.data); // Check if data is received
        } catch (err) {
            console.error(err);
        }
    }
    fetchRequeste();
}, []);
  return (
    <Conatiner>
      <h1>Dashboard</h1>
      <div className='cards'>
          <div className='box'>
                    <span className='icon'><FcBusinessman/></span>
                    <div className='info'>
                        <h3>users</h3>
                        <span>{contUser}</span>
                    </div>
          </div>
          <div className='box'>
                    <span className='icon'><FcPositiveDynamic/></span>
                    <div className='info'>
                        <h3>news</h3>
                        <span>{contPost}</span>
                    </div>
          </div>
          <div className='box'>
                    <span className='icon'><FcCandleSticks/></span>
                    <div className='info'>
                        <h3>requests</h3>
                        <span>{contRequest}</span>
                    </div>
          </div>

      </div>


      <div className='tabel-recent'>
        <h1>
        recent request
        </h1>
        <Requests />
      </div>

    </Conatiner>
  )
}



export const Conatiner=styled.section`


display:flex;
flex-direction:column;
gap:10px;

.cards{
  padding:8px;
  display:flex;
  gap : 3em;
  align-items:center;
  flex-wrap:nowrap;
  @media screen and (max-width:960px){
        display:flex;
        flex-direction:column;
      width:100%;
      }
  .box{

  padding:8px;
  width:400px;
  height:100px;
  box-shadow: rgba(17, 17, 26, 0.05) 0px 1px 0px, rgba(17, 17, 26, 0.1) 0px 0px 8px;

display:flex;
justify-content: center;
align-items: center;
gap:10px;
h3{
  font-size:26px;
  color:#8892b0;


}

.info{

}
.icon{

    svg{
      font-size:50px;
    }

}
@media screen and (max-width:960px){
      display:flex; margin-top:4px;

      text-align:center;
     width:100%;
     .info{

  width:40%
}
    }
}


 }
`
