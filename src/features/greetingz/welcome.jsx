import React, { useState, useEffect } from 'react'

const Welcome = ({ onSubmit }) => {

    const [username, setUsername] = useState('')
    const [isEnabled, setEnable] = useState(false)

    useEffect(() => {
        username.length > 0 ? setEnable(true) : null
    }, [username])

    const handleSubmit = event => {
        event.preventDefault()
        onSubmit(username)
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
