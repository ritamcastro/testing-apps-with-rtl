import React, { useState } from 'react'
import { add } from '../../services/math'
import Display from './display'
import Keypad from './keypad'
import Operations from './operations'

const Calculator = () => {

    const [input, setInput] = useState(undefined)
    const [result, setResult] = useState(undefined)
    const [operation, setOperation] = useState(undefined)

    const calculate = () => {
        switch (operation) {
            case '+':
                setResult(add(parseFloat(result), parseFloat(input)))
                setInput(undefined)
                setOperation(undefined)
                break
            default:
                break
        }
    }

    const getInput = (value) => {
        if (input == undefined) {
            setInput(value)
        }
        if (result && operation == undefined) {
            setResult(undefined)
        }
    }

    const doOperation = (operationName) => {
        setOperation(operationName)
        if (result == undefined) {
            setResult(input)
        }
        setInput(undefined)
    }
    
    return (
        <div>
            <div>
                <button aria-label='close calculator'>X</button>
            </div>
            <Display result={result} operation={operation} input={input} />
            <Keypad onGetInput={getInput} />
            <Operations onGetInput={doOperation} onCalculate={calculate}></Operations>
        </div>
    )
}

export default Calculator