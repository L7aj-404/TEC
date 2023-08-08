import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import { Back_end_Url } from '../../../api/URLs'


function News() {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        async function fetchUsers() {
            try {
                const response = await axios.get(Back_end_Url+'/api/poste');
                setPosts(response.data);
                console.log(response.data); // Check if data is received
            } catch (err) {
                console.error(err);
            }
        }
        fetchUsers();
    }, []);

    async function handleDeletePost(id) {
        console.log('Deleting post with id:', id);
        try {
            await axios.delete(`${Back_end_Url}/api/poste/${id}`);
            setPosts(posts.filter(post => post.id !== id));
        } catch (err) {
            console.error(err);
        }
    }



    return (
        <div className="container">
        <h1>Posts</h1>
        <Link to='/addpost'className="btn btn-primary">
             Add Post
        </Link>
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

            {posts.map(post => (
                <tr key={post.id}>
                    <td>{post.id}</td>
                    <td>{post.title}</td>
                    <td>{post.body}</td>

                    <td>
                        <button className='bttn' >
                            <FontAwesomeIcon icon={faEdit} size="lg" color="#333" style={{ marginRight: '10px' }} />
                            </button>
                        <button className='bttn'>
                            <FontAwesomeIcon icon={faTrashAlt} size="lg" color="#333" onClick={() => handleDeletePost(post.id)} />
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
