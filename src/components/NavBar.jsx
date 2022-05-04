/* eslint-disable no-unused-vars */
import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import CartWidget from './CartWidget';
/* eslint-disable jsx-a11y/anchor-is-valid */
const NavBar = () =>{
    return(
        <Navbar className="navbar" expand="lg">
            <Link to='/'><Navbar.Brand className="navbar-brand" href="#home">Devórame otra vez</Navbar.Brand></Link>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse className="navbar-collapse" id="basic-navbar-nav">
                <Nav className="nav-link">
                    <Nav.Link><Link to='/category/Perfumes'>Perfumes</Link></Nav.Link>
                    <Nav.Link><Link to='/category/Difusores'>Difusores</Link></Nav.Link>
                    <Nav.Link><Link to='/category/Aerosoles'>Aerosoles</Link></Nav.Link>
                    <Nav.Link><Link to='/category/Aceites'>Aceites</Link></Nav.Link>
                    <Link to='/cart'> <CartWidget/> </Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
}
export default NavBar;