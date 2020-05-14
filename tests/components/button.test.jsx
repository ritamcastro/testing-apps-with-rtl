import React from 'react'
import '@testing-library/jest-dom/extend-expect'
import userEvent from '@testing-library/user-event'
import { render, waitFor } from '@testing-library/react'
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
})