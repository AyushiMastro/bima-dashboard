import React, { useState } from "react";
import { FormControl, Row, Col, Image } from "react-bootstrap";
function Manage() {
  return (
    <div className="explore-vedio">
      <div class="search-bar position-relative">
        <FormControl type="text" placeholder="Search" className="mr-sm-2" />
        <span className="search-ico">
          <i class="fas fa-search"></i>
        </span>
      </div>
      <Row>
        <Col sm={3}>
          <div className="card">
            <Image
              src="https://user-images.githubusercontent.com/101482/29592647-40da86ca-875a-11e7-8bc3-941700b0a323.png"
              roundedCircle
            />
            <div className="text-center">
              Nandan<span className="d-block">nandan@52</span>
            </div>
          </div>
        </Col>
        <Col sm={3}>
          <div className="card">
            <Image
              src="https://user-images.githubusercontent.com/101482/29592647-40da86ca-875a-11e7-8bc3-941700b0a323.png"
              roundedCircle
            />
            <div className="text-center">
              Nandan<span className="d-block">nandan@52</span>
            </div>
          </div>
        </Col>
        <Col sm={3}>
          <div className="card">
            <Image
              src="https://user-images.githubusercontent.com/101482/29592647-40da86ca-875a-11e7-8bc3-941700b0a323.png"
              roundedCircle
            />
            <div className="text-center">
              Nandan<span className="d-block">nandan@52</span>
            </div>
          </div>
        </Col>
        <Col sm={3}>
          <div className="card">
            <Image
              src="https://user-images.githubusercontent.com/101482/29592647-40da86ca-875a-11e7-8bc3-941700b0a323.png"
              roundedCircle
            />
            <div className="text-center">
              Nandan<span className="d-block">nandan@52</span>
            </div>
          </div>
        </Col>
      </Row>
      <Row className="mt-5">
        <Col sm={3}>
          <div className="card">
            <Image
              src="https://user-images.githubusercontent.com/101482/29592647-40da86ca-875a-11e7-8bc3-941700b0a323.png"
              roundedCircle
            />
            <div className="text-center">
              Nandan<span className="d-block">nandan@52</span>
            </div>
          </div>
        </Col>
        <Col sm={3}>
          <div className="card">
            <Image
              src="https://user-images.githubusercontent.com/101482/29592647-40da86ca-875a-11e7-8bc3-941700b0a323.png"
              roundedCircle
            />
            <div className="text-center">
              Nandan<span className="d-block">nandan@52</span>
            </div>
          </div>
        </Col>
        <Col sm={3}>
          <div className="card">
            <Image
              src="https://user-images.githubusercontent.com/101482/29592647-40da86ca-875a-11e7-8bc3-941700b0a323.png"
              roundedCircle
            />
            <div className="text-center">
              Nandan<span className="d-block">nandan@52</span>
            </div>
          </div>
        </Col>
        <Col sm={3}>
          <div className="card">
            <Image
              src="https://user-images.githubusercontent.com/101482/29592647-40da86ca-875a-11e7-8bc3-941700b0a323.png"
              roundedCircle
            />
            <div className="text-center">
              Nandan<span className="d-block">nandan@52</span>
            </div>
          </div>
        </Col>
      </Row>
    </div>
  );
}

export default Manage;
