import React, { useState, useEffect } from 'react';
import { getData } from '../../utils/fetchData';
import ProductItem from '../../components/ProductItem';

export default function Home() {
  const [products, setProducts] = useState([]);

  const fetchProducts = async () => {
    const res = await getData('products');
    setProducts(res);
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div>
      <h1>Home</h1>
      <div className='row'>
        {products?.length === 0 ? (
          <h2>No Products</h2>
        ) : (
          products?.map((product) => {
            return <ProductItem key={product._id} product={product} />;
          })
        )}
      </div>
    </div>
  );
}
