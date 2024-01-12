import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import { InventoryProvider } from './components/InventoryContext';
import { InvoiceProvider } from './components/InvoiceContext';
import 'bootstrap/dist/css/bootstrap.min.css';



const root = createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <InventoryProvider>
      <InvoiceProvider>
        <App />
      </InvoiceProvider>
    </InventoryProvider>
  </React.StrictMode>
);
