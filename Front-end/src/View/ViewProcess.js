import React from 'react';
import '../index.css';
import { useNavigate } from 'react-router-dom';


function ViewProcess({ selectedProcess,onBack }) {

  const navigate = useNavigate();

  return (
    <div className="view-process">
      <div className="card">
        <h2 className='pdata'>Process data</h2>
        <div className="card-content">
          <p className='pid'><strong>ID:</strong> {selectedProcess.process_id}</p>
          <p className='pname'><strong>Name:</strong> {selectedProcess.process_name}</p>
          <p className='pdesc'><strong>Description:</strong> {selectedProcess.description}</p>
        </div>
        <button className="back-button" onClick={onBack}>
          Back
        </button>
      </div>
    </div>
  );
}

export default ViewProcess;
