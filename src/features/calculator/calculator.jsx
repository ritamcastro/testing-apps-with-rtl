import React, { useState } from 'react'
import { add } from '../../services/math'
import Display from './display'
import Keypad from './keypad'
import Operations from './operations'
import Button from '../../components/button'

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
    
    const clear = () => {
        setInput(undefined)
        setResult(undefined)
        setOperation(undefined)
    }

    return (
        <div>
            <div>
                <Button name="X" ariaLabel='close calculator'/>
            </div>
            <Display result={result} operation={operation} input={input} onClear={() => clear()}/>
            <Keypad onGetInput={getInput} />
            <Operations onGetInput={doOperation} onCalculate={calculate}></Operations>
        </div>
    )
}

export default Calculator