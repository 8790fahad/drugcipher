import moment from "moment";
import React, { useEffect } from "react";
import { useCallback } from "react";
import { useState } from "react";
import { Card, Col, Row } from "react-bootstrap";
import { useSelector } from "react-redux";
import { ArrowLeftCircle } from "react-feather";
import useQuery from "../hooks/useQuery";
import { formatNumber, _fetchApi } from "../utils/helper";
import BarChart from "./BarChart";
import DrugsLocation from "./DrugsLocation";
import { useNavigate } from "react-router-dom";
export default function Overview() {
  const navigate = useNavigate();
  const { info } = useSelector((state) => state.account.account);
  const query = useQuery();
  const id = query.get("id");
  const drug_name = query.get("drug_name");
  const expiry_date = query.get("expiry_date");
  const [drugHistory, setDrugHistory] = useState({
    validScan: 0,
    invalidScan: 0,
    locationScan: 0,
    anonScan: 0,
    location: [],
    star: [],
  });

  const drugHistoryReportValid = useCallback(() => {
    _fetchApi(
      `/v1/drug-history-report?id=${id}&company_id=${info.id}&query_type=valid`,
      (res) => {
        if (res.success && res.result !== null) {
          setDrugHistory((p) => ({ ...p, validScan: res.result.number }));
        }
      },
      (err) => {
        console.log(err);
      }
    );
  }, [id, info.id]);
  const drugHistoryReportInValid = useCallback(() => {
    _fetchApi(
      `/v1/drug-history-report?id=${id}&company_id=${info.id}&query_type=invalid`,
      (res) => {
        if (res.success && res.result !== null) {
          setDrugHistory((p) => ({ ...p, invalidScan: res.result.number }));
        }
      },
      (err) => {
        console.log(err);
      }
    );
  }, [id, info.id]);
  const drugHistoryReportCon = useCallback(() => {
    _fetchApi(
      `/v1/drug-history-report?id=${id}&company_id=${info.id}&query_type=country`,
      (res) => {
        if (res.success && res.result !== null) {
          setDrugHistory((p) => ({ ...p, locationScan: res.result.number }));
        }
      },
      (err) => {
        console.log(err);
      }
    );
  }, [id, info.id]);
  const drugHistoryReportAnon = useCallback(() => {
    _fetchApi(
      `/v1/drug-history-report?id=${id}&company_id=${info.id}&query_type=anon`,
      (res) => {
        if (res.success && res.result !== null) {
          setDrugHistory((p) => ({ ...p, anonScan: res.result.number }));
        }
      },
      (err) => {
        console.log(err);
      }
    );
  }, [id, info.id]);
  const drugHistoryReportLocation = useCallback(() => {
    _fetchApi(
      `/v1/drug-history-report?id=${id}&company_id=${info.id}&query_type=location`,
      (res) => {
        if (res.success && res.result !== null) {
          setDrugHistory((p) => ({ ...p, location: [res.result] }));
        }
      },
      (err) => {
        console.log(err);
      }
    );
  }, [id, info.id]);

  const drugHistoryReportAll = useCallback(() => {
    _fetchApi(
      `/v1/drug-history-report?id=${id}&company_id=${info.id}&query_type=all`,
      (res) => {
        if (res.success && res.result !== null) {
          setDrugHistory((p) => ({ ...p, star: [res.result] }));
        }
      },
      (err) => {
        console.log(err);
      }
    );
  }, [id, info.id]);
  useEffect(() => {
    drugHistoryReportCon();
    drugHistoryReportAnon();
    drugHistoryReportInValid();
    drugHistoryReportValid();
    drugHistoryReportLocation();
    drugHistoryReportAll();
  }, [
    drugHistoryReportAnon,
    drugHistoryReportCon,
    drugHistoryReportInValid,
    drugHistoryReportValid,
    drugHistoryReportLocation,
    drugHistoryReportAll,
    info.company_id,
  ]);
  return (
    <div>
      <Card className="man_card shadow p-3">
        <Row>
          <Col md={6} sm={6} xs={6}>
            <h3 className="man_card_title">{drug_name}</h3>
          </Col>
          <Col md={6} sm={6} xs={6}>
            <ArrowLeftCircle
              className="shadow p-1"
              size="2em"
              style={{
                color: "rgb(3, 66, 110)",
                float: "right",
                cursor: "pointer",
              }}
              onClick={() => navigate(-1)}
            />
          </Col>
        </Row>
        <Row style={{ color: "rgb(3, 66, 110)" }}>
          <Col md={6}>
            <Row>
              <Col md={4}>
                <Card className="overview_card shadow p-2 mb-3">
                  <p className="m-0">Total Scans</p>
                  <h3>
                    {formatNumber(
                      drugHistory.invalidScan + drugHistory.validScan
                    )}
                  </h3>
                </Card>
              </Col>
              <Col md={4}>
                <Card className="overview_card shadow p-2 mb-2">
                  <p className="m-0">Valid Scans</p>
                  <h3>{formatNumber(drugHistory.validScan)}</h3>
                </Card>
              </Col>
              <Col md={4}>
                <Card className="overview_card shadow p-2 mb-2">
                  <p className="m-0">Invalid Scans</p>
                  <h3>{formatNumber(drugHistory.invalidScan)}</h3>
                </Card>
              </Col>
            </Row>
            <Row>
              <Col md={4}>
                <Card className="overview_card shadow p-2 mb-3">
                  <p className="m-0">Total Locations</p>
                  <h3>
                    {formatNumber(
                      drugHistory.locationScan + drugHistory.anonScan
                    )}
                  </h3>
                </Card>
              </Col>
              <Col md={4}>
                <Card className="overview_card shadow p-2 mb-2">
                  <p className="m-0">Countries</p>
                  <h3>{formatNumber(drugHistory.locationScan)}</h3>
                </Card>
              </Col>
              <Col md={4}>
                <Card className="overview_card shadow p-2 mb-2">
                  <p className="m-0">Anon. Locations</p>
                  <h3>{formatNumber(drugHistory.anonScan)}</h3>
                </Card>
              </Col>
            </Row>
            <Card className="overview_card shadow p-2 mb-2 mt-1">
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <h3>
                  Expiry Date: {moment(expiry_date).format("MMMM Do, YYYY")}
                </h3>
              </div>
            </Card>
            <Card className="overview_card shadow p-2 mt-2">
              <BarChart star={drugHistory.star} />
            </Card>
          </Col>
          <Col md={6}>
            <Card className="overview_card shadow p-2 mb-2">
              <p>Drug Locations</p>
              <DrugsLocation location={drugHistory.location} />
            </Card>
          </Col>
        </Row>
      </Card>
    </div>
  );
}
