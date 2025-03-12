import { createContext, useContext, useEffect, useReducer } from 'react';
import { onAuthStateChangedListener, createUserDocFromAuth } from '../utils/firebase/firebase.utils';
export const UserContext = createContext({
  currentUser: null,
  dispatch: () => null,
});

export const USER_ACTION_TYPES = {
  SET_CURRENT_USER: 'SET_CURRENT_USER',
};

const userReducer = (state, action) => {
  switch (action.type) {
    case USER_ACTION_TYPES.SET_CURRENT_USER:
      return {
        ...state,
        currentUser: action.payload,
      };
    default:
      throw new Error(`unknown action type ${action.type} in useReducer`);
  }
};


const initialState = {
  currentUser: null,
};

export const UserProvider = ({ children }) => {
  const [state, dispatch] = useReducer(userReducer, initialState);

  useEffect(() => {
    const unsub = onAuthStateChangedListener((user) => {
      if (user) {
        createUserDocFromAuth(user);
      }
      dispatch({ type: USER_ACTION_TYPES.SET_CURRENT_USER, payload: user });
    });
    return unsub;
  }, []);

  const value = { state, dispatch };

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};

//Custome hook to use userContext

export const useUserContext = () => useContext(UserContext);
