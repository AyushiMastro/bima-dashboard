import React, { useState } from "react";
import {
  Form,
  FormGroup,
  Row,
  Col,
  Button,
  Card,
  Image,
} from "react-bootstrap";
import Slider from "react-slick";

function Use() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 2,
  };
  return (
    <>
      <div className="user_history">
        <Row>
          <Col sm={4}>
            <Card>
              {/* <Card.Img
            variant="top"
            className="img-rounded"
            src="https://user-images.githubusercontent.com/101482/29592647-40da86ca-875a-11e7-8bc3-941700b0a323.png"
            roundedCircle
          /> */}
              <div className="d-flex justify-content-center align-items-center">
                <Image
                  src="https://user-images.githubusercontent.com/101482/29592647-40da86ca-875a-11e7-8bc3-941700b0a323.png"
                  roundedCircle
                />
              </div>
            </Card>
          </Col>
          <Col sm={8}>
            <Card>
              <Card.Body>
                <div className="f12">
                  <div className="">
                    {" "}
                    Name<div className="d-block">name@gmail.com</div>
                  </div>
                  <div className="">
                    <span className="d-block">
                      <b>200</b>
                    </span>
                    Followers
                  </div>
                  <div className="">
                    <span className="d-block">
                      <b>200</b>
                    </span>
                    Freinds
                  </div>
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        <div className="mt-5">
          <Row>
            <Col sm="6">
              <Slider {...settings}>
                <div className="">
                  <video
                    width="500"
                    height="240"
                    controls
                    autoPlay
                    src="https://youtu.be/hoNb6HuNmU0"
                  ></video>
                </div>
                <div className="">
                  <video width="500" height="240" controls>
                    <source src="movie.mp4" type="video/mp4" />
                    <source src="movie.ogg" type="video/ogg" />
                  </video>
                </div>
              </Slider>
            </Col>
            <Col sm="6">
              <div className="card">
                <div class="d-flex  card-mention">
                  <ul class="">
                    {" "}
                    <li>
                      {" "}
                      <Image
                        src="https://user-images.githubusercontent.com/101482/29592647-40da86ca-875a-11e7-8bc3-941700b0a323.png"
                        roundedCircle
                      />
                    </li>
                    <li>
                      {" "}
                      <p>@abc mention u in a comment: @abcshrma56</p>
                    </li>
                    <li>
                      <Image
                        src="https://user-images.githubusercontent.com/101482/29592647-40da86ca-875a-11e7-8bc3-941700b0a323.png"
                        roundedCircle
                      />
                    </li>
                  </ul>
                </div>
                <div class="d-flex  card-mention">
                  <ul class="">
                    {" "}
                    <li>
                      {" "}
                      <Image
                        src="https://user-images.githubusercontent.com/101482/29592647-40da86ca-875a-11e7-8bc3-941700b0a323.png"
                        roundedCircle
                      />
                    </li>
                    <li>
                      {" "}
                      <p>@abc mention u in a comment: @abcshrma56</p>
                    </li>
                    <li>
                      <Image
                        src="https://user-images.githubusercontent.com/101482/29592647-40da86ca-875a-11e7-8bc3-941700b0a323.png"
                        roundedCircle
                      />
                    </li>
                  </ul>
                </div>
                <div class="d-flex  card-mention">
                  <ul class="">
                    {" "}
                    <li>
                      {" "}
                      <Image
                        src="https://user-images.githubusercontent.com/101482/29592647-40da86ca-875a-11e7-8bc3-941700b0a323.png"
                        roundedCircle
                      />
                    </li>
                    <li>
                      {" "}
                      <p>@abc mention u in a comment: @abcshrma56</p>
                    </li>
                    <li>
                      <Image
                        src="https://user-images.githubusercontent.com/101482/29592647-40da86ca-875a-11e7-8bc3-941700b0a323.png"
                        roundedCircle
                      />
                    </li>
                  </ul>
                </div>
              </div>
            </Col>
          </Row>
        </div>
        <div className="mt-5 room-card">
          <div className="card">
            <h5>Starmaker Room</h5>
            <ul>
              <li>
                Rooms <span className="d-block">10 </span>
              </li>
              <li>
                People <span className="d-block">10 </span>
              </li>
              <li>
                join people <span className="d-block">5 </span>
              </li>
              <li>
                Created Date <span className="d-block">5-Oct-2020 </span>
              </li>
            </ul>
            <ul>
              <li>
                Duets <span className="d-block">10 </span>
              </li>
              <li>
                Seats<span className="d-block">10 </span>
              </li>
              <li>
                Name <span className="d-block">2 </span>
              </li>
              <li>
                Date <span className="d-block">5-Oct-2020 </span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default Use;
