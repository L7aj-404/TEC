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
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useLogin } from '../../hook/useLogin';
import { useState } from 'react';
import { useAuth } from '../../hook/useAuth';
import { Alert } from '@mui/material';



const theme = createTheme();

export default  function  SignIn ({setSignInFirst}) {
  const [email,setEmail]=useState("")
    const {isLoading,login,iserror}=useLogin()
  const [password,setPassord]=useState("")
  const handleSubmit = async(event) => {
    event.preventDefault()
  await login(email,password)

  };

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
       
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            marginBottom:8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        > 
    
             {iserror && <Alert sx={{width:"100%"}} severity="error">{iserror}</Alert>}
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
        
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"

              value={email}
              onChange={(e)=>{
                setEmail(e.target.value)
              }}
              autoComplete="email"
              autoFocus
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              value={password}
              onChange={(e)=>{
                setPassord(e.target.value)
              }}
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
            />
            
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign In
            </Button>
            <Grid container>
              <Grid item xs>
                <Link href="/restpassword" variant="body2">
                  Forgot password?
                </Link>
              </Grid>
              <Grid item>
                <Link href="#"  onClick={()=>setSignInFirst(true)}  variant="body2">
                  {"Don't have an account? Sign Up"}
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
      
      </Container>
    </ThemeProvider>
  );
}