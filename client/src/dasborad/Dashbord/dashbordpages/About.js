import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import { Back_end_Url } from '../../../api/URLs';


function About() {
    const [infos, setInfos] = useState([]);

    useEffect(() => {
        async function fetchServices() {
            try {
                const response = await axios.get(Back_end_Url+'/api/about');
                setInfos(response.data);
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
            await axios.delete(Back_end_Url+`/api/about/${id}`);
            setInfos(infos.filter(info => info.id !== id));
        } catch (err) {
            console.error(err);
        }
    }



    return (
        <div className="container">
        <h1>Abouts Info</h1>
        <Link to='/addinfo' className="btn btn-primary">Add Info</Link>

        <table className="table table-bordered">
            <thead className="thead-dark">
            <tr>
                <th>id</th>
                <th>Title</th>
                <th>Description</th>
                <th>Action</th>

            </tr>
            </thead>
            <tbody>

            {infos.map(item => (
                <tr key={item.id}>
                    <td>{item.id}</td>
                    <td>{item.title}</td>
                    <td>{item.description}</td>
                    <td>
                        <button className='bttn' >
                            <FontAwesomeIcon icon={faEdit} size="lg" color="#333" style={{ marginRight: '10px' }} />
                            </button>
                        <button className='bttn'>
                            <FontAwesomeIcon icon={faTrashAlt} size="lg" color="#333" onClick={() => handleDeleteService(item.id)} />
                        </button>


                    </td>
                </tr>
            ))}
            </tbody>
        </table>
        </div>
    );
}

export default About;
