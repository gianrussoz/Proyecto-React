/* eslint-disable no-unused-vars */
import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import CartWidget from './CartWidget';
/* eslint-disable jsx-a11y/anchor-is-valid */
const NavBar = () =>{
    return(
        <Navbar className="navbar" expand="lg">
            <Navbar.Brand className="navbar-brand" href="#home">Debórame otra vez</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse className="navbar-collapse" id="basic-navbar-nav">
                <Nav className="nav-link">
                    <Nav.Link href="#home">Inicio</Nav.Link>
                    <Nav.Link href="#link">Productos</Nav.Link>
                    <CartWidget/>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
}
export default NavBar;