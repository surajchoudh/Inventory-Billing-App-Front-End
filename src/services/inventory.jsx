export const getInventoryItems = async () => {
    try {
        const response = await fetch('http://localhost:3000/api/inventory');
        if (!response.ok) {
            throw new Error('Error fetching inventory items.');
        }
        return await response.json();
    } catch (error) {
        throw new Error(`Error fetching inventory items: ${error.message}`);
    }
};

export const addItemToInventory = async (itemData) => {
    try {
        const response = await fetch('http://localhost:3000/api/inventory', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(itemData),
        });
        if (!response.ok) {
            throw new Error('Error adding item to inventory.');
        }
        return await response.json();
    } catch (error) {
        throw new Error(`Error adding item to inventory: ${error.message}`);
    }
};

export const updateInventoryItem = async (itemId, updatedData) => {
    try {
        const response = await fetch(`http://localhost:3000/api/inventory/${itemId}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(updatedData),
        });
        if (!response.ok) {
            throw new Error('Error updating item in inventory.');
        }
        return await response.json();
    } catch (error) {
        throw new Error(`Error updating item in inventory: ${error.message}`);
    }
};

export const deleteInventoryItem = async (itemId) => {
    try {
        const response = await fetch(`http://localhost:3000/api/inventory/${itemId}`, {
            method: 'DELETE',
        });
        if (!response.ok) {
            throw new Error('Error deleting item from inventory.');
        }
        return await response.json();
    } catch (error) {
        throw new Error(`Error deleting item from inventory: ${error.message}`);
    }
};
