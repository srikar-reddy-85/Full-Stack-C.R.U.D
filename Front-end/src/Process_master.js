import React, { useEffect, useState } from 'react';
import './index.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faTrash, faPen, faPlus, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import ViewProcess from './View/ViewProcess';
import api from './api/process';
import axios from 'axios';
import UpdatedProcess from './Update/UpdateProcess';
import CreateProcess from './Create/CreateProcess';
import ConfirmationDialog from './ConfirmationDialouge';


function Process_master() {
  // const [processes, setProcesses] = useState([{ process_id: 1, process_name: 'Process 1', description: 'Description 1' },
  // { process_id: 2, process_name: 'Process 2', description: 'Description 2' },
  // { process_id: 3, process_name: 'Process 3', description: 'Description 3' },
  // { process_id: 4, process_name: 'Process 4', description: 'Description 4' },
  // { process_id: 5, process_name: 'Process 5', description: 'Description 5' },]);

  const [processes, setProcesses] = useState([]);
  //search option----------------------------------------------------------------------------------
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const [filteredProcesses, setFilteredProcesses] = useState([]);

  const handleSearchClick = () => {
    const filtered = processes.filter(process =>
      process.name && process.name.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setFilteredProcesses(filtered);
  };
  //-----------------------------------------------------------------------------------------------------

  //view option--------------------------------------------------------------------------------
  const [selectedProcess, setSelectedProcess] = useState(null);

  const handleViewClick = (process) => {
    setSelectedProcess(process);
  };
  //------------------------------------------------

  //fething from server-----------------------------------------------------------------

  useEffect(() => {
    fetchprocess();
  }, [])

  const fetchprocess = async () => {
    try {
      const response = await axios.get('http://localhost:8080/process');
      setProcesses(response.data);
      console.log(response.data);

    } catch (err) {

      if (err.response) {
        setProcesses(err.response.data);
        console.log(err.response.data);
        // console.log(err.response.status);
      } else {
        console.log(err);
      }

    }
  }

  //------------------------------------------------------------------------

  //update process----------------------------------------------------------------------------
  const [updateProcess, setupdateProcess] = useState(null);
  const [showUpdateForm, setShowUpdateForm] = useState(false);
  const handleUpdateClick = (process) => {
    document.body.style.overflow = 'hidden';
    // setSelectedProcess(process);
    setupdateProcess(process);
    setShowUpdateForm(true);
    console.log('Update form should be displayed.');
  };

  const handleUpdateSubmit = (updatedProcess) => {
    const updatedProcesses = processes.map((process) =>
      process.process_id === updatedProcess.process_id ? updatedProcess : process
    );

    setProcesses(updatedProcesses);
    setShowUpdateForm(false);
  };
  //----------------------------------------------------------------------------------
  //delete--------------------------------------------------------------------------------
  // const [showConfirmation, setShowConfirmation] = useState(false);
  // const handleDeleteClick = (process) => {
  //   const updatedProcesses = processes.filter(item => item.process_id !== process.process_id);
  //   setProcesses(updatedProcesses);
  //   axios.delete("http://localhost:8080/process/delete/" + process.process_id)
  //     .then((Response) => {
  //       console.log(Response)
  //     })
  // };
  //method-1---------------------------------------------------------------------------------------------------
  // const handleDeleteClick = (process) => {
  //   const confirmDelete = window.confirm("Do you want to delete this process?");

  //   if (confirmDelete) {
  //     const updatedProcesses = processes.filter(item => item.process_id !== process.process_id);
  //     setProcesses(updatedProcesses);
  //     axios.delete("http://localhost:8080/process/delete/" + process.process_id)
  //       .then((response) => {
  //         console.log(response);
  //       })
  //       .catch((error) => {
  //         console.error("Error deleting process: ", error);
  //       });
  //   }
  // };
  //---------------------------------------------------------------------------------------------------------------
  const [showConfirmation, setShowConfirmation] = useState(false);

  const [processToDelete, setProcessToDelete] = useState(null);

  const confirmDelete = () => {
    if (processToDelete) {
      const updatedProcesses = processes.filter(
        (item) => item.process_id !== processToDelete.process_id
      );
      setProcesses(updatedProcesses);
      axios
        .delete("http://localhost:8080/process/delete/" + processToDelete.process_id)
        .then((response) => {
          console.log(response);
        })
        .catch((error) => {
          console.error("Error deleting process: ", error);
        });
      setShowConfirmation(false);
    }
  };

  const cancelDelete = () => {
    setShowConfirmation(false);
  };

  const handleDeleteClick = (process) => {
    setProcessToDelete(process);
    setShowConfirmation(true);
  };
  //-------------------------------------------------------------------------------------------------------

  //create------------------------------------------------------------------------------------
  const [showCreateForm, setShowCreateForm] = useState(false);
  const handleCreateClick = () => {
    setShowCreateForm(true);
  };
  const handleCreateSubmit = (newProcess) => {
    // Validate and handle submission
    // Add the new process to your processes array
    const newProcessEntry = {
      process_id: newProcess.process_id,
      process_name: newProcess.process_name,
      description: newProcess.description,
    };
    setProcesses([...processes, newProcessEntry]);
    setShowCreateForm(false);
  };
  //-----------------------------------------------------------------------------------------

  return (
    <>
      <div className="page-container">
        <h1 className="page-title">Process Master</h1>
        <button className="create-button" title='Create' onClick={handleCreateClick}><FontAwesomeIcon icon={faPlus} size="xl" style={{ color: "#073283", }} /></button>
        {showCreateForm && (
          <><div className="create-form-background"></div><div className="create-form-container">
            <CreateProcess onClose={() => setShowCreateForm(false)} onCreate={handleCreateSubmit} />
          </div></>
        )}


        <div className='search-container'>
          {/* <input className='search'
            type="text"
            placeholder="Search..."
            value={searchQuery}
            onChange={handleSearchChange}
          />
          <button className="search-button" onClick={handleSearchClick}>
            <FontAwesomeIcon icon={faMagnifyingGlass} size="lg" />
          </button> */}
        </div>
        <table className="process-table">
          <thead>
            <tr>
              <th>Process ID</th>
              <th>Process Name</th>
              <th>Description</th>
              <th>View</th>
              <th>Delete</th>
              <th>Update</th>
            </tr>
          </thead>
          <tbody>
            {processes.map(process => {
              return (
                <tr key={process.process_id}>
                  <td>{process.process_id}</td>
                  <td>{process.process_name}</td>
                  <td>{process.description}</td>
                  <td><button className="view-button" onClick={() => {
                    console.log(process);
                    handleViewClick(process);
                  }}><FontAwesomeIcon icon={faEye} size="lg" style={{ color: "#64e87a", }} /></button></td>
                  <td><button className="delete-button"
                    onClick={() => handleDeleteClick(process)}><FontAwesomeIcon icon={faTrash} size="lg" style={{ color: "#bd0000", }} /></button>
                    <ConfirmationDialog
                      isOpen={showConfirmation}
                      onCancel={cancelDelete}
                      onConfirm={confirmDelete}
                    /></td>
                  <td><button className="update-button" onClick={() => {
                    console.log(process);
                    handleUpdateClick(process);
                  }} ><FontAwesomeIcon icon={faPen} size="lg" style={{ color: "#4287ff", }} /></button></td>
                  {/* <td><button className="update-button" ><FontAwesomeIcon icon={faPen} size="lg" style={{color: "#4287ff",}} /></button></td> */}
                </tr>
              );

            })}
          </tbody>
        </table>
        {selectedProcess && <ViewProcess selectedProcess={selectedProcess} onBack={() => setSelectedProcess(null)} />}
        {showUpdateForm && updateProcess && (
          <><div className="update-form-background"></div><div className="update-form-container">
            <UpdatedProcess process={updateProcess}
              onUpdate={handleUpdateSubmit}
              onClose={() => setShowUpdateForm(false)} />
          </div></>
        )}

      </div>
    </>
  );
}

export default Process_master
