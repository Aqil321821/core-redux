import { Routes, Route } from 'react-router-dom';
import Nav from './components/navigation/Nav.compt';
import Auth from './routes/auth/Auth.compt';
import Home from './routes/home/Home.compt';
import Checkout from './routes/checkout/Checkout.compt';
import { Shop } from './routes/Shop/Shop.compt';
import { useEffect } from 'react';
import { onAuthStateChangedListener, createUserDocFromAuth } from './utils/firebase/firebase.utils';
import { setCurrentUser } from './store/user/user.actions';
import { useDispatch } from 'react-redux';

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const unsub = onAuthStateChangedListener((user) => {
      if (user) {
        createUserDocFromAuth(user);
      }
      dispatch(setCurrentUser(user));
    });
    return unsub;
  }, [dispatch]);

  return (
    <Routes>
      <Route path='/' element={<Nav />}>
        <Route index element={<Home />} />
        <Route path='shop/*' element={<Shop />} />
        <Route path='auth' element={<Auth />} />
        <Route path='checkout' element={<Checkout />} />
      </Route>
    </Routes>
  );
};

export default App;
