import React from 'react';
import { Link } from 'react-router-dom';
import './Product.css';

const Product = ( {product: { _id, name, imageUrl, description, price, countInStock }}) => {
  return (
    <div className='product'>
      <img src={imageUrl} alt={ name } />
      <div className='product__info'>
        <p className='info__name'>{ name }</p>
        <p className="info__description"> { description.toString().substring(0, 150) }... </p>
        <p className='info__price'>${ price }</p>
        <Link className='info__button' to={`/product/${_id}`}>View</Link>
      </div>
    </div>
  );
};

export default Product;