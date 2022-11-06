import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Card, Col, Row } from "react-bootstrap";
import { Typeahead } from "react-bootstrap-typeahead";
import Form from "react-bootstrap/Form";
import { useNavigate } from "react-router-dom";
import { marketer } from "./drugData";
export default function RegisterNewDrug() {

  const [singleSelections, setSingleSelections] = useState([]);
  const marketers = [
    'afdf', 'fasdfa', 'fasdf'
  ]
  const form = {
    manufacturerName: "",
    soleAgentName: "",
    authorizedMarketers: "",
    drugBrandName: "",
    drugGenericName: "",
    drugStrength: "",
    formulationType: "",
    unitPackaging: "",
    NAFDACNumber: "",
    batch_lotNumer: "",
    dateOfManufacture: "",
    dateOfExpiry: "",
  };
  const navigate = useNavigate();

  const [drugData, setDrugData] = useState({ form });

  const handleChange = ({ target: { name, value } }) => {
    setDrugData((p) => ({
      ...p,
      [name]: value,
    }));
  };

  const submitForm = () => {
    navigate("/QRCode");
    console.log(drugData)
  };

  return (
    <Form onSubmit={submitForm}>
      {/* {JSON.stringify({ drugData })} */}
      <Card className="man_card shadow p-3">
        <h3 className="man_card_title">Register New Drug</h3>
        <Row>
          <Col md={12}>
            <Row className="pt-3">
              <Col md={6} className="" controlId="validationCustom03">
                <label>Manufacturer's Name</label>
                <input
                  name="manufacturerName"
                  value={drugData.manufacturerName}
                  onChange={handleChange}
                  className="man_input_fields"
                  type="text"
                  required
                />
              </Col>
              <Col md={6}>
                <label>Sole Agent Name</label>
                <input
                  name="soleAgentName"
                  value={drugData.soleAgentName}
                  onChange={handleChange}
                  className="man_input_fields"
                  type="text"
                  required
                />
              </Col>
            </Row>
            <Row className="pt-3">
              <Col md={6} className="">
                <label>Authorized Marketers/Presentatives</label>
                <Typeahead
                  id="basic-typeahead-single"
                  labelKey="drugName"
                  options={marketers}
                  placeholder="Search drugs by name"
                  selected={singleSelections}
                  inputProps={{ className: 'man_input_fields', style: { 'outline': 'none' } }}

                />
                {/* <input
                  name="authorizedMarketers"
                  value={drugData.authorizedMarketers}
                  onChange={handleChange}
                  className="man_input_fields"
                  type="text"
                  required
                /> */}
              </Col>
              <Col md={6}>
                <label>Drug Brand Name</label>
                <input
                  name="drugBrandName"
                  value={drugData.drugBrandName}
                  onChange={handleChange}
                  className="man_input_fields"
                  type="text"
                  required
                />
              </Col>
            </Row>
            <Row className="pt-3">
              <Col md={6}>
                <label>Drug Generic/Chemical Name</label>
                <input
                  name="drugGenericName"
                  value={drugData.drugGenericName}
                  onChange={handleChange}
                  className="man_input_fields"
                  type="text"
                  required
                />
              </Col>
              <Col md={6}>
                <label>Strength of Drug</label>
                <input
                  name="drugStrength"
                  value={drugData.drugStrength}
                  onChange={handleChange}
                  className="man_input_fields"
                  type="text"
                  required
                />
              </Col>
            </Row>
            <Row className="pt-3">
              <Col md={6}>
                <label>Formulation Type</label>
                <input
                  name="formulationType"
                  value={drugData.formulationType}
                  onChange={handleChange}
                  className="man_input_fields"
                  type="text"
                  required
                />
              </Col>
              <Col md={6}>
                <label>Unit Packaging</label>
                <input
                  name="unitPackaging"
                  value={drugData.unitPackaging}
                  onChange={handleChange}
                  className="man_input_fields"
                  type="text"
                  required
                />
              </Col>
            </Row>
            <Row className="pt-3">
              <Col md={6}>
                <label>NAFDAC Number</label>
                <input
                  name="NAFDACNumber"
                  value={drugData.NAFDACNumber}
                  onChange={handleChange}
                  className="man_input_fields"
                  type="text"
                  required
                />
              </Col>
              <Col md={6}>
                <label>Batch/Lot Number</label>
                <input
                  name="batch_lotNumer"
                  value={drugData.batch_lotNumer}
                  onChange={handleChange}
                  className="man_input_fields"
                  type="text"
                  required
                />
              </Col>
            </Row>
            <Row className="pt-3">
              <Col md={6}>
                <label>Date of Manufacture</label>
                <input
                  name="dateOfManufacture"
                  value={drugData.dateOfManufacture}
                  onChange={handleChange}
                  className="man_input_fields"
                  type="date"
                  required
                />
              </Col>
              <Col md={6}>
                <label>Date of Expiry</label>
                <input
                  name="dateOfExpiry"
                  value={drugData.dateOfExpiry}
                  onChange={handleChange}
                  className="man_input_fields"
                  type="date"
                  required
                />
              </Col>
            </Row>
          </Col>
        </Row>

        <div className="mt-3">
          {/* <button className='man_button' onClick={() => navigate('/QRCode')}>Register</button> */}
          <button type="submit" className="man_button" onClick={submitForm}>
            Register
          </button>
        </div>
      </Card>
    </Form>
  );
}
