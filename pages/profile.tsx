import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Container, Row, Col } from 'react-bootstrap';
import {Card, ListGroup, ListGroupItem} from 'react-bootstrap'
import Navbar from '../components/Navbar'
import Head from 'next/head'


interface User {
    user: any
}


const Profile: React.FC = () => {

    let [user, setUser] = useState<User[]>([])

    useEffect(() => {
        console.log("😺", user)
    }, [user])

    useEffect(() => {
        axios.get<User[]>('http://localhost:3001/users/search')
        .then(response => {
            console.log("response data", response.data);
            setUser( response.data );
            });
    }, []);



    return (
        <div>
            <Head>
            <title>Help Wanted</title>
          </Head>
            <Navbar />
            <Container>
                <Row>
                    <Col lg="4"></Col>

                    <Col lg="6"> 
                        <h2>Welcome to your profile!</h2>
                        <div>
                            <Card style={{ width: '18rem' }} className="m-auto">
                                <Card.Img variant="top" src="holder.js/100px180?text=Image cap" />
                                <Card.Body>
                                  <Card.Title><h3>{user.name}</h3></Card.Title>
                                  <Card.Text>
                                        <h5>About Me:</h5>
                                        {user.bio}
                                  </Card.Text>
                                </Card.Body>
                                <ListGroup className="list-group-flush">
                                  <ListGroupItem> <h5>These are the instruments that I can play:</h5>{user.instrumentsPlayed} </ListGroupItem>
                                </ListGroup>
                            </Card> 
                        </div>
                    </Col> 

                    <Col lg="4"></Col>

                </Row>
            </Container>
        </div>
    )
}

export default Profile