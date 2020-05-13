import React, { useState } from 'react'
import Welcome from './features/greetingz/welcome'

const App = () => {

    const [username, setUsername] = useState('')
    const onWelcoming = (name) => {
        setUsername(name)
    }

    return (
        <div>
            <Welcome onSubmit={onWelcoming} />
            {username.length > 0 ? <p> Welcome, {username}!</p> : null}
        </div>
    )
}
export default App
