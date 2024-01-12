import React, { useState, useEffect } from 'react';
import { updateItemInInventory, getItemById } from '../services/inventory'; // Import API functions to update and get items

const EditItemForm = ({ itemId, onUpdate }) => {
    const [name, setName] = useState('');
    const [price, setPrice] = useState('');
    const [quantity, setQuantity] = useState('');

    useEffect(() => {
        const fetchItem = async () => {
            try {
                // Fetch item details by its ID
                const item = await getItemById(itemId);
                setName(item.name);
                setPrice(String(item.price));
                setQuantity(String(item.quantity));
                // Set other fields as needed
            } catch (error) {
                console.error('Error fetching item:', error);
            }
        };

        fetchItem();
    }, [itemId]);

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            // Create an updated item object with input values
            const updatedItem = {
                name,
                price: parseFloat(price),
                quantity: parseInt(quantity),
                // Add more fields as needed
            };

            // Call API function to update the item
            await updateItemInInventory(itemId, updatedItem);

            // Trigger a callback (if provided) to inform parent component about the item update
            if (onUpdate) {
                onUpdate();
            }
        } catch (error) {
            console.error('Error updating item:', error);
        }
    };

    return (
        <div>
            <h2>Edit Item</h2>
            <form onSubmit={handleSubmit}>
                <label>
                    Name:
                    <input type="text" value={name} onChange={(e) => setName(e.target.value)} required />
                </label>
                <label>
                    Price:
                    <input type="number" value={price} onChange={(e) => setPrice(e.target.value)} required />
                </label>
                <label>
                    Quantity:
                    <input type="number" value={quantity} onChange={(e) => setQuantity(e.target.value)} required />
                </label>
                {/* Add more input fields for other item details */}
                <button type="submit">Update Item</button>
            </form>
        </div>
    );
};

export default EditItemForm;
