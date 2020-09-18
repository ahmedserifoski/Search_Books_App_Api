// import React, {useState} from 'react'
// import BookComponent from "./BookComponent"
// const SearchBooks = () => {

//     const [query, setQuery] = useState("")
//     const [books, setBooks] = useState([])

//     const searchBooks = async (event) => {
//         event.preventDefault()

        

//         const key = "AIzaSyCBqv8O6IeVjogiljjDy7r2Kr3XdTxun0Q"
//         const url = `https://www.googleapis.com/books/v1/volumes?q=${query}&key=${key}`
        
//         try{
//             const response = await fetch(url)
//             const data = await response.json()
//             console.log(data.items)
//             setBooks(data.items)
            
//         }catch(err){
//             console.error(err)
//         }
        
//     }

//     return (
//         <div>
//             <form className="form" onSubmit={searchBooks}>
//                 <label className="label" htmlFor="query">Book Title: </label>
//                 <input 
//                     className="input" 
//                     type="text" 
//                     name="query" 
//                     value={query}
//                     onChange={(event) => setQuery(event.target.value)}
//                     placeholder="Search Books"
//                 />
//                 <button className="button" type="submit">Search</button>
//             </form>
//             <div>
//                 {books.map(book => (
//                     <BookComponent book={book} key={book.id}/>
//                 ))}
//             </div>
//         </div>
        
//     )
// }

// export default SearchBooks


import React, {useState} from 'react'
import BookComponent from "./BookComponent"
import "./SearchBooks.css"

// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faSearch } from '@fortawesome/free-solid-svg-icons'

const SearchBooks = () => {

    
    
    const [query, setQuery] = useState("")
    const [books, setBooks] = useState([])

    const searchBooks = async (event) => {
        event.preventDefault()

        document.querySelector(".question").setAttribute("style", "display: none")

        const key = "AIzaSyCBqv8O6IeVjogiljjDy7r2Kr3XdTxun0Q"
        const url = `https://www.googleapis.com/books/v1/volumes?q=${query}&key=${key}`

        const res = await fetch(url)
        const data = await res.json()
        setBooks(data.items)
        console.log(data.items)
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
            <h2 className="question">What would you like to read</h2>
            <div className="books">
                {books.map(book => (
                    <BookComponent book={book} key={book.id} />
                ))}
            </div>
            
        </div>
    )
}

export default SearchBooks

