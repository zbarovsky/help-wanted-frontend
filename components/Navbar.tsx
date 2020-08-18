import React from 'react'
import { Nav } from 'react-bootstrap'


const Navbar = () => {

    return (
        <div>
            <Nav defaultActiveKey="/home" as="ul">
                <Nav.Item as="li">
                    <Nav.Link href="/profile">Profile</Nav.Link>
                </Nav.Item>
                <Nav.Item as="li">
                    <Nav.Link href="viewcards">View Instructors</Nav.Link>
                </Nav.Item>
                <Nav.Item as="li">
                    <Nav.Link href="/">Logout</Nav.Link>
                </Nav.Item>
            </Nav>
            
        </div>
    )
}

export default Navbar