import React from 'react'
import {Card, ListGroup, ListGroupItem} from 'react-bootstrap'
import Navbar from '../components/Navbar'


const About: React.FC = () => {
    return (
        <div className="about">
            <Navbar />
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src="https://ca.slack-edge.com/T0351JZQ0-UV0CS3TQF-6394ecdb9322-512" />
                <Card.Body>
                    <Card.Title>Zack Barovsky</Card.Title>
                    <Card.Text>
                        Zack is the man with the plan.  He led this band of misfits through the battlefield that is Typescript, and he came out the other side as a victor.  When given the opportunity, Zack will ALWAYS volunteer as tribute.
                    </Card.Text>
                </Card.Body>
                <ListGroup className="list-group-flush">
                    <ListGroupItem> <h6>Zack's Contributions to the Project: </h6>
                        Backend, frontend, Stripe implentation, Git Master, funny stories </ListGroupItem>
                </ListGroup>
                {/* <Card.Body>
                    <Card.Link href="/payment">Schedule a Lesson</Card.Link>
                    <Card.Link href="google.com">See my Calendar</Card.Link>
                </Card.Body> */}
            </Card> 


            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src="https://ca.slack-edge.com/T0351JZQ0-U01415U60F3-6e0c540a4b33-512" />
                <Card.Body>
                    <Card.Title>Salman (Sal) Malik</Card.Title>
                    <Card.Text>
                        Salman is a man of the people.  He is always willing to drop what he is doing to offer a hand whether he has experience with the subject or not.  Salman kept the team going with his positive attitude, deep knowledge of Typescript, and dashing good looks.
                    </Card.Text>
                </Card.Body>
                <ListGroup className="list-group-flush">
                    <ListGroupItem> <h6>Sal's Contributions to the Project: </h6>
                        Frontend, styling, Typescript wizard, moral support </ListGroupItem>
                </ListGroup>
                {/* <Card.Body>
                    <Card.Link href="/payment">Schedule a Lesson</Card.Link>
                    <Card.Link href="google.com">See my Calendar</Card.Link>
                </Card.Body> */}
            </Card> 
            <br /><br />

            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src="https://ca.slack-edge.com/T0351JZQ0-U0141JELV4Y-710a221b9c63-512" />
                <Card.Body>
                    <Card.Title>Nick Hvattum</Card.Title>
                    <Card.Text>
                        Nick was born to be a rock solid follower.  He might not always be the one with the big ideas, but when given a task, Nick will probably take a shot at getting it done.
                    </Card.Text>
                </Card.Body>
                <ListGroup className="list-group-flush">
                    <ListGroupItem> <h6>Nick's Contributions to the Project: </h6>
                        Frontend, styling, logo, bringing his kid to the Zoom room to distract everyone </ListGroupItem>
                </ListGroup>
                {/* <Card.Body>
                    <Card.Link href="/payment">Schedule a Lesson</Card.Link>
                    <Card.Link href="google.com">See my Calendar</Card.Link>
                </Card.Body> */}
            </Card> 


            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src="https://ca.slack-edge.com/T0351JZQ0-U011SC6GRMK-b7744c409e1e-512" />
                <Card.Body>
                    <Card.Title>Josh Danao</Card.Title>
                    <Card.Text>
                        While Josh was not an original member of "Zack and the Boys 2.0", he earned his spot among the ranks by offering suggestions, debugging, and styling.  Although this is not the project he signed up for, he proved himself to be an honorary member, and an important part of the team.
                    </Card.Text>
                </Card.Body>
                <ListGroup className="list-group-flush">
                    <ListGroupItem> <h6>About Josh: </h6>
                        Josh lives in Renton, Washington.  He is looking for a nice girl that he can introduce his parents to.  Although not required, a girl with a sense of humor is prefered in order to keep up with Josh's quick wit and joyful outlook on life.  Josh is a man of confidence; he is more than willing to show off his lean body and stunning tattoos.  Who needs to buy a fan when you can just pop your shirt off when you get too hot?  That's just the way Josh lives his life.  Josh, "the-man-that-has-everything", is just missing one thing. . . a lucky lady that is enjoys life as much as he does. 
                    </ListGroupItem>
                </ListGroup>
                {/* <Card.Body>
                    <Card.Link href="/payment">Schedule a Lesson</Card.Link>
                    <Card.Link href="google.com">See my Calendar</Card.Link>
                </Card.Body> */}
            </Card> 
        </div>
    )

}

export default About