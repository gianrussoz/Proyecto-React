/* eslint-disable no-unused-vars */
import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import CartWidget from './CartWidget';
import { NavbarLink } from '../styles/styled-components';
/* eslint-disable jsx-a11y/anchor-is-valid */
const NavBar = () =>{
    return(
        <Navbar className="navbar" expand="lg">
            <Link to='/' style={{textDecoration: "none", color: "#f6f6f6"}}><Navbar.Brand className="navbarBrand" href="#home">Devórame otra vez</Navbar.Brand></Link>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse className="navbar-collapse" id="basic-navbar-nav">
                <Nav className="nav-link">
                    <Nav.Link><Link to='/category/Perfumes' style={{textDecoration: "none", color: "#f6f6f6"}}><NavbarLink>Perfumes</NavbarLink></Link></Nav.Link>
                    <Nav.Link><Link to='/category/Difusores' style={{textDecoration: "none", color: "#f6f6f6"}}><NavbarLink>Difusores</NavbarLink></Link></Nav.Link>
                    <Nav.Link><Link to='/category/Aerosoles' style={{textDecoration: "none", color: "#f6f6f6"}}><NavbarLink>Aerosoles</NavbarLink></Link></Nav.Link>
                    <Nav.Link><Link to='/category/Aceites' style={{textDecoration: "none", color: "#f6f6f6"}}><NavbarLink>Aceites</NavbarLink></Link></Nav.Link>
                    <Link to='/cart'> <CartWidget/> </Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
}
export default NavBar;