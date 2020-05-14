import React from 'react'
import { useTheme } from '../themes/theme'

const Button = ({ className, name, onClick, ariaLabel }) => {

    const [theme] = useTheme()
    const styles = {
        dark: {
            backgroundColor: 'indigo',
            color: 'lavender',
        },
        light: {
            backgroundColor: 'lavender',
            color: 'indigo',
        },
    }

    return <button
        className={`btn ${className}`}
        style={styles[theme]}
        aria-label={ariaLabel}
        name={name}
        onClick={onClick} >
        {name}
    </button>
}

export default Button


