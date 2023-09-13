import React, { useState } from 'react';
import '../index.css'



function CreatePP({ onClose,onCreate }) {
 const initialFormData = {
    product_id:'',
    process_id: '',
    name: '',
    ismandatory: '',
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
    setFormData(initialFormData); // Reset form data after submission
  };

  const handleCancel = (event) => {
    event.preventDefault();
    onClose();
  };

  return (
    <div className="create-form-container1">
        <h2 className='cheader'>Create New Product Process</h2>
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
          <label className='cpid' htmlFor="process_id">Process ID:</label>
          <input className='inpid'
            type="text"
            id="process_id"
            name="process_id"
            value={formData.process_id}
            onChange={handleInputChange}
          />
        </div>
        <div className="form-group">
          <label className='cpname' htmlFor="name">Process Name:</label>
          <input className='inpname'
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
          />
        </div>
        <div className="form-group">
          <label className='cdesc' htmlFor="ismandatory">Is mandatory:</label>
          <input className="inisman"
            type="text"
            id="ismandatory"
            name="ismandatory"
            value={formData.ismandatory}
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

export default CreatePP;
