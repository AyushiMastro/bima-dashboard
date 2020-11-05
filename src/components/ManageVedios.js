import React, { useState } from "react";
import { Tab, Tabs, Table, Image, Modal } from "react-bootstrap";
function Manage() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <div className="manage-vedios">
      <Tabs defaultActiveKey="profile" id="uncontrolled-tab-example">
        <Tab eventKey="home" title="Manage Vedios">
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
                    <i class="fas fa-pen pr-3"></i>
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
                    <i class="fas fa-pen pr-3"></i>
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
                    <i class="fas fa-pen pr-3"></i>
                    <i class="far fa-trash-alt"></i>
                  </td>
                </tr>
              </tbody>
            </Table>
          </div>
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
            <Modal.Footer></Modal.Footer>
          </Modal>
        </Tab>
        <Tab eventKey="profile" title="Manage Users">
          <div className="card">
            <Table responsive="sm">
              <thead>
                <tr>
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
                  <td>
                    {" "}
                    <i class="fas fa-pen pr-3"></i>
                    <i class="far fa-trash-alt"></i>
                  </td>
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
                  <td>
                    {" "}
                    <i class="fas fa-pen pr-3"></i>
                    <i class="far fa-trash-alt"></i>
                  </td>
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
                  <td>
                    {" "}
                    <i class="fas fa-pen pr-3"></i>
                    <i class="far fa-trash-alt"></i>
                  </td>
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
                  <td>
                    {" "}
                    <i class="fas fa-pen pr-3"></i>
                    <i class="far fa-trash-alt"></i>
                  </td>
                </tr>
              </tbody>
            </Table>
          </div>
        </Tab>
        <Tab eventKey="contact" title="Reported Vedios">
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
                  <i class="fas fa-pen pr-3"></i>
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
                  <i class="fas fa-pen pr-3"></i>
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
                  <i class="fas fa-pen pr-3"></i>
                  <i class="far fa-trash-alt"></i>
                </td>
              </tr>
            </tbody>
          </Table>
        </Tab>
        <Tab eventKey="qweq" title="Reported Tags">
          <div className="card">
            <Table responsive>
              <tbody>
                <tr>
                  <td>
                    {" "}
                    <div className="d-flex p-4 float-left">
                      <div className="circle">#</div>
                      <div className="pl-3">
                        #amrik<span className="d-block">14M Posts</span>
                      </div>
                    </div>
                  </td>

                  <td>
                    <i class="fas fa-pen pr-3"></i>
                    <i class="far fa-trash-alt"></i>
                  </td>
                </tr>
                <tr>
                  <td>
                    {" "}
                    <div className="d-flex p-4 float-left">
                      <div className="circle">#</div>
                      <div className="pl-3">
                        #amrik<span className="d-block">14M Posts</span>
                      </div>
                    </div>
                  </td>

                  <td>
                    <i class="fas fa-pen pr-3"></i>
                    <i class="far fa-trash-alt"></i>
                  </td>
                </tr>
                <tr>
                  <td>
                    {" "}
                    <div className="d-flex p-4 float-left">
                      <div className="circle">#</div>
                      <div className="pl-3">
                        #amrik<span className="d-block">14M Posts</span>
                      </div>
                    </div>
                  </td>

                  <td>
                    <i class="fas fa-pen pr-3"></i>
                    <i class="far fa-trash-alt"></i>
                  </td>
                </tr>
              </tbody>
            </Table>
          </div>
        </Tab>
        <Tab eventKey="abc" title="Manage Trending Tags">
          <div className="card">
            <Table responsive>
              <tbody>
                <tr>
                  <td>
                    {" "}
                    <div className="d-flex p-4 float-left">
                      <div className="circle">#</div>
                      <div className="pl-3">
                        #amrik<span className="d-block">14M Posts</span>
                      </div>
                    </div>
                  </td>

                  <td>
                    <i class="fas fa-pen pr-3"></i>
                    <i class="far fa-trash-alt"></i> 
                  </td>
                </tr>
                <tr>
                  <td>
                    {" "}
                    <div className="d-flex p-4 float-left">
                      <div className="circle">#</div>
                      <div className="pl-3">
                        #amrik<span className="d-block">14M Posts</span>
                      </div>
                    </div>
                  </td>

                  <td>
                    <i class="fas fa-pen pr-3"></i>
                    <i class="far fa-trash-alt"></i>
                  </td>
                </tr>
                <tr>
                  <td>
                    {" "}
                    <div className="d-flex p-4 float-left">
                      <div className="circle">#</div>
                      <div className="pl-3">
                        #amrik<span className="d-block">14M Posts</span>
                      </div>
                    </div>
                  </td>

                  <td>
                    <i class="fas fa-pen pr-3"></i>
                    <i class="far fa-trash-alt"></i>
                  </td>
                </tr>
              </tbody>
            </Table>
          </div>
        </Tab>
      </Tabs>
    </div>
  );
}

export default Manage;
