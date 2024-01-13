import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import Form from './Form';
import { useBooks } from '../../hooks/CustomHooks';

const BookDetail = () => {
  const { id } = useParams();
  const [bookDetails, setBookDetails] = useState('');
  //const [name,author,description,price,available,image]=JSON.parse(bookDetails);

  //fetch the book details by id and set the value
  // useEffect(() => {
  //   const fetchHandler = async () => {
  //     try {
  //       const resp = await axios.get(`${window.location.origin}/api/book/${id}`);
  //       setBookDetails(resp.data);
  //       console.log(resp.data);
  //     } catch (error) {
  //       console.error('Error fetching book details:', error);
  //     }
  //   };

  //   fetchHandler();
  // }, [id]);

  // use context API to fetch book details
  const bks=useBooks();
  useEffect(()=>{
    const book = bks.books.find(book => book._id === id);

    if (book) {
      setBookDetails(book);
    } else {
      // Handle the case when the book with the specified id is not found
      console.error(`Book with id ${id} not found.`);
    }
    if(book){
      setBookDetails(book);
      console.log(book);
    }
  },[bks.books,id]);

  return (
    <>
    {bookDetails?<Form bookDetails={bookDetails} method='update'/>:<div>Not Found</div>}
    </>
  );
};

export default BookDetail;
