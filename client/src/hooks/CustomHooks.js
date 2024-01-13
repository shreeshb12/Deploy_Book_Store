import axios from 'axios'
import { BookContext } from '../providers/BookProvider';
import { useState,useContext,useEffect } from 'react'

export function useFormInput(IntitialValue){
    const [value,setValue]=useState(IntitialValue);

    // For checkboxes, use e.target.checked
    function handleChange(e){
        setValue(e.target.type === 'checkbox' ? e.target.checked : e.target.value);
    }

    return({
        checked: typeof value === 'boolean' ? value : undefined,
    value: typeof value === 'boolean' ? undefined : value,
    onChange: handleChange,
    })
}

export function useBooks(){
    return useContext(BookContext);
}

export function useProviderBooks(){
    const [books,setBooks]=useState([]);

    useEffect(() => {
        const url=`${window.location.origin}/api/book`;
        
        const fetchBooks=async ()=>{
            const res=(await (axios.get(url))).data;
            return res;
          }
        fetchBooks().then(data=>setBooks(data.Books));
        console.log(books);
    }, [])

    return{
        books
    }
}