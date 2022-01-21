import React from 'react';
// import { DataContext } from '../store/GlobalState';
// import { addToCart } from '../store/Actions';
import { Link } from 'react-router-dom';

function ProductItem({ product, handleCheck }) {
  //   const { state, dispatch } = useContext(DataContext);
  //   const { cart } = state;
  const productVarieties = JSON.parse(product.product_varieties);

  return (
    <div className='card  col-md-3 m-3 p-2'>
      <img
        className='card-img-top'
        src={`https://aviosapi.herokuapp.com
		/${productVarieties[0]?.images[0]}`}
        alt='prodcut'
        style={{ height: '150px', objectFit: 'cover' }}
      />
      <div className='card-body'>
        <h5 className='card-title text-capitalise' title={product.product_name}>
          {product.product_name}
        </h5>
        <div className='row justify-content-between mx-0'>
          <h6 className='text-danger'>{product.product_description}</h6>
        </div>
        <p
          className='card-text'
          style={{
            height: '5rem',
            textOverflow: 'ellipsis',
            overflow: 'hidden'
          }}
        >
          {product.product_description}
        </p>
      </div>

      <div>
        {' '}
        <Link to={`/product/${product.id}`}>View</Link>
      </div>
    </div>
  );
}

export default ProductItem;
