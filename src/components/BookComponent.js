import React, { useState } from "react";

import DetailedBook from "../pages/DetailedBook";

import { Link } from "react-router-dom";
import Button from 'react-bootstrap/Button'

import "bootstrap/dist/css/bootstrap.min.css";

import "./BookComponent.css";

const BookComponent = ({ book }) => {
    const [open, setOpen] = useState(false);

    return (
        <div
            className="book"
            style={{ maxHeight: open == false ? "2000px" : "auto" }}
        >
            {book.volumeInfo.imageLinks ? (
                <img
                    className="image"
                    src={book.volumeInfo.imageLinks.smallThumbnail}
                    alt=""
                />
            ) : (
                ""
            )}
            <h4 className="title">{book.volumeInfo.title}</h4>
            <small className="authors">
                by: <strong>{book.volumeInfo.authors}</strong>
            </small>
            <p className="pageNumber">
                Page number: {book.volumeInfo.pageCount}
            </p>
            {/* Link to the id of a singe book, this is a dynamic tag */}
            <Button variant="light">

                <Link className="text-black text-decoration-none" to={book.id}> Show More</Link>

            </Button>
        </div>
    );
};

export default BookComponent;
