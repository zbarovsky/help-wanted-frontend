import React, { useState, useEffect } from 'react';
import axios from 'axios';
import jwt_decode from 'jwt-decode';
import setAuthToken from '../utils/setAuthToken';
import { Redirect } from 'react-router-dom'
import LandingCarousel from './landingcarousel'
import { Container, Row, Col } from 'react-bootstrap';
import Link from 'next/link'


const Login: React.FC = () => {
  return (
      <div className="login">
        <Container>
          <Row>
            <Col lg="4"> </Col>


            <Col lg="4">
              <h3>Logo</h3>
            </Col>

            <Col lg="4"></Col>
          </Row>

          <Row>
            <Col lg="4"></Col>


            <Col>
              <h5>“Music produces a kind of pleasure which human nature cannot do without.” <br />
              ― Confucius</h5>
              <p>Music inspires people, Music moves people, Music informs people</p>
              <p> Now is the time if you have been wanting to learn how to play a new instrument and Help Wanted is here for you!</p>
              <p> Pick from hundreds of expert instructors through our affordable subscription model and learn today!</p>
            </Col>
          </Row>

          <Row>
            <Col md="2"></Col>

            <Col md="4">
            <div> <a href="/login">
                <h5>Login</h5>
                </a>
              </div>
            </Col>

            <Col md="2"></Col>

            <Col md="4">
              <div> <a href="/signup">
                <h5>Register</h5>
                </a>
              </div>
            </Col>
          </Row>


          <Row>

            <Col>
              <LandingCarousel />
            </Col>

          </Row>
        </Container>
      </div>
    )
}

export default Login