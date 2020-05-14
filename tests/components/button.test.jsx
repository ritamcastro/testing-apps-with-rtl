import React from 'react'
import '@testing-library/jest-dom/extend-expect'
import userEvent from '@testing-library/user-event'
import { render, waitFor } from '@testing-library/react'
import {ThemeProvider} from '../../src/themes/theme'
import Button from '../../src/components/button'

describe('Button', () => {
    it('renders the name and when clicked, calls the callback' , done => {
        const doStuff = jest.fn()
        const btnName = "Click Me!"
        const {getByRole} = render(<Button name={btnName} onClick={doStuff}></Button>)

        const btn = getByRole('button', {name: btnName})
        expect(btn).toBeInTheDocument()
        userEvent.click(btn)

        waitFor(() => {
            expect(doStuff).toHaveBeenCalledTimes(1)
            done()
        })
    })

    it ('renders with the light styles for the light theme', () => {
        const Wrapper = ({ children }) => (
            <ThemeProvider initialTheme="light">{children}</ThemeProvider>
        )

        const { getByText } = render(<Button name="Sunshine"/>, { wrapper: Wrapper })
        const button = getByText(/sunshine/i)
        expect(button).toHaveStyle(`
              background-color: white;
              color: black;
            `)
    })
})