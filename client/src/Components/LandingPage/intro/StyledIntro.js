import { Button } from '@mui/material';
import styled from 'styled-components'
import { Container} from '../../../golobalStyle';

export const ContainerI = styled(Container)`
  margin-top:8vw;


   display:flex;
   justify-content:space-between;
  align-items:center;
   gap:100px;
   color:${({theme})=>theme=="dark" ? "#fff" : "#000"};



   
  @media screen and (max-width: 960px) {
    flex-direction:column;

}
${Container} 
`;

export const Left = styled.div`
   font-size:25px;;
   
   
     


  @media screen and (max-width: 768px) {
    font-size:20px;
    
  }
    
`;

export const Title = styled.h1`
  font-size:3vw;
  font-weight:660;
  padding:8px 0px;
  
 

  @media screen and (max-width: 768px) {
    font-size:6vw;
  }
    
`;
export const Span = styled.span`
    font-size:3vw;
  font-weight:660;
  padding:8px 0px;
  color:${({theme})=>theme=='dark' ? "#16a8b2" : "#1CC4CF"};
 color:rgb(28,196,207);

  @media screen and (max-width: 768px) {
    font-size:6vw;
  }
    
 
`;
export const Description = styled.p`
    text-align:justify;
    font-size:20px;
    margin-top:1vw;
  padding:8px;
 
`;

export const Info = styled.div`
margin-bottom:11vw;
  margin-top:3vw;
  display:flex;
  justify-content:space-between;
  align-items:center;
  gap:10px;
   

  @media screen and (max-width: 768px) {
  flex-direction:column;
  }
    
`;

export const ButtonL = styled.button`
    padding: 8px;
    width:350px;
  font-size:20px;
  
    color:${({theme})=>theme=='dark' ? "#fff" : "#ffe"};
   background-color:${({theme})=>theme=='dark' ? "transparent" : "#1CC4CF"};

  border-radius: ${({theme})=>theme=='dark'};
  outline-style: solid;
  border:none;
  outline-color:${({theme})=>theme=='dark'? "#1CC4CF" : "#fff"};
  &:hover{
    background-color:#1CC4CF;
    transition:1s all ;
  }
  cursor: pointer;
  @media screen and (max-width: 768px) {
    width: 100%;
  }
    
`;

export const Contact = styled.div`
    font-size:16px;
     @media screen and (max-width: 768px) {
        
  }
`;

export const Phone = styled.span`
   
    font-weight: 200;
`;

export const ContactText = styled.span`
    color: gray;
    margin-top: 5px;
`;

export const Right = styled.div`

margin-bottom:190px;

`;

