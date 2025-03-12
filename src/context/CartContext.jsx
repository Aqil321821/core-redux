import { createContext, useReducer } from 'react';

//helper function
const addCartItem = (cartItems, productToAdd) => {
  
  const existingCartItem = cartItems.find((cartItem) => cartItem.id === productToAdd.id);
  if (existingCartItem) {
    return cartItems.map((cartItem) => {
      return cartItem.id === productToAdd.id ? { ...cartItem, qty: cartItem.qty + 1 } : cartItem;
    });
  }

  return [...cartItems, { ...productToAdd, qty: 1 }];
};

//helper to remove item from cartItems:
const removeCartItem = (cartItems, cartItemToRemove) => {
  //find item to remove
  const existingCartItem = cartItems.find((cartItem) => cartItem.id === cartItemToRemove.id);

  //check if qty is 1 ,if so then remove it from cart
  if (existingCartItem.qty === 1) {
    return cartItems.filter((cartItem) => cartItem.id !== cartItemToRemove.id);
  }

  //return cartItems with reduced qty
  return cartItems.map((cartItem) => {
    return cartItem.id === cartItemToRemove.id ? { ...cartItem, qty: cartItem.qty - 1 } : cartItem;
  });
};

//helper to clear item from cart
const clearCartItem = (cartItems, cartItemToClear) => {
  return cartItems.filter((cartItem) => cartItem.id !== cartItemToClear.id);
};



const INITIAL_STATE = {
  isCartOpen: false,
  cartItems: [],
  cartCount: 0,
  cartTotal: 0,
};

const cartReducer = (state, action) => {
  const { type, payload } = action;

  switch (type) {
    case 'SET_CART_ITEMS':
      return {
        ...state,
        ...payload,
      };
    case 'SET_IS_CART_OPEN':
      return {
        ...state,
        isCartOpen: payload,
      };
    default:
      throw new Error(`Unhandled action type ${type} in cart reducer`);
  }
};

export const CartContext = createContext({
  isCartOpen: false,
  setIsCartOpen: () => {},
  cartItems: [],
  total: 0,
  addItemToCart: () => {},
  removeItemFromCart: () => {},
  clearItemFromCart: () => {},
});

export const CartProvider = ({ children }) => {
  
  const [{ cartCount, cartItems, cartTotal, isCartOpen }, dispatch] =
   useReducer(cartReducer, INITIAL_STATE);

  const updateCartItemsReducer = (newCartItems) => {
    const newCartTotal = newCartItems.reduce((total, cartItem) => {
      return total + cartItem.qty * cartItem.price;
    }, 0);
    const newCartCount = newCartItems.reduce((total, cartItem) => {
      return total + cartItem.qty;
    }, 0);

    dispatch({
      type: 'SET_CART_ITEMS',
      payload: { cartItems: newCartItems, cartTotal: newCartTotal, cartCount: newCartCount },
    });
  };

  const setIsCartOpen = (bool) => {
    dispatch({ type: 'SET_IS_CART_OPEN', payload: !bool });
  };

  const addItemToCart = (productToAdd) => {
    const newCartItems = addCartItem(cartItems, productToAdd);
    updateCartItemsReducer(newCartItems);
  };

  const removeItemFromCart = (cartItemToRemove) => {
    const newCartItems = removeCartItem(cartItems, cartItemToRemove);
    updateCartItemsReducer(newCartItems);
  };
  const clearItemFromCart = (cartItemToClear) => {
    const newCartItems = clearCartItem(cartItems, cartItemToClear);
    updateCartItemsReducer(newCartItems);
  };

  const value = {
    isCartOpen,
    cartItems,
    cartCount,
    cartTotal,
    setIsCartOpen,
    addItemToCart,
    removeItemFromCart,
    clearItemFromCart,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
