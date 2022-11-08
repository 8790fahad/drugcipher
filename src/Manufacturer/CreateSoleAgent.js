import React from "react";
// import { useEffect } from "react";
import { useState } from "react";
import { Card, Col, Row } from "react-bootstrap";
import Form from "react-bootstrap/Form";
// import { useNavigate } from "react-router-dom";
export default function CreateSoleAgent() {
    const form = {
        soleAgentFullName: '',
        soleAgentPhone: '',
        soleAgentEmail: '',
        soleAgentAddress: '',
    };
    // const navigate = useNavigate();

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
                <h3 className="man_card_title">Register Sole Agent</h3>
                <Row>
                    <Col md={12}>
                        <Row className="pt-3">
                            <Col md={6} className="" controlId="validationCustom03">
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
                            <Col md={6}>
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
                        <Row className="pt-3">
                            <Col md={6} className="">
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
                            <Col md={6}>
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
