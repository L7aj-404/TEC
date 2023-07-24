import React, {useState} from 'react'
import '../Services/Services.scss'
import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';
import service from '../Services/services.jpg'

import { useTheme } from '../../hook/useTheme';
import styled from 'styled-components';
function Services() {

  const {theme}=useTheme()
   const [index , setIndex] = useState(2)
   const handleSelect = () => {
    setIndex()
   }

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
      <Carousel.Item>
        <div className='carousel-container-content'>   <img
        
          src={service}
          alt="First slide"
        />
        <div>
          <p >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac felis tincidunt, vestibulum arcu vel, venenatis urna. Suspendisse potenti. Fusce non facilisis nisi. Vestibulum vel nulla ut purus ullamcorper blandit. Nam malesuada justo sed magna ultricies, a interdum turpis euismod. Nulla facilisi.
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac felis tincidunt, vestibulum arcu vel, venenatis urna. Suspendisse potenti. Fusce non facilisis nisi. Vestibulum vel nulla ut purus ullamcorper blandit. Nam malesuada justo sed magna ultricies, a interdum turpis euismod. Nulla facilisi.
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac fel
            </p>
          </div></div>
      </Carousel.Item>
      <Carousel.Item>
        <div className='carousel-container-content'>    <img
        
         src={service}
          alt="Second slide"
        />
        <div>Service2</div>
</div>
    
        {/* <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption> */}
      </Carousel.Item>
      <Carousel.Item>
        <div className='carousel-container-content'>  <img
       
         src={service}
          alt="Third slide"
        />
        <div>Service3</div>
</div>
      
        {/* <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption> */}
      </Carousel.Item>
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

