import React from 'react'
import './Navigation.css'
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { Link } from 'react-router-dom'

const Navigation = () => {


    return (
        <Navbar sticky="top" collapseOnSelect expand="lg" bg="dark" variant="dark">

            <Link to="/">
                <Navbar.Brand href="#home">//\\//</Navbar.Brand>
            </Link>

            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="mr-auto">

                    <Link to='/experiences'>
                        <Nav.Link href="#features">Experiences</Nav.Link>
                    </Link>

                    <Link to="/projects">
                        <Nav.Link href="#pricing">Projects</Nav.Link>
                    </Link>

                    <Link to="/references">
                        <Nav.Link href="#references">References</Nav.Link>
                    </Link>

                </Nav>
                <Nav>
                    <Link to='/aboutme'>
                        <Nav.Link href="#aboutme">About Me</Nav.Link>
                    </Link>

                    <Link to='/misc'>
                        <Nav.Link href="#misc"> Misc. </Nav.Link>
                    </Link>

                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
}



export default Navigation
