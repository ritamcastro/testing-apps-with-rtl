import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import { add, subtract, multiply, divide } from '../../services/math'
import Display from './display'
import Keypad from './keypad'
import Operations from './operations'
import Button from '../../components/button'

const Calculator = ({ onCloseGoTo }) => {

    const [input, setInput] = useState(undefined)
    const [result, setResult] = useState(undefined)
    const [operation, setOperation] = useState(undefined)

    const history = useHistory()
    const closeCalculator = () => {
        history.push(onCloseGoTo)
    }

    const calculate = () => {
        switch (operation) {
            case '+':
                setResult(add(parseFloat(result), parseFloat(input)))
                setInput(undefined)
                setOperation(undefined)
                break
            case '-':
                setResult(subtract(parseFloat(result), parseFloat(input)))
                setInput(undefined)
                setOperation(undefined)
                break
            case '*':
                setResult(multiply(parseFloat(result), parseFloat(input)))
                setInput(undefined)
                setOperation(undefined)
                break
            case ':':
                setResult(divide(parseFloat(result), parseFloat(input)))
                setInput(undefined)
                setOperation(undefined)
                break
            default:
                break
        }
    }

    const clear = () => {
        setInput(undefined)
        setResult(undefined)
        setOperation(undefined)
    }

    const getInput = (e) => {
        if (input == undefined) {
            setInput(e)
        } else {
            const prev = input
            setInput(prev.concat(e))
        }

        if (result && operation == undefined) {
            setResult(undefined)
        }
    }

    const doOperation = (e) => {
        setOperation(e)
        if (result == undefined) {
            setResult(input)
        } else {
            const prev = result
            setResult(prev)
        }
        setInput(undefined)
    }

    return (
        <div className="grid-container" >
            <div className='topbar'>
                <Button className='btn-close' name="X" ariaLabel='close calculator' onClick={() => closeCalculator()} />
            </div>
            <Display result={result} operation={operation} input={input} onClear={() => clear()} />

            <div className='keys'>
                <Keypad onGetInput={getInput} />
                <Operations
                    onGetInput={doOperation}
                    onCalculate={() => calculate()}
                    onClear={() => clear()}/>
            </div>
        </div>
    )
}

export default Calculator