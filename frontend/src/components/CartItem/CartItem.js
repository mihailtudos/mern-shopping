import React from 'react';
import './CartItem.css';
import { Link } from 'react-router-dom';

const CartItem = () => {
  return (
    <div className='cart-item'>
      <div className="cart-item__image">
        <img src="https://images.unsplash.com/photo-1564424224827-cd24b8915874?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1489&q=80" alt="product name" />
      </div>

      <Link to={`/product/${111}`} className='cart-item__name'>
        <p>Product 1</p>
      </Link>

      <p className='cart-item__price'>$499.99</p>
      <select className='cart-item__select'>
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
      </select>
      <button className='cart-item__delete-btn'>
        <i className="fas fa-trash"></i>
      </button>
    </div>
  );
};

export default CartItem;