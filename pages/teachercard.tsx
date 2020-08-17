import React from 'react'
import {Card, ListGroup, ListGroupItem} from 'react-bootstrap'

interface UserProps {
    teacher: any // don't have to redeclare the object again
};


const TeacherCard: React.FC<UserProps> = ({teacher}) => {
    return (
        <div>
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src="holder.js/100px180?text=Image cap" />
                <Card.Body>
                  <Card.Title>{teacher.name}</Card.Title>
                  <Card.Text>
                      {teacher.bio}
                  </Card.Text>
                </Card.Body>
                <ListGroup className="list-group-flush">
                  <ListGroupItem> {teacher.instrumentsPlayed} </ListGroupItem>
                  <ListGroupItem> <p>{teacher.email}</p> </ListGroupItem>

                </ListGroup>
                <Card.Body>
                  <Card.Link href="#">Card Link</Card.Link>
                  <Card.Link href="#">Another Link</Card.Link>
                </Card.Body>
            </Card> 
        </div>
    );
};




export default TeacherCard
