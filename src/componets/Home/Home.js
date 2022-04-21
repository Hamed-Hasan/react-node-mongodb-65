import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
    const [users, setUsers] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/user')
        .then(res => res.json())
        .then(data => setUsers(data))
    }, []);

    const handleDelete = (id) =>{ 
        const proceed = window.confirm('Are you sure you want to delete')
       if(proceed){
        const url = `http://localhost:5000/user/${id}`
        fetch(url, {
            method: 'DELETE',
        })
        .then(res => res.json())
        .then(data => {
            // the code use easily delete user 
            if(data.deletedCount > 0){
                const remaining = users.filter(user => user._id !== id)
                setUsers(remaining)
                
            }
        })
       }
    }
    return (
        <div>
            <h2>available user {users.length}</h2>
            {
                users.map((user, i) => <div user={i}>
                 {user.name}:: {user.email}
                 <button onClick={() => handleDelete(user._id)}>x</button>
                 <Link to={`/update/${user._id}`}>update</Link>
                </div>)
            }
        </div>
    );
};

export default Home;