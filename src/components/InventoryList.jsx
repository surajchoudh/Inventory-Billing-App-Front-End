import React, { useState, useEffect } from 'react';
import { getInventoryItems, deleteInventoryItem, updateInventoryItem } from '../services/inventory';
import { useInventoryContext } from '../components/InventoryContext';

const InventoryList = () => {
    const { inventoryItems, updateInventoryItems } = useInventoryContext();
    const [newInventoryItem, setNewInventoryItem] = useState({
        name: '',
        price: 0,
        quantity: 0,
    });
    const [editItemData, setEditItemData] = useState(null);

    useEffect(() => {
        const fetchInventoryItems = async () => {
            try {
                const items = await getInventoryItems();
                updateInventoryItems(items);
            } catch (error) {
                console.error('Error fetching inventory items:', error);
            }
        };

        fetchInventoryItems();
    }, [updateInventoryItems]);

    const handleAddInventory = async () => {
        try {
            const addedItem = await addInventoryItem(newInventoryItem);
            updateInventoryItems([...inventoryItems, addedItem]);
            setNewInventoryItem({ name: '', price: 0, quantity: 0 });
        } catch (error) {
            console.error('Error adding inventory item:', error);
        }
    };

    const handleDelete = async (itemId) => {
        try {
            await deleteInventoryItem(itemId);
            const updatedItems = inventoryItems.filter(item => item._id !== itemId);
            updateInventoryItems(updatedItems);
        } catch (error) {
            console.error('Error deleting item:', error);
        }
    };

    const handleUpdate = async (itemId, updatedData) => {
        try {
            const updatedItem = await updateInventoryItem(itemId, updatedData);
            const updatedItems = inventoryItems.map(item => {
                if (item._id === itemId) {
                    return updatedItem;
                }
                return item;
            });
            updateInventoryItems(updatedItems);
            setEditItemData(null);
        } catch (error) {
            console.error('Error updating item:', error);
        }
    };

    const openUpdateModal = (item) => {
        setEditItemData(item);
    };

    const closeUpdateModal = () => {
        setEditItemData(null);
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setNewInventoryItem({
            ...newInventoryItem,
            [name]: value,
        });
    };

    return (
        <div className="container mt-5">
            <h2 className="text-center mb-4">Inventory List</h2>
            <div className="mb-3">
                {/* Input fields for adding new inventory */}
                {/* ... (existing code for input fields) ... */}
            </div>
            <button className="btn btn-primary" onClick={handleAddInventory}>
                Added Inventory
            </button>
            <table className="table mt-4">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Price</th>
                        <th>Quantity</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {inventoryItems.map((item) => (
                        <tr key={item._id}>
                            <td>{item.name}</td>
                            <td>{item.price}</td>
                            <td>{item.quantity}</td>
                            <td>
                                <button
                                    className="btn btn-primary me-2"
                                    onClick={() => openUpdateModal(item)}
                                >
                                    Update
                                </button>
                                <button
                                    className="btn btn-danger"
                                    onClick={() => handleDelete(item._id)}
                                >
                                    Delete
                                </button>
                            </td>
                        </tr>
                    ))}
                    {newInventoryItem.name && (
                        <tr key={newInventoryItem._id}>
                            <td>{newInventoryItem.name}</td>
                            <td>${newInventoryItem.price}</td>
                            <td>{newInventoryItem.quantity}</td>
                            <td>
                                <button
                                    className="btn btn-primary me-2"
                                    onClick={() => openUpdateModal(newInventoryItem)}
                                >
                                    Update
                                </button>
                                <button
                                    className="btn btn-danger"
                                    onClick={() => handleDelete(newInventoryItem._id)}
                                >
                                    Delete
                                </button>
                            </td>
                        </tr>
                    )}
                </tbody>
            </table>
            {editItemData && (
                <div className="modal" tabIndex="-1" role="dialog" style={{ display: 'block' }}>
                    <div className="modal-dialog" role="document">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title">Edit Item</h5>
                                <button type="button" className="close" onClick={closeUpdateModal}>
                                    <span>&times;</span>
                                </button>
                            </div>
                            <div className="modal-body">
                                {/* Form fields to edit item data */}
                                <input
                                    type="text"
                                    value={editItemData.name}
                                    onChange={(e) => setEditItemData({ ...editItemData, name: e.target.value })}
                                    className="form-control mb-2"
                                />
                                <input
                                    type="number"
                                    value={editItemData.price}
                                    onChange={(e) => setEditItemData({ ...editItemData, price: e.target.value })}
                                    className="form-control mb-2"
                                />
                                <input
                                    type="number"
                                    value={editItemData.quantity}
                                    onChange={(e) => setEditItemData({ ...editItemData, quantity: e.target.value })}
                                    className="form-control mb-2"
                                />
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary" onClick={closeUpdateModal}>
                                    Close
                                </button>
                                <button type="button" className="btn btn-primary" onClick={() => handleUpdate(editItemData._id, editItemData)}>
                                    Save changes
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default InventoryList;
