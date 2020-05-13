import React from 'react'
import '@testing-library/jest-dom/extend-expect'
import userEvent from '@testing-library/user-event'
import { render, waitFor } from '@testing-library/react'
import Calculator from '../../../src/features/calculator/calculator'

describe('Calculator', () => {

    describe('initial render', () => {
        it('shows numbers', () => {
            const { getByRole } = render(<Calculator />)
            expect(getByRole('button', { name: /4/i })).toBeInTheDocument()
            expect(getByRole('button', { name: /2/i })).toBeInTheDocument()
        })

        it('shows operations', () => {
            const { getByRole } = render(<Calculator />)
            expect(getByRole('button', { name: /\*/i })).toBeInTheDocument()
            expect(getByRole('button', { name: /:/i })).toBeInTheDocument()
        })

        it('shows the current result and expression', () => {
            const { getByLabelText } = render(<Calculator />)
            expect(getByLabelText(/result/i)).toHaveTextContent('0')

            expect(getByLabelText(/expression/i)).toBeInTheDocument()
            expect(getByLabelText(/expression/i)).toHaveTextContent('0')
        })

        it('shows the close button', () => {
            const { getByLabelText } = render(<Calculator />)
            expect(getByLabelText(/close calculator/i)).toBeInTheDocument()
        })

        it('shows the clear button', () => {
            const { getByRole } = render(<Calculator />)
            expect(getByRole('button', { name: /clear/i })).toBeInTheDocument()
        })
    })

    describe('real calculations ', () => {
        it('adds two numbers', done => {
            const { getByRole, getByLabelText, queryByText } = render(<Calculator />)

            userEvent.click(getByRole('button', { name: /3/i }))
            userEvent.click(getByRole('button', { name: /\+/i }))
            userEvent.click(getByRole('button', { name: /5/i }))
            userEvent.click(getByRole('button', { name: /=/i }))

            waitFor(() => {
                expect(getByLabelText(/result/i)).toHaveTextContent(8)
                expect(queryByText(/3 \+ 5/i)).not.toBeInTheDocument()
                done()
            })
        })

        it('adds three numbers, carrying the result', done => {
            const { getByRole, getByLabelText } = render(<Calculator />)

            userEvent.click(getByRole('button', { name: /3/i }))
            userEvent.click(getByRole('button', { name: /\+/i }))
            userEvent.click(getByRole('button', { name: /4/i }))
            userEvent.click(getByRole('button', { name: /\=/i }))
            userEvent.click(getByRole('button', { name: /\+/i }))
            userEvent.click(getByRole('button', { name: /1/i }))
            userEvent.click(getByRole('button', { name: /=/i }))

            waitFor(() => {
                expect(getByLabelText(/result/i)).toHaveTextContent(8)
                done()
            })
        })

        it('subtracts, multiplies and divides two numbers', () =>{
            // TODO: Feel free to give it a try!
        })
    })
})