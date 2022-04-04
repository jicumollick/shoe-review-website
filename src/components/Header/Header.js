import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";

const Header = () => {
  return (
    <div>
      <>
        <Navbar bg="dark" variant="dark">
          <Container>
            <Navbar.Brand href="#home">Navbar</Navbar.Brand>
            <Nav className="ms-auto">
              <Nav.Link href="#reviews">Reviews</Nav.Link>
              <Nav.Link href="#dashboard">Dashboard</Nav.Link>
              <Nav.Link href="#blog">Blog</Nav.Link>
              <Nav.Link href="#about">About</Nav.Link>
            </Nav>
          </Container>
        </Navbar>
      </>
    </div>
  );
};

export default Header;
