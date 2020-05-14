import React, { useState } from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Welcome from './features/greetingz/welcome'
import Calculator from './features/calculator/calculator'
import Goodbye from './features/greetingz/goodbye'
import { ThemeProvider } from './themes/theme'


const App = () => {

    const [username, setUsername] = useState('')
    const onWelcoming = (name) => {
        setUsername(name)
    }

    return (
        <BrowserRouter>
            <Switch>
                <ThemeProvider>
                    <Route exact path="/" render={() => <Welcome onSubmit={onWelcoming} goto="/calculator" />} />
                    <Route exact path="/calculator" render={() => <Calculator onCloseGoTo={'/goodbye'} />} />
                    <Route exact path="/goodbye" render={() => <Goodbye name={username} />} />
                </ThemeProvider>
            </Switch>
        </BrowserRouter>
    )
}

export default App
