import React, { useState } from 'react'
import axios from 'axios'
import jwt_decode from 'jwt-decode'
import { Redirect } from 'react-router-dom'
import setAuthToken from '../utils/setAuthToken'
import Head from 'next/head'
import Link from 'next/link'



export default function Login(props) {
    // console logs for testing
    console.log("🏎 Login Component Rendered")
    console.log(props)

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
        
        // make a post request to our API to see check user Authentication
    //     axios.post(`http://localhost:3001/users/login`, userData)
    //     .then(res => {
    //       // take res data and set to token
    //       const { token } = res.data
          
    //       // save token to localStorage
    //       localStorage.setItem('jwtToken', token)
          
    //       // set token for Auth Header
    //       setAuthToken(token)
          
    //       // decode jwt token
    //       const decoded = jwt_decode(token)
          
    //       // set current user 
    //       props.nowCurrentUser(decoded)
    //       // console.log("props.nowCurrentUser in login.tsx", props.nowCurrentUser(decoded))
    //     })
    //         .catch(err => console.log(err))
    // }

    // if (props.user) return <Redirect to="/profile" currentUser={props.user} />



    
    return (
        <div className="row mt-4">
          
        <div className="col-md-7 offset-md-3">
          <div className="card card-body">
            <h2 className="py-2">Login</h2>
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input type="email" name="email" value={email} onChange={handleEmail} className="form-control" required />
              </div>
              <div className="form-group">
                <label htmlFor="password">Password</label>
                <input type="password" name="password" value={password} onChange={handlePassword} className="form-control" required />
              </div>
              <button type="submit" className="btn btn-primary float-right">
                <Link href="/profile">
                  <a >Submit</a>
                </Link>
              </button>
          </div>
        </div>
      </div>
    )
}
