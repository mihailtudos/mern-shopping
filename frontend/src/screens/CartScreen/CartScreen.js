import React from 'react';
import CartItem from '../../components/CartItem/CartItem';
import './CartScreen.css';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { addToCart, removeFromCart } from '../../redux/actions/cartActions';

const CartScreen = () => {
  const dispatch = useDispatch();

  const cart = useSelector(state => state.cart);
  const { cartItems } = cart;

  const qtyChangehangler = (id, qty) => {
    dispatch(addToCart(id, qty));
  }

  const removeFromCartHandler = (id) => {
    dispatch(removeFromCart(id));
  }

  const getCartCount = () => {
    return cartItems.reduce((qty, item) => Number(item.qty) + qty, 0);
  }

  const getCartSubTotal = () => {
    return cartItems.reduce((price, item) => (item.price * item.qty) + price, 0)
  }

  return (
    <div className='cart-screen__container'>
      <h2>Shopping Cart</h2>
      <div className='cart-screen'>
        <div className="cart-screen__left">
        {
          cartItems.length === 0 ? (
          <div>
            Your cart is empty <Link to='/'>Go back</Link>
          </div>
          ) : cartItems.map((item) => (
                <CartItem item={item} 
                qtyChangehangler={qtyChangehangler}
                removeFromCart={removeFromCartHandler}
                />
          ))
        }
        </div>
      <div className="cart-screen__right">
        <div className="cartscreen__info">
          <p>Subtotal ({getCartCount()}) items</p>
          <p>${getCartSubTotal()}</p>
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