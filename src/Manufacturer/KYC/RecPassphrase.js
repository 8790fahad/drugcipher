import React from 'react'
import { Card, Col, Row } from 'react-bootstrap'
import { ArrowLeftCircle } from 'react-feather';
import { useNavigate } from 'react-router-dom';
import logo from "../../image/DRUG CIPHER (2).png";

export default function RecPassphrase() {
    const navigate = useNavigate()

    return (
        <div>
            <div className='container'>
                <Card className="KYC_card shadow p-3">
                    <div>
                        <Row>
                            <Col md={6} sm={6} xs={6}>
                                <img
                                    src={logo}
                                    style={{ width: 70, borderRadius: 10 }}
                                    alt=""
                                    className="shadow"
                                    onClick={() => navigate('/')}

                                />{" "}
                                <h4
                                    style={{
                                        display: "inline",
                                        color: "rgb(3, 66, 110)",
                                        marginRight: 30,
                                    }}
                                    className='dc'
                                >
                                    DrugCipher
                                </h4>
                            </Col>
                            <Col md={6} sm={6} xs={6}>
                                <ArrowLeftCircle className='shadow p-3' size='4em' style={{ color: 'rgb(3, 66, 110)', float: 'right', cursor: 'pointer' }} onClick={() => navigate(-1)} />
                            </Col>
                        </Row>
                    </div>
                    <div>
                        <div className='text-center'>
                            <h3 className='register_heading mt-3'>
                                Recorver Using Passphrase
                            </h3>
                            <p className='m-0' style={{ color: '#029f41' }}>DrugCipher introduces a sophisticated solution to tackling the issues surrounding pharmaceutical products.</p>
                        </div>
                        <div style={{}} className='mt-5'>
                            <Row>
                                <Col md={4}></Col>
                                <Col md={4}>
                                    <p className='m-0'><b>Enter the passphrase that was generated for this account.</b></p>
                                    <label>
                                        Passphrase(15 words)<b style={{ color: "red" }}>*</b>
                                    </label>
                                    <input className='man_input_fields' placeholder='cap shirt spoon...' />
                                    <button className='man_button mt-3' style={{ width: '100%' }}>Recorver</button>
                                </Col>
                                <Col md={4}></Col>
                            </Row>
                        </div>
                    </div>
                </Card>
            </div>
        </div>
    )
}