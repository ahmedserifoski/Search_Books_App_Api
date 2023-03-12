import React from "react";

// bootstrap
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";

//dom functions
import { useLoaderData } from "react-router-dom";

//css
import "./DetailedBook.css";

//star rating
import { FaStar, FaRegStar } from 'react-icons/fa';



const DetailedBook = () => {
    const detailedBookData = useLoaderData().items[0].volumeInfo;

    const STAR_COUNT = detailedBookData.averageRating;
const Rating = () => {
  const stars = Array(STAR_COUNT).fill(<FaStar/>);
  // if (value % 1 != 0) // if value is a decimal, add a half star
  //   stars[Math.floor(value)] = <HalfStar />;

  return stars;
};

    // const thisService = books.find(service => service.id === detailedId)

    return (
        <Container className="container-body" fluid>
            <Row>
                <Col
                    className="d-flex flex-column align-items-center justify-content-center text-center"
                    xs={4}
                >
                    <Card.Img
                        style={{ maxWidth: "15em" }}
                        src={detailedBookData.imageLinks.smallThumbnail}
                    />
                    <Button className="mt-4 align-self-center" variant="outline-secondary">Lets pretend this is a rating link</Button>
                    <Button className="mt-3 align-self-center" variant="outline-secondary">Since this is not a node project</Button>
                </Col>
                <Col>
                    <Card.Title className="book-title fs-1  justify-content-xs-center ">
                        {detailedBookData.title}
                    </Card.Title>
                    <Card.Subtitle className="book-author fs-4 mt-3 justify-content-md-center">
                        By: {detailedBookData.authors}
                    </Card.Subtitle>
                    <Card.Text className="mt-3">
                        <span className="fs-3 ">
                        
                          {Rating}
                        </span>
                        <small className="align-top"> {detailedBookData.ratingsCount} ratings</small>
                    </Card.Text>
                    <Card.Text>Publisher: <span className="bg-warning p-1 rounded">{detailedBookData.publisher}</span>, Published Date: <span className="bg-warning p-1 rounded">{detailedBookData.publishedDate}</span></Card.Text>
                    <Card.Text>{detailedBookData.description}</Card.Text>
                    <Card.Text>
                      <small className="text-secondary">Genres: <span className="p-1 border-bottom border-3 border-warning ">{detailedBookData.categories}</span></small>
                    </Card.Text>
                    <Card.Text>
                      <small className="text-secondary">{detailedBookData.pageCount} pages</small>
                    </Card.Text>
                </Col>
            </Row>
        </Container>
    );
};

export default DetailedBook;

/* API call for a SPECIFIC book, hence passing the params into the async function*/
export const detailedBookLoader = async ({ params }) => {
    const { id } = params;

    const res = await fetch(
        "https://www.googleapis.com/books/v1/volumes?q=the%20martian/" + id
    );
    return res.json();
};
