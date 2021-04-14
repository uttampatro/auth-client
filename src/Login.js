import React, { useState } from 'react';
import "./Login.css";

function Login() {

    const [email, setEmail] = useState('')
    const [password, setpassword] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault();

        const data =
    }

    return (
        <div className="login">
            <form  className="login_form">
            <h3>Login</h3>
            <div className="login_group">
                <label>Email</label>
                <input className="login_input" placeholder="Email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
            </div>
            <div className="login_group">
                <label>Password</label>
                <input className="login_input" placeholder="Password" type="password" value={password} onChange={(e) => setpassword(e.target.value)}/>
            </div>
           
            <button onSubmit={handleSubmit} className="login_button">Sign In</button>
            </form>
        </div>
    )
}

export default Login;
