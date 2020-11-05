import React, { useState } from "react";
import {
  Form,
  FormGroup,
  Row,
  Col,
  Button,
  Table,
  Image,
} from "react-bootstrap";
function Sond() {
  return (
    <>
      <div className="sound-list">
        <div className="card">
          <div className="links">
            <ul>
              <li>
                <i class="fas fa-upload"></i>
              </li>
              <li>
                <i class="far fa-plus-square"></i>
              </li>
            </ul>
          </div>
          <Table responsive>
            <tbody>
              <tr>
                <td>1</td>
                <td>Sound one</td>
                <td>
                  {" "}
                  <i class="far fa-trash-alt"></i>
                </td>
              </tr>
              <tr>
                <td>2</td>
                <td>Sound two</td>
                <td>
                  {" "}
                  <i class="far fa-trash-alt"></i>
                </td>
              </tr>
              <tr>
                <td>3</td>
                <td>Sound three</td>
                <td>
                  {" "}
                  <i class="far fa-trash-alt"></i>
                </td>
              </tr>
            </tbody>
          </Table>
        </div>
      </div>
    </>
  );
}

export default Sond;
