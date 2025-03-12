import './cart-icon.styles.scss';
import Bag from '../../assets/bag.svg?react';
import { useContext } from 'react';
import { CartContext } from '../../context/CartContext';

const CartIcon = () => {
  const { setIsCartOpen, cartCount, isCartOpen } = useContext(CartContext);

  return (
    <div className='cart-icon-container' onClick={() => setIsCartOpen(isCartOpen)}>
      <Bag className='shopping-icon' />
      <span className='item-count'>{cartCount}</span>
    </div>
  );
};

export default CartIcon;
