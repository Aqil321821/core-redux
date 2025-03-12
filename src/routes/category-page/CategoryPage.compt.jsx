import './category-page.styles.scss';
import { useParams } from 'react-router-dom';
import { useContext, useState, useEffect } from 'react';
import { CategoriesContext } from '../../context/CategoriesContext';
import ProductCard from '../../components/Product-card/Product-card.compt';

const CategoryPage = () => {
  const { category } = useParams();
  const { categoriesMap } = useContext(CategoriesContext);
  const [products, setProducts] = useState([]);
  const [heading] = [category];

  useEffect(() => {
    setProducts(categoriesMap[category]);
  }, [category, categoriesMap]);

  return (
    <div className='outer-category-page-container'>
      <h2 className='heading'>{heading && heading.toUpperCase()}</h2>
      <div className='category-page-container'>
        {products &&
          products.map((product) => {
            return <ProductCard product={product} key={product.id} />;
          })}
      </div>
    </div>
  );
};

export default CategoryPage;
