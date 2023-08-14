import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { Back_end_Url } from '../../../api/URLs'


function Requests() {
    const [requests, setRequests] = useState([]);

    useEffect(() => {
        async function fetchRequests() {
            try {
                const response = await axios.get(Back_end_Url+'/api/requeste');
                setRequests(response.data);
                console.log(response.data); // Check if data is received
            } catch (err) {
                console.error(err);
            }
        }
        fetchRequests();
    }, []);

    async function handleDeleteRequest(id) {
        console.log('Deleting user with id:', id);
        try {
            await axios.delete(`${Back_end_Url}/api/requeste/${id}`);
            setRequests(requests.filter(request => request.id !== id));
        } catch (err) {
            console.error(err);
        }
    }
    async function handleDisplayRequest(requestId) {
      console.log('Displaying request with id:', requestId);
      try {
          const response = await axios.get(`${Back_end_Url}/api/requeste/${requestId}`);
          window.open(`data:application/json,${encodeURIComponent(JSON.stringify(response.data))}`);
          console.log(response.data);
      } catch (err) {
          console.error(err);
      }
    }




    return (
        <div className="container">
        <h1>Requests</h1>
        <table className="table table-bordered">
            <thead className="thead-dark">
            <tr>
                <th>id</th>
                <th>Full Name</th>
                <th>Company's name</th>
                <th>Project type</th>
                <th>Email</th>
                <th>Phone Number</th>
                <th>Comment</th>
                <th>Action</th>
            </tr>
            </thead>
            <tbody>

            {requests.map(request => (
                <tr key={request.id} onClick={() => handleDisplayRequest(request.id)}>

                    <td>{request.id}</td>
                    <td>{request.fullname}</td>
                    <td>{request.companyName}</td>
                    <td>{request.peojectType}</td>
                    <td>{request.email}</td>
                    <td>{request.phone}</td>
                    <td>{request.comment}</td>
                    <td>
                        
                        <button className='btn'>
                            <FontAwesomeIcon icon={faTrashAlt} size="lg" color="#333" onClick={() => handleDeleteRequest(request.id)} />
                        </button>
                    </td>
                </tr>
            ))}
            </tbody>
        </table>
        </div>
    );
}

export default Requests;
