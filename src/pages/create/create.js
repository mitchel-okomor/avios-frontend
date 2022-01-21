import { useContext, useState } from 'react';
import { DataContext } from '../../store/GlobalState';
import { postData } from '../../utils/fetchData';

function Create() {
  const initialState = {
    product_name: '',
    product_description: '',
    product_variety: '',
    size: '',
    color: '',
    price: '',
    quantity: ''
  };

  const [product, setProduct] = useState(initialState);
  const [images, setImages] = useState([]);
  const [message, setMessage] = useState('');
  const { product_name, product_description, size, color, price, quantity } =
    product;

  const { dispatch } = useContext(DataContext);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProduct({ ...product, [name]: value });
  };

  const handleImageChange = (e) => {
    setImages([...images, e.target.files[0]]);
  };
  const deleteImage = (index) => {
    const newArr = [...images];
    newArr.splice(index, 1);
    setImages(newArr);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(images);

    if (!product_name || !product_description || images.length === 0)
      return setMessage('please fill all fields');

    //   dispatch({ type: 'NOTIFY', payload: { loading: true } });
    //   let media = [];
    //   const imgNewURL = images.filter((img) => !img.url);
    //   const imgOldURL = images.filter((img) => img.url);
    let formData = new FormData();
    formData.append('product_name', product_name);
    formData.append('product_description', product_description);
    formData.append('size', size);
    formData.append('color', color);
    formData.append('quantity', quantity);
    formData.append('price', price);

    for (let i of images) {
      formData.append('images', i);
    }

    let res;

    res = await postData('products', formData);
    if (res.err) {
      return dispatch({ type: 'NOTIFY', payload: { error: res.err } });
    }

    return dispatch({ type: 'NOTIFY', payload: { success: res.msg } });
  };

  return (
    <div className='products_manager'>
      <h1>Admin Products</h1>

      <div>
        <form className='row' onSubmit={handleSubmit}>
          <p className='text-danger'>{message}</p>
          <div className='col-md-6 my-4'>
            <h5>Product</h5>
            <input
              type='text'
              name='product_name'
              value={product_name}
              placeholder='Name'
              className='d-block my-4 w-100 p-2'
              onChange={handleChange}
            />

            <textarea
              name='product_description'
              id='product_description'
              cols='30'
              value={product_description}
              onChange={handleChange}
              rows='4'
              placeholder='product_description'
              className='d-block my-3 w-100 p-2'
            />
          </div>
          <div className='col-md-6 my-4'>
            <h5>Variant</h5>
            <div className='input-group mb-3'>
              <input
                type='number'
                name='size'
                value={size}
                placeholder='size'
                className='d-block my-4 w-100 p-2'
                onChange={handleChange}
              />
            </div>
            <div className='input-group mb-3'>
              <input
                type='text'
                name='color'
                value={color}
                placeholder='color'
                className='d-block my-4 w-100 p-2'
                onChange={handleChange}
              />
            </div>
            <div className='input-group mb-3'>
              <input
                type='number'
                name='quantity'
                value={quantity}
                placeholder='quantity'
                className='d-block my-4 w-100 p-2'
                onChange={handleChange}
              />
            </div>
            <div className='input-group mb-3'>
              <input
                type='number'
                name='price'
                value={price}
                placeholder='price'
                className='d-block my-4 w-100 p-2'
                onChange={handleChange}
              />
            </div>
            <div className='input-group mb-3'></div>
            <div className='input-group mb-3'></div>
            <div className='input-group mb-3'>
              <div className='custom-file border rounded'>
                <input
                  type='file'
                  className='custom-file-input'
                  onChange={handleImageChange}
                  multiple
                />
              </div>
            </div>

            <div className='row img-up'>
              <div className='d-flex'>
                {images.map((img, index) => (
                  <div key={index} className='file_img'>
                    <img
                      src={img.url ? img.url : URL.createObjectURL(img)}
                      alt=''
                      className='img-thumbnail rounded'
                      style={{
                        width: '10rem',
                        marginRight: '2rem'
                      }}
                    />
                    <span
                      onClick={() => deleteImage(index)}
                      className='text-danger'
                    >
                      X
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className='row'>
            <div className='col-sm-6'></div>{' '}
            <div className='col-sm-6'>
              <button
                type='submit'
                className='btn btn-info my-1 mb-3 px-4 ml-3'
              >
                Create
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Create;
