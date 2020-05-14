import React, { useEffect, useState } from 'react'
import axios from 'axios'

const Goodbye = ({ name }) => {

    const [joke, setJoke] = useState("")
    
    useEffect(() => {
        axios.get('https://icanhazdadjoke.com/',
            {
                headers: { 'Accept': 'application/json' }
            })
            .then((response) => {
                setJoke(response.data.joke)
            })
    }, [])

    return (
        <div>
            <h1>Goodbye {name}!</h1>
            <p> Here's a joke for the go... </p>
            <p>{joke}</p>
        </div>
    )
}

export default Goodbye