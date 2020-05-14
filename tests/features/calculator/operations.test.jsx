import React from 'react'
import '@testing-library/jest-dom/extend-expect'
import { render } from '@testing-library/react'
import Operations from "../../../src/features/calculator/operations"


describe('Operations', () => {
    it('shows the operations', () => {
        const { getByRole, getByLabelText } = render(<Operations />)

        expect(getByRole('button', { name: /\+/i })).toBeInTheDocument()
        expect(getByRole('button', { name: /-/i })).toBeInTheDocument()
        expect(getByRole('button', { name: /\*/i })).toBeInTheDocument()
        expect(getByRole('button', { name: /:/i })).toBeInTheDocument()
        expect(getByRole('button', { name: /=/i })).toBeInTheDocument()
        expect(getByLabelText(/clear/i)).toBeInTheDocument()
    })
})