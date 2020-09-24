import React from 'react'
import SpinningBall from "../images/spinner.gif"
import "./Spinner.css"

const Spinner = () => {
    return (
        <img className="spinner" src={SpinningBall} alt="Loading"/>
    )
}

export default Spinner
