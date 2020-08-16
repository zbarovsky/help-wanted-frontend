import React, { FunctionComponent } from 'react'
import { Link } from 'react-router-dom'
// import { isAuthenticated }  from '../App'
import { Navbar, NavbarBrand, Nav as Navi, NavLink } from 'reactstrap'


type NavProps = {
    isAuthenticated: boolean,
}

const Nav: FunctionComponent<NavProps> = ({isAuthenticated}) => {


    return (
        <div>
            <ul>
                <li>
                    <a>Profile</a>
                </li>
                <li>
                    <a>Instructors</a>
                </li>
                {
                    !isAuthenticated ?
                        <li>
                            <a>Log In</a>
                        </li>
                    : <li>
                        <a>Log Out</a>
                    </li>
                }
            </ul>
        </div>
    )
}

export default Nav