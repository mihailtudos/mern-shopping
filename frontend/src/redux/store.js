import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

// reducers
import { cartReducer } from './reducer/cartReducers';
import { getProductsReducer, getProductDetailsReducer } from './reducer/productReducers';

const reducer = combineReducers({
  cart: cartReducer,
  getProducts: getProductsReducer,
  getProductDetails: getProductDetailsReducer
});

const middleware = [thunk];

const cartFromLS = localStorage.getItem('cart') ? JSON.parse(localStorage.getItem('cart'))  : '';

const INITIAL_STATE = {
  cart: {
    cartItems: cartFromLS 
  }
}

const store = createStore(
  reducer, 
  INITIAL_STATE, 
  composeWithDevTools(applyMiddleware(...middleware)));

export default store;