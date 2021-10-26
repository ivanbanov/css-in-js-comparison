import React from 'react'
import ReactDOM from 'react-dom'
import Linaria from '../Linaria'

const App = () => <Linaria />

const rootEl = document.querySelector('#root')

ReactDOM.render(<App />, rootEl)
