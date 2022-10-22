import React from "react";
import {
  Card,
  Row,
  CardBody,
  CardImg,
  Col,
  CardText,
  CardTitle,
} from "reactstrap";
import "bootstrap";

export default function Profile() {
  return (
    <div>
      <Card className="man_card shadow p-3">
        <h3 className="man_card_title">Profile</h3>
        <Row>
          <Col md={2} className="text-center">
            <CardBody className="">
              <CardImg
                src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava3.webp"
                alt="avatar"
                className="rounded-circle mb-3"
                style={{ width: "210px" }}
                fluid
              />
              <h5 className="">Drug Cipher</h5>
              <CardText className=" card-text">drugcipher@gmail.com</CardText>
              <CardText className="card-text">+2348012345678</CardText>
            </CardBody>
          </Col>
          <Col md={10}>
            <Row>
              {/* <Col md={1}></Col> */}

              <Col md={1}></Col>
              <Col md={4} className="mt-3 ">
                <h2>Company details</h2>
                <Card className="p-3 shadow border-0 rounded-0">
                  <CardBody>
                    <CardTitle>Something here</CardTitle>
                    <Row>
                      <Col>
                        <CardText>Company Name</CardText>
                      </Col>
                      <Col>
                        <CardText>Drug Cipher</CardText>
                      </Col>
                    </Row>
                    <Row>
                      <Col>
                        <CardText>Company Address</CardText>
                      </Col>
                      <Col>
                        <CardText>Brainstorm IT Solutions</CardText>
                      </Col>
                    </Row>
                  </CardBody>
                </Card>
              </Col>

              <Col md={4} className="mt-3 ">
                <h2> Contact details</h2>
                <Card className="p-3 shadow border-0 rounded-0">
                  <CardBody>
                    <CardTitle>Something here</CardTitle>
                    <Row>
                      <Col>
                        <CardText>Phone Number </CardText>
                      </Col>
                      <Col>
                        <CardText>+2348012345678</CardText>
                      </Col>
                    </Row>
                    <Row>
                      <Col>
                        <CardText>Email Address</CardText>
                      </Col>
                      <Col>
                        <CardText>drugcipher@gmail.com</CardText>
                      </Col>
                    </Row>
                  </CardBody>
                </Card>
              </Col>
              <Col md={1}></Col>
            </Row>

            <Row className="mt-5">
              <Col md={1}></Col>
              <Col md={4} className="mb-4">
                <h2> Manufacturer's License</h2>
                <Card className="p-3 shadow border-0 rounded-0">
                  <CardBody>
                    <CardTitle>Something here</CardTitle>
                    <CardText>
                      {" "}
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </CardText>
                  </CardBody>
                </Card>
              </Col>
              <Col md={4}>
                <h2> Drug License</h2>
                <Card className="p-3 shadow border-0 rounded-0">
                  <CardBody>
                    <CardTitle>Something here</CardTitle>
                    <CardText>
                      {" "}
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </CardText>
                  </CardBody>
                </Card>
              </Col>
              <Col md={1}></Col>
            </Row>
          </Col>
        </Row>
      </Card>
    </div>
  );
}
