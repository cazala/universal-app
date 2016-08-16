import React, { PropTypes } from 'react'
import styles from './App.css'
import Button from 'react-toolbox/lib/button'

const App = (props) => (
  <Button label={props.text} />
)

App.propTypes = {
  text: PropTypes.string.isRequired
}

export default App
