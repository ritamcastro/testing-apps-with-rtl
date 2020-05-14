import React from 'react'
import axios from 'axios'
import '@testing-library/jest-dom/extend-expect'
import { render, waitFor} from '@testing-library/react'
import Goodbye from 'features/greetingz/goodbye'

describe('Goodbye screen', () => {

    it('contains the title', () => {
        const name = "Harley Quinn"
        const { getByText } = render(<Goodbye name={name} />)
        expect(getByText(`Goodbye ${name}!`)).toBeInTheDocument()
    })

    it('shows the joke', done => {

        axios.get = jest.fn((...args) => {
            console.warn('axios.get is not mocked for this call', ...args)
            return Promise.reject(new Error('This must be mocked!'))
        })

        axios.get.mockResolvedValueOnce({
            data: {
                "id": "R7UfaahVfFd",
                "joke": "It is on you!",
                "status": 200
            }
        })

        const { getByText } = render(<Goodbye />)

        waitFor(() => {
            expect(axios.get).toHaveBeenCalledTimes(1)
            expect(axios.get).toHaveBeenCalledWith(
                "https://icanhazdadjoke.com/",
                {
                    headers: { "Accept": "application/json" }
                }
            )
            getByText(/It is on you!/i)
            done()
        })
    })
})
