import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const LandingPage = () => {
    // State to track the user's login status
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    // Function to simulate login
    const handleLogin = () => {
        // Perform login logic here...
        setIsLoggedIn(true); // Set the user as logged in
    };

    return (
        <div>

            <div className="bg-image" style={{ backgroundImage: 'url("https://images.pexels.com/photos/7130463/pexels-photo-7130463.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1")', height: '80vh' }}>
                <div className="container-fluid py-5">
                    <h6 className="text-center text-dark display-6 mb-5">Welcome to the Inventory Billing Application</h6>

                    {/* Conditional rendering for Login and Sign Up */}
                    {!isLoggedIn && (
                        <div className="text-center">
                            <Link to="/Ahome" className="btn btn-secondary me-3">Home</Link>
                            <Link to="/login" className="btn btn-primary me-3">Login</Link>
                            <Link to="/signup" className="btn btn-secondary me-3">Sign Up</Link>
                            <button onClick={handleLogin} className="btn btn-success ms-3">Simulate Login</button>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default LandingPage;
