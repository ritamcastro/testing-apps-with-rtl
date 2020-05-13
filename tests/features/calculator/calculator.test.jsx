import React from 'react'
import '@testing-library/jest-dom/extend-expect'
import '@testing-library/jest-dom/extend-expect'
import { render } from '@testing-library/react'
import Calculator from '../../../src/features/calculator/calculator'

describe('Calculator', () => {

    describe('initial render', () => {
        it('shows the numbers from 0-9', () => {
            const { getByRole } = render(<Calculator />)

            expect(getByRole('button', { name: /0/i })).toBeInTheDocument()
            expect(getByRole('button', { name: /1/i })).toBeInTheDocument()
            expect(getByRole('button', { name: /2/i })).toBeInTheDocument()
            expect(getByRole('button', { name: /3/i })).toBeInTheDocument()
            expect(getByRole('button', { name: /4/i })).toBeInTheDocument()
            expect(getByRole('button', { name: /5/i })).toBeInTheDocument()
            expect(getByRole('button', { name: /6/i })).toBeInTheDocument()
            expect(getByRole('button', { name: /7/i })).toBeInTheDocument()
            expect(getByRole('button', { name: /8/i })).toBeInTheDocument()
            expect(getByRole('button', { name: /9/i })).toBeInTheDocument()
        })

        it('shows the operations and the ,', () => {
            const { getByRole } = render(<Calculator />)

            expect(getByRole('button', { name: /\+/i })).toBeInTheDocument()
            expect(getByRole('button', { name: /-/i })).toBeInTheDocument()
            expect(getByRole('button', { name: /\*/i })).toBeInTheDocument()
            expect(getByRole('button', { name: /:/i })).toBeInTheDocument()
            expect(getByRole('button', { name: /=/i })).toBeInTheDocument()
            expect(getByRole('button', { name: /,/i })).toBeInTheDocument()
        })

        it ('shows the current result and expression', () => {
            expect(getByLabelText(/result/i)).toBeInTheDocument()
            expect(getByLabelText(/result/i)).toHaveTextContent('0')

            expect(getByLabelText(/expression/i)).toBeInTheDocument()
            expect(getByLabelText(/expression/i)).toHaveTextContent('0')
        })

        it ('shows the close button', () => {


        })
    })
})