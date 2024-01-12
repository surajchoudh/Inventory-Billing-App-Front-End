import React, { createContext, useContext, useState } from 'react';

const InventoryContext = createContext();

export const useInventoryContext = () => {
    return useContext(InventoryContext);
};

export const InventoryProvider = ({ children }) => {
    const [inventoryItems, setInventoryItems] = useState([]);

    const updateInventoryItems = (newItems) => {
        setInventoryItems(newItems);
    };

    return (
        <InventoryContext.Provider value={{ inventoryItems, updateInventoryItems }}>
            {children}
        </InventoryContext.Provider>
    );
};
