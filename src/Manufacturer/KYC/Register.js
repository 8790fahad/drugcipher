import React from 'react'
import { Card, Col, Row } from 'react-bootstrap';
import { ArrowLeftCircle } from 'react-feather';
import { useNavigate } from 'react-router-dom';
import logo from "../../image/DRUG CIPHER (2).png";

export default function Register() {
    const navigate = useNavigate()

    return (
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
                            <ArrowLeftCircle className='shadow p-3' size='4em' style={{ color: 'rgb(3, 66, 110)', float:'right', cursor:'pointer' }} onClick={()=>navigate(-1)}/>
                        </Col>
                    </Row>

                </div>
                <div className='text-center'>
                    <h3 className='register_heading mt-3'>
                        ...trust is good, but encryption is better!
                    </h3>
                    <p className='m-0' style={{ color: '#029f41' }}>DrugCipher introduces a sophisticated solution to tackling the issues surrounding pharmaceutical products.</p>
                    <div style={{}} className='text-center mt-5'>
                        <button className='man_button register_btn' style={{ marginRight: 10 }} onClick={() => navigate('/KYC')}>Create Account</button>
                        <span style={{ marginRight: 10 }} className='or'>Or</span>
                        <button className='register_btn' style={{ border: '1px dashed #029f41', padding: '7px', backgroundColor: 'white', color: 'rgb(3, 66, 110)' }} onClick={() => navigate('/login')}>Import Existing Account</button>
                    </div>
                </div>
            </Card>
            <div className='text-center text-secondary'>
                <p>Copyright © {new Date().getFullYear()} DrugCipher. All rights reserved.</p>
            </div>
        </div>
    )
}