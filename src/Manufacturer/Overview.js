import React from "react";
import { useCallback } from "react";
import { useState } from "react";
import { Card, Col, Row } from "react-bootstrap";
import useQuery from "../hooks/useQuery";
import { _fetchApi } from "../utils/helper";
import BarChart from "./BarChart";
import DrugsLocation from "./DrugsLocation";
import moment from "moment";
export default function Overview() {
  const query = useQuery();
  const id = query.get("id");
  const drug_name = query.get("drug_name");
  const expiry_date = query.get("expiry_date");
  const [drugHistory, setDrugHistory] = useState({
    validScan: 0,
    invalidScan: 0,
    totalScan: 0,
    locationScan: 0,
    anonScan: 0,
    totalLocation: 0,
  });

  const drugHistoryReport = useCallback(() => {
    _fetchApi(
      "/v1/drug-history-report",
      (res) => {},
      (err) => {}
    );
  }, []);
  return (
    <div>
      <Card className="man_card shadow p-3">
        <h3 className="man_card_title">{drug_name}</h3>
        <Row style={{ color: "rgb(3, 66, 110)" }}>
          <Col md={6}>
            <Row>
              <Col md={4}>
                <Card className="overview_card shadow p-2 mb-2">
                  <p className="m-0">Number of Scans</p>
                  <h3>1</h3>
                </Card>
              </Col>
              <Col md={4}>
                <Card className="overview_card shadow p-2 mb-2">
                  <p className="m-0">Invalid Scans</p>
                  <h3>0</h3>
                </Card>
              </Col>
              <Col md={4}>
                <Card className="overview_card shadow p-2 mb-3">
                  <p className="m-0">Countries</p>
                  <h3>1</h3>
                </Card>
              </Col>
            </Row>
            <Card className="overview_card shadow p-2 mb-2 mt-1">
              <p className="m-0">Expiry Date</p>
              <h3>{moment(expiry_date).format("MMMM Do, YYYY")}</h3>
            </Card>
            <Card className="overview_card shadow p-2 mt-2">
              <BarChart />
            </Card>
          </Col>
          <Col md={6}>
            <Card className="overview_card shadow p-2 mb-2">
              <p>Drug Locations</p>
              <DrugsLocation />
            </Card>
          </Col>
        </Row>
      </Card>
    </div>
  );
}
