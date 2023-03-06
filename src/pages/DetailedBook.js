import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'


import {useLoaderData} from "react-router-dom"

// import "./DetailedBook.css";

const DetailedBook = () => {
  
  const detailedBookData = useLoaderData().items[0].volumeInfo
  
  console.log(detailedBookData)
  

  
  // const thisService = books.find(service => service.id === detailedId)  

  // console.log(thisService.title)

  return ( 
    <Row >
      <Col>
        <Card.Img style={{maxWidth: "12em"}} src={detailedBookData.imageLinks.smallThumbnail} /> 
      </Col>
      {/* <div className='img'> */}
        
      {/* </div> */}
      {/* <div className='card-body'> */}
      <Col>
        <Card.Body>
            <Card.Title>{detailedBookData.title}</Card.Title>
            <Card.Subtitle>{detailedBookData.authors}</Card.Subtitle>
            <Card.Text>Rating: {detailedBookData.averageRating}</Card.Text>
            <Card.Text>
              {detailedBookData.description}
            </Card.Text>
          </Card.Body>
      {/* </div> */}
      </Col>
    </Row>
  )
}

export default DetailedBook

/* API call for a SPECIFIC book, hence passing the params into the async function*/
export const detailedBookLoader = async ({params}) => {
  const {id} = params

  const res = await fetch('https://www.googleapis.com/books/v1/volumes?q=the%20martian/' + id)
  return res.json()
}