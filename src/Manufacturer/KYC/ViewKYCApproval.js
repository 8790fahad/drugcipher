import React, { useState, useCallback } from "react";
import { Card, Col, Row } from "react-bootstrap";
import {
  ArrowLeftCircle,
  CheckCircle,
  File,
  Mail,
  MapPin,
  Phone,
  Pocket,
  XCircle,
} from "react-feather";
import { useNavigate } from "react-router-dom";
// import { toast } from 'react-toastify';
import ImageViewer from "react-simple-image-viewer";
import { toast } from "react-toastify";
import { Spinner } from "reactstrap";
import useQuery from "../../hooks/useQuery";
import logo from "../../image/DRUG CIPHER (2).png";
import { _updateApi } from "../../utils/helper";
import {
  NotificationError,
  NotificationSuccess,
} from "../../utils/Notification";
// import { _updateApi } from '../../utils/helper';
// import {
//     NotificationError,
//     NotificationSuccess,
// } from "../../utils/Notification";

export default function ViewKYCApproval() {
  const navigate = useNavigate();

  const query = useQuery();
  const company_name = query.get("companyName");
  const company_phone = query.get("companyPhone");
  const company_email = query.get("companyEmail");
  const company_country = query.get("companyCountry");
  const pl_url = query.get("pl_url");
  const sp_url = query.get("sp_url");
  const id = query.get("id");

  const [currentImage, setCurrentImage] = useState(0);
  const [isViewerOpen, setIsViewerOpen] = useState(false);
  const [appLoading, setAppLoading] = useState(false);
  const [rejLoading, setRejLoading] = useState(false);

  const openImageViewer = useCallback((index) => {
    setCurrentImage(index);
    setIsViewerOpen(true);
  }, []);

  const closeImageViewer = () => {
    setCurrentImage(0);
    setIsViewerOpen(false);
  };
  const images = [pl_url, sp_url];
  const approve = () => {
    setAppLoading(true);
    _updateApi(
      "/v1/approved-kyc",
      { id, company_name, company_email },
      (reps) => {
        if (reps.success) {
          toast(<NotificationSuccess text="Approved Successfully" />);
          setAppLoading(false);
          navigate(-1);
        }
      },
      (err) => {
        console.error(err);
        toast(<NotificationError text="Failed, try again" />);
        setAppLoading(false);
      }
    );
  };
  const reject = () => {
    setRejLoading(true);
    _updateApi(
      "/v1/reject-kyc",
      { id, company_name, company_email },
      (reps) => {
        if (reps.success) {
          toast(<NotificationSuccess text="Approved Successfully" />);
          setRejLoading(false);
          navigate(-1);
        }
      },
      (err) => {
        console.error(err);
        toast(<NotificationError text="Failed, try again" />);
        setRejLoading(false);
      }
    );
  };
  return (
    <div className="container">
      <Card className="KYC_card shadow p-3">
        <div>
          <Row>
            <Col md={6} sm={6} xs={6}>
              <div
                onClick={() => navigate("/")}
                style={{ width: "fit-content", cursor: "pointer" }}
                data-toggle="tooltip"
                data-placement="bottom"
                title="Goto Home"
              >
                <img
                  src={logo}
                  style={{ width: 70, borderRadius: 10 }}
                  alt=""
                  className="shadow"
                />{" "}
                <h4
                  style={{
                    display: "inline-block",
                    color: "rgb(3, 66, 110)",
                    marginRight: 30,
                  }}
                  className="dc"
                >
                  DrugCipher
                </h4>
              </div>
            </Col>
            <Col md={6} sm={6} xs={6}>
              <ArrowLeftCircle
                className="shadow p-3"
                size="4em"
                style={{
                  color: "rgb(3, 66, 110)",
                  float: "right",
                  cursor: "pointer",
                }}
                onClick={() => navigate(-1)}
              />
            </Col>
          </Row>
          <h3 className="man_card_title mt-4">KYC Approval</h3>
          <div className="mt-3">
            <h5 style={{ color: "rgb(3, 66, 110)" }}>Company Information</h5>
            <Row className="mt-3">
              <Col md={6} className="mb-3">
                <Card className="company_data shadow p-4">
                  <p className="company_data_title">
                    <span className="company_data_icon">
                      <Pocket />
                    </span>{" "}
                    Company Name
                  </p>
                  <p>{company_name}</p>
                </Card>
              </Col>
              <Col md={6} className="mb-3">
                <Card className="company_data shadow p-4">
                  <p className="company_data_title">
                    <span className="company_data_icon">
                      <Phone />
                    </span>{" "}
                    Company Phone
                  </p>
                  <p>{company_phone}</p>
                </Card>
              </Col>
              <Col md={6} className="mb-3">
                <Card className="company_data shadow p-4">
                  <p className="company_data_title">
                    <span className="company_data_icon">
                      <Mail />
                    </span>{" "}
                    Company Email
                  </p>
                  <p>{company_email}</p>
                </Card>
              </Col>
              <Col md={6} className="mb-3">
                <Card className="company_data shadow p-4">
                  <p className="company_data_title">
                    <span className="company_data_icon">
                      <MapPin />
                    </span>{" "}
                    Company Country
                  </p>
                  <p>{company_country}</p>
                </Card>
              </Col>
              <Col md={6} className="mb-3">
                <Card className="company_data shadow p-4">
                  <p className="company_data_title">
                    <span className="company_data_icon">
                      <File />
                    </span>{" "}
                    Premises License by PCN
                  </p>
                  <p>{pl_url}</p>
                  <button
                    className="man_button"
                    onClick={() => openImageViewer(0)}
                  >
                    View License
                  </button>
                  {isViewerOpen && (
                    <ImageViewer
                      src={images}
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
                  <p>{sp_url}</p>
                  <button
                    className="man_button"
                    onClick={() => openImageViewer(1)}
                  >
                    View License
                  </button>
                  {isViewerOpen && (
                    <ImageViewer
                      src={images}
                      currentIndex={currentImage}
                      disableScroll={false}
                      closeOnClickOutside={true}
                      onClose={closeImageViewer}
                    />
                  )}
                </Card>
              </Col>
              <div>
                <button
                  className="man_button"
                  style={{ marginRight: 10 }}
                  onClick={() => {
                    approve();
                  }}
                  disabled={appLoading}
                >
                  {appLoading ? <Spinner size="sm" /> : <CheckCircle />} Approve
                </button>
                <button
                  className="man_button"
                  onClick={() => {
                    reject();
                  }}
                  disabled={rejLoading}
                >
                  {rejLoading ? (
                    <Spinner size="sm" />
                  ) : (
                    <XCircle style={{ color: "rgb(255, 97, 97)" }} />
                  )}{" "}
                  Reject
                </button>
              </div>
            </Row>
          </div>
        </div>
      </Card>
    </div>
  );
}
