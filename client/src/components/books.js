import React, { useEffect, useState } from 'react'
import Book from './sub components/book';
import '../styles/book.css'
import axios from "axios"

const url="http://localhost:5000/api/book";
const Books = () => {
  const [books,setBooks]=useState([]);
  const fetchBooks=async ()=>{
    const res=(await (axios.get(url))).data;
    return res;
  }
  useEffect(()=>{
    fetchBooks().then(data=>setBooks(data.Books));
  },[]);
  
  return (
    <>
      {books.length===0?<h1>No Books in Store</h1>:
      <ul>
        {books.map((book,i)=>(
          <li key={book._id} id={book._id} index={i} className='book'>
            <Book book={book}/>
          </li>
      ))}
      </ul>
    }
    </>
  )
}

export default Books;