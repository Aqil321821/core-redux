import { Route, Routes } from 'react-router-dom';

import { CategoriesPreview } from '../categories-preview/CategoriesPreview';
import CategoryPage from '../category-page/CategoryPage.compt';

export const Shop = () => {
  return (
    <Routes>
      <Route index element={<CategoriesPreview />} />
      <Route path=':category' element={<CategoryPage />} />
    </Routes>
  );
};
