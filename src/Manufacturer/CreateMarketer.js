import React from "react";
import { useState } from "react";
import { Card, Col, Row } from "react-bootstrap";
import Form from "react-bootstrap/Form";
// import { useNavigate } from "react-router-dom";
export default function CreateMarketer() {
    const form = {
        companyName:'',
        marketerFullName:'',
        marketerPhone:'',
        marketerEmail:'',
        marketerAddress:'',
        license:''
    };
    // const navigate = useNavigate();

    const [marketerData, setMarketerData] = useState({ form });

    const handleChange = ({ target: { name, value } }) => {
        setMarketerData((p) => ({
            ...p,
            [name]: value,
        }));
    };

    const submitForm = () => {
        console.log(marketerData)
    };

    return (
        <Form>
            {/* {JSON.stringify({ drugData })} */}
            <Card className="man_card shadow p-3">
                <h3 className="man_card_title">Register Marketer</h3>
                <Row>
                    <Col md={12}>
                        <Row className="pt-3">
                            <Col md={6} className="" controlId="validationCustom03">
                                <label>Company Name</label>
                                <input
                                    name="companyName"
                                    value={marketerData.companyName}
                                    onChange={handleChange}
                                    className="man_input_fields"
                                    type="text"
                                    required
                                />
                            </Col>
                            <Col md={6}>
                                <label>marketer Full Name</label>
                                <input
                                    name="marketerFullName"
                                    value={marketerData.marketerFullName}
                                    onChange={handleChange}
                                    className="man_input_fields"
                                    type="text"
                                    required
                                />
                            </Col>
                        </Row>
                        <Row className="pt-3">
                            <Col md={6} className="">
                                <label>Marketer Phone</label>
                                <input
                                    name="marketerPhone"
                                    value={marketerData.marketerPhone}
                                    onChange={handleChange}
                                    className="man_input_fields"
                                    type="text"
                                    required
                                />

                            </Col>
                            <Col md={6}>
                                <label>Marketer Email</label>
                                <input
                                    name="marketerEmail"
                                    value={marketerData.marketerEmail}
                                    onChange={handleChange}
                                    className="man_input_fields"
                                    type="text"
                                    required
                                />
                            </Col>
                        </Row>
                        <Row className="pt-3">
                            <Col md={6} className="">
                                <label>Marketer Address</label>
                                <input
                                    name="marketerAddress"
                                    value={marketerData.marketerAddress}
                                    onChange={handleChange}
                                    className="man_input_fields"
                                    type="text"
                                    required
                                />

                            </Col>
                            <Col md={6}>
                                <label>Marketer License</label>
                                <input
                                    name="license"
                                    value={marketerData.license}
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
