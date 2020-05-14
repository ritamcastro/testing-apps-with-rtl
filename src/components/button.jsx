import React from 'react'

const Button = ({ className, name, onClick, ariaLabel }) => {

    return <button
        className={`btn ${className}`}
        aria-label={ariaLabel}
        name={name}
        onClick={onClick} >
        {name}
    </button >
}

export default Button