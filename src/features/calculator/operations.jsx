import React from 'react'
import Button from '../../components/button'
import ThemeToggler from '../../themes/theme-toggler'

const Operations = ({ onGetInput, onCalculate, onClear }) => {
  return (
    <div className='controls'>
      <ThemeToggler />
      <div className='operations'>
        <Button name="+" onClick={e => onGetInput(e.target.name)} />
        <Button name="-" onClick={e => onGetInput(e.target.name)} />
        <Button name="*" onClick={e => onGetInput(e.target.name)} />
        <Button name=":" onClick={e => onGetInput(e.target.name)} />

        <Button name="=" onClick={onCalculate} />
        <Button ariaLabel='clear' name='CLC' onClick={onClear} />
      </div>
    </div>
  )
}

export default Operations
