import React, { useCallback, useEffect, useState } from "react";
import {
  Card,
  Row,
  CardBody,
  CardImg,
  Col,
  CardText,
} from "reactstrap";
import "bootstrap";
import { accountBalance } from "../utils/helper";
import { Spinner } from "react-bootstrap";

export default function Profile() {
  const account = window.walletConnection.account();
  const [balance, setBalance] = useState("0");
  const getBalance = useCallback(async () => {
    if (account.accountId) {
      setBalance(await accountBalance());
    }
  });

  useEffect(() => {
    getBalance();
  }, [getBalance]);
  return (
    <div>
      <Card className="man_card shadow p-3">
        <h3 className="man_card_title">Profile</h3>
        <Row className="m-0">
          <Col md={2} className="text-center">
            <CardBody className="">
              <CardImg
                src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava3.webp"
                alt="avatar"
                className="rounded-circle mb-3"
                style={{ width: "" }}
                fluid
              />
              <h5 className="">DrugCipher</h5>
              <CardText className=" card-text" style={{fontSize:11, margin:0}}>Wallet Balance  {balance ? (
              <>
                <b>{balance} <span className="ms-1">NEAR</span></b>
              </>
            ) : (
              <Spinner animation="border" size="sm" className="opacity-25" />
            )}</CardText>
              <CardText className=" card-text" style={{fontSize:11, margin:0}}>drugcipher@gmail.com</CardText>
              <CardText className="card-text" style={{fontSize:11, margin:0}}>+2348012345678</CardText>
            </CardBody>
          </Col>
          <Col md={10}>
            <Row>
              <Col md={6} className="mt-3 ">
                <h4>Company details</h4>
                <Card className="p-3 shadow border-0 rounded-0">
                  <CardBody>
                    {/* <CardTitle>Something here</CardTitle> */}
                    <Row>
                      <Col>
                        <CardText>Company Name</CardText>
                      </Col>
                      <Col>
                        <CardText>DrugCipher</CardText>
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

              <Col md={6} className="mt-3 ">
                <h4> Contact details</h4>
                <Card className="p-3 shadow border-0 rounded-0">
                  <CardBody>
                    {/* <CardTitle>Something here</CardTitle> */}
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
            </Row>

            <Row className="mt-5">
              
              <Col md={6} className="mb-4">
                <h4> Manufacturer's License</h4>
                <Card className="p-3 shadow border-0 rounded-0">
                  <CardBody>
                    {/* <CardTitle>Something here</CardTitle> */}
                    <CardText>
                      {" "}
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </CardText>
                  </CardBody>
                </Card>
              </Col>
              <Col md={6}>
                <h4> Drug License</h4>
                <Card className="p-3 shadow border-0 rounded-0">
                  <CardBody>
                    {/* <CardTitle>Something here</CardTitle> */}
                    <CardText>
                      {" "}
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </CardText>
                  </CardBody>
                </Card>
              </Col>
            </Row>
          </Col>
        </Row>
      </Card>
    </div>
  );
}
