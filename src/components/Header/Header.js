import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";

import CustomLink from "../../CustomLink/CustomLink";

const Header = () => {
  return (
    <div>
      <>
        <Navbar
          collapseOnSelect
          fixed="top"
          expand="sm"
          bg="dark"
          variant="dark"
        >
          <Container>
            <Navbar.Toggle aria-controls="resposive-navbar-nav" />
            <Navbar.Brand href="/">Home</Navbar.Brand>
            <Navbar.Collapse id="resposive-navbar-nav">
              <Nav className="ms-auto">
                <CustomLink to="/reviews">Reviews</CustomLink>
                <CustomLink to="/dashboard">Dashboard</CustomLink>
                <CustomLink to="/blogs">Blogs</CustomLink>
                <CustomLink to="/about">About</CustomLink>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </>
    </div>
  );
};

export default Header;
