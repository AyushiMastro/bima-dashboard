import React, { useState } from "react";
import { Tab, Tabs, Col, Row, Image } from "react-bootstrap";
function Account() {
  return (
    <div className="recharge">
      <Tabs defaultActiveKey="profile" id="uncontrolled-tab-example">
        <Tab eventKey="home" title="List">
          <div className="user-recharge">
            <Image
              src="https://user-images.githubusercontent.com/101482/29592647-40da86ca-875a-11e7-8bc3-941700b0a323.png"
              roundedCircle
            />
            <div className="">
              Nandan<span className="d-block">nandan@52</span>
            </div>
          </div>
          <div className="user-recharge">
            <Image
              src="https://user-images.githubusercontent.com/101482/29592647-40da86ca-875a-11e7-8bc3-941700b0a323.png"
              roundedCircle
            />
            <div className="">
              Nandan<span className="d-block">nandan@52</span>
            </div>
          </div>
        </Tab>
        <Tab eventKey="profile" title="Category">
          <ul className="categry">
            <li>Gifting</li>
            <li>Coins</li>
            <li>Badges</li>
          </ul>
        </Tab>
        <Tab eventKey="contact" title="Gallery">
          <Row className="pt-4">
            <Col sm={4}>
              <div className="card">
                {" "}
                <Image
                  src="https://user-images.githubusercontent.com/101482/29592647-40da86ca-875a-11e7-8bc3-941700b0a323.png"
                  roundedCircle
                />
              </div>
            </Col>
            <Col sm={4}>
              <div className="card">
                {" "}
                <Image
                  src="https://user-images.githubusercontent.com/101482/29592647-40da86ca-875a-11e7-8bc3-941700b0a323.png"
                  roundedCircle
                />
              </div>
            </Col>
            <Col sm={4}>
              <div className="card">
                {" "}
                <Image
                  src="https://user-images.githubusercontent.com/101482/29592647-40da86ca-875a-11e7-8bc3-941700b0a323.png"
                  roundedCircle
                />
              </div>
            </Col>
          </Row>
        </Tab>
        <Tab eventKey="qweq" title="Add New"></Tab>
      </Tabs>
    </div>
  );
}

export default Account;
