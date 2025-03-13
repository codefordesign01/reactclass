import React from 'react'
import { Link } from 'react-router-dom'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

const MyNavbar = () => {
  return (
    <div>
      <Navbar expand="lg" className="bg-info">
      <Container>
        <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            
              <Link className='nav-link' to="/">Home</Link>
            
            
              <Link className='nav-link' to="/about">About</Link>
            
            
              <Link className='nav-link' to="/service">Service</Link>
            
            
              <Link className='nav-link' to="/contact">Contact</Link>
            
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </div>
  )
}

export default MyNavbar
