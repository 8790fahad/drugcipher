import React from "react";
import { Card, Row, Col } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

export default function Settings() {
  const navigate = useNavigate();
  return (
    <div>
      {/* ********************************************** */}
      <Card className="man_card shadow p-3">
        <h3 className="man_card_title">Settings</h3>
        <h4 className="mt-4">Update Profile</h4>

        <Row className="mt-3">
          <Col md={6}>
            <label>Manufacturer License</label>
            <input
              name="manufacturer_license"
              className="man_input_fields"
              type="file"
            />
          </Col>
          <Col md={6}>
            <label>Pharmacist License</label>
            <input
              name="manufacturer_license"
              className="man_input_fields"
              type="file"
            />
          </Col>
        </Row>
        <Row className="mt-3">
          <Col md={6}>
            <label>Company Name</label>
            <input
              name="manufacturer_license"
              className="man_input_fields"
              type="text"
            />
          </Col>
          <Col md={6}>
            <label>Company Address</label>
            <input
              name="manufacturer_license"
              className="man_input_fields"
              type="address"
            />
          </Col>
        </Row>

        <Row className="mt-3">
          <Col md={6}>
            <label>Email</label>
            <input
              name="manufacturer_license"
              className="man_input_fields"
              type="email"
            />
          </Col>
          <Col md={6}>
            <label>Phone</label>
            <input
              name="manufacturer_license"
              className="man_input_fields"
              type="number"
            />
          </Col>
        </Row>
        <div className="mt-3">
          <button className="man_button">Save</button>
        </div>
      </Card>
    </div>
  );
}
