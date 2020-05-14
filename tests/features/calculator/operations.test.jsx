import React from 'react'
import '@testing-library/jest-dom/extend-expect'
import Operations from "../../../src/features/calculator/operations"
import { renderWithTheme } from '../../test-utils'

describe('Operations', () => {
    it('shows the operations', () => {
        const { getByRole, getByLabelText } = renderWithTheme(<Operations />)

        expect(getByRole('button', { name: /\+/i })).toBeInTheDocument()
        expect(getByRole('button', { name: /-/i })).toBeInTheDocument()
        expect(getByRole('button', { name: /\*/i })).toBeInTheDocument()
        expect(getByRole('button', { name: /:/i })).toBeInTheDocument()
        expect(getByRole('button', { name: /=/i })).toBeInTheDocument()
        expect(getByLabelText(/clear/i)).toBeInTheDocument()
    })
})