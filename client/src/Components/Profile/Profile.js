import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./style.css"

import axios from 'axios';
import { useAuth } from '../../hook/useAuth';

export const Profile = () => {
    const {user}=useAuth()
    const [info,setInfo]=useState([])
    useEffect(() => {
        async function fetchServices() {
            try {
                const response = await axios.get('http://localhost:8000/api/infos/'+user.id);

              setInfo(response.data); // Check if data is received
            } catch (err) {
                console.error(err);
            }
        }
        fetchServices();
    }, []);
console.log(user);
console.log(info);

    return (
        <>

        <div className="page-container" >
            <div className="padding">
                <div className=" row container d-flex justify-content-center">
                    <div className="profile col-xl-6 col-md-12">
                        <div className="card user-card-full">
                            <div className="row m-l-0 m-r-0">
                                <div className="col-sm-4 ">
                                    <div className="card-block text-center text-white">
                                        <div className="m-b-25">
                                            <img src="https://img.icons8.com/bubbles/100/000000/user.png" className="img-radius" alt="User-Profile-Image"/>
                                        </div>
                                        <h6 className="f-w-600">Hembo Tingor</h6>
                                        <p>Web Designer</p>
                                        <i className=" mdi mdi-square-edit-outline feather icon-edit m-t-10 f-16"></i>
                                    </div>
                                </div>
                                <div className="col-sm-8">
                                    <div className="card-block">
                                        <h6 className="m-b-20 p-b-5 b-b-default f-w-600">Information</h6>
                                        <div className="row">
                                            <div className="col-sm-6">
                                                <p className="m-b-10 f-w-600">Email</p>
                                                <h6 className="text-muted f-w-400">{info.email}</h6>
                                            </div>
                                            <div className="col-sm-6">
                                                <p className="m-b-10 f-w-600">age</p>
                                                <h6 className="text-muted f-w-400">{info.age}</h6>
                                            </div>
                                        </div>

                                        <div className="row">
                                            <div className="col-sm-6">
                                                <p className="m-b-10 f-w-600">firstName</p>
                                                <h6 className="text-muted f-w-400">{info.firstname}</h6>
                                            </div>
                                            <div className="col-sm-6">
                                                <p className="m-b-10 f-w-600">lastName</p>
                                                <h6 className="text-muted f-w-400">{info.lastname}</h6>
                                            </div>
                                        </div>
                                        <ul className="social-link list-unstyled m-t-40 m-b-10">
                                            <li><a href="#!" data-toggle="tooltip" data-placement="bottom" title="" data-original-title="facebook" data-abc="true"><i className="mdi mdi-facebook feather icon-facebook facebook" aria-hidden="true"></i></a></li>
                                            <li><a href="#!" data-toggle="tooltip" data-placement="bottom" title="" data-original-title="twitter" data-abc="true"><i className="mdi mdi-twitter feather icon-twitter twitter" aria-hidden="true"></i></a></li>
                                            <li><a href="#!" data-toggle="tooltip" data-placement="bottom" title="" data-original-title="instagram" data-abc="true"><i className="mdi mdi-instagram feather icon-instagram instagram" aria-hidden="true"></i></a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}
