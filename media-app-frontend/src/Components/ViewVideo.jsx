import React, { useEffect, useState } from 'react'
import VideoCard from './VideoCard'
import { getVideoAPI } from '../../services/allAPI'

function ViewVideo({addVideoResp}) {

  const[allVideos,setAllVideos]=useState([])

const handleGetVideo=async()=>{
  const result=await getVideoAPI()
  console.log(result);  
  setAllVideos(result.data)
}
console.log(allVideos);//array

    useEffect(()=>{
      handleGetVideo()
    },[addVideoResp])

  return (
    <div>
      <div className="row p-5">
        <div className="col">
          <VideoCard allVideos={allVideos} />
        </div>
      
      </div>
    </div>
  )
}

export default ViewVideo