import React from 'react'

const Button = ({name, onClick}) => {
    return <button name={name} onClick={onClick}>{name}</button>
}

export default Button