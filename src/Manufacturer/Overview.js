import React from "react";
import { useCallback } from "react";
import { useState } from "react";
import { Card, Col, Row } from "react-bootstrap";
import { ArrowLeftCircle } from "react-feather";
import useQuery from "../hooks/useQuery";
import { formatNumber, _fetchApi } from "../utils/helper";
import BarChart from "./BarChart";
import DrugsLocation from "./DrugsLocation";
import { useNavigate } from "react-router-dom";
// import moment from "moment";
export default function Overview() {
    const navigate = useNavigate()
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

    //   const drugHistoryReport = useCallback(() => {
    //     _fetchApi(
    //       `/v1/drug-history-report?id=${id}`,
    //       (res) => {
    //         if(res.success){
    //             setDrugHistory((p)=>({...p,validScan:res.number}))
    //         }
    //       },
    //       (err) => {}
    //     );
    //   }, []);
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
                            <Col md={4}>
                                <Card className="overview_card shadow p-2 mb-3">
                                    <p className="m-0">Total Scans</p>
                                    <h3>{formatNumber(drugHistory.totalScan)}</h3>
                                </Card>
                            </Col>
                        </Row>
                        <Row>
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
                            <Col md={4}>
                                <Card className="overview_card shadow p-2 mb-3">
                                    <p className="m-0">Total Locations</p>
                                    <h3>{formatNumber(drugHistory.totalScan)}</h3>
                                </Card>
                            </Col>
                        </Row>
                        <Card className="overview_card shadow p-2 mb-2 mt-1">
                            <div style={{ display: "flex", justifyContent: "space-between" }}>
                                <h3>
                                    {/* Expiry Date: {moment(expiry_date).format("MMMM Do, YYYY")} */}
                                </h3>
                            </div>
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
