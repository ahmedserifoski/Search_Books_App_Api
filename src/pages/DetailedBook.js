import React from 'react'

import {useParams} from "react-router-dom"

const DetailedBook = ({book}) => {

  const {id} = useParams()
  // const thisService = books.find(service => service.id === detailedId)  

  // console.log(thisService.title)

  return ( 
  <>

      {id}

  </> 
  )
}

export default DetailedBook