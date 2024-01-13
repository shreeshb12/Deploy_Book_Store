import axios from 'axios';
import React, { useEffect } from 'react'
import { useNavigate,useParams } from 'react-router-dom';

const DeleteBook = () => {
    //get the id of the book that needs to be deleted
    const { id } = useParams();
    const navigate=useNavigate();

    //delete the book and route to all books
    useEffect(()=>{
        const deleteBook=async ()=>{
            const resp=await axios.delete(`${window.location.origin}/api/book/${id}`)
            console.log(resp.data);
            alert(resp.data.message);
            navigate('../../');
        }
        deleteBook();
    },[id])
  return (
    <div>DeleteBook</div>
  )
}

export default DeleteBook