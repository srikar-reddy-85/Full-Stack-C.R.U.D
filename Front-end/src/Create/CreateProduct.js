import React, { useState } from 'react';
import '../index.css'
import axios from 'axios';

function CreateProduct({ onClose, onCreate }) {
  const initialFormData = {
    product_id: '',
    product_name: '',
    description: '',
  };

  const [formData, setFormData] = useState(initialFormData);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onCreate(formData);
    // setFormData(initialFormData); // Reset form data after submission
    axios.post("http://localhost:8080/product/add", formData)
      .then((Response) => {
        console.log(Response)
      })
  };

  const handleCancel = (event) => {
    event.preventDefault();
    onClose();
  };

  return (
    <div className="create-form-container1">
      <h2 className='cheader'>Create New Product</h2>
      <form className="create-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label className='cpid' htmlFor="product_id">Product ID:</label>
          <input className='inpid'
            type="text"
            id="product_id"
            name="product_id"
            value={formData.product_id}
            onChange={handleInputChange}
          />
        </div>
        <div className="form-group">
          <label className='cpname' htmlFor="product_name">Product Name:</label>
          <input className='inpname'
            type="text"
            id="product_name"
            name="product_name"
            value={formData.product_name}
            onChange={handleInputChange}
          />
        </div>
        <div className="form-group">
          <label className='cdesc' htmlFor="description">Description:</label>
          <input className='indesc'
            type="text"
            id="description"
            name="description"
            value={formData.description}
            onChange={handleInputChange}
          />
        </div>
        <button className='create1-button' type="submit">
          Create
        </button>
        <button type='button' className="create-form-button" onClick={handleCancel}>
          Cancel
        </button>
      </form>
    </div>
  );
}

export default CreateProduct;
