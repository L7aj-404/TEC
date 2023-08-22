
import { Avatar, Box, CssBaseline, Grid, TextField, Typography } from '@mui/material'
import { TextareaAutosize } from '@mui/base'
import React, { useEffect, useState } from 'react'
import { Alert, Button, Container } from 'react-bootstrap'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'
import { Back_end_Url } from '../../../api/URLs'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons'


function ProjectType() {
    const [projectType, setProjectType] = useState([])
    const [formdata, setFormData] = useState({})
    const [iserror, setIserror] = useState(null)
    const navigate = useNavigate()

    useEffect(() => {
            async function fetchAxe() {
                try {
                    const response = await axios.get(Back_end_Url+'/api/project');
                    setProjectType(response.data);
                    console.log(response.data); // Check if data is received
                } catch (err) {
                    console.error(err);
                }
            }
            fetchAxe();
        },);

    async function handleSubmit(e) {
        e.preventDefault();
        console.log('add post');

        await axios.post(`${Back_end_Url}/api/project`, formdata).then(({ data }) => {
            console.log(data.message);
            formdata.title= ''
            navigate('/projecttype')
        })

            .catch(({ response }) => {
                if (response.status === 422) {
                    setIserror(response.data.message);

                } else {
                    setIserror(response.data);
                    console.log(iserror);

                }


            })
    }
    async function handleDeleteType(id) {
        console.log('Deleting project type with id:', id);
        try {
            await axios.delete(`${Back_end_Url}/api/project/${id}`);
            setProjectType(projectType.filter(type => type.id !== id));
        } catch (err) {
            console.error(err);
        }
    }
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
                    Add Type
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


                    <br />
                    <Button
                        type="submit"
                        className="btn btn-primary"
                        variant="contained"
                        sx={{ mt: 3, mb: 2 }}
                    >
                        Add Type
                    </Button>

                </Box>
            </Box>
            <br/>
            <Typography component="h1" variant="h5">
                    List of Project
            </Typography>
            {
                projectType.map((item, index) => {

                    return (
                        <table className="table table-bordered">
                            <tr key={index}>
                                <td>{item.id}</td>
                                <td>{item.title}</td>
                                <td>
                                    <button className='btn' >
                                        <FontAwesomeIcon icon={faTrashAlt} size="lg" color="#333" onClick={(e) => handleDeleteType(item.id)} />
                                    </button>
                                </td>
                            </tr>
                        </table>
                    )

                })
            }

        </Container>
    )
}
export default ProjectType
