import React from 'react'
import { Nav,  } from 'react-bootstrap'


const Navbar: React.FC = () => {

    return (
        <div className="navDiv">
            <div className="logoDiv">
                <a href="/">
                    <img className="navLogo" src="/logo.png" />
                </a>
            </div>
            <div className="navLinks">
                <Nav defaultActiveKey="/home" as="ul">
                    <Nav.Item as="li">
                        <Nav.Link href="/profile">Profile</Nav.Link>
                    </Nav.Item>
                    <Nav.Item as="li">
                        <Nav.Link href="viewcards">View Instructors</Nav.Link>
                    </Nav.Item>
                    <Nav.Item as="li">
                        <Nav.Link href="about">About</Nav.Link>
                    </Nav.Item>
                    <Nav.Item as="li">
                        <Nav.Link href="/">Logout</Nav.Link>
                    </Nav.Item>
                </Nav>
            </div>
        </div>
    )
}

export default Navbar