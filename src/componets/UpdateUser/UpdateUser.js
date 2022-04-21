import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const UpdateUser = () => {
    const {id} = useParams();
    const [users, setUsers] = useState({});
    useEffect(() => {
        const url = `http://localhost:5000/user/${id}`
        fetch(url)
        .then(res => res.json())
        .then(data => setUsers(data))

    }, []);
    const handleUpdate = (event) => {
        event.preventDefault();
        const name = event.target.name.value;
        const email = event.target.email.value;

        const updateUser = {name, email};

        // send data to server
        const url = `http://localhost:5000/user/${id}`
        fetch(url, {
            method: 'PUT',
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(updateUser)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data)
            alert('user update successfully')
        })
    }
    return (
        <div> 
            <h2>update user {users.name}</h2>
            <div>
          <form onSubmit={handleUpdate}>
            <input type="text" name='name' placeholder="name"/>
            <br />
            <input type="email" name="email" placeholder="email"/>
            <br />
            <input type="submit" value="Submit"/> 
          </form>
        </div>
        </div>
    );
};

export default UpdateUser;