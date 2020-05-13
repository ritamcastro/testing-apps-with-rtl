import React from 'react'
import '@testing-library/jest-dom/extend-expect'
import { render } from '@testing-library/react'
import Welcome from '../../../src/features/greetingz/welcome'
 
describe('Welcome screen', () => {

    describe('initial render', () => {
        it('contains the title', () => {
            const { getByText } = render(<Welcome />)
            expect(getByText('Welcome!')).toBeInTheDocument()
        })

        describe('form to input your name', () => {
            it('contains a textbox to input the username', () => {
                const { getByLabelText } = render(<Welcome />)
                const input = getByLabelText(/what is your name/i)
                expect(input).toBeInTheDocument()
                expect(input).toBeRequired()
            })

            it('contains a button to submit the form that is disabled', () => {
                const { getByRole } = render(<Welcome />)
                expect(getByRole('button', { name: /let's go!/i })).toBeInTheDocument()
                expect(getByRole('button', { name: /let's go!/i })).toBeDisabled()
            })
        })
    })

    it('calls the onSubmit with the username', () => {
        // Given
       
        // When
       
        // Then
    })
})
