
import React, { useState } from 'react'
import Head from 'next/head'
import Login from '../components/home'
import YellowNav from '../components/yellownav'
import Button from 'react-bootstrap/Button'


export default function LandingPage(props) {
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


    return (
      <div>
        <Head>
            <title>Help Wanted</title>
            <link rel="icon" href="/favicon.ico" />
            
            <script src="https://unpkg.com/react/umd/react.production.min.js" crossorigin></script>
            
            <script
              src="https://unpkg.com/react-dom/umd/react-dom.production.min.js"
              crossorigin></script>
            
            <script
              src="https://unpkg.com/react-bootstrap@next/dist/react-bootstrap.min.js"
              crossorigin></script>
            <link
                  rel="stylesheet"
                  href="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css"
                  integrity="sha384-JcKb8q3iqJ61gNV9KGb8thSsNjpSL0n8PARn9HuZOnIxN0hoP+VmmDGMN5t9UJ0Z"
                  crossOrigin ="anonymous"
              />
          </Head>
          <YellowNav />
          <div className="introText">
            <h4 className="hTags"> "Music produces a kind of pleasure which human nature cannot do without." ― Confucius</h4>
            <h5 className="hTags"> Welcome to Help Wanted! Now is the time to expand your music knowledge and learn from the best!</h5>
            <h5 className="hTags"> Join hundreds of amazing instructors through our easy subscription program </h5>
          </div>  
          <div className="homeBtns">
            <Button variant="primary">
              <a href="/login">Login</a>
            </Button>
            <Button variant="primary">
              <a href="/signup">Signup</a>
            </Button>
          </div>
        <div className="row mt-4">
          
          <Login />
        </div>
      </div>  
    )
}
