import React, { useState } from "react";
import {
  Row,
  Col,
  Nav,
  NavDropdown,
  FormControl,
  Button,
  Breadcrumb,
} from "react-bootstrap";
import Navbar from "./Navbar";

function Sidenav(props) {
  return (
    <Row>
      <Col sm={2} className="pr-0">
        <div className="sidebar">
          <h3>STARMAKER</h3>
          <ul className="side-bar">
            <p className="">Profile</p>
            <li>
              <a href="/User">User</a>
            </li>
            <li>
              <a href="/Vedios">Vedios</a>
            </li>
            <li>
              <NavDropdown
                title="Sound"
                className="pl-0"
                id="collasible-nav-dropdown"
              >
                <NavDropdown.Item href="#action/3.1">Sad</NavDropdown.Item>
                <NavDropdown.Item href="/Sound">Romantic</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Comedy</NavDropdown.Item>

                <NavDropdown.Item href="#action/3.4">
                  Devotional
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.4">Funny</NavDropdown.Item>
              </NavDropdown>
            </li>
            <li>
              <NavDropdown
                title="Profile"
                className="pl-0"
                id="collasible-nav-dropdown"
              >
                <NavDropdown.Item href="/Profile">Password</NavDropdown.Item>
                <NavDropdown.Item href="/Info">User Info</NavDropdown.Item>
              </NavDropdown>
            </li>
            <li>
              <a href="/VerificationRequest">Verification Request</a>
            </li>
            <li>
              <a href="/ManageVedio">Manage Content</a>
            </li>
            <li>
              <a href="/Explore">Explore Vedios</a>
            </li>
            <li>
              <a href="/Recharge">Recharges</a>
            </li>
          </ul>
          <p>help</p>
          <ul className="side-bar">
            <li>
              <a href="">Contact</a>
            </li>
            <li>
              <a href="">About</a>
            </li>
            <li>
              <a href="">Report</a>
            </li>
          </ul>
        </div>
      </Col>
      <Col sm={10} className="pl-0">
        <Navbar />
        {console.log(props.children)}
        {props.children}
      </Col>
    </Row>
  );
}

export default Sidenav;
