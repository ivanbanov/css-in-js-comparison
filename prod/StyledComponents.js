import React from 'react'
import ReactDOM from 'react-dom'
import { ThemeProvider } from '@xstyled/styled-components'
import StyledComponents from '../StyledComponents'
import { theme } from '../xstyled'

const App = () => (
  <ThemeProvider theme={theme}>
    <StyledComponents />
  </ThemeProvider>
)

const rootEl = document.querySelector('#root')

ReactDOM.render(<App />, rootEl)
