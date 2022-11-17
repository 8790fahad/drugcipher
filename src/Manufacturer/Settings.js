import React from "react";
import { useState } from "react";
import { Card, Row, Col } from "react-bootstrap";
import { useSelector } from "react-redux";
// import { useNavigate } from "react-router-dom";

export default function Settings() {
  const { info } = useSelector((state) => state.account.account);
  const [settingsData, setSettingsData] = useState(
    {
      companyName: '',
      companyEmail: '',
      companyPhone: '',
      companyAddress: '',
      manufacturerLicense: '',
      pharmacistLicense: ''
    }
  )

  const handleChange = ({ target: { name, value } }) => {
    setSettingsData((p) => ({ ...p, [name]: value }))
  }
  return (
    <div>
      {/* ********************************************** */}
     
      <Card className="man_card shadow p-3">
        <h3 className="man_card_title">Settings</h3>
        <h4 className="mt-4">Update Profile</h4>

        <Row className="">
          <Col md={6} className='mb-3'>
            <label>Manufacturer License</label>
            <input
              name="manufacturerLicense"
              className="man_input_fields"
              type="file"
              onChange={handleChange}
              value={settingsData.manufacturerLicense}
            />
          </Col>
          <Col md={6} className='mb-3'>
            <label>Pharmacist License</label>
            <input
              name="pharmacistLicense"
              className="man_input_fields"
              type="file"
              onChange={handleChange}
              value={settingsData.pharmacistLicense}
            />
          </Col>
        </Row>
        <Row className="">
          <Col md={6} className='mb-3'>
            <label>Company Name</label>
            <input
              name="companyName"
              className="man_input_fields"
              onChange={handleChange} type="text"
              value={settingsData.companyName}
            />
          </Col>
          <Col md={6} className='mb-3'>
            <label>Company Address</label>
            <input
              name="companyAddress"
              className="man_input_fields"
              type="address"
              onChange={handleChange}
              value={settingsData.companyAddress}
            />
          </Col>
        </Row>

        <Row className="">
          <Col md={6} className='mb-3'>
            <label>Email</label>
            <input
              name="manufacturer_license"
              className="man_input_fields"
              type="email"
            />
          </Col>
          <Col md={6} className='mb-3'>
            <label>Phone</label>
            <input
              name="manufacturer_license"
              className="man_input_fields"
              type="number"
            />
          </Col>
        </Row>
        <div className="">
          <button className="man_button">Save</button>
        </div>
      </Card>
    </div>
  );
}
