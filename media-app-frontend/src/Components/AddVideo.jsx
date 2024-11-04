import React from 'react'
import { BiSolidCloudUpload } from "react-icons/bi";
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { addVideoAPI } from '../../services/allAPI';
import Swal from 'sweetalert2'
function AddVideo({setAddVideoRes}) {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);


  const [VideoDetails,setVideoDetails]=useState({
    caption:"",
    imgUrl:"",
    link:""
  })
console.log(VideoDetails);

const getEmbedLink=(e)=>{
//console.log(e);

const {value}=e.target
console.log(value);

let ycode=value.slice(-31)
console.log(ycode);
let ylink =`https://www.youtube.com/embed/${ycode}`
console.log(ylink);

setVideoDetails({...VideoDetails,link:ylink})

}

const handleAdd=async()=>{
  const {caption,imgUrl,link}=VideoDetails
  console.log(VideoDetails);
  
  if(!caption||!imgUrl||!link){
    
    Swal.fire({
      title: 'Error!',
      text: 'Please fill the form',
      icon: 'error',
      confirmButtonText: 'Back'
    })
  }
  else{
    //API fetching
    const result=await addVideoAPI(VideoDetails)
    console.log(result);
    if(result.status>=200 && result.status<300){
      Swal.fire({
        title: 'Success!',
        text: 'video added successfully',
        icon: 'success',
        confirmButtonText: 'Back'
      })
      handleClose()
      setAddVideoRes(result.data)
      setVideoDetails({
        caption:"",
        imgUrl:"",
        link:""
      })
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
}

  return (
    <div>
      <BiSolidCloudUpload className='fs-1 mt-2 mx-3'  onClick={handleShow}/>
      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Upload Video</Modal.Title>
        </Modal.Header>
        <Modal.Body>
         <form>
          <input onChange={e=>setVideoDetails({...VideoDetails,caption:e.target.value})} type="text" placeholder='Video caption' className='form-control mb-3'/>
          <input onChange={e=>setVideoDetails({...VideoDetails,imgUrl:e.target.value})} type="text" placeholder='Video Image' className='form-control mb-3'/>
          <input onChange={getEmbedLink} type="text" placeholder='Video Url' className='form-control mb-3'/>

         </form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button  onClick={handleAdd} variant="primary">Upload</Button>
        </Modal.Footer>
      </Modal>
      </div>
  )
}

export default AddVideo