import React from 'react';
import { Container, Row } from 'react-bootstrap';
import styled from 'styled-components';
import { useTheme } from '../hook/useTheme';



import img from "./img/exmple.jpg"

const AboutPage = () => {

  const {theme}=useTheme()

  return (

    <ContainerAbout>
      <Container  style={{ color: theme=="dark" ? "white" : "black" }}>
        <div className='header' >
          <div className='content' >
            <div className='title'>
            <h1>About Us</h1>

            <div className='body'>

            <p>
            Training Edge Consulting est une entreprise créée en 2021 offrant des services dans trois catégories principales :  bureau d’études, centre formation professionnelle et incubateur.
               </p>

               <div className='img'>
           <img className={theme=="dark" ? "exmple shadowDark":" exmple shadowLight"}  src={img} />
         </div>
            </div>
            </div>




          </div>

        </div>
      </Container>

    </ContainerAbout>

  );
}

export default AboutPage;




/// style

export const ContainerAbout = styled.div`

margin-top:50px;
padding-bottom:120px;

  .header{
    margin-top:30px;
  }


  .body{

    display:flex;
    flex-direction:row;
    justify-content:center;
    align-items:center;


  }
p{
  font-size:1vw;
margin-top:20px;

flex:1;
text-align:justify;

}

.img{

  flex:1;
 width:400px;
   height:450px;
   display:flex;
   justify-content:center;

  .exmple{
    width:70%;
    border-radius:20px;
    object-fit: cover;
    margin-right: 14px;
  display: block;
  float: left;
  box-shadow: 3px 3px 1px #ccc;
  -webkit-box-shadow: 3px 3px 1px #ccc;
  -moz-box-shadow: 3px 3px 1px #ccc;

  }
}
.title{

  font-size:30px;
position: relative;
&::before{
  content:" ";
  height: 7px;
  border-radius:5px;
  width: 13%;
 margin:10px 0px;
  background: rgb(1,180,228);
background: linear-gradient(90deg, rgba(1,180,228,1) 18%, rgba(144,206,161,1) 88%);
  display: block;
  position: absolute;
  top: 40px;
  left: 0;
}
}
@media screen and (max-width:960px){
  .body{

display:block;



}
p{

  font-size:3vw;
text-align:start;

}

.img{

width:100%;
height:400px;


.exmple{

border-radius:30px;
object-fit: cover;

}
}

    }

`
