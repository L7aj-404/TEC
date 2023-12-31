import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { Back_end_Url } from '../../../api/URLs';
import { Link } from 'react-router-dom';


function Users() {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        async function fetchUsers() {
            try {
                const response = await axios.get(Back_end_Url+'/api/users');
                setUsers(response.data);
                console.log(response.data); // Check if data is received
            } catch (err) {
                console.error(err);
            }
        }
        fetchUsers();
    }, []);

    async function handleDeleteUser(id) {
        console.log('Deleting user with id:', id);
        try {
            await axios.delete(`${Back_end_Url}/api/user/${id}`);
            setUsers(users.filter(user => user.id !== id));
        } catch (err) {
            console.error(err);
        }
    }



    return (
        <div className="container">
        <h1>Users</h1>
        <Link to='/adduser' className="btn btn-primary">Add User</Link>
        <table className="table table-bordered">
            <thead className="thead-dark">
            <tr>
                <th>id</th>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Email</th>
                <th>Age</th>
                <th>Action</th>
            </tr>
            </thead>
            <tbody>

            {users.map(user => (
                <tr key={user.id}>
                    <td>{user.id}</td>
                    <td>{user.firstname}</td>
                    <td>{user.lastname}</td>
                    <td>{user.age}</td>
                    <td>{user.email}</td>

                    <td>
                        <button className='btn'>
                            <FontAwesomeIcon icon={faTrashAlt} size="lg" color="#333" onClick={() => handleDeleteUser(user.id)} />
                        </button>
                    </td>
                </tr>
            ))}
            </tbody>
        </table>
        </div>
    );
}

export default Users;
