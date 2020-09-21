
import React from 'react'
import "./BookComponent.css"

const BookComponent = ({book}) => {
    return (
        <div className="book">
            {book.volumeInfo.imageLinks ? <img className="image" src={book.volumeInfo.imageLinks.thumbnail} alt=""/> : ""}
            <h4 className="title">{book.volumeInfo.title}</h4>
            <small className="authors">by: <strong>{book.volumeInfo.authors.map(author => author).join(",")}</strong></small>
            <p className="pageNumber">Number of pages:  <strong>{book.volumeInfo.pageCount}</strong></p>
                {/* <p className="description">{book.searchInfo.textSnippet}</p>   */}
            {/* <hr className="hr"></hr> */}
        </div>
    )
}

export default BookComponent
