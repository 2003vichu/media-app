import { commonAPI } from "./commonAPI"
import { serverUrl } from "./serverUrl";
//1 add video details into the server
export const addVideoAPI=async(reqBody)=>{
    return await commonAPI('post',`${serverUrl}/allvideos`,reqBody)
}

//2 get all Videos from the server
export const getVideoAPI=async()=>{
    return await commonAPI('get',`${serverUrl}/allvideos`,"")
}
//3 delete a particuar video from the server
 export const deleteVideoAPI=async(id)=>{
    return await commonAPI('delete',`${serverUrl}/allvideos/${id}`,"")
 }
//4 add watch-history video details to the server
//5 get watch-history video details from the server
//6 delete watch-history deatils
//7 add category into the server
export const addCategoryAPI=async(reqBody)=>{
 return await commonAPI('post',`${serverUrl}/category`,reqBody)
}
//8 get all categories from the server
//9 delete a category from the server
//10 get a particular video details from the server
//11 update a particular video details from the server