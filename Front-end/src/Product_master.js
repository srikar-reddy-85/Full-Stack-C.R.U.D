import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './index.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faTrash, faPen, faPlus, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import ViewProduct from './View/ViewProduct';
import UpdatedProduct from './Update/UpdateProduct';
import CreateProduct from './Create/CreateProduct';
import ConfirmationDialog from './ConfirmationDialouge';

function Product_master() {

  // const [products, setProduct] = useState([{ id: 1, name: 'Product 1', description: 'Description 1' },
  // { id: 2, name: 'Product 2', description: 'Description 2' },
  // { id: 3, name: 'Product 3', description: 'Description 3' },
  // { id: 4, name: 'Product 4', description: 'Description 4' },
  // { id: 5, name: 'Product 5', description: 'Description 5' },]);

  const [products, setProduct] = useState([]);

  //view---------------------------------------------------------------------------------------------                                             
  const [selectedProduct, setSelectedProduct] = useState(null);

  const handleViewClick = (product) => {
    setSelectedProduct(product);
  };
  //-------------------------------------------------------------------------------------------------
  //search-------------------------------------------------------------------------------------------
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const [filteredProducts, setFilteredProcesses] = useState([]);

  const handleSearchClick = () => {
    const filtered = products.filter(products =>
      (products.name && products.name.toLowerCase()).includes(searchQuery.toLowerCase())
    );
    setFilteredProcesses(filtered);
  };
  //-----------------------------------------------------------------------------------------------

  //fetch from server------------------------------------------------------------------------------------
  useEffect(() => {
    fetchproduct();
  }, [])

  const fetchproduct = async () => {
    try {
      const response = await axios.get('http://localhost:8080/product');
      setProduct(response.data);
      console.log(response.data);

    } catch (err) {

      if (err.response) {
        setProduct(err.response.data);
        console.log(err.response.data);
        // console.log(err.response.status);
      } else {
        console.log(err);
      }

    }
  }
  //------------------------------------------------------------------------------------------------------

  //update------------------------------------------------------------------------------------------
  const [updateProduct, setupdateProduct] = useState(null);
  const [showUpdateForm, setShowUpdateForm] = useState(false);
  const handleUpdateClick = (product) => {
    document.body.style.overflow = 'hidden';
    // setSelectedProcess(process);
    setupdateProduct(product);
    setShowUpdateForm(true);
    console.log('Update form should be displayed.');
  };

  const handleUpdateSubmit = (updatedProduct) => {
    const updatedProducts = products.map((product) =>
      product.product_id === updatedProduct.product_id ? updatedProduct : product
    );
    setProduct(updatedProducts);
    setShowUpdateForm(false);
  };
  //----------------------------------------------------------------------------------------------
  //delete-------------------------------------------------------------------------------------------
  // const handleDeleteClick = (product) => {
  //   const updatedproducts = products.filter(item => item.product_id !== product.product_id);
  //   setProduct(updatedproducts);
  //   axios.delete("http://localhost:8080/product/delete/" + product.product_id)
  //     .then((Response) => {
  //       console.log(Response)
  //     })
  // };
  const [showConfirmation, setShowConfirmation] = useState(false);

  const [productToDelete, setProductToDelete] = useState(null);

  const confirmDelete = () => {
    if (productToDelete) {
      const updatedProducts = products.filter(
        (item) => item.product_id !== productToDelete.product_id
      );
      setProduct(updatedProducts);
      axios
        .delete("http://localhost:8080/product/delete/" + productToDelete.product_id)
        .then((response) => {
          console.log(response);
        })
        .catch((error) => {
          console.error("Error deleting product: ", error);
        });
      setShowConfirmation(false);
    }
  };

  const cancelDelete = () => {
    setShowConfirmation(false);
  };

  const handleDeleteClick = (product) => {
    setProductToDelete(product);
    setShowConfirmation(true);
  };
  //-------------------------------------------------------------------------------------------------
  //create---------------------------------------------------------------------------------------------------
  const [showCreateForm, setShowCreateForm] = useState(false);
  const handleCreateClick = () => {
    setShowCreateForm(true);
  };
  const handleCreateSubmit = (newProduct) => {
    // Validate and handle submission
    // Add the new process to your processes array
    const newProductEntry = {
      product_id: newProduct.product_id,
      product_name: newProduct.product_name,
      description: newProduct.description,
    };
    setProduct([...products, newProductEntry]);
    setShowCreateForm(false);
  };
  //--------------------------------------------------------------------------------------------------------
  return (
    <>
      <div className="page-container">
        <h1 className="page-title">Product Master</h1>
        <button className="create-button" title='create' onClick={handleCreateClick}><FontAwesomeIcon icon={faPlus} size="xl" style={{ color: "#073283", }} /></button>
        {showCreateForm && (
          <><div className="create-form-background"></div><div className="create-form-container">
            <CreateProduct onClose={() => setShowCreateForm(false)} onCreate={handleCreateSubmit} />
          </div></>
        )}
        {/* {showCreateForm && <CreateProduct onClose={() => setShowCreateForm(false)} onCreate={handleCreateSubmit} />} */}
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
              <th>Product Name</th>
              <th>P_uom</th>
              <th>View</th>
              <th>Delete</th>
              <th>Update</th>
            </tr>
          </thead>
          <tbody>
            {products.map(products => (
              <tr key={products.product_id}>
                <td>{products.product_id}</td>
                <td>{products.product_name}</td>
                <td>{products.description}</td>
                <td><button className="view-button" onClick={() => {
                  console.log(products);
                  handleViewClick(products);
                }}><FontAwesomeIcon icon={faEye} size="lg" style={{ color: "#64e87a", }} /></button></td>
                <td><button className="delete-button"
                  onClick={() => handleDeleteClick(products)}><FontAwesomeIcon icon={faTrash} size="lg" style={{ color: "#bd0000", }} /></button>
                  <ConfirmationDialog
                    isOpen={showConfirmation}
                    onCancel={cancelDelete}
                    onConfirm={confirmDelete}
                  /></td>
                <td><button className="update-button" onClick={() => {
                  console.log(products);
                  handleUpdateClick(products);
                }}><FontAwesomeIcon icon={faPen} size="lg" style={{ color: "#4287ff", }} /></button></td>
              </tr>
            ))}
          </tbody>
        </table>
        {selectedProduct && <ViewProduct selectedProduct={selectedProduct} onBack={() => setSelectedProduct(null)} />}
        {showUpdateForm && updateProduct && (
          <><div className="update-form-background"></div><div className="update-form-container">
            <UpdatedProduct product={updateProduct}
              onUpdate={handleUpdateSubmit}
              onClose={() => setShowUpdateForm(false)} />
          </div></>
        )}
      </div></>
  );
}
export default Product_master
