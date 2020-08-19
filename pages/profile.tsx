import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Container, Row, Col } from 'react-bootstrap';
import {Card, ListGroup, ListGroupItem} from 'react-bootstrap'
import Navbar from '../components/Navbar'
import Head from 'next/head'


interface User {
    user: any,
    avatar: string,
    name: string,
    bio: string,
    instrumentsPlayed: string
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
                <Row className="header">
                    <Col lg="3"></Col>
                    
                    <Col lg="6"> <h1>Welcome to your profile!</h1> </Col>
                    
                    <Col lg="3"></Col>
                </Row>

                <Row>
                    <Col lg="3"></Col>

                    <Col lg="6"> 
                        <div>
                            <Card style={{ width: '35vw' }} className="cards">
                                <Card.Img variant="top" src={user.avatar} />
                                <Card.Body>
                                  <Card.Title><h3 className="name">{user.name}</h3></Card.Title>
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

                    <Col lg="3"></Col>

                </Row>
            </Container>
        </div>
    )
}

export default Profile