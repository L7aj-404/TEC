import React, {useState, useEffect} from 'react'
import '../Services/Services.scss'
import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';
import service from '../Services/services.jpg'
import axios from "axios";
import { useTheme } from '../../hook/useTheme';
import styled from 'styled-components';
import { Back_end_Url } from '../../api/URLs';
function Services() {

  const {theme}=useTheme()
   const [index , setIndex] = useState(2)
   const [service, setService] = useState([]);
   const handleSelect = () => {
    setIndex()
   }

   useEffect(() => {
       async function fetchService() {
           try {
               const response = await axios.get(Back_end_Url+'/api/service');
               setService(response.data);
               console.log(response.data); // Check if data is received
           } catch (err) {
               console.error(err);
           }
       }
       fetchService();
   }, []);

  return (
    <div className='services-container'>
            <div >
        <Bar theme={theme} className='services-top-bar'>
            <h2  style={{
                color:theme=="dark" ? "white" : "black",
              margin:60
            }}>
              Our   Services
            </h2>
        </Bar>
        <div className='carousel-container'>
        <Carousel activeIndex={index} onSelect={handleSelect}>
            {
                service.map((item,index)=>
                <Carousel.Item key={index}>
                    <div className='carousel-container-content' >   <img

                    src={`http://localhost:8000/storage/${item.image}`}
                    alt={' Slide '+index}
                    />
                        <div className="row p-3 text-center">
                            <h2>{item.title}</h2>
                            <p >
                            {item.description}
                            </p>
                        </div>
                    </div>
                </Carousel.Item>)
            }

    </Carousel>
        </div>
    </div>
    </div>


  )
}

export default Services


// style-components


export  const Bar=styled.div`
  h2{
    position:relative;&::before{
  content:" ";
  height: 7px;
  border-radius:5px;
  width: 100%;
 margin:10px 0px;
  background: rgb(1,180,228);
background: linear-gradient(90deg,${({theme})=> theme=="dark" ? "white" :"#1CC4C9"}, rgba(144,206,161,1) 88%);
  display: block;
  position: absolute;
  top: 40px;
  left: 0;
}
  }


`

