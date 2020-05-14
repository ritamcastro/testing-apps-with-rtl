import React, { useState } from 'react'
import { useTheme } from './theme'

const ThemeToggler = () => {

    const [theme, setTheme] = useTheme()
    
    return (
        <>
            <div>
                <input type="radio" id="light" name="theme" value="light"
                    checked={theme === 'light'}
                    onChange={e => { setTheme("light") }} />
                <label htmlFor="light">Light Theme</label>
            </div>

            <div>
                <input type="radio" id="dark" name="theme" value="dark"
                    checked={theme === 'dark'}
                    onChange={e => { setTheme("dark") }} />

                <label htmlFor="dark">Dark Theme</label>
            </div>

            <p>Theme selected is: {theme}</p>
        </>
    )
}

export default ThemeToggler