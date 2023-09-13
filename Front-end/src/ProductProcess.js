import React, { useState } from 'react';
import './index.css'; // Create a CSS file for styling
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faTrash, faPen, faPlus,faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import ViewPP from './View/ViewPP';
import UpdatedPP from './Update/UpdatePP';
import CreatePP from './Create/CreatePP';

function ProductProcess() {
  // State for product_process data
  const [productProcesses, setProductProcesses] = useState([
    { id: 1, product_id: 1, process_id: 1, name: 'Product Process 1', ismandatory: true },
    { id: 2, product_id: 2, process_id: 2, name: 'Product Process 2', ismandatory: false },
    { id: 3, product_id: 3, process_id: 3, name: 'Product Process 3', ismandatory: false },
    { id: 4, product_id: 4, process_id: 4, name: 'Product Process 4', ismandatory: false },
    { id: 5, product_id: 5, process_id: 5, name: 'Product Process 5', ismandatory: true },
  ]);
  const handleToggleMandatory = (productId) => {
  const updatedProductProcesses = productProcesses.map(process => {
    if (process.id === productId) {
      return {
        ...process,
        ismandatory: !process.ismandatory,
      };
    }
    return process;
  });

  setProductProcesses(updatedProductProcesses);
};

const [searchQuery, setSearchQuery] = useState('');
  
  const handleSearchChange = (event) => {
  setSearchQuery(event.target.value);
  };

  const [filteredproductProcesses, setFilteredProcesses] = useState([]);

  const handleSearchClick = () => {
    const filtered = productProcesses.filter(productProcesses =>
      productProcesses.name && productProcesses.name.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setFilteredProcesses(filtered);
  };

  //view-----------------------------------------------------------------------------------------------
  const [selectedPP, setSelectedPP] = useState(null);

  const handleViewClick = (pp) => {
    setSelectedPP(pp);
  };
  //-----------------------------------------------------------------------------------------------------
  //delete-----------------------------------------------------------------------------------------------
  const handleDeleteClick = (pp) => {
  const updatedProductProcesses = productProcesses.filter(item => item.process_id !== pp.process_id);
  setProductProcesses(updatedProductProcesses);
};
  //-----------------------------------------------------------------------------------------------------
  //update-----------------------------------------------------------------------------------------------
  const [updatePP, setupdatePP] = useState(null);
   const [showUpdateForm, setShowUpdateForm] = useState(false); 
    const handleUpdateClick = (pp) => {
      document.body.style.overflow = 'hidden';
    // setSelectedProcess(process);
    setupdatePP(pp);
    setShowUpdateForm(true);
    console.log('Update form should be displayed.');
  };

  const handleUpdateSubmit = (updatedpp) => {
    const updatedPP = productProcesses.map((pp) =>
      pp.process_id === updatedpp.process_id ? updatedpp : pp
    );
    setProductProcesses(updatedPP);
    setShowUpdateForm(false);
  };

  //-----------------------------------------------------------------------------------------------------
  //create-----------------------------------------------------------------------------------------------
  const [showCreateForm, setShowCreateForm] = useState(false);
 const handleCreateClick = () => {
    setShowCreateForm(true);
  };
 const handleCreateSubmit = (newPP) => {
    // Validate and handle submission
    // Add the new process to your processes array
    const newPPEntry = {
      product_id: newPP.product_id,
      process_id: newPP.process_id,
      name: newPP.name,
      ismandatory: newPP.ismandatory,
    };
    setProductProcesses([...productProcesses, newPPEntry]);
     setShowCreateForm(false);
  };
  //-----------------------------------------------------------------------------------------------------

  return (
    <div className="page-container">
      <h1 className="page-title">Product Process Master</h1>
      <button className="create-button" title="Create" onClick={handleCreateClick}>
        <FontAwesomeIcon icon={faPlus} size="xl" style={{ color: "#073283" }} />
      </button>
      {showCreateForm && (
           <><div className="create-form-backgroundpp"></div><div className="create-form-containerpp">
              <CreatePP onClose={() => setShowCreateForm(false)} onCreate={handleCreateSubmit} />
            </div></>
           )}
      {/* <div className='search-container'>
           <input className='search'
            type="text"
            placeholder="Search..."
            value={searchQuery}
            onChange={handleSearchChange}
            />
            <button className="search-button" onClick={handleSearchClick}>
               <FontAwesomeIcon icon={faMagnifyingGlass} size="lg" />
             </button>
            </div> */}
      <table className="process-table">
        <thead>
          <tr>
            <th>Product ID</th>
            <th>Process ID</th>
            <th>Name</th>
            <th>Is Mandatory</th>
            <th>View</th>
            <th>Delete</th>
            <th>Update</th>
          </tr>
        </thead>
        <tbody>
          {productProcesses.map(productProcess => (
            <tr key={productProcess.id}>
              <td>{productProcess.product_id}</td>
              <td>{productProcess.process_id}</td>
              <td>{productProcess.name}</td>
              <td> <button
                   className={`mandatory-button ${productProcess.ismandatory ? 'mandatory-yes' : 'mandatory-no'}`}
                   onClick={() => handleToggleMandatory(productProcess.id)}
                   >
                    {productProcess.ismandatory ? 'Yes' : 'No'}
                    </button>
              </td>
              <td>
                <button className="view-button" onClick={() => {
                                                                console.log(productProcess); 
                                                                handleViewClick(productProcess);
                                                                }}>
                  <FontAwesomeIcon icon={faEye} size="lg" style={{ color: "#64e87a" }} />
                </button>
              </td>
              <td>
                <button className="delete-button" onClick={() => handleDeleteClick(productProcess)}>
                  <FontAwesomeIcon icon={faTrash} size="lg" style={{ color: "#bd0000" }} />
                </button>
              </td>
              <td>
                <button className="update-button" onClick={() => {
                                                                console.log(productProcess); 
                                                                handleUpdateClick(productProcess);
                                                                }}>
                  <FontAwesomeIcon icon={faPen} size="lg" style={{ color: "#4287ff" }} />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {selectedPP && <ViewPP selectedPP={selectedPP} onBack={() => setSelectedPP(null)} />}
      {showUpdateForm && updatePP && (
            <><div className="update-form-background"></div><div className="update-form-container">
              <UpdatedPP pp={updatePP}
                onUpdate={handleUpdateSubmit}
                onClose={() => setShowUpdateForm(false)} />
            </div></>
           )}
    </div>
  );
}

export default ProductProcess;
