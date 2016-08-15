import React, { PropTypes } from 'react'
import styles from './App.css'

const App = (props) => (
  <div className={styles.header}>
    {props.text}
  </div>
)

App.propTypes = {
  text: PropTypes.string.isRequired
}

export default App
