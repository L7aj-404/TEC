import styled, { keyframes } from 'styled-components';
import { motion } from 'framer-motion';

export const slideAnimation = keyframes`
  0% {
    transform: translateY(0);
  }
  100% {
    transform: translateY(-100%);
  }
`;

export const slideAnimationMobile = keyframes`
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-100%);
  }
`;

export const Slider = styled.div`
  overflow: hidden;
  height: 50vh; 

  @media screen and (max-width: 768px) {
   
    height: auto;
  
    display: flex;
    flex-direction: row;
    overflow: hidden;
 
  }
  
`;

export const NewsItem = styled(motion.div)`
  width:400px;
  border-radius:5px;
  -webkit-box-shadow: -1px -2px 16px -14px rgba(0,0,0,0.75);
-moz-box-shadow: -1px -2px 16px -14px rgba(0,0,0,0.75);
box-shadow: -1px -2px 16px -14px rgba(0,0,0,0.75);
  padding: 20px;
  margin:10px;


  @media screen and (max-width: 768px) {
    margin-right: 20px;
    height: auto;
    width: 60%;
    flex-grow: 1;
    
  }
`;

export const NewsTitle = styled.h3`
color:#1976d2;
  margin: 0;
  padding:3px;
  display :flex;
  flex-direction:row;
  justify-content:space-between;
  align-items:center;

 
`;

export const NewsContent = styled.p`
  
  margin: 0;
  font-size: 18px;
  @media screen and (max-width: 768px) {
      width: 50vw;
  }
`;

export const NewsItemAnimation = styled.div`

  display: flex;
  flex-direction: column;
  animation: ${slideAnimation} 25s linear infinite;
  animation-fill-mode: forwards;
  &:hover {
    perspective: 100px;
    animation-play-state: paused;
    cursor: pointer;
  }
  @media screen and (max-width: 768px) {
    display: flex;
 
    flex-direction: row;

    animation: ${({ isMobile }) => (isMobile ? slideAnimationMobile : '')} 25s linear infinite;
    animation-fill-mode: forwards;
    
  }
`;

