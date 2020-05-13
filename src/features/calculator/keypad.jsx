import React from 'react'

const Keypad = ({ onGetInput }) => {
    return (
        <div>
            <button>0</button>
            <button>1</button>
            <button>2</button>
            <button name="3" onClick={e => onGetInput(e.target.name)}>3</button>
            <button>4</button>
            <button name="5" onClick={e => onGetInput(e.target.name)}>5</button>
            <button>6</button>
            <button>7</button>
            <button>8</button>
            <button>9</button>
        </div>
    )
}

export default Keypad