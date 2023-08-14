import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import { Back_end_Url } from '../../../api/URLs';


function Services() {
    const [services, setServices] = useState([]);

    useEffect(() => {
        async function fetchServices() {
            try {
                const response = await axios.get(Back_end_Url+'/api/service');
                setServices(response.data);
                console.log(response.data); // Check if data is received
            } catch (err) {
                console.error(err);
            }
        }
        fetchServices();
    }, []);

    async function handleDeleteService(id) {
        console.log('Deleting user with id:', id);
        try {
            await axios.delete(`${Back_end_Url}/api/service/${id}`);
            setServices(services.filter(service => service.id !== id));
        } catch (err) {
            console.error(err);
        }
    }



    return (
        <div className="container">
        <h1>Services</h1>
        <Link to='/addservice' className="btn btn-primary">Add Service</Link>

        <table className="table table-bordered">
            <thead className="thead-dark">
            <tr>
                <th>id</th>
                <th>Title</th>
                <th>Body</th>
                <th>Image</th>
                <th>Action</th>

            </tr>
            </thead>
            <tbody>

            {services.map(service => (
                <tr key={service.id}>
                    <td>{service.id}</td>
                    <td>{service.title}</td>
                    <td>{service.description}</td>
                    <td><img className='w-100' src={`http://localhost:8000/storage/${service.image}`}/></td>

                    <td className='d-flex'>

                        <button className='btn'>
                            <FontAwesomeIcon icon={faTrashAlt} size="lg" color="#333" onClick={() => handleDeleteService(service.id)} />
                        </button>
                        <button className='btn'>

                            <Link to={'/addaxeservice/'+service.id} className='btn btn-warning'>Axe</Link>
                        </button>

                    </td>
                </tr>
            ))}
            </tbody>
        </table>
        </div>
    );
}

export default Services;
