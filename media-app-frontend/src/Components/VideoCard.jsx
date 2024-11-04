import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { MdDeleteForever } from "react-icons/md";
import { deleteVideoAPI } from '../../services/allAPI';
import Swal from 'sweetalert2'

function VideoCard({allVideos}) {
  console.log(allVideos);

  const handleDelete=async(id)=>{
    try{
      const result = await deleteVideoAPI(id)
      console.log(result);
      Swal.fire({
        title: 'Success!',
        text: 'video deleted succesfully',
        icon: 'success',
        confirmButtonText: 'Back'
      })
      setTimeout(()=>{
        window.location.reload()
      },2000)
    }
    catch(error){
console.log(error);

    }
    
    
  }
  
  return (
    <div>
      <div className="row">
        {
          allVideos.map(video=>(
            <div className="col mb-3">
              <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={video.imgUrl} />
      <Card.Body>
        
        <Card.Text className='d-flex justify-content-between'>
         {video.caption}

         <MdDeleteForever onClick={()=>handleDelete(video.id)} className='text-danger fs-2' />
        </Card.Text> 
      </Card.Body>
    </Card>
            </div>
          ))
        }
      </div>
      </div>
  )
}

export default VideoCard