import React from 'react'
import '@testing-library/jest-dom/extend-expect'
import userEvent from '@testing-library/user-event'
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
        const handleSubmit = jest.fn()
        const username = 'Mickey Mouse'
        const goto = 'Disneyland'
        const { getByLabelText, getByText, getByRole } = render(<Welcome onSubmit={handleSubmit} goto={goto}/>)

        // When
        userEvent.type(getByLabelText(/what is your name/i), username)

        expect(getByRole('button', { name: /let's go!/i })).toBeEnabled()
        userEvent.click(getByText(/let's go!/i))

        // Then
        expect(handleSubmit).toHaveBeenCalledTimes(1)
        expect(handleSubmit).toHaveBeenCalledWith(username)
    })
})
