import React, { useState } from 'react'
import { add } from '../../services/math'

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
        }
        if (result && operation == undefined) {
            setResult(undefined)
        }
    }

    const doOperation = (e) => {
        setOperation(e)
        if (result == undefined) {
            setResult(input)
        } 
        setInput(undefined)
    }
    // 
    return (
        <div>
            <div>
                <button aria-label='close calculator'>X</button>
            </div>
            <div>
                <p aria-label='expression'>{result === undefined ? 0 : result} {operation} {input} </p>
                <p aria-label='result'> {result === undefined ? 0 : result}</p>
                <button aria-label='clear'>CLC</button>
            </div>
            <div>
                <button>0</button>
                <button>1</button>
                <button>2</button>
                <button onClick={() => getInput("3")}>3</button>
                <button>4</button>
                <button onClick={() => getInput("5")}>5</button>
                <button>6</button>
                <button>7</button>
                <button>8</button>
                <button>9</button>
            </div>
            <div>
                <button onClick={() => doOperation("+")}>+</button>
                <button>-</button>
                <button>*</button>
                <button>:</button>
                <button>,</button>
                <button onClick={() => calculate()}>=</button>
            </div>
        </div>
    )
}

export default Calculator