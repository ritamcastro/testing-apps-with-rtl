import React from 'react'

const Keypad = ({ onGetInput }) => {
    return (
        <div>
            <button name="0" onClick={e => onGetInput(e.target.name)}>0</button>
            <button name="1" onClick={e => onGetInput(e.target.name)}>1</button>
            <button name="2" onClick={e => onGetInput(e.target.name)}>2</button>
            <button name="3" onClick={e => onGetInput(e.target.name)}>3</button>
            <button name="4" onClick={e => onGetInput(e.target.name)}>4</button>
            <button name="5" onClick={e => onGetInput(e.target.name)}>5</button>
            <button name="6" onClick={e => onGetInput(e.target.name)}>6</button>
            <button name="7" onClick={e => onGetInput(e.target.name)}>7</button>
            <button name="8" onClick={e => onGetInput(e.target.name)}>8</button>
            <button name="9" onClick={e => onGetInput(e.target.name)}>9</button>
        </div>
    )
}

export default Keypad