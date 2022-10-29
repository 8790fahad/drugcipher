import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { Card, Col, Row } from 'react-bootstrap'
import Form from 'react-bootstrap/Form';
import { useNavigate } from 'react-router-dom'
export default function RegisterNewDrug() {

    const form = {
        manufacturerName: '',
        soleAgentName: '',
        authorizedMarketers: '',
        drugBrandName: '',
        drugGenericName: '',
        drugStrength: '',
        formulationType: '',
        unitPackaging: '',
        NAFDACNumber: '',
        batch_lotNumer: '',
        dateOfManufacture: '',
        dateOfExpiry: ''
    }
    const navigate = useNavigate()

    const [validated, setValidated] = useState(false);

    const [drugData, setDrugData] = useState({ form })


    const handleChange = ({ target: { name, value } }) => {
        setDrugData((p) => ({
            ...p, [name]: value
        }))
    }



    const submitForm = (event) => {
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
            // alert("Complete This Page🔜")
        } else {
            console.log(drugData)
            navigate("/QRCode")
            // alert("sucess📧")

        }
        // alert("sucess")
        setValidated(true);
    };

    return (
        <Form noValidate validated={validated} onSubmit={submitForm}>
            {/* {JSON.stringify({ drugData })} */}
            <Card className='man_card shadow p-3'>
                <h3 className='man_card_title'>Register New Drug</h3>
                <Row>
                    <Col md={12}>
                        <Row className='pt-3'>
                            <Col md={6} className='' controlId="validationCustom03">
                                <label>
                                    Manufacturer's Name
                                </label>
                                <input name='manufacturerName'
                                    value={drugData.manufacturerName} onChange={handleChange}
                                    className='man_input_fields'
                                    type='text'
                                    required />
                                <Form.Control.Feedback type="invalid">
                                    Please enter manufacturer's name.
                                </Form.Control.Feedback>
                            </Col>
                            <Col md={6}>
                                <label>
                                    Sole Agent Name
                                </label>
                                <input name='soleAgentName'
                                    value={drugData.soleAgentName} onChange={handleChange}
                                    className='man_input_fields'
                                    type='text'
                                    required />
                                <Form.Control.Feedback type="invalid">
                                    Please enter sole agent name.
                                </Form.Control.Feedback>
                            </Col>
                        </Row>
                        <Row className='pt-3'>
                            <Col md={6} className=''>
                                <label>
                                    Authorized Marketers/Presentatives
                                </label>
                                <input name='authorizedMarketers'
                                    value={drugData.authorizedMarketers} onChange={handleChange}
                                    className='man_input_fields'
                                    type='text'
                                    required />
                                <Form.Control.Feedback type="invalid">
                                    Please enter authorized marketers/representatives name.
                                </Form.Control.Feedback>
                            </Col>
                            <Col md={6}>
                                <label>
                                    Drug Brand Name
                                </label>
                                <input name='drugBrandName'
                                    value={drugData.drugBrandName} onChange={handleChange}
                                    className='man_input_fields'
                                    type='text'
                                    required />
                                <Form.Control.Feedback type="invalid">
                                    Please enter drug brand name.
                                </Form.Control.Feedback>
                            </Col>
                        </Row>
                        <Row className='pt-3'>
                            <Col md={6}>
                                <label>
                                    Drug Generic/Chemical Name
                                </label>
                                <input name='drugGenericName'
                                    value={drugData.drugGenericName} onChange={handleChange}
                                    className='man_input_fields'
                                    type='text'
                                    required />
                                <Form.Control.Feedback type="invalid">
                                    Please enter drug generic name.
                                </Form.Control.Feedback>
                            </Col>
                            <Col md={6}>
                                <label>
                                    Strength of Drug
                                </label>
                                <input name='drugStrength'
                                    value={drugData.drugStrength} onChange={handleChange}
                                    className='man_input_fields'
                                    type='text'
                                    required />
                                <Form.Control.Feedback type="invalid">
                                    Please  enter strength of drug.
                                </Form.Control.Feedback>
                            </Col>
                        </Row>
                        <Row className='pt-3'>
                            <Col md={6}>
                                <label>
                                    Formulation Type
                                </label>
                                <input name='formulationType'
                                    value={drugData.formulationType} onChange={handleChange}
                                    className='man_input_fields'
                                    type='text'
                                    required />
                                <Form.Control.Feedback type="invalid">
                                    Please enter formulation type.
                                </Form.Control.Feedback>
                            </Col>
                            <Col md={6}>
                                <label>
                                    Unit Packaging
                                </label>
                                <input name='unitPackaging'
                                    value={drugData.unitPackaging} onChange={handleChange}
                                    className='man_input_fields'
                                    type='text'
                                    required />
                                <Form.Control.Feedback type="invalid">
                                    Please  enter unit packaging.
                                </Form.Control.Feedback>
                            </Col>
                        </Row>
                        <Row className='pt-3'>
                            <Col md={6}>
                                <label>
                                    NAFDAC Number
                                </label>
                                <input name='NAFDACNumber'
                                    value={drugData.NAFDACNumber} onChange={handleChange}
                                    className='man_input_fields'
                                    type='text'
                                    required />
                                <Form.Control.Feedback type="invalid">
                                    Please enter NAFDAC number.
                                </Form.Control.Feedback>
                            </Col>
                            <Col md={6}>
                                <label>
                                    Batch/Lot Number
                                </label>
                                <input name='batch_lotNumer'
                                    value={drugData.batch_lotNumer} onChange={handleChange}
                                    className='man_input_fields'
                                    type='text'
                                    required />
                                <Form.Control.Feedback type="invalid">
                                    Please  enter Batch/Lot Number.
                                </Form.Control.Feedback>
                            </Col>
                        </Row>
                        <Row className='pt-3'>
                            <Col md={6}>
                                <label>
                                    Date of Manufacture
                                </label>
                                <input name='dateOfManufacture'
                                    value={drugData.dateOfManufacture} onChange={handleChange}
                                    className='man_input_fields'
                                    type='date'
                                    required />
                                <Form.Control.Feedback type="invalid">
                                    Please enter date of manufacture.
                                </Form.Control.Feedback>
                            </Col>
                            <Col md={6}>
                                <label>
                                    Date of Expiry
                                </label>
                                <input name='dateOfExpiry'
                                    value={drugData.dateOfExpiry} onChange={handleChange}
                                    className='man_input_fields'
                                    type='date'
                                    required />
                                <Form.Control.Feedback type="invalid">
                                    Please  enter Batch/Lot Number.
                                </Form.Control.Feedback>
                            </Col>
                        </Row>
                        
                    </Col>
                </Row>

                <div className='mt-3'>
                    {/* <button className='man_button' onClick={() => navigate('/QRCode')}>Register</button> */}
                    <button type='submit' className='man_button' onClick={submitForm}>Register</button>
                </div>
            </Card>

        </Form >
    )
}
