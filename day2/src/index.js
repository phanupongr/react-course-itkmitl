import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import * as serviceWorker from './serviceWorker'
import ListMenu from './components/ListMenu'
import Counter from './components/counter'
import Input from './components/Input'
import LoginForm from './components/LoginForm'
import UserPage from './pages/UserPage'

const menuItems = [
  { title: 'Menu A', link: 'https://www.google.com' },
  { title: 'Menu B', link: 'https://fb.com' },
  { title: 'Menu C', link: 'https://www.youtube.com' },
]

ReactDOM.render(<App />, document.getElementById('root'))

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
