import React from 'react'
import '@testing-library/jest-dom/extend-expect'
import userEvent from '@testing-library/user-event'
import { waitFor } from '@testing-library/react'
import Button from '../../src/components/button'
import {renderWithTheme} from '../test-utils'

describe('Button', () => {

    it('renders the name and when clicked, calls the callback', done => {
        const doStuff = jest.fn()
        const btnName = "Click Me!"
        const { getByRole } = renderWithTheme(<Button name={btnName} onClick={doStuff} />)

        const btn = getByRole('button', { name: btnName })
        expect(btn).toBeInTheDocument()
        userEvent.click(btn)

        waitFor(() => {
            expect(doStuff).toHaveBeenCalledTimes(1)
            done()
        })
    })

    it('renders with the default light styles for the light theme', () => {
        const { getByText } = renderWithTheme(<Button name="Sunshine"/>)

        const button = getByText(/sunshine/i)
        expect(button).toHaveStyle(`
              background-color: lavender;
              color: indigo;
            `)
    })

    it('renders with the dark styles for the dark theme', () => {
        const { getByText } = renderWithTheme(<Button name="Sunshine"/>, 'dark')

        const button = getByText(/sunshine/i)
        expect(button).toHaveStyle(`
              background-color: indigo;
              color: lavender;
            `)
    })
})