// Function to fetch all invoices
export const getInvoices = async () => {
    try {
        const response = await fetch('http://localhost:3000/api/invoice');
        if (!response.ok) {
            throw new Error('Error fetching invoices.');
        }
        return await response.json();
    } catch (error) {
        throw new Error(`Error fetching invoices: ${error.message}`);
    }
};

// Function to create a new invoice
export const createInvoice = async (invoiceData) => {
    try {
        const response = await fetch('https://end-o7bq.onrender.com/api/invoice', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(invoiceData),
        });
        if (!response.ok) {
            throw new Error('Error creating invoice.');
        }
        return await response.json();
    } catch (error) {
        throw new Error(`Error creating invoice: ${error.message}`);
    }
};

// Function to update an existing invoice
export const updateInvoice = async (invoiceId, updatedData) => {
    try {
        const response = await fetch(`https://end-o7bq.onrender.com/api/invoice/${invoiceId}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(updatedData),
        });
        if (!response.ok) {
            throw new Error('Error updating invoice.');
        }
        return await response.json();
    } catch (error) {
        throw new Error(`Error updating invoice: ${error.message}`);
    }
};

// Function to delete an invoice
export const deleteInvoice = async (invoiceId) => {
    try {
        const response = await fetch(`https://end-o7bq.onrender.com/api/invoice/${invoiceId}`, {
            method: 'DELETE',
        });
        if (!response.ok) {
            throw new Error('Error deleting invoice.');
        }
        return await response.json();
    } catch (error) {
        throw new Error(`Error deleting invoice: ${error.message}`);
    }
};
