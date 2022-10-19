import React from 'react'
import { Card, Col, Row } from 'react-bootstrap'
import logo from '../image/DCIcon5.png'
import { useNavigate } from 'react-router-dom'
export default function KYC() {
    const navigate = useNavigate()
    return (
        <div className='container'>
            <Card className='KYC_card shadow p-3'>
                <div>
                    <img src={logo} style={{ width: 70 }} />
                    <h4 style={{ display: 'inline', color: 'rgb(3, 66, 110)' }}>Drug Cipher</h4>
                </div>
                <h3 className='man_card_title mt-4'>KYC</h3>
                <div className='mt-3'>
                    <Row className='mt-3'>
                        <Col md={6}>
                            <label>
                                Manufacturer License
                            </label>
                            <input name='manufacturer_license' className='man_input_fields' type='file' />
                        </Col>
                        <Col md={6}>
                            <label>
                                Pharmacist License
                            </label>
                            <input name='manufacturer_license' className='man_input_fields' type='file' />
                        </Col>
                    </Row>
                    <Row className='mt-3'>
                        <Col md={6}>
                            <label>
                                Company Name
                            </label>
                            <input name='manufacturer_license' className='man_input_fields' type='text' />
                        </Col>
                        <Col md={6}>
                            <label>
                                Company Address
                            </label>
                            <input name='manufacturer_license' className='man_input_fields' type='address' />
                        </Col>
                    </Row>
                    <Row className='mt-3'>
                        <Col md={6}>
                            <label>
                                Email
                            </label>
                            <input name='manufacturer_license' className='man_input_fields' type='email' />
                        </Col>
                        <Col md={6}>
                            <label>
                                Phone
                            </label>
                            <input name='manufacturer_license' className='man_input_fields' type='number' />
                        </Col>
                    </Row>
                </div>
                <div className='mt-3'>
                    <button className='man_button' onClick={() => navigate('/registered-drugs')}>Register</button>
                </div>
            </Card>
        </div>
    )
}
