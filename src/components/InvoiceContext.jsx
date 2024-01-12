import React, { createContext, useContext, useState } from 'react';

const InvoiceContext = createContext();

export const useInvoiceContext = () => {
    return useContext(InvoiceContext);
};

export const InvoiceProvider = ({ children }) => {
    const [invoices, setInvoices] = useState([]);

    const updateInvoices = (newInvoices) => {
        setInvoices(newInvoices);
    };

    return (
        <InvoiceContext.Provider value={{ invoices, updateInvoices }}>
            {children}
        </InvoiceContext.Provider>
    );
};
