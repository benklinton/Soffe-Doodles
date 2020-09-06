import React from "react";
import "./style.css";
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

function Navigation() {
   return (
    <Navbar className="navbar navbar-expand-lg navbar-dark bg-custom static-top">
      <Container>
        <Navbar.Brand>
              <img src="http://placehold.it/150x50?text=Logo" alt=""></img>
            </Navbar.Brand>
        <Navbar.Collapse id="navbarResponsive">
          <Nav className="ml-auto">
            <Nav.Item className="active">
              <Nav.Link href="/">Home
                    <span className="sr-only">(current)</span>
                  </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href="/">About</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href="/">Services</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href="/">Contact</Nav.Link>
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>
        </Container>
    </Navbar>
   )
}

export default Navigation;