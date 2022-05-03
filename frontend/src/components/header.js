import React from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';

const navbarStyle = {
    backgroundColor: 'darkred'
}

const Header = ({ title }) => {


    return (
        <Navbar style={navbarStyle} variant="dark">
            <Container>
                <Navbar.Brand href="/">{title}</Navbar.Brand>
                <Nav className="me-auto">
                    <Nav.Link href="#Home">Home</Nav.Link>
                    <Nav.Link href="#Concerts">Concerts</Nav.Link>
                    <Nav.Link href="#Merch">Merch</Nav.Link>
                    <Nav.Link href="#Contact">Contact</Nav.Link>
                </Nav>
            </Container>
        </Navbar>
    )
};

export default Header;



