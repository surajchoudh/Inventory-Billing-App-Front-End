import React, { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import InvoiceList from '../components/InvoiceList';
import CreateInvoiceForm from '../components/CreateInvoiceForm';
import { getInvoices, createInvoice } from '../services/invoice'; // Import API functions for invoices

const BillingPage = () => {
    const [invoices, setInvoices] = useState([]);

    useEffect(() => {
        // Fetch invoices from the backend when the component mounts
        const fetchInvoices = async () => {
            try {
                const fetchedInvoices = await getInvoices(); // Call API function to get invoices
                setInvoices(fetchedInvoices);
            } catch (error) {
                console.error('Error fetching invoices:', error);
            }
        };

        fetchInvoices();
    }, []);

    const handleAddInvoice = async (invoiceData) => {
        try {
            // Call API function to create a new invoice
            await createInvoice(invoiceData);

            // After creating the invoice, update the list by fetching updated invoices
            const updatedInvoices = await getInvoices();
            setInvoices(updatedInvoices);
        } catch (error) {
            console.error('Error creating invoice:', error);
        }
    };

    return (
        <div>
            <Navbar />
            <h1>Billing</h1>
            <div>
                <CreateInvoiceForm onAddInvoice={handleAddInvoice} />
                <InvoiceList invoices={invoices} />
            </div>
            {/* Additional components or content related to billing */}
        </div>
    );
};

export default BillingPage;
