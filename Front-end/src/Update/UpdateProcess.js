import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import setShowUpdateForm from '../Process_master.js'
import axios from 'axios';

function UpdatedProcess({ process, onUpdate, onClose }) {
  const initialProcess = process || { process_name: '', description: '' };
  const [UpdatedProcess, setUpdatedProcess] = useState(initialProcess);
  const navigate = useNavigate();

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setUpdatedProcess((prevProcess) => ({
      ...prevProcess,
      [name]: value,
    }));
  };


  const handleSubmit = (event) => {
    event.preventDefault();
    onUpdate(UpdatedProcess);
    axios.put("http://localhost:8080/process/update/" + process.process_id, UpdatedProcess)
      .then((Response) => {
        console.log(Response)
      })
    onClose(); // Close the update form
  };


  return (
    <div className='update-process'>
      <form className="update-form" onSubmit={handleSubmit}>

        <h1 className='uheader'>Update Process</h1>
        <div className="form-group">
          <label className='uprocess' htmlFor="process_name">Process Name:</label>
          <input
            className='pnamein'
            type="text"
            id="process_name"
            name="process_name"
            value={UpdatedProcess.process_name}
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
            value={UpdatedProcess.description}
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

export default UpdatedProcess;
