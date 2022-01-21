import React from 'react';
//import { getData } from '../../utils/fetchData';
//import { DataContext } from '../../store/GlobalState';
//import { useParams } from 'react-router-dom';

function DetailProduct(props) {
  //const { state,  } = useContext(DataContext);
  //const { cart } = state;
  // const params = useParams();
  // const { id } = params;
  // const [product, setProduct] = useState('');
  // const [tab, setTab] = useState(0);
  // const [images, setImages] = useState([]);

  //const varieties = product.product_varieties && JSON.parse(product.product_varieties);

  //   const isActive = (index) => {
  //     if (tab === index) return 'active';
  //     return '';
  //   };

  //   const fetchProducts = async () => {
  //     const res = await getData('products/' + id);
  //     setProduct(res);
  //   };

  //   useEffect(() => {
  //     fetchProducts();
  //   }, []);
  //   useEffect(() => {
  //     setImages(varieties.images);
  //   }, [varieties]);

  return (
    <div className='detail_page'>
      <h1>Product</h1>
      {/* <div className='row'>
        <div className=' col-md-6 '>
          <img
            src={`http://localhost:8000${images[tab]}`}
            alt={images[tab]}
            className='d-block img-thumbnail rounded mt-4 w-100'
            style={{ height: '350px' }}
          />
          <div
            className='row mx-0 my-2'
            style={{ cursor: 'pointer' }}
            // ref={imgRef}
          >
            {images.map((img, index) => (
              <img
                key={index}
                src={`http://localhost:8000${img}`}
                alt={img}
                className={`img-thumbnail rounded mx-1 ${isActive(index)}`}
                style={{ height: '80px', width: '20%' }}
                onClick={() => setTab(index)}
              />
            ))}
          </div>
        </div>
        <div className='col-md-6'>
          <h2 className='text-uppercase'>{product.product_name}</h2>
          <h5 className='text-danger'>${product.product_description}</h5>
          <div className='row mx-0 d-flex justify-content-between'></div>
          <div className='my-2'> {product.product_description} </div>
          <button
            type='button'
            className='btn btn-dark d-block my-3 px-5'
            disabled={product.inStock === 0 ? true : false}
            onClick={() => {
              dispatch(addToCart(product, cart));
            }}
          >
            {' '}
            Buy
          </button>
        </div>
      </div> */}
    </div>
  );
}

export default DetailProduct;
