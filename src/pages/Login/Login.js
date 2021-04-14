import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { login } from '../../services/service';
import "./Login.css";

function Login() {
    const history = useHistory();

    const [email, setEmail] = useState('')
    const [password, setpassword] = useState('')

    
    const handleSubmit = async () => {
    try {
      await login(email, password)
      history.push('/dashboard')
    } catch (err) {
      console.log(err)
      alert("something went wrong")
    }
  };

    return (
        <div className="login">
            <form className="login_form">
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
