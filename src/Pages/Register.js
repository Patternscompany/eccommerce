import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Register = () => {
    const [input, setInput] = useState({
        email: "",
        password: ""
    });

    const handlesubmit = (e) => {
        e.preventDefault();
        localStorage.setItem("user", JSON.stringify(input));
    };

    const handleChange = (e) => {
        setInput({ ...input, [e.target.name]: e.target.value });
    };

    return (
        <div>
            <div className='card1'>
                <h2>Register Page</h2>
                <form onSubmit={handlesubmit} id="loginForm">
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
                        Register
                    </button>
                    <Link to="/login">Login</Link>
                </form>
            </div>
        </div>
    );
};

export default Register;
