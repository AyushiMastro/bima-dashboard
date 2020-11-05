import React, { useState } from "react";
import {
  Form,
  FormGroup,
  Row,
  Col,
  Button,
  Table,
  Image,
  Modal,
} from "react-bootstrap";
function Info() {
  return (
    <div className="password-form">
      <Form>
        <Form>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Name</Form.Label>
            <Form.Control type="" placeholder="" />
          </Form.Group>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" />
          </Form.Group>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Bio</Form.Label>
            <Form.Control type="" placeholder="" />
          </Form.Group>
        </Form>

        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
}

export default Info;
