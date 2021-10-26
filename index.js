import React from 'react'
import ReactDOM from 'react-dom'
import Stiches from './Stiches'
import StyledComponents from './StyledComponents'
import Emotion from './Emotion'
import Linaria from './Linaria'
import { ThemeProvider as StyledComponentsProvider } from '@xstyled/styled-components'
import { ThemeProvider as EmotionProvider } from '@xstyled/emotion'
import { theme } from './xstyled'

const App = () => (
  <StyledComponentsProvider theme={theme}>
    <EmotionProvider theme={theme}>
      <Stiches />
      <StyledComponents />
      <Emotion />
      <Linaria />
    </EmotionProvider>
  </StyledComponentsProvider>
)

const rootEl = document.querySelector('#root')

ReactDOM.render(<App />, rootEl)
