import React from 'react'
import {render as rtlRender} from '@testing-library/react'
import {ThemeProvider} from '../src/themes/theme'

function renderWithTheme(ui, theme = 'light') {
  const Wrapper = ({children}) => (
    <ThemeProvider initialTheme={theme}>{children}</ThemeProvider>
  )
  return rtlRender(ui, {wrapper: Wrapper})
}

//export * from '@testing-library/react'
// override React Testing Library's render with our own
export {renderWithTheme}
