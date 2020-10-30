import React, { useState } from "react";
import {
  Row,
  Col,
  Navbar,
  Nav,
  NavDropdown,
  FormControl,
  Button,
  Breadcrumb,
} from "react-bootstrap";

function TopNav(props) {
  return (
    <Navbar collapseOnSelect expand="lg" bg="white" variant="dark">
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="#features">Your Profile</Nav.Link>
          <Nav.Link href="#pricing">Dashboard</Nav.Link>
        </Nav>
        <Nav>
          <Nav.Link href="#deets">Dave Nikon</Nav.Link>
          <Nav.Link eventKey={2} href="#memes">
            Notification
          </Nav.Link>
          <Nav.Link eventKey={2} href="#memes">
            Setting
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default TopNav;
