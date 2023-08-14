import { Avatar, Box, CssBaseline, Grid, TextField, Typography } from '@mui/material'
import { TextareaAutosize } from '@mui/base'
import React, { useState } from 'react'
import { Alert, Button, Container } from 'react-bootstrap'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'
import { Back_end_Url } from '../../../../api/URLs'

function AddPost() {
    const [formdata, setFormData] = useState({})
    const [iserror, setIserror] = useState(null)
    const navigate = useNavigate()
   async function handleSubmit(e) {
        e.preventDefault();
        console.log('add post');

            await axios.post(`${Back_end_Url}/api/poste`,formdata).then(({data})=>{
                console.log(data.message);

                navigate('/news')
            })

        .catch (({response})=>{
            if (response.status === 422) {
                setIserror(response.data.message);

            } else {
                setIserror(response.data);
                console.log(iserror);

            }


        })


    };
    return (
        <Container component="main" >
            <CssBaseline />
            <Box
                sm={{
                    marginTop: 4,
                    marginBottom: 4,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'start',
                }}
            >


                {iserror && <Alert sx={{ width: "100px" }} severity="error">{iserror}</Alert>}

                <Typography component="h1" variant="h5">
                    Add Post
                </Typography>
                <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>

                    <Grid item xs={12} sm={4}>
                        <TextField
                            autoComplete="given-title"
                            name="title"
                            value={formdata.title}
                            onChange={e => setFormData({ ...formdata, title: e.target.value })}
                            required
                            fullWidth
                            id="title"
                            label="Title"
                            autoFocus
                        />
                    </Grid>
                    <br/>
                    <Grid item xs={12}>
                        <TextField
                            inputProps={{style:{height:70}}}
                            variant='outlined'
                            multiline
                            minRows={5}

                            required
                            fullWidth
                            id="body"
                            value={formdata.body}
                            onChange={e => setFormData({ ...formdata, body: e.target.value })}
                            label="Body"
                            name="body"
                            autoComplete="add-content"
                        />
                    </Grid>

                    <br/>
                    <Button
                        type="submit"
                        className="btn btn-primary"
                        variant="contained"
                        sx={{ mt: 3, mb: 2 }}
                    >
                        Add Post
                    </Button>

                </Box>
            </Box>

        </Container>
    )
}

export default AddPost
