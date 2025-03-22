import { Outlet, Link } from 'react-router-dom';
import { useContext } from 'react';
import Logo from '../../assets/crown.svg?react';
import { SignOutUser } from '../../utils/firebase/firebase.utils';
import CartIcon from '../cart-icon/Cart-icon.compt';
import CartDropdown from '../cart-dropdown/Cart-dropdown.compt';
import { CartContext } from '../../context/CartContext';
import { useSelector } from 'react-redux';
import { selectCurrentUser } from '../../store/user/user.selector';
import './Nav.styles.scss';
const Nav = () => {
  const { isCartOpen } = useContext(CartContext);
  const currentUser = useSelector(selectCurrentUser);
  
  return (
    <>
      <div className='navigation'>
        <Link className='logo-container' to='/'>
          <Logo className='logo' />
        </Link>
        <div className='nav-links-container'>
          <Link className='nav-link' to='/shop'>
            SHOP
          </Link>
          {currentUser ? (
            <Link className='nav-link' to='/auth' onClick={SignOutUser}>
              SIGN OUT
            </Link>
          ) : (
            <Link className='nav-link' to='/auth'>
              SIGN IN
            </Link>
          )}
          <div>
            <CartIcon />
          </div>
        </div>
        {isCartOpen && <CartDropdown />}
      </div>
      <Outlet />
    </>
  );
};

export default Nav;
