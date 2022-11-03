import React, { useState } from 'react'
import { Card, Col, Form, Row } from 'react-bootstrap'
import logo from '../../image/DRUG CIPHER (2).png'
export default function Step3({ nextStep, handleChange, values }) {
    const submitForm = () => {
        nextStep()
    }
    return (
        <Form className='container' onSubmit={submitForm}>
            <Card className='KYC_card shadow p-3'>
                <div>
                    <img src={logo} style={{ width: 70, borderRadius: 10 }} alt="" className='shadow' />{' '}
                    <h4 style={{ display: 'inline', color: 'rgb(3, 66, 110)', marginRight: 30 }}>Drug Cipher</h4>
                </div>
                <h3 className='man_card_title mt-4'>KYC - Step 3 of 4</h3>
                <div className='mt-3'>
                    <Row className='mt-3'>
                        <Col md={6} controlId="validationCustom03">
                            <label>
                                Superintendent Pharmacist License
                            </label>
                            <input
                                className=''
                                type='file'
                                placeholder='Premises License by PCN'
                                name='superintendentLicense'
                                defaultValue={values.superintendentLicense}
                                onChange={handleChange}
                                required />
                        </Col>
                    </Row>
                </div>
                <div className='mt-3'>
                    <button type="submit" className='man_button' style={{ float: 'right' }}>Next</button>
                </div>
            </Card>
        </Form>
    )
}
