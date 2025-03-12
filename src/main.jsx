import { BrowserRouter } from 'react-router-dom';
import { createRoot } from 'react-dom/client';
import { UserProvider } from './context/UserContext.jsx';
import { CategoriesProvider } from './context/CategoriesContext.jsx';
import { CartProvider } from './context/CartContext.jsx';
import './index.css';
import App from './App.jsx';

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <UserProvider>
      <CategoriesProvider>
        <CartProvider>
          <App />
        </CartProvider>
      </CategoriesProvider>
    </UserProvider>
  </BrowserRouter>
);
