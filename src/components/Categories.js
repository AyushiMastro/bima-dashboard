import React, { useState } from "react";
import { Form, FormGroup } from "react-bootstrap";
function Category() {
  return (
    <>
      <div className="categories-head mt-4 pl-4">
        Add Categories/ Sub-Categories/ Multi-Categories{" "}
      </div>
      <div className="d-flex justify-content-center align-items-center categories">
        <Form className="form">
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Multi Name</Form.Label>
            <Form.Control type="name" placeholder="Name" />
          </Form.Group>

          <Form.Group controlId="formBasicPassword">
            <Form.Label>Multi Type</Form.Label>
            <Form.Control type="" placeholder="Type" />
          </Form.Group>
          <Form>
            <Form.Group>
              <Form.Label>Multi Image</Form.Label>
              <Form.Control type="" placeholder="Choose File" />
              <Form.File
                id="exampleFormControlFile1"
                className="form-drop"
                label=""
              />
            </Form.Group>
          </Form>
        </Form>
      </div>
    </>
  );
}

export default Category;
