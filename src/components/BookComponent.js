    
import React from 'react'
import "./BookComponent.css"



const BookComponent = ({book}) => {

    return (<div className="book">
            {book.image_url ? <img className="image" src={book.image_url} alt=""/> : ""}
            <h4 className="title">{book.title}</h4>
            {/*<h3 className="subtitle">{book.subtitle}</h3>*/}
            <small className="authors">by: <strong>{book.author.name}</strong></small>
            {/*<p className="pageNumber">Page number:  <strong>{book.pageCount}</strong></p>*/}
            {/* <button onClick={getDesc}>Search more</button> */}
        </div>)
}

export default BookComponent
