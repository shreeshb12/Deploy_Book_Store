import React, { useEffect, useState } from 'react'
import Book from './sub components/book';
import '../styles/book.css'
import axios from "axios"
import { useBooks } from '../hooks/CustomHooks';

// const url=`${window.location.origin}/book`;
const Books = () => {
  // const [books,setBooks]=useState([]);
  // const fetchBooks=async ()=>{
  //   const res=(await (axios.get(url))).data;
  //   return res;
  // }
  // useEffect(()=>{
  //   fetchBooks().then(data=>setBooks(data.Books));
  // },[]);
  const bks=useBooks();
  const books=bks.books;
  console.log(bks);
  console.log(books);
  
  return (
    <>
      {books.length===0?<h1>Loading...</h1>:
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