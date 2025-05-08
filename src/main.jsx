import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { CartProvider } from './context/CartContext';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <CartProvider>
      <App /> {/* No es necesario envolver en BrowserRouter aquí */}
    </CartProvider>
  </React.StrictMode>,
);
