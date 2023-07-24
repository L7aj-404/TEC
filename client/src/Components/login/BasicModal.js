import * as React from 'react';
import Button from '@mui/joy/Button';
import Modal from '@mui/joy/Modal';
import ModalClose from '@mui/joy/ModalClose';
import Typography from '@mui/joy/Typography';
import Sheet from '@mui/joy/Sheet';
import styled from 'styled-components';
import { useAuth } from '../../hook/useAuth';

export default function BasicModal({open,setOpen,children}) {
 
const {user}=useAuth()

if (user) {
   setOpen(false)
}
  return (
 
      <ModalC
        
        open={open}
        onClose={() => setOpen(false)}
        sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}
      >
        <Test
         
          sx={{
      
           
            borderRadius: 'md',
          
            boxShadow: 'lg',
          }}
        >
          <ModalClose
            variant="outlined"
            sx={{
              top: 'calc(-1/4 * var(--IconButton-size))',
              right: 'calc(-1/4 * var(--IconButton-size))',
              boxShadow: '0 2px 12px 0 rgba(0 0 0 / 0.1)',
              borderRadius: '50%',
              bgcolor: 'background.body',
            }}
          />
        

          {children}
         
       
        </Test>

    </ModalC>
  );
}


const ModalC=styled(Modal)`

width: 100%;
`


const Test=styled(Sheet)`

width: auto;
@media screen and (max-width:960px){
  width: 100%;
        margin:15px;
    
      
    }


`