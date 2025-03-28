import './checkout-item.styles.scss';
import { useContext } from 'react';
import { CartContext } from '../../context/CartContext';

const CheckoutItem = ({ cartItem }) => {
  const { clearItemFromCart, addItemToCart, removeItemFromCart } = useContext(CartContext);
  const { name, imageUrl, price, qty } = cartItem;
  const clearItemhandler = () => clearItemFromCart(cartItem);
  const addItemHandler = () => addItemToCart(cartItem);
  const removeItemHandler = () => removeItemFromCart(cartItem);

  return (
    <div className='checkout-item-container'>
      <div className='image-container'>
        <img src={imageUrl} alt={name} />
      </div>
      <span className='name'>{name}</span>
      <span className='quantity'>
        <div className='arrow' onClick={removeItemHandler}>
          &#10094;
        </div>
        <span className='value'>{qty}</span>
        <div className='arrow' onClick={addItemHandler}>
          &#10095;
        </div>
      </span>
      <span className='price'>{price}$</span>

      <div className='remove-button' onClick={clearItemhandler}>
        &#10005;
      </div>
    </div>
  );
};
export default CheckoutItem;
