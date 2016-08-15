import 'babel-polyfill'
import React from 'react'
import ReactDOM from 'react-dom'
import App from 'components/App'

const app = <App text='Hello Wolrd' />
const root = document.getElementById('root')

ReactDOM.render(app, root)
