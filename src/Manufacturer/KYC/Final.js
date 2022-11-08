import React from 'react'
import { Card, Col, Row } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import logo from "../../image/DRUG CIPHER (2).png";
import emoji from "../../image/emoji.png";

export default function Final() {
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
                                    display: "inline-block",
                                    color: "rgb(3, 66, 110)",
                                    marginRight: 30,
                                }}
                                className='dc'
                            >
                                DrugCipher
                            </h4>
                        </Col>
                        <Col md={6} sm={6} xs={6}>
                            {/* <ArrowLeftCircle className='shadow p-3' size='4em' style={{ color: 'rgb(3, 66, 110)', float: 'right', cursor: 'pointer' }} onClick={() => navigate(-1)} /> */}
                        </Col>
                    </Row>
                    <div className='text-center p-5'>
                        <h1 className='thankyou'>Thank you for registering</h1>
                        <div className='emoji_div shadow'>
                            <img src={emoji} alt='' className='emoji' />
                        </div>
                        <p className='mssg'>Your account is under review. when it is approved, a link will be sent to your email that will allow you to generate a passphrase and login to your account.</p>
                    </div>
                </div>
            </Card>
        </div >
    )
}
