    
import React, {useState} from 'react'

import "bootstrap/dist/css/bootstrap.min.css";
import Button from 'react-bootstrap/Button';

import "./BookComponent.css"

const BookComponent = ({book}) => {
    const [open, setOpen] = useState(false);

    return (<div className="book" style={{ maxHeight: open == false? '2000px': 'auto'}} >
            {book.volumeInfo.imageLinks ? <img className="image" src={book.volumeInfo.imageLinks.smallThumbnail} alt=""/> : ""}
            <h4 className="title">{book.volumeInfo.title}</h4>
            <small className="authors">by: <strong>{book.volumeInfo.authors}</strong></small>
            <p className="pageNumber">Page number:  <strong>{book.volumepageCount}</strong></p>
            <Button 
                variant="light"
                onClick={() => setOpen(!open)}
                aria-controls="example-collapse-text"
                aria-expanded={open}
            >
                Show More
            </Button>{' '}
        </div>)
}

export default BookComponent
