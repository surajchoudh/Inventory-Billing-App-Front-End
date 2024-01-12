// CreateInvoiceForm.jsx
import React, { useState } from 'react';
import { createInvoice } from '../services/invoice';

const CreateInvoiceForm = ({ onAddInvoice }) => {
    const [customerName, setCustomerName] = useState('');
    const [totalAmount, setTotalAmount] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();



        try {
            const newInvoice = {
                customerName,
                totalAmount: parseFloat(totalAmount),
            };

            await createInvoice(newInvoice);

            setCustomerName('');
            setTotalAmount('');

            if (onAddInvoice) {
                onAddInvoice();
            }
        } catch (error) {
            console.error('Error creating invoice:', error);
        }
    };

    return (
        <div className="container mt-5">
            <div className="row justify-content-center">
                <div className="col-md-6">
                    <h2 className="text-center mb-4">Create Invoice</h2>
                    <form onSubmit={handleSubmit}>
                        <div className="mb-3">
                            <label className="form-label">Customer Name:</label>
                            <input
                                type="text"
                                className="form-control"
                                value={customerName}
                                onChange={(e) => setCustomerName(e.target.value)}
                                required
                            />
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Total Amount:</label>
                            <input
                                type="number"  // Change type to number
                                className="form-control"
                                value={totalAmount}
                                onChange={(e) => setTotalAmount(e.target.value)}
                                required
                            />
                        </div>
                        <button type="submit" className="btn btn-primary">Create Invoice</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default CreateInvoiceForm;
