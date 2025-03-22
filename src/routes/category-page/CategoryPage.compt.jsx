import './category-page.styles.scss';
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { selectCategoriesMap } from '../../store/categories/category.selector';
import ProductCard from '../../components/Product-card/Product-card.compt';

const CategoryPage = () => {
  const { category } = useParams();
  const categoriesMap = useSelector(selectCategoriesMap);

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
