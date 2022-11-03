import React from "react";
import { Card, Col, Form, Row } from "react-bootstrap";
import { Spinner } from "reactstrap";
import logo from "../../image/DRUG CIPHER (2).png";
export default function Step2({
  onFileUploadPL = (f) => f,
  onFileChangePL = (f) => f,
  selectedFilePL = null,
  loading = false,
}) {
  return (
    <Form className="container" onSubmit={onFileUploadPL}>
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
        <h3 className="man_card_title mt-4">KYC - Step 2 of 3</h3>
        <div className="mt-3">
          <Row className="mt-3">
            <Col md={6} controlId="validationCustom03">
              <label>Premises License by PCN</label>
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
          >
            {loading ? <Spinner size="sm" /> : null} Next
          </button>
        </div>
      </Card>
    </Form>
  );
}
