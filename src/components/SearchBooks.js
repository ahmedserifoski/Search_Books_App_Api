

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
    
        const url = `https://v1.nocodeapi.com/ahmedserifoski/gr/vwFWjPzlSWrRzaRC/search?q=harry%20potter`

        const res = await fetch(url)
        const data = await res.json()
        setBooks(data.results)
        // console.log(data.items)
    }

    const searchBooks = async (event) => {
        event.preventDefault()

        
        const url = `https://v1.nocodeapi.com/ahmedserifoski/gr/vwFWjPzlSWrRzaRC/search?q=${query}`

        
            const res = await fetch(url)
            const data = await res.json()
            setBooks(data.results)
            // console.log(data.results)
    
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

