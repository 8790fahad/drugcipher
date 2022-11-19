import React from "react";
import { Card, Col, Form, Row } from "react-bootstrap";
import { ArrowRightCircle } from "react-feather";
import { useNavigate } from "react-router-dom";
import { Spinner } from "reactstrap";
import logo from "../../image/DRUG CIPHER (2).png";
export default function Step2({
  onFileUploadPL = (f) => f,
  onFileChangePL = (f) => f,
  selectedFilePL = null,
  loading = false,
}) {
  const navigate = useNavigate()

  return (
    <Form className="container" onSubmit={onFileUploadPL}>
      <Card className="KYC_card shadow p-3">
        <div>
          <Row>
            <Col md={6} sm={6} xs={6}>
              <div onClick={() => navigate('/')} style={{ width: 'fit-content', cursor: 'pointer' }} data-toggle="tooltip"
                data-placement="bottom"
                title="Goto Home">
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
                  className='dc'
                >
                  DrugCipher
                </h4>
              </div>
            </Col>
            <Col md={6} sm={6} xs={6}>
              {/* <ArrowLeftCircle className='shadow p-3' size='4em' style={{ color: 'rgb(3, 66, 110)', float: 'right', cursor: 'pointer' }} onClick={() => navigate(-1)} /> */}
            </Col>
          </Row>
        </div>
        <h3 className="man_card_title mt-4">KYC - Step 2 of 3</h3>
        <div className="mt-3">
          <Row className="mt-3">
            <Col md={6} controlId="validationCustom03">
              <label>Premises License by PCN<b style={{ color: "red" }}>*</b></label>
              <br />
              <label style={{ color: "red", fontWeight:'bold' }}>Attach the image of your license</label>
              <input
                className=""
                type="file"
                placeholder="Premises License by PCN"
                onChange={onFileChangePL}
                defaultValue={selectedFilePL?.name}
                accept=".jpg, .png, .jpeg"
                required
              />
            </Col>
          </Row>
        </div>
        <div className="mt-3">
          <button
            type="submit"
            className="man_button"
            style={{ float: "right" }}
            disabled={loading}
          >
            {loading ? <Spinner size="sm" /> : null} Next {' '}<ArrowRightCircle />
          </button>
        </div>
      </Card>
      <div className='text-center text-secondary'>
        <p>Copyright © {new Date().getFullYear()} DrugCipher. All rights reserved.</p>
      </div>
    </Form>
  );
}
