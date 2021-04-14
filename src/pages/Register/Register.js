import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { register } from "../../services/service";
import "./Register.css";

function Register() {
  const history = useHistory();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setpassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await register(name, email, password);
      history.push("/dashboard");
    } catch (err) {
      console.log(err);
      alert("Email already exists");
    }
  };

  return (
    <div className="register">
      <form className="register_form">
        <h3>Register</h3>
        <div className="register_group">
          <label>Name</label>
          <input
            className="register_input"
            placeholder="Name"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="register_group">
          <label>Email</label>
          <input
            className="register_input"
            placeholder="Email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="register_group">
          <label>Password</label>
          <input
            className="register_input"
            placeholder="Password"
            type="password"
            value={password}
            onChange={(e) => setpassword(e.target.value)}
          />
        </div>

        <button onClick={handleSubmit} className="register_button">
          Register
        </button>
      </form>
    </div>
  );
}

export default Register;
