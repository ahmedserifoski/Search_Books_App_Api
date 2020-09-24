    
import React from 'react'
import "./BookComponent.css"



const BookComponent = ({book}) => {
    return (<div className="book">
            {book.image_url ? <img className="image" src={book.image_url} alt=""/> : ""}
            <h4 className="title">{book.title}</h4>
            <small className="authors">by: <strong>{book.author.name}</strong></small>
            <p className="pageNumber">Release date:  <strong>{book.original_publication_year}</strong></p>
                {/* <p className="description">{book.searchInfo.textSnippet}</p>   */}
            {/* <hr className="hr"></hr> */}
        </div>)
}

export default BookComponent
