import React from 'react'
import Button from '../../components/button'

const Display = ({ result, input, operation, onClear }) => {

    return (
        <div className='display'>
            <div className='expression'>
                <p className='expression' aria-label='expression'>
                    {result === undefined && input === undefined ? 0 : result} {operation} {input}
                </p>
            </div>
            <div className='result'>
                <h2 aria-label='result'> {result === undefined ? 0 : result}</h2>
            </div>
        </div>
    )
}
export default Display