import React, { useState, useEffect } from 'react';
import { useInvoiceContext } from '../components/InvoiceContext';
import { getInvoices, deleteInvoice, updateInvoice } from '../services/invoice';

const InvoiceList = () => {
    const { invoices, updateInvoices } = useInvoiceContext();
    const [editInvoiceData, setEditInvoiceData] = useState(null);

    useEffect(() => {
        const fetchInvoices = async () => {
            try {
                const fetchedInvoices = await getInvoices();
                updateInvoices(fetchedInvoices);
            } catch (error) {
                console.error('Error fetching invoices:', error);
            }
        };

        fetchInvoices();
    }, [updateInvoices]);

    const handleDeleteInvoice = async (invoiceId) => {
        try {
            await deleteInvoice(invoiceId);
            const updatedInvoices = invoices.filter((invoice) => invoice._id !== invoiceId);
            updateInvoices(updatedInvoices);
        } catch (error) {
            console.error('Error deleting invoice:', error);
        }
    };

    const handleUpdateInvoice = async (invoiceId, updatedData) => {
        try {
            const updatedInvoice = await updateInvoice(invoiceId, updatedData);
            const updatedInvoices = invoices.map((invoice) => (invoice._id === invoiceId ? updatedInvoice : invoice));
            updateInvoices(updatedInvoices);
            setEditInvoiceData(null);
        } catch (error) {
            console.error('Error updating invoice:', error);
        }
    };

    const openUpdateModal = (invoice) => {
        setEditInvoiceData(invoice);
    };

    const closeUpdateModal = () => {
        setEditInvoiceData(null);
    };

    const updateInvoiceItem = (invoiceId, newData) => {
        openUpdateModal(newData);
    };

    return (
        <div className="container mt-5">
            <h2 className="text-center mb-4">Invoice List</h2>
            <table className="table mt-4">
                <thead>
                    <tr>
                        <th>Invoice ID</th>
                        <th>Customer Name</th>
                        <th>Total Amount</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {invoices.map((invoice) => (
                        <tr key={invoice._id}>
                            <td>{invoice._id}</td>
                            <td>{invoice.customerName}</td>
                            <td>${invoice.totalAmount}</td>
                            <td>
                                <button
                                    className="btn btn-primary me-2"
                                    onClick={() => updateInvoiceItem(invoice._id, invoice)}
                                >
                                    Update
                                </button>
                                <button
                                    className="btn btn-danger"
                                    onClick={() => handleDeleteInvoice(invoice._id)}
                                >
                                    Delete
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            {editInvoiceData && (
                <div className="modal" tabIndex="-1" role="dialog" style={{ display: 'block' }}>
                    <div className="modal-dialog" role="document">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title">Edit Invoice</h5>
                                <button type="button" className="close" onClick={closeUpdateModal}>
                                    <span>&times;</span>
                                </button>
                            </div>
                            <div className="modal-body">
                                {/* Form fields to edit invoice data */}
                                <input
                                    type="text"
                                    value={editInvoiceData.customerName}
                                    onChange={(e) => setEditInvoiceData({ ...editInvoiceData, customerName: e.target.value })}
                                    className="form-control mb-2"
                                />
                                <input
                                    type="number"
                                    value={editInvoiceData.totalAmount}
                                    onChange={(e) => setEditInvoiceData({ ...editInvoiceData, totalAmount: e.target.value })}
                                    className="form-control mb-2"
                                />
                                {/* Add more input fields for other invoice details */}
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary" onClick={closeUpdateModal}>
                                    Close
                                </button>
                                <button
                                    type="button"
                                    className="btn btn-primary"
                                    onClick={() => handleUpdateInvoice(editInvoiceData._id, editInvoiceData)}
                                >
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

export default InvoiceList;
