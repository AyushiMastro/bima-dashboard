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
function Account() {
  return (
    <div className="password-form">
      <Form>
        <Form.Group controlId="formBasicPassword">
          <Form.Label>New Password</Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>

        <Form.Group controlId="formBasicPassword">
          <Form.Label>Confirm Password</Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>

        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
}

export default Account;
