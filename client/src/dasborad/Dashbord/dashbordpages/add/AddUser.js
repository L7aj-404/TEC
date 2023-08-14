import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';

import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';


import { Alert } from 'react-bootstrap';


import {useNavigate} from "react-router-dom"
import axios from 'axios'
import { Back_end_Url } from '../../../../api/URLs';
import SelectInput from '@mui/material/Select/SelectInput';
import { Select } from '@mui/material';






export default function AddUser() {

  const [isLoading, setIsLoading] = React.useState(null)
  const [firstname,setFirstname]=React.useState("")
  const [lastname,setLasname]=React.useState("")
const [email,setEmail]=React.useState("")
const [age,setAge]=React.useState("")
const [password,setPassord]=React.useState("")
const [role,setRole]=React.useState("")
const [iserror, setIserror] = React.useState(null)
const navigate = useNavigate()

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log(role)
        const response = await fetch(Back_end_Url+'/api/adduser', {
            method: 'POST',
            headers: {'Content-Type': 'application/json',
                    'Accept': 'application/json'
            },
            body: JSON.stringify({firstname,lastname,age,email,password, role })
        })
      const json = await response.json()

      if (!response.ok) {
        setIsLoading(false)
        setIserror(json.message)
      }

      if (response.ok) {
        setIsLoading(false)
        navigate('/users')
      }
    }




  return (

      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 4,
            marginBottom:4,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >


             {iserror && <Alert sx={{width:"100px"}}  severity="error">{iserror}</Alert>}

          <Typography component="h1" variant="h5">
            Add User
          </Typography>
          <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  autoComplete="given-name"
                  name="firstName"
                  value={firstname}
                  onChange={e=>setFirstname(e.target.value)}
                  required
                  fullWidth
                  id="firstName"
                  label="First Name"
                  autoFocus
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  id="lastName"
                  value={lastname}
                  onChange={e=>setLasname(e.target.value)}
                  label="Last Name"
                  name="lastName"
                  autoComplete="family-name"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="age"
                  value={age}
                  onChange={e=>setAge(e.target.value)}
                  label="Enter age"
                  name="age"
                  autoComplete="age"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="email"
                  value={email}
                  onChange={e=>setEmail(e.target.value)}
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  value={password}
                  onChange={e=>setPassord(e.target.value)}
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="new-password"
                />
              </Grid>
              <Grid item xs={12}>
                <select
                required
                className='form-select outline-0'
                onChange={e=>setRole(e.target.value)}
                name="role"

                >

                    <option  selected>Role</option>
                    <option value='client' selected>Client</option>
                    <option value='admin'>Admin</option>
                </select>
              </Grid>

            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              ADD
            </Button>

          </Box>
        </Box>

      </Container>

  );
}
