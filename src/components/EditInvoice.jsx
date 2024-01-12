import React, { useState, useEffect } from 'react';
import { updateInvoice, getInvoiceById } from '../services/invoice'; // Import API functions to update and get invoices

const EditInvoiceForm = ({ invoiceId, onUpdate }) => {
    const [customerName, setCustomerName] = useState('');
    const [totalAmount, setTotalAmount] = useState('');

    useEffect(() => {
        const fetchInvoice = async () => {
            try {
                // Fetch invoice details by its ID
                const invoice = await getInvoiceById(invoiceId);
                setCustomerName(invoice.customerName);
                setTotalAmount(String(invoice.totalAmount));
                // Set other fields as needed
            } catch (error) {
                console.error('Error fetching invoice:', error);
            }
        };

        fetchInvoice();
    }, [invoiceId]);

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            // Create an updated invoice object with input values
            const updatedInvoice = {
                customerName,
                totalAmount: parseFloat(totalAmount),
                // Add more fields as needed
            };

            // Call API function to update the invoice
            await updateInvoice(invoiceId, updatedInvoice);

            // Trigger a callback (if provided) to inform the parent component about the invoice update
            if (onUpdate) {
                onUpdate();
            }
        } catch (error) {
            console.error('Error updating invoice:', error);
        }
    };

    return (
        <div>
            <h2>Edit Invoice</h2>
            <form onSubmit={handleSubmit}>
                <label>
                    Customer Name:
                    <input type="text" value={customerName} onChange={(e) => setCustomerName(e.target.value)} required />
                </label>
                <label>
                    Total Amount:
                    <input type="number" value={totalAmount} onChange={(e) => setTotalAmount(e.target.value)} required />
                </label>
                {/* Add more input fields for other invoice details */}
                <button type="submit">Update Invoice</button>
            </form>
        </div>
    );
};

export default EditInvoiceForm;
