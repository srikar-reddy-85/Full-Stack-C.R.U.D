import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import setShowUpdateForm from '../Process_master.js'
import axios from 'axios';

function UpdatedProduct({ product, onUpdate, onClose }) {
  const initialProduct = product || { product_name: '', description: '' };
  const [UpdatedProduct, setUpdatedProduct] = useState(initialProduct);
  const navigate = useNavigate();

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setUpdatedProduct((prevProduct) => ({
      ...prevProduct,
      [name]: value,
    }));
  };


  const handleSubmit = (event) => {
    event.preventDefault();
    onUpdate(UpdatedProduct);
    axios.put("http://localhost:8080/product/update/" + product.product_id, UpdatedProduct)
      .then((Response) => {
        console.log(Response)
      })
    onClose(); // Close the update form
  };


  return (
    <div className='update-product'>
      <form className="update-form" onSubmit={handleSubmit}>

        <h1 className='uheader'>Update Product</h1>
        <div className="form-group">
          <label className='uprocess' htmlFor="product_name">Product Name:</label>
          <input
            className='pnamein'
            type="text"
            id="product_name"
            name="product_name"
            value={UpdatedProduct.product_name}
            onChange={handleInputChange}
          />
        </div>
        <div className="form-group">
          <label className='udesc' htmlFor="description">Description:</label>
          <input
            className='pdescription'
            type='text'
            id="description"
            name="description"
            value={UpdatedProduct.description}
            onChange={handleInputChange}
          />
        </div>
        <button type='submit' className="uupdate-button">
          Update
        </button>
        <button type='button' onClick={onClose} className="ucancel-button">
          Cancel
        </button>
      </form>
    </div>
  );
}

export default UpdatedProduct;
