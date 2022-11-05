import React from 'react'
import { Card, Col, Row } from 'react-bootstrap';
import { AtSign, File, FileText, Mail, Send } from 'react-feather';
import { useNavigate } from 'react-router-dom';
import logo from "../../image/DRUG CIPHER (2).png";

export default function Login() {
    const navigate = useNavigate()

    return (
        <div className='container'>
            <Card className="KYC_card shadow p-3">
                <div>
                    <img
                        src={logo}
                        style={{ width: 70, borderRadius: 10 }}
                        alt=""
                        className="shadow"
                    />{" "}
                    <h4
                        style={{
                            display: "inline",
                            color: "rgb(3, 66, 110)",
                            marginRight: 30,
                        }}
                    >
                        Drug Cipher
                    </h4>
                </div>
                <div>
                    <div className='text-center'>
                        <h3 className='register_heading mt-3'>
                            Import Existing Account
                        </h3>
                        <p className='m-0' style={{ color: '#029f41' }}>Drug Cipher introduces a sophisticated solution to tackling the issues surrounding pharmaceutical products.</p>
                    </div>
                    <div style={{}} className='mt-5'>
                        <Row>
                            <Col md={6}>
                                <Card className='KYC_card shadow p-4'>
                                    <h5 className="man_card_title mt-4"><AtSign />{' '}Email Recovery</h5>
                                    <p>When you click the 'Send Email' button, a recovery mail will be sent to your email that is been registered with your account.</p>
                                    <button className='man_button'>Send Email</button>

                                </Card>
                            </Col>
                            <Col md={6}>
                                <Card className='KYC_card shadow p-4'>
                                    <h5 className="man_card_title mt-4"><FileText />{' '}Passphrase Recovery</h5>
                                    <p>When you click the 'Recover Account' button, you will be asked to input your 15 words passphrase that was generated for your account when registering.</p>
                                    <button className='man_button' onClick={()=>navigate('/recorver-passphrase')}>Recover Account</button>
                                </Card>
                            </Col>
                        </Row>
                    </div>
                </div>
            </Card>
        </div>
    )
}