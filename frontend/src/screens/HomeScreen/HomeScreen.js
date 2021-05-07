import React from 'react';
import Product from '../../components/Product/Product';
import './HomeScreen.css';

const HomeScreen = () => {
  return (
    <div className='home-screen'>
      <h2 className='home-screen__title'>Latest Products</h2>
      <div className="home-screen__products">
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
      </div>
    </div>
  );
};

export default HomeScreen;
