import React, { useEffect, useState } from "react";
import './style.css';
import { useTheme } from "../hook/useTheme";
import axios from "axios";
import { listItemTextClasses } from "@mui/material";
import { Back_end_Url } from "../api/URLs";

function Servicespage() {
    const { theme } = useTheme()
    const [service, setService] = useState([]);
    const [serviceAxes, setServiceAxes] = useState([]);

    useEffect(() => {
        async function fetchService() {
            try {
                const response = await axios.get(Back_end_Url+'/api/service');
                setService(response.data);
                console.log(response.data); // Check if data is received
            } catch (err) {
                console.error(err);
            }
        }
        fetchService();

    }, []);
    useEffect(() => {

        async function fetchServiceAxes() {
            try {
                const response = await axios.get(Back_end_Url+'/api/axe');
                setServiceAxes(response.data);
                console.log(response.data); // Check if data is received
            } catch (err) {
                console.error(err);
            }
        }
        fetchServiceAxes();
    }, []);

    return (
        <>

            <div className="service component__space" >
                <div  >
                    <h1 className={theme == "dark" ? "heading darkMode" : " heading lightMode"} >My Awesome Service</h1>
                    <p className={theme == "dark" ? "heading  p__color darkMode" : " heading  p__color lightMode"} >
                        There are many variations of passages of Lorem Ipsum available,
                    </p>
                    <p className={theme == "dark" ? "heading  p__color darkMode" : " heading  p__color lightMode"}>
                        but the majority have suffered alteration,
                    </p>
                </div>

                <div className="container app ">
                    {/* <div className="row"> */}

                    {
                        service.map((item, index) =>



                                        <div key={index} className={theme == "dark" ? "service__box shadowDark" : " service__box shadowLight"} >
                                        <div className="icon">
                                            <svg
                                                stroke="currentColor"
                                                fill="none"
                                                stroke-width="2"
                                                viewBox="0 0 24 24"
                                                stroke-linecap="round"
                                                stroke-linejoin="round"
                                                height="1em"
                                                width="1em"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <path d="M2 16.1A5 5 0 0 1 5.9 20M2 12.05A9 9 0 0 1 9.95 20M2 8V6a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2h-6"></path>
                                                <line x1="2" y1="20" x2="2" y2="20"></line>
                                            </svg>
                                        </div>
                                        <div className="service__meta">
                                            <h1 className={theme == "dark" ? "service__text darkMode" : " service__text lightMode"}>{item.title}</h1>

                                            <p className={theme == "dark" ? "service__text p  p__color darkMode" : " service__text p p__color lightMode"} >
                                                {item.description}
                                            </p>

                                        </div>
                                    </div>


                            )

                    }

                    {
                        serviceAxes.map((itemAx, indexAx) =>
                            service.map((item, index) => {
                                if (item.id == itemAx.servic_id) {
                                    return (
                                        <div key={indexAx} className={theme == "dark" ? "service__box shadowDark" : " service__box shadowLight"} >
                                            <div className="icon">
                                                <svg
                                                    stroke="currentColor"
                                                    fill="none"
                                                    stroke-width="2"
                                                    viewBox="0 0 24 24"
                                                    stroke-linecap="round"
                                                    stroke-linejoin="round"
                                                    height="1em"
                                                    width="1em"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                >
                                                    <path d="M2 16.1A5 5 0 0 1 5.9 20M2 12.05A9 9 0 0 1 9.95 20M2 8V6a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2h-6"></path>
                                                    <line x1="2" y1="20" x2="2" y2="20"></line>
                                                </svg>
                                            </div>
                                            <div className="service__meta">
                                                <h1 className={theme == "dark" ? "service__text darkMode" : " service__text lightMode"}>{item.title}</h1>
                                                <h3 className={theme == "dark" ? "service__text darkMode" : " service__text lightMode"}>{itemAx.titleAxe}</h3>

                                                <p className={theme == "dark" ? "service__text p  p__color darkMode" : " service__text p p__color lightMode"} >
                                                    {itemAx.descriptionAxe}
                                                </p>

                                            </div>
                                        </div>
                                    )
                                }
                            }
                            )
                        )
                    }

                    {/* </div> */}
                </div>
            </div>

        </>
    )
}

export default Servicespage;
