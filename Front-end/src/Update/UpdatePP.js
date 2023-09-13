import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import setShowUpdateForm from '../Process_master.js'

function UpdatedPP({ pp, onUpdate,onClose }) {
  const initialPP = pp || { name: '', ismandatory: '' };
  const [UpdatedPP, setUpdatedPP] = useState(initialPP);
  const navigate = useNavigate();

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setUpdatedPP((prevPP) => ({
      ...prevPP,
      [name]: value,
    }));
  };

  
  const handleSubmit = (event) => {
    event.preventDefault();
    onUpdate(UpdatedPP);
    onClose(); // Close the update form
  };


  return (
    <div className='update-process'>
    <form className="update-form" onSubmit={handleSubmit}>
      
      <h1 className='uheader'>Update Product Process</h1>
      <div className="form-group">
        <label className='uprocess' htmlFor="name">Product Process Name:</label>
        <input
          className='pnamein'
          type="text"
          id="name"
          name="name"
          value={UpdatedPP.name}
          onChange={handleInputChange}
        />
      </div>
      {/* <div className="form-group">
        <label className='udesc' htmlFor="ismandatory">Is mandatory:</label>
        <input
          className='pdescription'
          type='text'
          id="ismandatory"
          name="ismandatory"
          value={UpdatedPP.ismandatory}
          onChange={handleInputChange}
        />
      </div> */}
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

export default UpdatedPP;
