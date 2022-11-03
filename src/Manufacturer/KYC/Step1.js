import React from "react";
import { Card, Col, Form, Row } from "react-bootstrap";
import logo from "../../image/DRUG CIPHER (2).png";
import { Spinner } from "reactstrap";
export default function Step1({
  nextStep = (f) => f,
  handleChange,
  values,
  loading = false,
}) {
  return (
    <Form className="container" onSubmit={nextStep}>
      <Card className="KYC_card shadow p-3">
        <div>
          <img
            src={logo}
            style={{ width: 70, borderRadius: 10 }}
            alt=""
            className="shadow"
          />{" "}
          <h4
            style={{
              display: "inline",
              color: "rgb(3, 66, 110)",
              marginRight: 30,
            }}
          >
            Drug Cipher
          </h4>
        </div>
        <h3 className="man_card_title mt-4">KYC - Step 1 of 4</h3>
        <div className="mt-3">
          <Row className="mt-3">
            <Col md={6} controlId="validationCustom03">
              <label>
                Company Name<b style={{ color: "red" }}>*</b>
              </label>
              <input
                className="man_input_fields"
                type="text"
                placeholder="Company Name"
                name="companyName"
                defaultValue={values.companyName}
                onChange={handleChange}
                required
              />
            </Col>
            <Col md={6}>
              <label>
                Company Address<b style={{ color: "red" }}>*</b>
              </label>
              <input
                className="man_input_fields"
                type="address"
                placeholder="Company Address"
                name="companyAddress"
                defaultValue={values.companyAddress}
                onChange={handleChange}
                required
              />
            </Col>
          </Row>
          <Row className="mt-3">
            <Col md={6}>
              <label>
                Email<b style={{ color: "red" }}>*</b>
              </label>
              <input
                className="man_input_fields"
                type="email"
                placeholder="Email"
                name="companyEmail"
                defaultValue={values.companyEmail}
                onChange={handleChange}
                required
              />
            </Col>
            <Col md={6}>
              <label>Company Phone</label>
              <input
                className="man_input_fields"
                type="text"
                placeholder="Phone Number"
                name="companyPhone"
                defaultValue={values.companyPhone}
                onChange={handleChange}
              />
            </Col>
          </Row>
          <Row className="mt-3">
            <Col md={6}>
              <label>
                Country<b style={{ color: "red" }}>*</b>
              </label>
              <select
                className="man_input_fields"
                name="companyCountry"
                defaultValue={values.companyCountry}
                onChange={handleChange}
                required
              >
                <option>Select Country</option>
                <option>Nigeria</option>
              </select>
            </Col>
            <Col md={6}>
              <label>Website</label>
              <input
                className="man_input_fields"
                type="text"
                placeholder="Company Website"
                name="companyWebsite"
                defaultValue={values.companyWebsite}
                onChange={handleChange}
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
            {loading ? <Spinner size="sm" /> : null} Next
          </button>
        </div>
      </Card>
    </Form>
  );
}