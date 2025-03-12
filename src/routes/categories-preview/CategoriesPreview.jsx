import { useContext, useState, useEffect } from 'react';
import { CategoriesContext } from '../../context/CategoriesContext';
import CategoryPreview from '../../components/category-preview-compt/CategoryPreview.compt';
export const CategoriesPreview = () => {
  const { categoriesMap } = useContext(CategoriesContext);
  const [error, setError] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      if (!categoriesMap || Object.keys(categoriesMap).length === 0) {
        setError(true);
      } else {
        setError(false);
      }
    }, 3000);
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
