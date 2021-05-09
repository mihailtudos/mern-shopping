import './HomeScreen.css';
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

// components
import Product from '../../components/Product/Product';

// actions 
import { getProducts as listProducts } from '../../redux/actions/productActions'
const HomeScreen = () => {
  const dispatch = useDispatch();
  const getProducts = useSelector((state) => state.getProducts);
  const { products, loading, error } = getProducts;

  useEffect(() => {
    dispatch(listProducts());
  }, [dispatch])

  return (
    <div className='home-screen'>
      <h2 className='home-screen__title'>Latest Products</h2>
      <div className="home-screen__products">
        {
          loading ? 
          <h2>Loading...</h2> : 
          error ? <h2>{ error }</h2> : 
          products.map((product) => <Product key={product._id} product={product}/>)
        }
      </div>
    </div>
  );
};

export default HomeScreen;
