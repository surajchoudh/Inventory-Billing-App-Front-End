import React, { useState } from 'react';
import { addItemToInventory, getInventoryItems } from '../services/inventory';
import { useInventoryContext } from '../components/InventoryContext';


const AddItemForm = ({ onAdd }) => {
    const { updateInventoryItems } = useInventoryContext();
    const [name, setName] = useState('');
    const [price, setPrice] = useState('');
    const [quantity, setQuantity] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const newItem = {
                name,
                price: parseFloat(price),
                quantity: parseInt(quantity),
            };
            await addItemToInventory(newItem);

            setName('');
            setPrice('');
            setQuantity('');
            const updatedItems = await getInventoryItems();
            updateInventoryItems(updatedItems);

            if (onAdd) {
                onAdd();
            }
        } catch (error) {
            console.error('Error adding item:', error);
        }
    };

    return (
        <div className="container mt-5">
            <div className="row justify-content-center">
                <div className="col-md-6">
                    <h2 className="text-center mb-4">Add New Item</h2>
                    <form onSubmit={handleSubmit}>
                        <div className="mb-3">
                            <label className="form-label">Name:</label>
                            <input
                                type="text"
                                className="form-control"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                required
                            />
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Price:</label>
                            <input
                                type="number"
                                className="form-control"
                                value={price}
                                onChange={(e) => setPrice(e.target.value)}
                                required
                            />
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Quantity:</label>
                            <input
                                type="number"
                                className="form-control"
                                value={quantity}
                                onChange={(e) => setQuantity(e.target.value)}
                                required
                            />
                        </div>
                        <button type="submit" className="btn btn-primary">Add Item</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default AddItemForm;
