  
import React, { useState, useEffect } from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import jwt_decode from 'jwt-decode'
import setAuthToken from './utils/setAuthToken'
import Signup from './components/Signup'
import Login from './pages/login'
import About from './components/About'
import Welcome from './components/Welcome'
import Nav from './components/Navbar'
import Profile from './profile'

const PrivateRoute = ({ component: Component, ...rest }) => {
  // get user via jwt token to confirm user authenticated
  const user = localStorage.getItem('jwtToken')
  
  // setup a return based on user status
  return <Route {...rest} render={(props) => (
    user ? <Component {...rest} {...props} /> : <Redirect to='/login' />
  )}
  />
}


function App() {
  let [currentUser, setCurrentUser] = useState("")
  let [isAuthenticated, setIsAuthenticated] = useState(false)

  useEffect(() => {
    let token
    if(localStorage.getItem('jwtToken') === null) {
      setIsAuthenticated(false)
    } else {
      token = jwt_decode(localStorage.getItem('jwtToken'))
      setAuthToken(localStorage.jwtToken)
      setCurrentUser(token)
      setIsAuthenticated(true)
    }
  }, [])

  // setting current user
  // let nowCurrentUser = (userData) => {
  //   setCurrentUser(userData)
  //   setIsAuthenticated(true)
  // }

  // logging out current user
  let handleLogout = () => {
    if (localStorage.getItem('jwtToken') !== null) {
      localStorage.removeItem('jwtToken')
      setCurrentUser(null)
      setIsAuthenticated(false)
    }
  }

  console.log(`Current user is = ${currentUser}`)
  console.log(`Is user Authenticated? ${isAuthenticated}`)

  return (
    <div>
      <Nav handleLogout={handleLogout} isAuthenticated={isAuthenticated} />
      {/* <Profile currentUser={nowCurrentUser} /> */}
      <div className="react-router-logic">
        <Switch>
          <Route path='/signup' component={ Signup } />
          <Route path='/home' render={ (props) => <Login {...props} setIsAuthenticated={setIsAuthenticated} nowCurrentUser={nowCurrentUser} setCurrentUser={setCurrentUser} user={currentUser} /> } />
          <Route path='/about' component={ About } />
          <PrivateRoute path='/profile' component={ Profile } currentUser={currentUser} />
          <Route path='/' component={ Welcome } />
        </Switch>
      </div>
    </div>
  );
}

export default App;