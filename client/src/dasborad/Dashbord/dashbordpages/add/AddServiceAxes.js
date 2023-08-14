
import React, { useEffect, useState } from 'react'
import { Avatar, Box, CssBaseline, Grid, TextField, Typography } from '@mui/material'
import { Alert, Button, Container } from 'react-bootstrap'
import { Link, useNavigate, useParams } from 'react-router-dom'
import axios from 'axios'
import { Back_end_Url } from '../../../../api/URLs'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons'

function AddServiceAxes() {
    const {id}=useParams()
    const [dataAxeApi, setdataAxeApi] = useState([])
    const [dataAxe, setDataAxe] = useState({
        servic_id:id,
    })
    const [arrdataAxe, setarrdataAxe] = useState([])

    const [iserror, setIserror] = useState(null)
    const [countInput, setCountInput] = useState([])
    const navigate = useNavigate()

    useEffect(() => {
        async function fetchAxe() {
            try {
                const response = await axios.get(Back_end_Url+'/api/axe/'+id);
                setdataAxeApi(response.data);
                console.log(response.data); // Check if data is received
            } catch (err) {
                console.error(err);
            }
        }
        fetchAxe();
    }, []);

    async function handleDeleteAxe(id) {
        console.log('Deleting axe with id:', id);
        try {
            await axios.delete(`${Back_end_Url}/api/axe/${id}`);
            setdataAxeApi(dataAxeApi.filter(axe => axe.id !== id));
        } catch (err) {
            console.error(err);
        }
    }

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


    }
    const addAxeToArry =(id)=>{
        setarrdataAxe(s=>{
            return [
                ...s,

                dataAxe

            ]
        })

        countInput.map((item,index)=>{
            if (index===id) {
                item.show=true;
                return item
            }
        })



    }

    async function handleSubmit(e) {
        e.preventDefault();
        console.log('add axe');

        console.log(arrdataAxe);


            await axios.post(`${Back_end_Url}/api/axe`,arrdataAxe).then(({data})=>{
                console.log(data);

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
    const handleCancel=(id) =>{
       setarrdataAxe((id)=>{ return arrdataAxe.splice(id,1)})
    }

  return (
    <Container component="main" >
        {iserror && <Alert sx={{ width: "100px" }} severity="error">{iserror}</Alert>}
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
                    Add Axe of Service
                </Typography>
                {
                                                dataAxeApi.map((item,index)=>{

                                                        return (
                                                            <table className="table table-bordered">
                                                                <tr key={index}>
                                                                    <td>{item.titleAxe}</td>
                                                                    <td>{item.descriptionAxe}</td>
                                                                    <td>
                                                                        <button className='btn' >
                                                                            <FontAwesomeIcon icon={faTrashAlt} size="lg" color="#333" onClick={(e) => handleDeleteAxe(item.id)}/>
                                                                         </button>
                                                                    </td>
                                                                </tr>
                                                            </table>
                                                        )

                                                })
                                            }
                <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
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
                                                                    <td><button className='bttn' onClick={(e) => handleCancel(indexarr)}>
                                                                            X
                                                                         </button>
                                                                    </td>
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

                                        onChange={({target:{name ,value}}) =>  {
                                            setDataAxe({ ...dataAxe, [name]:value})

                                        }}

                                        fullWidth
                                        id="titleAxe"
                                        label={`TitleAxe`}
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
                        Save
                    </Button>

                </Box>
            </Box>

        </Container>
  )
}

export default AddServiceAxes
