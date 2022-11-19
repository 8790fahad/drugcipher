import React from "react";
import { Card, Col, Form, Row } from "react-bootstrap";
import { CheckCircle } from "react-feather";
import { useNavigate } from "react-router-dom";
import { Spinner } from "reactstrap";
import logo from "../../image/DRUG CIPHER (2).png";
export default function Step3({
  onFileUploadSP = (f) => f,
  onFileChangeSP = (f) => f,
  loading = false,
}) {
  const navigate = useNavigate()

  return (
    <Form className="container" onSubmit={onFileUploadSP}>
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
        <h3 className="man_card_title mt-4">KYC - Step 3 of 3</h3>
        <div className="mt-3">
          <Row className="mt-3">
            <Col md={6} controlId="validationCustom03">
              <label>Superintendent Pharmacist License<b style={{ color: "red" }}>*</b></label>
              <br />
              <label style={{fontWeight:'bold' }}>Attach the image of your license</label>
              <input
                className=""
                type="file"
                placeholder="Premises License by PCN"
                // name="superintendentLicense"
                // defaultValue={values.superintendentLicense}
                onChange={onFileChangeSP}
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
            {loading ? <Spinner size='sm' /> : null} Submit {' '}<CheckCircle />
          </button>
        </div>
      </Card>
      <div className='text-center text-secondary text-secondary'>
        <p>Copyright © {new Date().getFullYear()} DrugCipher. All rights reserved.</p>
      </div>
    </Form>
  );
}
