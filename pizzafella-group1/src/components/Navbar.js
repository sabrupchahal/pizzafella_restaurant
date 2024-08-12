import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Navbar, Nav } from 'react-bootstrap';
import img1 from './images/logo.jpeg'; 

export default function NavBar() {
    return (
        <>
            <div id="custom-navbar"> 
                <Navbar bg="dark" data-bs-theme="dark">
                    <Container className="justify-content-center">
                        <Nav id="nav" className="me-auto">
                            <Nav.Link as={Link} to="/">Home</Nav.Link>
                            <Nav.Link as={Link} to="/menu">Menu</Nav.Link>
                            <Nav.Link as={Link} to="/about">About</Nav.Link>
                            <Nav.Link as={Link} to="/contact">Contact</Nav.Link>
                        </Nav>
                    </Container>
                </Navbar>
            </div>
            <header>
                <img src={img1} alt="logo_pizza_fella" />
                <h1>Pizza Fella</h1>
                <p>Delicious Pizzas Right to Your Doorstep</p>
            </header>
        </>
    );
}
