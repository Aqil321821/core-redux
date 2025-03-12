import ProductCard from '../Product-card/Product-card.compt';
import './categoryPreview.styles.scss';
import { useNavigate } from 'react-router-dom';

const CategoryPreview = ({ title, products }) => {
  const navigate = useNavigate();
  const gotoDetailsPage = (title) => {
    navigate(`/shop/${title}`);
  };

  return (
    <div className='category-preview-container'>
      <h2 onClick={() => gotoDetailsPage(title)}>
        <span className='title'>{title.toUpperCase()}</span>
      </h2>
      <div className='preview'>
        {products
          .filter((_, index) => index < 4)
          .map((product) => {
            return <ProductCard key={product.id} product={product} />;
          })}
      </div>
    </div>
  );
};

export default CategoryPreview;
