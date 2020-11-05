import React, { useState } from "react";
import { Form, FormGroup, Row, Col, Button, Table,Image } from "react-bootstrap";
function Use() {
  return (
    <>
      <div className="user_data">
        <h4>USERS</h4>

        <Table responsive="sm">
          <thead>
            <  tr>
              <th>#</th>
              <th>User Name</th>
              <th>Join Date</th>
              <th>Vedios</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <Image
                  src="https://user-images.githubusercontent.com/101482/29592647-40da86ca-875a-11e7-8bc3-941700b0a323.png"
                  roundedCircle
                />
              </td>
              <td>
                <a href="/History">Amrik</a>
              </td>

              <td>23-Jan-2020</td>
              <td>50</td>
            </tr>
            <tr>
              <td>
                <Image
                  src="https://user-images.githubusercontent.com/101482/29592647-40da86ca-875a-11e7-8bc3-941700b0a323.png"
                  roundedCircle
                />
              </td>
              <td>Amrik</td>
              <td>23-Jan-2020</td>
              <td>50</td>
            </tr>
            <tr className="active">
              <td>
                <Image
                  src="https://user-images.githubusercontent.com/101482/29592647-40da86ca-875a-11e7-8bc3-941700b0a323.png"
                  roundedCircle
                />
              </td>
              <td>Amrik</td>
              <td>23-Jan-2020</td>
              <td>50</td>
            </tr>
            <tr>
              <td>
                <Image
                  src="https://user-images.githubusercontent.com/101482/29592647-40da86ca-875a-11e7-8bc3-941700b0a323.png"
                  roundedCircle
                />
              </td>
              <td>Amrik</td>
              <td>23-Jan-2020</td>
              <td>50</td>
            </tr>
          </tbody>
        </Table>
      </div>
    </>
  );
}

export default Use;
