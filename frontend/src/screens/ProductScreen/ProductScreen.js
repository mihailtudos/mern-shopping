import React from 'react';
import './ProductScreen.css';

const ProductScreen = () => {
  return (
    <div className='product-screen'>
      <div className="product-screen__left">
        <div className="left__image">
          <img src="https://images.unsplash.com/photo-1564424224827-cd24b8915874?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1489&q=80" alt="product name" />
        </div>
        <div className="left__info">
          <p className="left__name">Product 1</p>
          <p className="left__price">Price: $435</p>
          <p className="left__description">Description: Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla perferendis hic nisi ipsum illo necessitatibus.</p>
        </div>
      </div>
      <div className="product-screen__right">
        <div className="right__info">
          <p>Price: <span>$534.55</span></p>
          <p>Status: <span>In stock</span></p>
          <p>Qty 
            <select>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
            </select>
          </p>
          <p>
            <button type='button'>Add to cart</button>
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProductScreen;