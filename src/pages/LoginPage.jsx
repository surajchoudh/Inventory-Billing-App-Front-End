import React, { useState } from 'react';
import Navbar from '../components/Navbar';

// Import API function for user authentication

const LoginPage = () => {
    const [error, setError] = useState(null);

    const handleLogin = async (loginData) => {
        try {
            // Perform user authentication by calling the login API function
            const user = await loginUser(loginData);

            // Handle successful login (e.g., store user data in localStorage, redirect to dashboard)
            console.log('Logged in:', user);
            // Redirect or set user authentication status

        } catch (error) {
            setError('Invalid credentials. Please try again.');
            console.error('Login error:', error);
        }
    };

    return (
        <div>

            <Navbar />
            <LoginForm onLogin={handleLogin} />
            {error && <div style={{ color: 'red' }}>{error}</div>}
            {/* Additional content or components related to login */}
        </div>
    );
};

export default LoginPage;
