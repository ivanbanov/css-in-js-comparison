import React from 'react'
import ReactDOM from 'react-dom'
import { ThemeProvider } from '@xstyled/emotion'
import Emotion from '../Emotion'
import { theme } from '../xstyled'

const App = () => (
  <ThemeProvider theme={theme}>
    <Emotion />
  </ThemeProvider>
)

const rootEl = document.querySelector('#root')

ReactDOM.render(<App />, rootEl)
