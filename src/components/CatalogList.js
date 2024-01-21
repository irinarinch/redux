import React from 'react';
import { useSelector } from 'react-redux';

const CatalogList = () => {
  const items = useSelector(state => state.catalogList);

  return (
    <div className='catalog-list__container'>
      {items.map(item => (
        <div key={item.id} className='product_container'>
          <img src={item.image} className='product_img'></img>
          <div className='product_price'>{item.price} р.</div>
          <div className='product_title'>{item.name}</div>
        </div>))}
    </div>
  )
}

export default CatalogList;