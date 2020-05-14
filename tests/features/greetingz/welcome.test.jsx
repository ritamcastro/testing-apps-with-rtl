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
            })

            it('contains a button to submit the form that is disabled', () => {
              
            })
        })
    })

    it('calls the onSubmit with the username', () => {
        // Given
       
        // When
       
        // Then
    })
})
