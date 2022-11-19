import React from "react";
// import { useEffect } from "react";
import { useState } from "react";
import { Card, Col, Row } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import { ArrowLeftCircle } from "react-feather";
import { useNavigate } from "react-router-dom";
export default function CreateSoleAgent() {
    const form = {
        soleAgentFullName: '',
        soleAgentPhone: '',
        soleAgentEmail: '',
        soleAgentAddress: '',
    };
    const navigate = useNavigate();

    const [soleAgentData, setSoleAgentData] = useState({ form });

    const handleChange = ({ target: { name, value } }) => {
        setSoleAgentData((p) => ({
            ...p,
            [name]: value,
        }));
    };
    const submitForm = () => {
        console.log(soleAgentData)
    };

    return (
        <Form>
            {/* {JSON.stringify({ drugData })} */}
            <Card className="man_card shadow p-3">
                <Row>
                    <Col md={6} sm={6} xs={6}>
                        <h3 className="man_card_title">Register Sole Agent</h3>
                    </Col>
                    <Col md={6} sm={6} xs={6}>
                        <ArrowLeftCircle
                            className="shadow p-3"
                            size="4em"
                            style={{
                                color: "rgb(3, 66, 110)",
                                float: "right",
                                cursor: "pointer",
                            }}
                            onClick={() => navigate(-1)}
                        />
                    </Col>
                </Row>

                <Row>
                    <Col md={12}>
                        <Row className="">
                            <Col md={6} className='mb-3' controlId="validationCustom03">
                                <label>Sole Agent Full Name</label>
                                <input
                                    name="soleAgentFullName"
                                    value={soleAgentData.soleAgentFullName}
                                    onChange={handleChange}
                                    className="man_input_fields"
                                    type="text"
                                    required
                                />
                            </Col>
                            <Col md={6} className='mb-3'>
                                <label>Sole Agent Phone</label>
                                <input
                                    name="soleAgentPhone"
                                    value={soleAgentData.soleAgentPhone}
                                    onChange={handleChange}
                                    className="man_input_fields"
                                    type="text"
                                    required
                                />
                            </Col>
                        </Row>
                        <Row className="">
                            <Col md={6} className="mb-3">
                                <label>Sole Agent Email</label>
                                <input
                                    name="soleAgentEmail"
                                    value={soleAgentData.soleAgentEmail}
                                    onChange={handleChange}
                                    className="man_input_fields"
                                    type="text"
                                    required
                                />

                            </Col>
                            <Col md={6} className='mb-3'>
                                <label>Sole Agent Address</label>
                                <input
                                    name="soleAgentAddress"
                                    value={soleAgentData.soleAgentAddress}
                                    onChange={handleChange}
                                    className="man_input_fields"
                                    type="text"
                                    required
                                />
                            </Col>
                        </Row>
                    </Col>
                </Row>

                <div className="">
                    {/* <button className='man_button' onClick={() => navigate('/QRCode')}>Register</button> */}
                    <button type="submit" className="man_button" onClick={submitForm}>
                        Register
                    </button>
                </div>
            </Card>
        </Form >
    );
}
