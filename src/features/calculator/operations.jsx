
import React from 'react'

const Keypad = ({ onGetInput , onCalculate}) => {
    return (
<div>
  <button name="+" onClick={e => onGetInput(e.target.name)}>+</button>
  <button>-</button>
  <button>*</button>
  <button>:</button>
  <button>,</button>
  <button onClick={onCalculate}>=</button>
</div>
    )
}

export default Keypad
  