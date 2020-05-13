import React from 'react'
import '@testing-library/jest-dom/extend-expect'
import { render } from '@testing-library/react'
import Display from "../../../src/features/calculator/display"

describe('Display', () => {
    it('shows 0 when the result is undefined', () => {
        const nope = undefined
        const { getByLabelText } = render(<Display result={nope}/>)
    
        expect(getByLabelText(/result/i)).toBeInTheDocument()
        expect(getByLabelText(/result/i)).toHaveTextContent('0')
    })

    it('shows 0 when the result is undefined', () => {
        const yupe = 1234567
        const { getByLabelText } = render(<Display result={yupe}/>)
    
        expect(getByLabelText(/result/i)).toBeInTheDocument()
        expect(getByLabelText(/result/i)).toHaveTextContent(yupe)
    })
})