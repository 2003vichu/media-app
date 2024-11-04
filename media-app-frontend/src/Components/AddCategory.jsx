import React from 'react'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { addCategoryAPI } from '../../services/allAPI';
import Swal from 'sweetalert2'
function AddCategory() {

  const [categoryName, setCategoryName] = useState("")

  const handleAddCategory = async () => {
    console.log(categoryName);
    if (categoryName) {
      try {
        const body = {
          categoryName,
          allVideos: []
        }
        const result = await addCategoryAPI(body)
        console.log(result);
        if(result.status>=200 && result.status<300){
          Swal.fire({
            title: 'Success!',
            text: 'category added successfully',
            icon: 'success',
            confirmButtonText: 'Back'
          })
          setCategoryName("")
          handleClose()
        }
        else{
          Swal.fire({
            title: 'Error!',
            text: result.message,
            icon: 'error',
            confirmButtonText: 'Back'
          })
        }

      }
      catch (error) {
        console.log(error);

      }

    } else {
      Swal.fire({
        title: 'Error!',
        text: 'please fill the form',
        icon: 'error',
        confirmButtonText: 'Back'
      })
    }
  }

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <div>
      <div className='text-center'>
        <button className='btn btn-dark m-5' onClick={handleShow}>Add Category</button>
      </div>
      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Add category</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form>
            <input onChange={e => setCategoryName(e.target.value)} type="text" placeholder='Add category' className='form-control mb-3' />

          </form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button onClick={handleAddCategory} variant="primary">Upload</Button>
        </Modal.Footer>
      </Modal>

    </div>
  )
}

export default AddCategory