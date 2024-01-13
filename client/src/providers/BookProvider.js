import {createContext} from 'react';
import { useProviderBooks } from '../hooks/CustomHooks';
import React from 'react'

const initialState ={
    books:[]
}
export const BookContext=createContext(initialState);

export const BookProvider = ({children}) => {
    const books=useProviderBooks();
  return <BookContext.Provider value={books}>{children}</BookContext.Provider>
}