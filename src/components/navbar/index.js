import React from "react";
import "./style.css";
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { BrowserRouter as Router, } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Logo from './images/Logo.png';
import NavDropdown from 'react-bootstrap/NavDropdown';

function Navigation() {
  return (
    <Nav className="navbar navbar-expand-lg navbar-dark bg-custom static-top">
      <Container>
        <Navbar.Brand>
          <img src={Logo} alt="Logo"></img>
        </Navbar.Brand>
        <Button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </Button>
        <Navbar.Collapse id="navbarResponsive">
          <ul className="navbar-nav ml-auto">
            <Nav.Item>
              <Nav.Link href="/">Home
                  </Nav.Link>
            </Nav.Item>
            <Router>
              <Nav.Item>
                <Nav.Link href="/gallery">Gallery</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link href="/application">Application</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link href="/sires-dames">Sires and Dames</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link href="/avaliable-puppies">Avaliable Puppies</Nav.Link>
              </Nav.Item>
              <NavDropdown title="More" id="basic-nav-dropdown">
                <NavDropdown.Item href="/health"> Health Guarantee</NavDropdown.Item>
                <NavDropdown.Item href="/contact"> Contact Us</NavDropdown.Item>
                <NavDropdown.Item href="/faq"> FAQ</NavDropdown.Item>
                <NavDropdown.Item href="/training">Training</NavDropdown.Item>
                <NavDropdown.Item href="/adoption">How to Adopt</NavDropdown.Item>
                <NavDropdown.Item href="/about"> How We Do It</NavDropdown.Item>
                <NavDropdown.Item href="/products"> Products</NavDropdown.Item>
              </NavDropdown>
            </Router>
          </ul>
        </Navbar.Collapse>
      </Container>
    </Nav>
  )
}

export default Navigation;