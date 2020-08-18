import React, { useState, useEffect } from 'react';
import axios from 'axios';
import jwt_decode from 'jwt-decode';
import setAuthToken from '../utils/setAuthToken';
import { Redirect } from 'react-router-dom'
import LandingCarousel from './landingcarousel'
import { Container, Row, Col } from 'react-bootstrap';
import Link from 'next/link'


const Login: React.FC = () => {
  // console logs for testing
  console.log("🏎 Login Component Rendered")
  

  let [email, setEmail] = useState("")
  let [password, setPassword] = useState("")

  let handleEmail = (e) => {
      setEmail(e.target.value)
  }

  let handlePassword = (e) => {
      setPassword(e.target.value)
  }
  
  let handleSubmit = (e) => {
      e.preventDefault();
      // capture userData
      const userData = {
        email: email,
        password: password
      }
    }
 
  return (
      <div className="login">
        <Container>
          <Row>
            <Col>
              <div className="card">
                <h2 className="py-2">Login</h2>
                  <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input type="email" name="email" value={email} onChange={handleEmail} className="form-control" required />
                  </div>
                  <div className="form-group">
                    <label htmlFor="password">Password</label>
                    <input type="password" name="password" value={password} onChange={handlePassword} className="form-control" required />
                  </div>
                  <Row>
                    <Col sm="6">
                      <button type="submit" onClick={handleSubmit} className="btn btn-primary float-right">
                      <Link href="profile">
                        <a>
                          Login
                        </a>
                      </Link>
                      </button>
                    </Col>
                    <Col sm="6">
                      <button type="submit" className="btn btn-primary float-right">
                        <Link href="signup">
                          <a>
                            Register
                          </a>
                        </Link>
                      </button>
                    </Col>
                  </Row>
              </div>
            </Col>
          </Row>

          <Row>
            <Col lg="1"></Col>

            <Col lg="10">
              <LandingCarousel />
            </Col>

            <Col lg="1"></Col>
          </Row>
        </Container>
      </div>
    )
}

export default Login