import axios from 'axios';
import React, { useState } from 'react';
import "./Register.css"


function Register() {

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setpassword] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault();

        const data = {
            name: name,
            email: email,
            password: password
        }
        axios.post('http://localhost:5000/user/register', data)
        .then((res) => {
            console.log(res)
        })
        .catch((err) => {
            console.log(err)
        })
    }


    return (
        <div className="register">
            <form  className="register_form">
            <h3>Register</h3>
            <div className="register_group">
                <label>Name</label>
                <input className="register_input" placeholder="Name" type="text" value={name} onChange={(e) => setName(e.target.value)}/>
            </div>
            <div className="register_group">
                <label>Email</label>
                <input className="register_input" placeholder="Email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
            </div>
            <div className="register_group">
                <label>Password</label>
                <input className="register_input" placeholder="Password" type="password" value={password} onChange={(e) => setpassword(e.target.value)}/>
            </div>
           
            <button onSubmit={handleSubmit} className="register_button">Register</button>
            </form>
        </div>
    )
}

export default Register
