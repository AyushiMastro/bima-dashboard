import React, { useState } from "react";
import {
  Form,
  FormGroup,
  Row,
  Col,
  Button,
  Table,
  Image,Modal
} from "react-bootstrap";
function Vdeo() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  return (
    <>
      <div className="vedio-list">
        <h5>Vedio List</h5>
        <div className="card">
          <Table responsive>
            <tbody>
              <tr>
                <td>1</td>
                <td>
                  <img
                    src="https://pub-static.haozhaopian.net/assets/projects/pages/fd8f9de0-542d-11e9-aba6-89ce5f4d90e4_446a405e-00a9-41e0-90b0-1926713298ff_thumb.jpg"
                    onClick={handleShow}
                  ></img>{" "}
                  Vedio one
                </td>
                <td>
                  <i class="far fa-trash-alt"></i>
                </td>
              </tr>
              <tr>
                <td>1</td>
                <td>
                  <img src="https://pub-static.haozhaopian.net/assets/projects/pages/fd8f9de0-542d-11e9-aba6-89ce5f4d90e4_446a405e-00a9-41e0-90b0-1926713298ff_thumb.jpg"></img>{" "}
                  Vedio one
                </td>
                <td>
                  <i class="far fa-trash-alt"></i>
                </td>
              </tr>
              <tr>
                <td>1</td>
                <td>
                  <img src="https://pub-static.haozhaopian.net/assets/projects/pages/fd8f9de0-542d-11e9-aba6-89ce5f4d90e4_446a405e-00a9-41e0-90b0-1926713298ff_thumb.jpg"></img>{" "}
                  Vedio one
                </td>
                <td>
                  <i class="far fa-trash-alt"></i>
                </td>
              </tr>
            </tbody>
          </Table>
          <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton></Modal.Header>
            <Modal.Body>
              <video
                width="460"
                height="240"
                controls
                autoPlay
                src="https://youtu.be/hoNb6HuNmU0"
              ></video>
            </Modal.Body>
            <Modal.Footer>
            
            
            </Modal.Footer>
          </Modal>
        </div>
      </div>
    </>
  );
}

export default Vdeo;
