import React from 'react'
import '../App.css'

const Greeting = (props) => {
    return(
        <h1>Hello, {props.name}!</h1>
    )
}

export default Greeting