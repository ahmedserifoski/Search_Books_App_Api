    
import React from 'react'
import "./BookComponent.css"



const BookComponent = ({book}) => {

    return (<div className="book">
            {book.volumeInfo.imageLinks ? <img className="image" src={book.volumeInfo.imageLinks.smallThumbnail} alt=""/> : ""}
            <h4 className="title">{book.volumeInfo.title}</h4>
            <h3 className="subtitle">{book.volumeInfo.subtitle}</h3>
            <small className="authors">by: <strong>{book.volumeInfo.authors}</strong></small>
            <p className="pageNumber">Page number:  <strong>{book.volumeInfo.pageCount}</strong></p>
            {/* <button onClick={getDesc}>Search more</button> */}
        </div>)
}

export default BookComponent
