
import React, { useState } from 'react'
import { Avatar, Box, CssBaseline, Grid, TextField, Typography } from '@mui/material'
import { Alert, Button, Container } from 'react-bootstrap'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'

function AddService() {
    const [showElement, setshowElement] = useState([false])
    const [dataAxe, setDataAxe] = useState({})
    const [arrdataAxe, setarrdataAxe] = useState([])
    const [formdata, setFormData] = useState({
        arrdata:arrdataAxe
    })
    const [iserror, setIserror] = useState(null)
    const [countInput, setCountInput] = useState([])
    const navigate = useNavigate()

    const addAxe =()=>{
        setCountInput(s=>{
            return [
                ...s,
                {
                    type:"text",
                    placeHolder:"Axe",
                    show:false
                }
            ]
        })
        console.log(countInput);
        // setshowElement(s=>{
        //     return [
        //         ...s,false

        //     ]
        // })
        // console.log(showElement);
    }
    const addAxeToArry =(id)=>{
        setarrdataAxe(s=>{
            return [
                ...s,

                dataAxe

            ]
        })
        setFormData({...formdata, arrdata:arrdataAxe})
        countInput.map((item,index)=>{
            if (index===id) {
                item.show=true;
                return item
            }
        })

        console.log(countInput);
        console.log(formdata);


    }

    async function handleSubmit(e) {
        e.preventDefault();
        console.log('add post');
        console.log(arrdataAxe);
        console.log(formdata);


            await axios.post(`http://localhost:8000/api/service`,formdata).then(({data})=>{
                console.log(data.message);

                navigate('/services')
            })

        .catch (({response})=>{
            if (response.status === 422) {
                setIserror(response.data.message);

            } else {
                setIserror(response.data);
                console.log(iserror);

            }


        })
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
                    Add Service
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
                            id="description"
                            value={formdata.description}
                            onChange={e => setFormData({ ...formdata, description: e.target.value })}
                            label="Description"
                            name="description"
                            autoComplete="add-content"
                        />
                    </Grid>
                    <br/>
                    <Button
                        className="btn btn-success"
                        onClick={addAxe}

                        variant="contained"
                        sx={{ mt: 3, mb: 2 }}
                    >
                        Add Axe +
                    </Button>
                    <br/>

                        {
                            countInput.map((item,index)=>{
                                return (
                                    <div key={index}>
                                    {item.show?(
                                        <div>
                                            {
                                                arrdataAxe.map((item,indexarr)=>{
                                                    if (index===indexarr) {
                                                        return (
                                                            <table className="table table-bordered">
                                                                <tr>
                                                                    <td>{item.titleAxe}</td>
                                                                    <td>{item.descriptionAxe}</td>
                                                                </tr>
                                                            </table>
                                                        )
                                                    }
                                                })
                                            }
                                        </div>
                                    ):(
                                        <>
                                    <br/>
                                    <Grid item xs={12} sm={4}>
                                    <TextField
                                        autoComplete="given-title"
                                        name={`titleAxe`}
                                        value={dataAxe.titleAxe}
                                        onChange={({target:{name ,value}}) =>  {
                                            setDataAxe({ ...dataAxe, [name]:value})

                                        }}

                                        fullWidth
                                        id="titleAxe"
                                        label={`TitleAxe${index}`}
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


                                        fullWidth
                                        id="descriptionAxe"
                                        value={dataAxe.descriptionAxe}
                                        onChange={({target:{name ,value}}) =>  {
                                            setDataAxe({ ...dataAxe, [name]:value})

                                        }}
                                        label="DescriptionAxe"
                                        name={`descriptionAxe`}
                                        autoComplete="add-content"
                                    />
                                </Grid>
                                <br/>
                                <Button
                                    className="btn btn-info"
                                    onClick={(e)=>addAxeToArry(index)}
                                    variant="contained"
                                    sx={{ mt: 3, mb: 2 }}
                                >
                                    Add Axe
                                </Button>
                                </>
                                )
                                }
                                </div>);
                            })
                        }


                    <br/>
                    <Button
                        className="btn btn-primary"
                        type="submit"

                        variant="contained"
                        sx={{ mt: 3, mb: 2 }}
                    >
                        Add Service
                    </Button>

                </Box>
            </Box>

        </Container>
  )
}

export default AddService
