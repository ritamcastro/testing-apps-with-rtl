import React, { useState } from 'react'
// import Welcome from './features/greetingz/welcome'
import Calculator from './features/calculator/calculator'
import Button from './components/button'
import { ThemeProvider } from './themes/theme'
import ThemeToggler from './themes/theme-toggler'


const App = () => {

    const [username, setUsername] = useState('')
    const onWelcoming = (name) => {
        setUsername(name)
    }

    return (
        <div>
            {/* <Welcome onSubmit={onWelcoming} />
            {username.length > 0 ? <p> Welcome, {username}!</p> : null} */}
            {/* <Calculator /> */}
            <ThemeProvider>
                <ThemeToggler/>
                <Button name="Test me!"/>
            </ThemeProvider>
        </div>
    )
}
export default App
