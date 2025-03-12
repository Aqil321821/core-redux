import { createContext, useState, useEffect } from 'react';
import { getAllData } from '../utils/firebase/firebase.utils';

export const CategoriesContext = createContext({
  categoriesMap: {},
});

export const CategoriesProvider = ({ children }) => {
  const [categoriesMap, setCategoriesMap] = useState({});

  useEffect(() => {
    const getDataFromFirestore = async () => {
      const categoryMap = await getAllData();
      setCategoriesMap(categoryMap);
    };
    getDataFromFirestore();
  }, []);

  const value = { categoriesMap };
  return <CategoriesContext.Provider value={value}>{children}</CategoriesContext.Provider>;
};
