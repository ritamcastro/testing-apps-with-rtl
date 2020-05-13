import React from 'react'

const Calculator = () => {
    return (
        <div>
            <div>
                <p aria-label='expression'>0</p>
                <h2 aria-label='result'>0</h2>
            </div>
            <div>
                <button>0</button>
                <button>1</button>
                <button>2</button>
                <button>3</button>
                <button>4</button>
                <button>5</button>
                <button>6</button>
                <button>7</button>
                <button>8</button>
                <button>9</button>
            </div>
            <div>
                <button>+</button>
                <button>-</button>
                <button>*</button>
                <button>:</button>
                <button>,</button>
                <button>=</button>
            </div>
        </div>
    )
}

export default Calculator