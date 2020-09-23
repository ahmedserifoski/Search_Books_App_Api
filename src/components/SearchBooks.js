

import React, {useState, useEffect} from 'react'
import BookComponent from "./BookComponent"
import "./SearchBooks.css"




const SearchBooks = () => {

    const [query, setQuery] = useState("")
    const [books, setBooks] = useState([])

    useEffect(() => {
        searchRandomBooks()
    }, [])

    const searchRandomBooks = async () => {
        const key = "AIzaSyCBqv8O6IeVjogiljjDy7r2Kr3XdTxun0Q"
        const url = `https://www.googleapis.com/books/v1/volumes?q=gameofthrones&key=${key}`

        const res = await fetch(url)
        const data = await res.json()
        setBooks(data.items)
        // console.log(data.items)
    }

    const searchBooks = async (event) => {
        event.preventDefault()

        const key = "AIzaSyCBqv8O6IeVjogiljjDy7r2Kr3XdTxun0Q"
        const url = `https://www.googleapis.com/books/v1/volumes?q=${query}&key=${key}`

        const res = await fetch(url)
        const data = await res.json()
        setBooks(data.items)
        // console.log(data.items)
    }

    

    return (
        <div>
            <form className="form" onSubmit={searchBooks}>
                <input 
                className="input"
                type="text"
                name="input"
                placeholder="Search Books"
                value={query}
                onChange={(event => setQuery(event.target.value))}
            />
            <button className="button" type="submit">Search</button>
            </form>
            <div className="books">
                {books.map(book => (
                    <BookComponent book={book} key={book.id} />
                ))}
            </div>
            
        </div>
    )
}

export default SearchBooks

