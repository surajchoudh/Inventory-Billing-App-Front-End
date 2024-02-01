const BASE_URL = 'https://end-o7bq.onrender.com';

export const get = async (endpoint) => {
    try {
        const response = await fetch(`${BASE_URL}/${endpoint}`);
        if (!response.ok) {
            throw new Error('Network response was not ok.');
        }
        return await response.json();
    } catch (error) {
        throw new Error(`Error fetching data: ${error.message}`);
    }
};

export const post = async (endpoint, data) => {
    try {
        const response = await fetch(`${BASE_URL}/${endpoint}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        });
        if (!response.ok) {
            throw new Error('Network response was not ok.');
        }
        return await response.json();
    } catch (error) {
        throw new Error(`Error posting data: ${error.message}`);
    }
};

export const put = async (endpoint, data) => {
    try {
        const response = await fetch(`${BASE_URL}/${endpoint}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        });
        if (!response.ok) {
            throw new Error('Network response was not ok.');
        }
        return await response.json();
    } catch (error) {
        throw new Error(`Error updating data: ${error.message}`);
    }
};

export const remove = async (endpoint) => {
    try {
        const response = await fetch(`${BASE_URL}/${endpoint}`, {
            method: 'DELETE',
        });
        if (!response.ok) {
            throw new Error('Network response was not ok.');
        }
        return await response.json();
    } catch (error) {
        throw new Error(`Error deleting data: ${error.message}`);
    }
};
