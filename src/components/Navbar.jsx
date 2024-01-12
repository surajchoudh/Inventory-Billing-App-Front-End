import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className="bg-light py-4">
            <div className="d-flex justify-content-around">
                <Link to="/" className="nav-link fs-5 text-dark bg-secondary px-3 py-2 rounded">Landing Page</Link>
                <Link to="/inventory" className="nav-link fs-5 text-dark bg-primary px-4 py-2 rounded">Inventory</Link>
                <Link to="/billing" className="nav-link fs-5 text-dark bg-secondary px-4 py-2 rounded">Billing</Link>
            </div>
        </nav>
    );
};

export default Navbar;
