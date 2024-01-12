import React, { useState } from 'react';
import { signUpUser } from '../services/auth';
import { Link } from 'react-router-dom';

const SignUpForm = () => {
    const initialFormData = {
        username: '',
        email: '',
        password: '',
    };

    const [formData, setFormData] = useState(initialFormData);
    const [isSignedUp, setIsSignedUp] = useState(false);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await signUpUser(formData);
            console.log('Signup successful:', response);
            setFormData(initialFormData); // Reset form fields on successful signup
            alert('Signup successful!');
            setIsSignedUp(true); // Set the flag indicating successful signup
        } catch (error) {
            alert('Signup failed user exists!');
            console.error('Signup error:', error);

            // Handle signup failure
        }
    };

    return (
        <div className="container d-flex justify-content-center align-items-center vh-100">
            <div className="card p-5">
                <h2 className="text-center mb-3">Sign Up</h2>
                <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <label htmlFor="username" className="form-label">Username</label>
                        <input
                            type="text"
                            className="form-control"
                            id="username"
                            name="username"
                            value={formData.username}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="email" className="form-label">Email</label>
                        <input
                            type="email"
                            className="form-control"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="password" className="form-label">Password</label>
                        <input
                            type="password"
                            className="form-control"
                            id="password"
                            name="password"
                            value={formData.password}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <button type="submit" className="btn btn-primary w-100">
                        Sign Up
                    </button>
                </form>
                {/* Redirect to login after successful signup */}
                {isSignedUp && <Link to="/login">Redirecting to Login...</Link>}
            </div>
        </div>
    );
};

export default SignUpForm;
