import React, { useState } from 'react'
import AddVideo from '../Components/AddVideo'
import { Link } from 'react-router-dom'
import { FaHistory } from "react-icons/fa";
import ViewVideo from '../Components/ViewVideo';
import AddCategory from '../Components/AddCategory';
function Home() {

  const [addVideoResp,setAddVideoRes]=useState({})


  return (
    <div>
      <div className="row">
        <div className="col-6">
          <h1>Upload Video</h1><AddVideo setAddVideoRes={setAddVideoRes} />
        </div>
        <div className="col-6">
          <Link to={'/watch-history'} style={{ float: 'right', textDecoration: 'none' }} className='p-4 text-dark'>
          <FaHistory className='fs-3' />Watch History
          </Link>
        </div>
      </div>


      <div className="row">
        <div className="col-9">
          <h1 className='text-center'>All Videos</h1>
          <ViewVideo addVideoResp={addVideoResp}/>
        </div>
        <div className="col-3">
          <h1 className='text-center'>Add Category</h1>
          <AddCategory/>
        </div>
      </div>
    </div>
  )
}

export default Home