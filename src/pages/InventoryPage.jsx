import React, { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import InventoryList from '../components/InventoryList';
import AddItemForm from '../components/AddItemForm';
import { getInventoryItems, addItemToInventory } from '../services/inventory'; // Import API functions for inventory

const InventoryPage = () => {
    const [inventoryItems, setInventoryItems] = useState([]);

    useEffect(() => {
        // Fetch inventory items from the backend when the component mounts
        const fetchInventoryItems = async () => {
            try {
                const items = await getInventoryItems(); // Call API function to get inventory items
                setInventoryItems(items);
            } catch (error) {
                console.error('Error fetching inventory items:', error);
            }
        };

        fetchInventoryItems();
    }, []);

    const handleAddItem = async (itemData) => {
        try {
            // Call API function to add a new item to the inventory
            await addItemToInventory(itemData);

            // After adding the item, update the inventory list by fetching updated items
            const updatedItems = await getInventoryItems();
            setInventoryItems(updatedItems);
        } catch (error) {
            console.error('Error adding item:', error);
        }
    };

    return (
        <div>
            <Navbar />
            <h1>Inventory Management</h1>
            <div>
                <AddItemForm onAdd={handleAddItem} />
                <InventoryList items={inventoryItems} />
            </div>
            {/* Additional components or content related to inventory management */}
        </div>
    );
};

export default InventoryPage;
