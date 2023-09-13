import React from 'react';
import '../index.css';
import { useNavigate } from 'react-router-dom';


function ViewPP({ selectedPP,onBack }) {

  const navigate = useNavigate();

  return (
    <div className="view-process">
      <div className="card">
        <h2 className='pdata'>Product Process data</h2>
        <div className="card-content">
          <p className='pid'><strong>Product ID:</strong> {selectedPP.product_id}</p>
          <p className='pid'><strong>Process ID:</strong> {selectedPP.process_id}</p>
          <p className='pname'><strong>Name:</strong> {selectedPP.name}</p>
          <p className='pdesc'><strong>Is mandatory:</strong> {selectedPP.ismandatory?'YES':'NO'}</p>
        </div>
        <button className="back-button" onClick={onBack}>
          Back
        </button>
      </div>
    </div>
  );
}

export default ViewPP;
