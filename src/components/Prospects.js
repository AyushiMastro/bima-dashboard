import React, { useState } from "react";
import { Form, FormGroup, Row, Col, Button } from "react-bootstrap";
function Prospect() {
  return (
    <>
      <div className="categories-head mt-4 pl-4">Add Prospects</div>
      <div className="d-flex justify-content-center align-items-center categories prospects">
        <Form className="form">
          <Form.Group as={Row} controlId="">
            <Form.Label column sm="2">
              First name:
            </Form.Label>
            <Col sm="10">
              <Form.Control type="" placeholder="First name" />
            </Col>
          </Form.Group>
          <Form.Group as={Row} controlId="">
            <Form.Label column sm="2">
              Last name:
            </Form.Label>
            <Col sm="10">
              <Form.Control type="" placeholder="Last name" />
            </Col>
          </Form.Group>
          <Form.Group as={Row} controlId="">
            <Form.Label column sm="2">
              DOB:
            </Form.Label>
            <Col sm="10">
              <Form.Control type="" placeholder="DOB" />
            </Col>
          </Form.Group>
          <Form.Group as={Row} controlId="">
            <Form.Label column sm="2">
              DOM:
            </Form.Label>{" "}
            <Col sm="10">
              <Form.Control type="" placeholder="DOB" />
            </Col>
          </Form.Group>
          <Form.Group as={Row} controlId="">
            <Form.Label column sm="2">
              Mobile:
            </Form.Label>
            <Col sm="10">
              <Form.Control type="" placeholder="Mobile" />
            </Col>
          </Form.Group>
          <Form.Group as={Row} controlId="">
            <Form.Label column sm="2">
              Email:
            </Form.Label>
            <Col sm="10">
              <Form.Control type="" placeholder="" />
            </Col>
          </Form.Group>
          <Form.Group as={Row} controlId="">
            <Form.Label column sm="2">
              Ref-Source:
            </Form.Label>
            <Col sm="10">
              <Form.Control type="" placeholder="" />
            </Col>
          </Form.Group>
          <Form.Group as={Row} controlId="">
            <Form.Label column sm="2">
              Notes:
            </Form.Label>
            <Col sm="10">
              <Form.Control type="" placeholder="" />
            </Col>
          </Form.Group>

          <Form.Group as={Row} controlId="">
            <Form.Label column sm="2">
              Pros-Type:
            </Form.Label>
            <Col sm="10">
              <Form.Control type="" placeholder="" />
            </Col>
          </Form.Group>
          <Form.Group as={Row} controlId="">
            <Form.Label column sm="2">
              Status:
            </Form.Label>
            <Col sm="10">
              <input type="radio" id="male" name="gender" value="male" />
              <label className="ml-1 mr-2" for="male">
                Hot
              </label>
              <input type="radio" id="male" name="gender" value="male" />
              <label className="ml-1 mr-2" for="male">
                Warm
              </label>
              <input type="radio" id="male" name="gender" value="male" />
              <label className="ml-1 mr-2" for="male">
                Cold
              </label>
            </Col>
          </Form.Group>
          <div className="d-flex justify-content-center align-items-center btn-submit">
            <Button variant="primary" type="submit">
              Submit
            </Button>
          </div>
        </Form>
      </div>
    </>
  );
}

export default Prospect;
