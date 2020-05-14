import React from 'react'
import Button from '../../components/button'

const Display = ({ result, input, operation, onClear }) => {
    
    return (
        <div>
            <p aria-label='expression'>
                {result === undefined && input === undefined ? 0: result} {operation} {input} 
                </p>
            <h2 aria-label='result'> {result === undefined ? 0 : result}</h2>
            <Button ariaLabel='clear' name='CLC' onClick={onClear}/>
        </div>
    )
}
export default Display