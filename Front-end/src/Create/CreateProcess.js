import React, { useState } from 'react';
import '../index.css'
import axios from 'axios';



function CreateProcess({ onClose, onCreate }) {
  const initialFormData = {
    process_id: '',
    process_name: '',
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
    setFormData(initialFormData); // Reset form data after submission
    axios.post("http://localhost:8080/process/add", formData)
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
      <h2 className='cheader'>Create New Process</h2>
      <form className="create-form" onSubmit={handleSubmit}>
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
          <label className='cpname' htmlFor="process_name">Process Name:</label>
          <input className='inpname'
            type="text"
            id="process_name"
            name="process_name"
            value={formData.process_name}
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

export default CreateProcess;
