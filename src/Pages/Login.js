

import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Login = () => {
    const [input, setInput] = useState({
        email: "",
        password: ""
    });
    
    const navigate = useNavigate(); 

    const handleChange = (e) => {
        const { name, value } = e.target;
        setInput({ ...input, [name]: value });
    };

    const handleLogin = (e) => {
        e.preventDefault();
        const Loggeduser = JSON.parse(localStorage.getItem("user"));

        if (Loggeduser && input.email === Loggeduser.email && input.password === Loggeduser.password) {
            navigate("/"); // Corrected to use useNavigate hook
        } else {
            alert("Wrong email & password");
        }
    };

    return (
        <div>
            <div className='card1'>
                <h2>Login Page</h2>
                <form onSubmit={handleLogin} id="loginForm">
                    <div className="input-group">
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={input.email}
                            onChange={handleChange}
                            placeholder="Enter your email"
                            required
                        />
                    </div>
                    <div className="input-group">
                        <input
                            type="password"
                            id="password"
                            name="password"
                            value={input.password}
                            onChange={handleChange}
                            placeholder="Enter your password"
                            required
                        />
                    </div>
                    <button type="submit" style={{ alignItems: 'center', justifyContent: 'center' }}>
                        Login
                    </button>
                    <p>New User? <Link to="/register">Register Here</Link></p>
                </form>
            </div>
        </div>
    );
};

export default Login;
