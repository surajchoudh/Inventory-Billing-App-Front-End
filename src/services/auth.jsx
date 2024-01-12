export const signUpUser = async (userData) => {
    try {
        const response = await fetch('http://localhost:3000/api/auth/register', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(userData),
        });

        if (!response.ok) {
            throw new Error('Error signing up. Please try again.');
        }

        return await response.json();
    } catch (error) {
        throw new Error(`Signup error: ${error.message}`);
    }
};

export const loginUser = async (userData) => {
    try {
        const response = await fetch('http://localhost:3000/api/auth/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(userData),
        });

        if (!response.ok) {
            throw new Error('Error logging in. Please try again.');
        }

        return await response.json();
    } catch (error) {
        throw new Error(`Login error: ${error.message}`);
    }
};

