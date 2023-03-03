import React from 'react'

import { Link, useLoaderData } from 'react-router-dom'

import BookComponent from "../components/BookComponent"

const Home = () => {

  const books = useLoaderData().items

  return (
    <div className="shouldIRender">
         <div className="books">
                {books.map(book => (
                      <BookComponent book={book} key={book.id} />
                ))}
            </div> 
    </div>
  )
}


export default Home;

//data loader
export const loadRandomBooks = async () => {
  const url = `https://www.googleapis.com/books/v1/volumes?q=the%20martian`;

  const res = await fetch(url);
  return res
};
