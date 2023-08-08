
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


import { useNavigate } from "react-router-dom"
import axios from 'axios'
import { useState } from 'react';
import { useTheme } from '../hook/useTheme';
import {Back_end_Url} from '../api/URLs'








export default function Requiste() {
    const [formdata, setFormdata] = useState({})
    const [iserror, setIserror] = useState(null)
    const {theme}=useTheme()
    const navigate = useNavigate()

    const handleSubmit = async (event) => {
        event.preventDefault();
        console.log('add post');

        console.log(formdata);
        if (formdata.phone===formdata.phone_confirmation) {
            await axios.post(Back_end_Url+`/api/requeste`,formdata).then(({data})=>{
                console.log(data.message);

                navigate('/')
            })

        .catch (({response})=>{
            if (response.status === 422) {
                setIserror(response.data.message);

            } else {
                setIserror(response.data);
                console.log(iserror);

            }


        })
        } else {
            setIserror("The Phone Number not Matched")
        }



    };



    return (

        <Container component="main" maxWidth="lg"  style={{ color: theme=="dark" ? "white" : "black" }}>
            <CssBaseline />
            <Box
                sx={{
                    marginTop: 4,
                    marginBottom: 4,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                }}
            >


                {iserror && <Alert sx={{width:"100px"}}  severity="error">{iserror}</Alert>}
                <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
                    <LockOutlinedIcon />
                </Avatar>
                <Typography component="h1" variant="h5">
                START A PROJECT
                </Typography>
                <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }} style={{ backgroundColor:"white",borderRadius:'20px',padding:'3rem'}}>
                    <Grid container spacing={2}>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                autoComplete="given-name"
                                name="firstName"
                                value={formdata.firstname}
                                onChange={e => setFormdata({...formdata, firstname:e.target.value})}
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
                                id="lastname"
                                value={formdata.lastname}
                                onChange={e => setFormdata({...formdata, lastname:e.target.value})}
                                label="Last Name"
                                name="lastname"
                                autoComplete="family-name"
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                required
                                fullWidth
                                id="companyName"
                                value={formdata.companyName}
                                onChange={e => setFormdata({...formdata, companyName:e.target.value})}
                                label="Enter your Company Name"
                                name="companyName"
                                autoComplete="companyName"
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                required
                                fullWidth
                                id="peojectType"
                                value={formdata.peojectType}
                                onChange={e => setFormdata({...formdata, peojectType:e.target.value})}
                                label="Peoject Type "
                                name="peojectType"
                                autoComplete="peojectType"
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                required
                                fullWidth
                                value={formdata.email}
                                onChange={e => setFormdata({...formdata, email:e.target.value})}
                                name="email"
                                label="email"
                                type="email"
                                id="email"
                                autoComplete="email"
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                required
                                fullWidth
                                value={formdata.phone}
                                onChange={e => setFormdata({...formdata, phone:e.target.value})}
                                name="phone"
                                label="tele"
                                type="phone"
                                id="phone"
                                autoComplete="phone"
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                required
                                fullWidth
                                value={formdata.phone_confirmation}
                                onChange={e => setFormdata({...formdata, phone_confirmation:e.target.value})}
                                name="phone_confirmation"
                                label="phone_confirmation"
                                type="tele"
                                id="phone_confirmation"
                                autoComplete="phone_confirmation"
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                            inputProps={{style:{height:70}}}
                            variant='outlined'
                            multiline
                            minRows={5}

                            required
                            fullWidth
                            id="comment"
                            value={formdata.comment}
                            onChange={e => setFormdata({ ...formdata, comment: e.target.value })}
                            label="comment"
                            name="comment"
                            autoComplete="add-content"
                        />
                        </Grid>

                    </Grid>
                    <Button
                        type="submit"

                        variant="contained"
                        sx={{ mt: 3, mb: 2 }}
                    >
                        Submit
                    </Button>
                </Box>
            </Box>

        </Container>

    );
}
