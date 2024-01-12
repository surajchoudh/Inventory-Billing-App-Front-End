import React, { useState } from 'react';
import Navbar from './Navbar'; // Import the Navbar component

const HomePage = () => {
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
                </div>
                <Navbar />
            </div>


        </div>
    );
};

export default HomePage;
