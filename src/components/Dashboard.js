import React, { useState, Component } from "react";
import {
  Row,
  Col,
  Button,
  Breadcrumb,
  ToggleButton,
  ToggleButtonGroup,
  Card,
  Table,
  Carousel,
  Image,
} from "react-bootstrap";
import Slider from "react-slick";

import CommonCard from "./common/card";

import { cardContent } from "../utils/commonvar";
function Dash() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 2,
  };
  return (
    <div className="dashboard">
      <div className="d-flex justify-content-between">
        <h3>Hi Dave, all set for your analytics</h3>
        <div className="">
          <ToggleButtonGroup type="radio" name="options" defaultValue={1}>
            <ToggleButton value={2}>Day</ToggleButton>
            <ToggleButton value={3}>Week</ToggleButton>
            <ToggleButton value={1}>Month</ToggleButton>
          </ToggleButtonGroup>
        </div>
      </div>
      <Row className="mt-5">
        <Col sm={5}>
          <Card
            className=""
            data-aos="zoom-in"
            data-aos-easing="linear"
            data-aos-duration="1500"
          >
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Table responsive striped bordered hover size="sm">
                <thead>
                  <tr>
                    <th>#</th>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Username</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>1</td>
                    <td>Mark</td>
                    <td>Otto</td>
                    <td>@mdo</td>
                  </tr>
                  <tr>
                    <td>2</td>
                    <td>Jacob</td>
                    <td>Thornton</td>
                    <td>@fat</td>
                  </tr>
                  <tr>
                    <td>3</td>
                    <td colSpan="2">Larry the Bird</td>
                    <td>@twitter</td>
                  </tr>
                </tbody>
              </Table>
            </Card.Body>
          </Card>
        </Col>
        <Col sm={7}>
          <Card>
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Table responsive striped bordered hover size="sm">
                <thead>
                  <tr>
                    <th>#</th>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Username</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>1</td>
                    <td>Mark</td>
                    <td>Otto</td>
                    <td>@mdo</td>
                  </tr>
                  <tr>
                    <td>2</td>
                    <td>Jacob</td>
                    <td>Thornton</td>
                    <td>@fat</td>
                  </tr>
                  <tr>
                    <td>3</td>
                    <td colSpan="2">Larry the Bird</td>
                    <td>@twitter</td>
                  </tr>
                </tbody>
              </Table>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <div className="slider-card mt-5">
        <Row className="mt-5">
          <Col sm={8}>
            <Slider {...settings}>
              {cardContent.map((item) => (
                <Col md={6}>
                  <CommonCard>
                    <div className="d-flex justify-content-center align-items-center pb-2">
                      <Image
                        src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAMFBMVEXp7vG6vsG3u77s8fTCxsnn7O/f5OfFyczP09bM0dO8wMPk6ezY3eDd4uXR1tnJzdBvAX/cAAACVElEQVR4nO3b23KDIBRA0ShGU0n0//+2KmO94gWZ8Zxmr7fmwWEHJsJUHw8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAwO1MHHdn+L3rIoK6eshsNJ8kTaJI07fERPOO1Nc1vgQm2oiBTWJ+d8+CqV1heplLzMRNonED+4mg7L6p591FC+133/xCRNCtd3nL9BlxWP++MOaXFdEXFjZ7r8D9l45C8y6aG0cWtP/SUGhs2d8dA/ZfGgrzYX+TVqcTNRRO9l+fS5eSYzQs85psUcuzk6igcLoHPz2J8gvzWaH/JLS+95RfOD8o1p5CU5R7l5LkfKEp0mQ1UX7hsVXqDpRrifILD/3S9CfmlUQFhQfuFu0STTyJ8gsP3PH7GVxN1FC4t2sbBy4TNRTu7LyHJbqaqKFw+/Q0ncFloo7CjRPwMnCWqKXQZ75El4nKC9dmcJaou9AXOE5UXbi+RGeJygrz8Uf+GewSn9uXuplnWDZJ7d8f24F/s6iq0LYf9olbS3Q8i5oKrRu4S9ybwaQ/aCkqtP3I28QDgeoK7TBya/aXqL5COx67PTCD2grtdOwH+pQV2r0a7YVBgZoKwwIVFQYG6ikMDVRTGByopjD8ATcKb0UhhRTe77sKs2DV7FKSjId18TUEBYVyLhUThWfILHTDqmI85/2RWWjcE/bhP6OD7maT3h20MHsA47JC3PsW0wcwLhv9t0OOPOIkCn21y2bXXwlyylxiYMPk1SuCSmpfK8bNQvIrpAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADwNX4BCbAju9/X67UAAAAASUVORK5CYII="
                        roundedCircle
                      />
                    </div>

                    <p>{item.title}</p>
                    <p>{item.subtitle}</p>
                    <div className="d-flex justify-content-around">
                      <Button variant="outline-primary">Primary</Button>
                      <Button variant="primary">Primary</Button>
                      <Button variant="outline-primary">Primary</Button>
                    </div>
                    <div className="d-flex justify-content-center mt-2">
                      <Button variant="secondary">Primary</Button>
                    </div>
                    <div className="d-flex justify-content-around mt-3 border-top">
                      <Card.Link href="#" className="link-card">
                        View Profile
                      </Card.Link>
                      <Card.Link href="#">Message</Card.Link>
                    </div>
                  </CommonCard>
                </Col>
              ))}
            </Slider>
          </Col>
        </Row>
      </div>
    </div>
  );
}

export default Dash;
