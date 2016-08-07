import styles from './index.css'
console.log(styles) // { red: '...' }
window.onload = () => document.body.classList.add(styles.red)
