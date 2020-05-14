import React, { useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom'

const Welcome = ({ onSubmit, goto }) => {

    const [username, setUsername] = useState('')
    const [isEnabled, setEnable] = useState(false)

    useEffect(() => {
        username.length > 0 ? setEnable(true) : null
    }, [username])

    const history = useHistory()

    const handleSubmit = event => {
        event.preventDefault()
        onSubmit(username)
        history.push(goto)
    }

    return (
        <div>
            <h1>Welcome!</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="username-field">What is your name?</label>
                    <input id="username-field" name="username" required onChange={(e) => setUsername(e.target.value)} />
                </div>
                <div>
                    <button disabled={!isEnabled} type="submit">Let's go!</button>
                </div>
            </form>
        </div>
    )
}

export default Welcome
