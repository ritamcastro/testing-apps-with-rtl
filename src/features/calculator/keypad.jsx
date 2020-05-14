import React from 'react'
import Button from '../../components/button'

const Keypad = ({ onGetInput }) => {
    return (
        <div>
            <Button name="0" onClick={e => onGetInput(e.target.name)} />
            <Button name="2" onClick={e => onGetInput(e.target.name)} />
            <Button name="3" onClick={e => onGetInput(e.target.name)} />
            <Button name="4" onClick={e => onGetInput(e.target.name)} />
            <Button name="1" onClick={e => onGetInput(e.target.name)} />
            <Button name="5" onClick={e => onGetInput(e.target.name)} />
            <Button name="6" onClick={e => onGetInput(e.target.name)} />
            <Button name="7" onClick={e => onGetInput(e.target.name)} />
            <Button name="8" onClick={e => onGetInput(e.target.name)} />
            <Button name="9" onClick={e => onGetInput(e.target.name)} />
        </div>
    )
}

export default Keypad