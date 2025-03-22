import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { selectCategoriesMap } from '../../store/categories/category.selector';
import CategoryPreview from '../../components/category-preview-compt/CategoryPreview.compt';
export const CategoriesPreview = () => {
  const [error, setError] = useState(false);
  const categoriesMap = useSelector(selectCategoriesMap);

  useEffect(() => {
    setTimeout(() => {
      if (!categoriesMap || Object.keys(categoriesMap).length === 0) {
        setError(true);
      } else {
        setError(false);
      }
    }, 4000);
  }, [categoriesMap]);

  if (error) {
    return <h2 className='error'>⚠️ Network Error! Please try again later.</h2>;
  }

  return (
    <div className='outer'>
      {Object.keys(categoriesMap).map((title) => {
        const products = categoriesMap[title];
        return <CategoryPreview key={title} title={title} products={products} />;
      })}
    </div>
  );
};
