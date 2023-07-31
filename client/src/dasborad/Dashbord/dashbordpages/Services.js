import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';


function News() {
    const [services, setServices] = useState([]);

    useEffect(() => {
        async function fetchServices() {
            try {
                const response = await axios.get('http://localhost:8000/api/service');
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
            await axios.delete(`http://localhost:8000/api/service/${id}`);
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
                <th>Action</th>

            </tr>
            </thead>
            <tbody>

            {services.map(service => (
                <tr key={service.id}>
                    <td>{service.id}</td>
                    <td>{service.title}</td>
                    <td>{service.description}</td>

                    <td>
                        <button className='bttn' >
                            <FontAwesomeIcon icon={faEdit} size="lg" color="#333" style={{ marginRight: '10px' }} />
                            </button>
                        <button className='bttn'>
                            <FontAwesomeIcon icon={faTrashAlt} size="lg" color="#333" onClick={() => handleDeleteService(service.id)} />
                        </button>
                    </td>
                </tr>
            ))}
            </tbody>
        </table>
        </div>
    );
}

export default News;
