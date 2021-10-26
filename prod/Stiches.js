import React from 'react'
import ReactDOM from 'react-dom'
import Stiches from '../Stiches'

const App = () => <Stiches />

const rootEl = document.querySelector('#root')

ReactDOM.render(<App />, rootEl)
