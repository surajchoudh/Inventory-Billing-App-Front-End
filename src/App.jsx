import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Navigate } from 'react-router-dom';
import InventoryPage from './pages/InventoryPage';
import BillingPage from './pages/BillingPage';
import Footer from './components/Footer';
import LoginForm from './components/LoginForm';
import HomePage from './components/HomePage';
import SignUpPage from './pages/SignUpPage';
import LandingPage from './components/LandingPage';
import './App.css';


function App() {
  return (
    <Router>
      <div className="app-container">
        <div className="jumbotron text-center bg-dark text-white"> {/* Add Bootstrap classes for styling */}
          <h3 className="display-6  mt-4 mb-0">INVENTORY BILLING APPLICATION</h3> {/* Apply Bootstrap class for large font */}
        </div>
        <Routes>
          <Route exact path="/" element={<Navigate to="/home" />} />
          <Route exact path="/inventory" element={<InventoryPage />} />
          <Route exact path="/billing" element={<BillingPage />} />
          <Route exact path="/login" element={<LoginForm />} />
          <Route exact path="/signup" element={<SignUpPage />} />
          <Route exact path="/home" element={<LandingPage />} />
          <Route exact path="/Ahome" element={<HomePage />} />
          {/* Add more routes as needed */}
        </Routes>
      </div>
      <Footer />
    </Router>
  );
}

export default App;
