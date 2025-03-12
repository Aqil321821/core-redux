import './directory.styles.scss';
import CategoryItem from '../category-item/Category-item.compt';

import React from 'react';

const Directory = ({ categories }) => {
  const handle = () => {
    console.log('handle');
  };
  return (
    <div className='categories-container'>
      {categories.map((category) => {
        return <CategoryItem key={category.id} category={category} />;
      })}
    </div>
  );
};

export default Directory;
