import React from 'react'

const Button = ({ name, onClick, ariaLabel }) => {
    return <button
        aria-label={ariaLabel}
        name={name}
        onClick={onClick}>
        {name}
    </button>
}

export default Button