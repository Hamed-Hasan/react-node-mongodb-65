import React from 'react';

const AddUser = () => {
    const handleSubmit = (event) => {
        event.preventDefault();
        const name = event.target.name.value;
        const email = event.target.email.value;

        const addUser = {name, email};

        // send data to server
        fetch('http://localhost:5000/user', {
            method: 'POST',
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(addUser)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data)
            alert('user added successfully')
            event.target.reset()
        })
        // fetch('http://localhost:5000/user', {
        //     method: 'POST',
        //     headers: {
        //         "content-type": "application/json"
        //     },
        //     body: JSON.stringify(user)
        // })
        // .then(res => res.json())
        // .then(data => {
        //     console.log(data)
        //     alert('user added successfully')
        //     event.target.reset()
        // })
    }
    return (
        <div>
          <form onSubmit={handleSubmit}>
            <input type="text" name='name' placeholder="name"/>
            <br />
            <input type="email" name="email" placeholder="email"/>
            <br />
            <input type="submit" value="Submit"/> 
          </form>
        </div>
    );
};

export default AddUser;