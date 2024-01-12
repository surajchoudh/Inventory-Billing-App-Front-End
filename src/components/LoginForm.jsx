import React, { useState } from 'react';
import { loginUser } from '../services/auth';
import { Link, useNavigate } from 'react-router-dom';

const LoginForm = () => {
    const initialFormData = {
        email: '',
        password: '',
    };

    const [formData, setFormData] = useState(initialFormData);
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            const response = await loginUser(formData);
            console.log('Login successful:', response);

            // Clear form data upon successful login
            setFormData(initialFormData);
            alert('Login successful!');

            // Redirect to the home page
            navigate('/ahome');
        } catch (error) {
            setError('Invalid email or password');
            console.error('Login error:', error);
        }
    };

    return (
        <div className="container d-flex justify-content-center align-items-center vh-100">
            <div className="card p-5">
                <h2 className="text-center mb-3">Login</h2>
                <form onSubmit={handleLogin}>
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
                        Login
                    </button>
                    {error && <div className="text-danger mt-3">{error}</div>}
                </form>
                <div className="text-center mt-3">
                    <p>Not registered? <Link to="/signup">Sign Up</Link></p>
                </div>
            </div>
        </div>
    );
};

export default LoginForm;
