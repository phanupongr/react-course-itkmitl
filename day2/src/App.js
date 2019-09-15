import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import PropTypes from 'prop-types'
import logo from './logo.svg'
import './App.css'
import UserPage from './pages/UserPage'
import HomePage from './pages/HomePage'
import NotFoundPage from './pages/NotFoundPage'
import UserDetailPage from './pages/UserDetailPage'

const App = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/" exact component={HomePage} />
      <Route path="/users" exact component={UserPage} />
      <Route path="/users/:userId" component={UserDetailPage} />
      <Route component={NotFoundPage} />
    </Switch>
  </BrowserRouter>
)

export default App

// function App(props) {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Hello, {props.name} {props.num}
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   )
// }
// App.propTypes = {
//   name: PropTypes.string.isRequired,
//   num: PropTypes.number,
// }
// App.defaultProps = {
//   num: 1,
// }

