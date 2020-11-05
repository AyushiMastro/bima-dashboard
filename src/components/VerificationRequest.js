import React, { useState } from "react";
import { Nav } from "react-bootstrap";
function Request() {
  return (
    <>
      <div className="request">
        <Nav variant="tabs" defaultActiveKey="/">
          <Nav.Item>
            <Nav.Link href="/">Approve</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="link-1">Option 2</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="disabled" disabled>
              Decline
            </Nav.Link>
          </Nav.Item>
        </Nav>
      </div>
    </>
  );
}

export default Request;
