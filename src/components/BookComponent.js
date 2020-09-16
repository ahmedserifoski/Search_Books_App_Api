import React from 'react'

const BookComponent = ({book}) => {
    return (
        <div >
            <img src={book.volumeInfo.imageLinks.smallThumbnail} alt="Desc"/>
            {/* <p>{book.volumeInfo.title}</p> */}
        </div>
    )
}

export default BookComponent
