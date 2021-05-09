import React from 'react';
import './CartItem.css';
import { Link } from 'react-router-dom';

const CartItem = ({ item, qtyChangehangler, removeFromCart }) => {
  return (
    <div className='cart-item'>
      <div className="cart-item__image">
        <img src={item.imageUrl} alt={item.name} />
      </div>

      <Link to={`/product/${item.product}`} className='cart-item__name'>
        <p>{item.name}</p>
      </Link>

      <p className='cart-item__price'>${item.price}</p>
      <select value={item.qty} 
        className='cart-item__select' 
        onChange={(e) => qtyChangehangler(item.product, e.target.value)}>
        {[...Array(item.countInStock).keys()].map((x) => (
          <option value={ x + 1 }>{ x + 1 }</option>
        ))}
      </select>
      <button 
        className='cart-item__delete-btn'
        onClick={() => removeFromCart(item.product)}>
        <i className="fas fa-trash"></i>
      </button>
    </div>
  );
};

export default CartItem;