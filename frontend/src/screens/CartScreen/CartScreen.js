import React from 'react';
import CartItem from '../../components/CartItem/CartItem';
import './CartScreen.css';

const CartScreen = () => {
  return (
    <div className='cart-screen__container'>
      <h2>Shopping Cart</h2>
      <div className='cart-screen'>
        <div className="cart-screen__left">
          <CartItem />
        </div>
        <div className="cart-screen__right">
          <div className="cartscreen__info">
            <p>Subtotal (0) items</p>
            <p>$499.99</p>
          </div>
          <div>
            <button>Proced to checkout</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartScreen;