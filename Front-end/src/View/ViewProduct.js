import React from 'react';
import '../index.css';
import { useNavigate } from 'react-router-dom';


function ViewProduct({ selectedProduct, onBack }) {

  const navigate = useNavigate();

  return (
    <div className="view-process">
      <div className="card">
        <h2 className='pdata'>Product data</h2>
        <div className="card-content">
          <p className='pid'><strong>ID:</strong> {selectedProduct.product_id}</p>
          <p className='pname'><strong>Name:</strong> {selectedProduct.product_name}</p>
          <p className='pdesc'><strong>Description:</strong> {selectedProduct.description}</p>
        </div>
        <button className="back-button" onClick={onBack}>
          Back
        </button>
      </div>
    </div>
  );
}

export default ViewProduct;
