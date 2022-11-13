import React, { useCallback, useEffect, useState } from "react";
import { Card, Row, CardBody, CardImg, Col, CardText } from "reactstrap";
import "bootstrap";
import { accountBalance } from "../utils/helper";
import { useSelector } from "react-redux";
import ImageViewer from "react-simple-image-viewer";
import { File,Mail,Phone,Copy } from "react-feather";
export default function Profile() {
  const { info } = useSelector((state) => state.account.account);
  const account = window.walletConnection.account();
  const [balance, setBalance] = useState(null);
  const getBalance = useCallback(async () => {
    if (account.accountId) {
      let bal = await accountBalance()
      setBalance(bal);
    }
  },[account.accountId]);

  useEffect(() => {
    getBalance();
  }, [getBalance]);

  const [currentImage, setCurrentImage] = useState(0);
  const [isViewerOpen, setIsViewerOpen] = useState(false);
  const openImageViewer = useCallback((index) => {
    setCurrentImage(index);
    setIsViewerOpen(true);
  }, []);

  const closeImageViewer = () => {
    setCurrentImage(0);
    setIsViewerOpen(false);
  };
  const copy = () => {
    navigator.clipboard.writeText(info.id);
  };
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
              <h5 className="">{info.company_name}</h5>
              <CardText
                className=" card-text"
                style={{ fontSize: 11, margin: 0 }}
              >
               
                {balance ? (
                  <> Wallet Balance{" "}
                    <b>
                      {balance} <span className="ms-1">NEAR</span>
                    </b>
                  </>
                ) : (
                  null
                )}
              </CardText>
              <CardText
                className=" card-text"
                style={{ fontSize: 11, margin: 0 }}
              >
                {info.company_email}
              </CardText>
              <CardText
                className="card-text"
                style={{ fontSize: 11, margin: 0 }}
              >
                {info.company_phone}
              </CardText>
            </CardBody>
          </Col>
          <Col md={10}>
            <Row>
              <Col md={6} className="mt-3">
                <h4>Company details</h4>
                <Col md={12} className="mb-3">
                        <Card className="company_data shadow p-3">
                          <p className="company_data_title">
                            <span className="company_data_icon">
                              <Mail />
                            </span>{" "}
                            Company Name
                          </p>
                          <p>{info.company_name}</p>
                        </Card>
                      </Col>
                      <Col md={12} className="mb-3">
                        <Card className="company_data shadow p-3 ">
                          <p className="company_data_title">
                            <span className="company_data_icon">
                              <Phone />
                            </span>{" "}
                            Company Address
                          </p>
                          <p>{info.company_address}</p>
                        </Card>
                      </Col>
                      <Col md={12} className="mb-1">
                        <Card className="company_data shadow p-2 ">
                          <p className="company_data_title d-flex justify-content-between">
                            <span className="company_data_icon">
                              {info.id}
                            </span>
                            <span className="mt-2 man_button"  
                      style={{ cursor: "pointer" }}
                      onClick={copy}><Copy/></span>
                          </p>
                        </Card>
                      </Col>
              </Col>
              <Col md={6} className="mt-3 ">
                <h4> Contact details</h4>
                <Col md={12} className="mb-3">
                        <Card className="company_data shadow p-3">
                          <p className="company_data_title">
                            <span className="company_data_icon">
                              <Mail />
                            </span>{" "}
                            Company Email
                          </p>
                          <p>{info.company_email}</p>
                        </Card>
                      </Col>
                      <Col md={12} className="mb-3">
                        <Card className="company_data shadow p-3 ">
                          <p className="company_data_title">
                            <span className="company_data_icon">
                              <Phone />
                            </span>{" "}
                            Phone Number 
                          </p>
                          <p>{info.company_phone}</p>
                        </Card>
                      </Col>
                      <Col md={12} className="mb-2">
                        <Card className="company_data shadow p-2 ">
                          <p className="company_data_title d-flex">
                            <span className="company_data_icon">
                              Status 
                            </span>
                            <span className="mt-2 m-1">{info.status}</span>
                          </p>
                        </Card>
                      </Col>
              </Col>
            </Row>

            <Row className="mt-5">
              <Col md={6} className="mb-3">
                <Card className="company_data shadow p-4">
                  <p className="company_data_title">
                    <span className="company_data_icon">
                      <File />
                    </span>{" "}
                    Premises License by PCN
                  </p>
                  {/* <p>{info.pl_url}</p> */}
                  <button
                    className="man_button"
                    onClick={() => openImageViewer(0)}
                  >
                    View License
                  </button>
                  {isViewerOpen && (
                    <ImageViewer
                      src={info.pl_url}
                      currentIndex={currentImage}
                      disableScroll={false}
                      closeOnClickOutside={true}
                      onClose={closeImageViewer}
                    />
                  )}
                </Card>
              </Col>
              <Col md={6} className="mb-3">
                <Card className="company_data shadow p-4">
                  <p className="company_data_title">
                    <span className="company_data_icon">
                      <File />
                    </span>{" "}
                    Superintendent Pharmacist License
                  </p>
                  {/* <p>{info.sp_url}</p> */}
                  <button
                    className="man_button"
                    // onClick={() => openImageViewer(1)}
                  >
                    View License
                  </button>
                  {isViewerOpen && (
                    <ImageViewer
                      src={info.sp_url}
                      currentIndex={currentImage}
                      disableScroll={false}
                      closeOnClickOutside={true}
                      onClose={closeImageViewer}
                    />
                  )}
                </Card>
              </Col>
            </Row>
          </Col>
        </Row>
      </Card>
    </div>
  );
}
