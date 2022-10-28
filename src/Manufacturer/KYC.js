import React, { useState } from 'react'
import { Card, Col, Row } from 'react-bootstrap'
import Form from 'react-bootstrap/Form';
import logo from '../image/DRUG CIPHER (2).png'
import Button from 'react-bootstrap/Button';
import { useNavigate } from 'react-router-dom'
import MyDropzone from './MyDropZone';
export default function KYC() {
    const navigate = useNavigate()

    const [validated, setValidated] = useState(false);

    const handleSubmit = (event) => {
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
            // alert("Complete This Page🔜")
        } else {
            navigate("/registered-drugs")
            // alert("sucess📧")
            // alert()
        }
        // alert("sucess")
        setValidated(true);
    };

    return (
        <Form className='container' noValidate validated={validated} onSubmit={handleSubmit}>
            <Card className='KYC_card shadow p-3'>
                <div>
                    <img src={logo} style={{ width: 70, borderRadius: 10 }} alt="" className='shadow' />{' '}
                    <h4 style={{ display: 'inline', color: 'rgb(3, 66, 110)', marginRight: 30 }}>Drug Cipher</h4>
                </div>
                <h3 className='man_card_title mt-4'>KYC</h3>
                <div className='mt-3'>
                    <label>
                        Premices License by PCN & Superintendent Pharmacist License
                    </label>
                    <MyDropzone />

                    {/* <Row className='mt-3'>
                        <Col md={6}>

                            <input name='manufacturer_license'
                                className='man_input_fields'
                                type='file' required />

                            <Form.Control.Feedback type="invalid">
                                Please  choose a valid license.
                            </Form.Control.Feedback>
                        </Col>
                        <Col md={6}>
                            <label>
                                Superintendent Pharmacist License
                            </label>
                            <input name='manufacturer_license'
                                className='man_input_fields'
                                type='file' required />

                            <Form.Control.Feedback type="invalid">
                                Please  choose a valid license.
                            </Form.Control.Feedback>
                        </Col>
                    </Row> */}
                    <Row className='mt-3'>
                        <Col md={6} controlId="validationCustom03">
                            <label>
                                Company Name
                            </label>
                            <input name='manufacturer_license
                            ' className='man_input_fields'
                                type='text'
                                placeholder='Company Name'
                                required />
                            <Form.Control.Feedback type="invalid">
                                Please provide a Valid company name.
                            </Form.Control.Feedback>
                        </Col>
                        <Col md={6}>
                            <label>
                                Company Address
                            </label>
                            <input name='manufacturer_license'
                                className='man_input_fields'
                                type='address'
                                placeholder='Company Address'
                                required />
                            <Form.Control.Feedback type="invalid">
                                Please provide a valid address.
                            </Form.Control.Feedback>
                        </Col>
                    </Row>
                    <Row className='mt-3'>
                        <Col md={6}>
                            <label>
                                Email
                            </label>
                            <input name='manufacturer_license'
                                className='man_input_fields'
                                type='email'
                                placeholder='Email'
                                required />

                            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                            <Form.Control.Feedback type="invalid">
                                Please provide a valid email.
                            </Form.Control.Feedback>
                        </Col>
                        <Col md={6}>
                            <label>
                                Phone
                            </label>
                            <input name='manufacturer_license'
                                className='man_input_fields'
                                type='number'
                                placeholder='Phone Number'
                                required />
                            <Form.Control.Feedback>Valid!</Form.Control.Feedback>
                            <Form.Control.Feedback type="invalid">
                                Please provide a valid phone number.
                            </Form.Control.Feedback>
                        </Col>
                    </Row>
                </div>
                <div className='mt-3'>
                    {/* <Button className='man_button' onClick={() => navigate('/registered-drugs')} type="submit">Register</Button> */}
                    <button type="submit" className='man_button'>Register</button>
                </div>
            </Card>
        </Form>
    )
}
