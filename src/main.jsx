import { BrowserRouter } from 'react-router-dom';
import { createRoot } from 'react-dom/client';
import { CategoriesProvider } from './context/CategoriesContext.jsx';
import { CartProvider } from './context/CartContext.jsx';
import { store } from './store/store.js';
import { Provider } from 'react-redux';
import './index.css';
import App from './App.jsx';

createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <BrowserRouter>
      <CategoriesProvider>
        <CartProvider>
          <App />
        </CartProvider>
      </CategoriesProvider>
    </BrowserRouter>
  </Provider>
);
