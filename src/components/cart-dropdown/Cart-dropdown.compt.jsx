import './cart-dropdown.styles.scss';
import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../button/Button.compt';
import CartItem from '../cart-item/Cart-item.compt';
import { CartContext } from '../../context/CartContext';

const CartDropdown = () => {
  const { cartItems, isCartOpen } = useContext(CartContext);
  const navigate = useNavigate();
  const gotoCheckout = () => {
    navigate('/checkout');
  };
  return (
    isCartOpen && (
      <div className='cart-dropdown-container'>
        <div className='cart-items'>
          {cartItems.map((item) => (
            <CartItem cartItem={item} key={item.id} />
          ))}
        </div>
        <Button onClick={gotoCheckout}>Checkout</Button>
      </div>
    )
  );
};

export default CartDropdown;
