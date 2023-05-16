import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <>
            <Navbar bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand href="#home">Navbar</Navbar.Brand>
                    <Nav className="me-auto">
                        <NavLink className={"nav-link"} to="/">Home</NavLink>
                        <NavLink className={"nav-link"} to="/register">Register</NavLink>
                        <NavLink className={"nav-link"} to="/login">Login</NavLink>
                        <NavLink className={"nav-link"} to="/products">Products</NavLink>
                    </Nav>
                </Container>
            </Navbar>
        </>
    )
}

export default Header