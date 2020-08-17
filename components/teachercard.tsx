import React from 'react'
import {Card, ListGroup, ListGroupItem} from 'react-bootstrap'
import Head from 'next/head'

interface UserProps {
    teacher: any // don't have to redeclare the object again
};


const TeacherCard: React.FC<UserProps> = ({teacher}) => {
    return (
        <div>
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={teacher.avatar} />
                <Card.Body>
                    <Card.Title>{teacher.name}</Card.Title>
                    <Card.Text>
                        <h6>Email:</h6>
                        {teacher.email}
                    </Card.Text>
                </Card.Body>
                <ListGroup className="list-group-flush">
                    <ListGroupItem> <h6>Instruments that I am interested in: </h6>
                        {teacher.instrumentsPlayed} </ListGroupItem>
                    <ListGroupItem>  
                        <h6>Bio:</h6>
                        {teacher.bio}
                    </ListGroupItem>
                </ListGroup>
                <Card.Body>
                    <Card.Link href="/payment">Schedule a Lesson</Card.Link>
                    <Card.Link href="google.com">See my Calendar</Card.Link>
                </Card.Body>
            </Card> 
            <br />
        </div>
    );
};




export default TeacherCard
