import {
  formatNearAmount,
  parseNearAmount,
} from "near-api-js/lib/utils/format";
import React, { useCallback, useEffect } from "react";
// import { useEffect } from "react";
import { useState } from "react";
import { Card, Col, Row } from "react-bootstrap";
import { Typeahead } from "react-bootstrap-typeahead";
import Form from "react-bootstrap/Form";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { setDrugInfo } from "../utils/contract";
import { getMarketer } from "../utils/helper";

import { v4 as uuid4 } from "uuid";
import { NotificationError, NotificationSuccess } from "../utils/Notification";
import { useSelector } from "react-redux";
import { Spinner } from "reactstrap";
import useQuery from "../hooks/useQuery";
// import { marketer } from "./drugData";
export default function RegisterNewDrug() {
  const query = useQuery();
  const transactionHashes = query.get("transactionHashes");
  const id = query.get("id");
  const { info } = useSelector((state) => state.account.account);
  const [loading, setLoading] = useState(false);
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

  const [drugData, setDrugData] = useState(form);

  const handleChange = ({ target: { name, value } }) => {
    setDrugData((p) => ({
      ...p,
      [name]: value,
    }));
  };

  const addDrugInfo = (e) => {
    e.preventDefault();
    setLoading(true);
    let id = uuid4();
    let data = {
      id: id,
      manufcturer_name: drugData.manufacturerName,
      sole_agent: drugData.soleAgentName,
      drug_brand_name: drugData.drugBrandName,
      generic_name: drugData.drugGenericName,
      drug_strength: drugData.drugStrength,
      formulation_type: drugData.formulationType,
      unit_packaging: drugData.unitPackaging,
      nafdac_number: drugData.NAFDACNumber,
      lot_number: drugData.batch_lotNumer,
      date_manufacture: drugData.dateOfManufacture,
      expiry_date: drugData.dateOfExpiry,
      company_id: info.id,
      status: 0,
      remark: "",
      authorize_marketers: drugData.authorizedMarketers,
    };
    navigate(`/register-new-drug?id=${id}`);
    setDrugInfo({
      beneficiary_id: "8790fahad.testnet",
      token: "0.1",
      data,
    })
      .then((resp) => {
        console.log(resp);
        toast(<NotificationSuccess text="Drug info added successfully." />);
        navigate(`/QRCode?id=${id}`);
      })
      .catch((err) => {
        console.log(err);
        // toast(<NotificationError text="Failed to create a new drug info." />);
      });
  };
  const [soleAgents, setSoleAgents] = useState([]);
  const [marketers, setMarketers] = useState([]);
  const getMarketers = useCallback(() => {
    getMarketer(
      `/v1/get-marketer?type=Marketer&companyId=${info.id}`,
      (res) => {
        if (res.success) {
          setMarketers(res.result);
        }
      },
      (err) => {
        console.error(err);
        toast(<NotificationError text="Failed, try again" />);
      }
    );
  }, [info.id]);
  const getSoleAgent = useCallback(() => {
    getMarketer(
      `/v1/get-marketer?type=Agent&companyId=${info.id}`,
      (res) => {
        if (res.success) {
          setSoleAgents(res.result);
        }
      },
      (err) => {
        console.error(err);
        toast(<NotificationError text="Failed, try again" />);
      }
    );
  }, [info.id]);

  useEffect(() => {
    getMarketers();
    getSoleAgent();
    if (transactionHashes) {
      navigate(`/QRCode?id=${id}`);
    }
  }, [getMarketers, getSoleAgent, id, navigate, transactionHashes]);
  return (
    <Form onSubmit={addDrugInfo}>
      <Card className="man_card shadow p-3">
        <h3 className="man_card_title">Register Drug Info</h3>
        <Row>
          <Col md={12}>
            <Row className="">
              <Col md={6} className="mb-3" controlId="validationCustom03">
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
              <Col md={6} className="mb-3">
                <label>Sole Agent Name</label>
                <Typeahead
                  id="basic-typeahead-single"
                  options={soleAgents}
                  labelKey={(item) => item.name}
                  inputProps={{
                    className: "man_input_fields",
                    style: { outline: "none" },
                  }}
                  onChange={(val) => {
                    if (val.length) {
                      let selected = val[0];
                      setDrugData((p) => ({
                        ...p,
                        soleAgentName: selected.id,
                      }));
                    }
                  }}
                />
              </Col>
            </Row>
            <Row className="">
              <Col md={6} className="mb-3">
                <label>Authorized Marketers/Presentatives</label>
                <Typeahead
                  id="basic-typeahead-single"
                  labelKey={(item) => item.name}
                  options={marketers}
                  inputProps={{
                    className: "man_input_fields",
                    style: { outline: "none" },
                  }}
                  onChange={(val) => {
                    if (val.length) {
                      let selected = val[0];
                      setDrugData((p) => ({
                        ...p,
                        authorizedMarketers: selected.id,
                      }));
                    }
                  }}
                />
              </Col>
              <Col md={6} className="mb-3">
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
            <Row className="">
              <Col md={6} className="mb-3">
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
              <Col md={6} className="mb-3">
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
            <Row className="">
              <Col md={6} className="mb-3">
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
              <Col md={6} className="mb-3">
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
            <Row className="">
              <Col md={6} className="mb-3">
                <label>Drug Authorization Number</label>
                <input
                  name="NAFDACNumber"
                  value={drugData.NAFDACNumber}
                  onChange={handleChange}
                  className="man_input_fields"
                  type="text"
                  required
                />
              </Col>
              <Col md={6} className="mb-3">
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
            <Row className="">
              <Col md={6} className="mb-3">
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
              <Col md={6} className="mb-3">
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
          <button type="submit" className="man_button" disabled={loading}>
            {loading ? <Spinner size="sm" /> : null}Register
          </button>
        </div>
      </Card>
    </Form>
  );
}
