import React from 'react';
import SignUpForm from '../components/SignUpForm';
import { signUpUser } from '../services/auth'; // Import the signUpUser function

const SignUpPage = () => {
    const handleSubmit = async (formData) => {
        try {
            await signUpUser(formData); // Call the signUpUser function with form data
            // Redirect or handle successful signup (e.g., display a success message)
        } catch (error) {
            // Handle signup failure (e.g., display an error message)
            console.error('Signup error:', error);
        }
    };

    return (
        <div>
            <SignUpForm onSignUp={handleSubmit} />
        </div>
    );
};

export default SignUpPage;
