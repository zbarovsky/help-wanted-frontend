import React, { useState, useEffect } from 'react';
import axios from 'axios';
import jwt_decode from 'jwt-decode';
import setAuthToken from '../utils/setAuthToken';
import { Redirect } from 'react-router-dom'
import LandingCarousel from './LandingCarousel'
import { Container, Row, Col } from 'react-bootstrap';
import Navbar from './Navbar'


const Login = (props) => {
  console.log('💔')
  console.log("props", props)

  
  let [email, setEmail] = useState('')
  let [password, setPassword] = useState('')

  let handleEmail = (e) => {
    setEmail(e.target.value)
  }

  let handlePassword = (e) => {
    setPassword(e.target.value)
  }

  let handleSubmit = (e) => {
    e.preventDefault();
    const userData = {
      email: email,
      password: password
    }
    let nowCurrentUser = (userData) => {
      props.setCurrentUser(userData)
      props.setIsAuthenticated(true)
    }
    
    axios.post('http://localhost:3001/users/login', userData)
      .then(res => {
        const { token } = res.data;
        // Save to LocalStorage
        localStorage.setItem('jwtToken', token);
        // Set token to Auth Header
        setAuthToken(token);
        // Decode token to get user data
        const decoded = jwt_decode(token);
        // Set current user
        // props.nowCurrentUser(decoded);
        nowCurrentUser(decoded);
      })
      .catch(err => console.log(err));
  }

  if (props.user) return <Redirect to="/profile" currentUser={props.user} />

  return (
      <div className="login">
        <Container>
          <Row>
            <Col>
              <div className="card">
                <h2 className="py-2">Login</h2>
                <form onSubmit={handleSubmit}>
                  <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input type="email" name="email" value={email} onChange={handleEmail} className="form-control" required />
                  </div>
                  <div className="form-group">
                    <label htmlFor="password">Password</label>
                    <input type="password" name="password" value={password} onChange={handlePassword} className="form-control" required />
                  </div>
                  <button type="submit" className="btn btn-primary float-right">Submit</button>
                </form>
              </div>
            </Col>
          </Row>

          <Row>
            <Col lg="2"></Col>

            <Col lg="8">
              <LandingCarousel />
            </Col>

            <Col lg="2"></Col>
          </Row>
        </Container>
      </div>
    )
}

export default Login;