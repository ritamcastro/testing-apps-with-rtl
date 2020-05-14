import React from 'react'
import '@testing-library/jest-dom/extend-expect'
import { renderWithTheme } from '../../test-utils'
import Keypad from "features/calculator/keypad"

describe('Keypad', () => {
    it('shows the numbers from 0-9 and ,', () => {
        const { getByRole } = renderWithTheme(<Keypad />)
    
        expect(getByRole('button', { name: /0/i })).toBeInTheDocument()
        expect(getByRole('button', { name: /1/i })).toBeInTheDocument()
        expect(getByRole('button', { name: /2/i })).toBeInTheDocument()
        expect(getByRole('button', { name: /3/i })).toBeInTheDocument()
        expect(getByRole('button', { name: /4/i })).toBeInTheDocument()
        expect(getByRole('button', { name: /5/i })).toBeInTheDocument()
        expect(getByRole('button', { name: /6/i })).toBeInTheDocument()
        expect(getByRole('button', { name: /7/i })).toBeInTheDocument()
        expect(getByRole('button', { name: /8/i })).toBeInTheDocument()
        expect(getByRole('button', { name: /9/i })).toBeInTheDocument()
        expect(getByRole('button', { name: /,/i })).toBeInTheDocument()
    })
})