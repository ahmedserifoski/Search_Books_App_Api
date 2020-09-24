

import React, {useState, useEffect} from 'react'
import BookComponent from "./BookComponent"
import Spinner from "./Spinner"
import "./SearchBooks.css"




const SearchBooks = () => {

    const [query, setQuery] = useState("")
    const [books, setBooks] = useState([])
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        searchRandomBooks()
    }, [])

    const searchRandomBooks = async () => {
    
        const url = `https://v1.nocodeapi.com/ahmedserifoski/gr/vwFWjPzlSWrRzaRC/search?q=harry%20potter`

        const res = await fetch(url)
        const data = await res.json()
        setBooks(data.results)
        setIsLoading(false)
        // console.log(data.items)
    }

    const searchBooks = async (event) => {
        event.preventDefault()
        const booksDiv = document.querySelector(".book")
        booksDiv.style.display = "none"
        setIsLoading(true)
        const url = `https://v1.nocodeapi.com/ahmedserifoski/gr/vwFWjPzlSWrRzaRC/search?q=${query}`

        const res = await fetch(url)
        const data = await res.json()
        setBooks(data.results)
        setIsLoading(false)
        // console.log(data.results)
        booksDiv.style.display = "grid"
    }

    

    return (
        <div>
            
            <form className="form" onSubmit={searchBooks}>
                <p className="pageTitle">good<strong>read</strong>clone</p>
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
            <div className="shouldIRender">
                {isLoading ? <Spinner /> : <div className="books">
                    {books.map(book => (
                        <BookComponent book={book} isLoading={isLoading} key={book.id} />
                    ))}
                    
                </div> }
            </div>
            
        </div>
    )
}

export default SearchBooks

