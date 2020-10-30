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
          <h3>BIMA</h3>
          <ul className="side-bar">
            <p className="">Profile</p>
            <li>
              <a href="">Reports</a>
            </li>
            <li>
              <a href="">Dashboard</a>
            </li>
            <li>
              <a href="/Category">Categories</a>
            </li>
            <li>
              <a href="">Admin</a>
            </li>
            <li>
              <a href="/Prospect">Prospects</a>
            </li>
            <li>
              <a href="">CRM data</a>
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
