import { Route, Routes } from 'react-router-dom';
import { useEffect } from 'react';
import { CategoriesPreview } from '../categories-preview/CategoriesPreview';
import CategoryPage from '../category-page/CategoryPage.compt';
import { getAllData } from '../../utils/firebase/firebase.utils';
import { setCategories } from '../../store/categories/category.action';
import { useDispatch } from 'react-redux';
export const Shop = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    const getDataFromFirestore = async () => {
      const categoriesArray = await getAllData();
      dispatch(setCategories(categoriesArray));
    };
    getDataFromFirestore();
  }, []);

  return (
    <Routes>
      <Route index element={<CategoriesPreview />} />
      <Route path=':category' element={<CategoryPage />} />
    </Routes>
  );
};
