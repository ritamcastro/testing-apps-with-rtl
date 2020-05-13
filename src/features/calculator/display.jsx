import React from 'react'

const Display = ({ result, input, operation, onClear }) => {
    
    return (
        <div>
            <p aria-label='expression'>
                {result === undefined && input === undefined ? 0: result} {operation} {input} 
                </p>
            <h2 aria-label='result'> {result === undefined ? 0 : result}</h2>
            <button aria-label='clear' onClick={onClear}>CLC</button>
        </div>
    )
}
export default Display