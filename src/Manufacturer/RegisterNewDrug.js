import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { Card, Col, Row } from 'react-bootstrap'
import Form from 'react-bootstrap/Form';
import Button from '../CustomFiles/Button'
import QRCode from 'react-qr-code';
import { useRef } from 'react'
import { useNavigate } from 'react-router-dom'
export default function RegisterNewDrug() {
    const navigate = useNavigate()
    const [drug, setDrug] = useState({
        drugName: '',
        drugGenericName: '',
        dosage: ''
    })
    const [drugDetails, setDrugDetails] = useState('')
    const handleChange = ({ target: { name, value } }) => {
        setDrug((p) => ({
            ...p, [name]: value
        }))
    }

    useEffect(() => {
        setDrugDetails(`
        Drug Name: ${drug.drugName},
        Drug GenericName: ${drug.drugGenericName},
        Dosages: ${drug.dosage}
        `)
    }, [drug])

    const downloadQRCode = () => {
        const qrCodeURL = document.getElementById('qrCodeEl')
            .toDataURL("image/png")
            .replace("image/png", "image/octet-stream");
        console.log(qrCodeURL)
        let aEl = document.createElement("a");
        aEl.href = qrCodeURL;
        aEl.download = "QR_Code.png";
        document.body.appendChild(aEl);
        aEl.click();
        document.body.removeChild(aEl);
    }

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
    
        }
        // alert("sucess")
        setValidated(true);
    };

    return (
        <Form noValidate validated={validated} onSubmit={handleSubmit}>
            {/* {JSON.stringify({ drugDetails })} */}
            <Card className='man_card shadow p-3'>
                <h3 className='man_card_title'>Register New Drug</h3>
                <Row>
                    <Col md={12}>
                        <Row className='pt-3'>
                            <Col md={6} className='' controlId="validationCustom03">
                                <label>
                                    Drug Name
                                </label>
                                <input name='drugName' 
                                value={drug.drugName} onChange={handleChange} 
                                className='man_input_fields'
                                 type='text'
                                    required />
                                <Form.Control.Feedback type="invalid">
                                    Please enter drug name.
                                </Form.Control.Feedback>
                            </Col>
                            <Col md={6}>
                                <label>
                                    Drug Generic Name
                                </label>
                                <input name='drugGenericName'
                                 value={drug.drugGenericName} onChange={handleChange}
                                  className='man_input_fields'
                                   type='text'
                                    required />
                                <Form.Control.Feedback type="invalid">
                                    Please enter generic name.
                                </Form.Control.Feedback>
                            </Col>
                        </Row>
                        <Row className='pt-3'>
                            <Col md={6} className=''>
                                <label>
                                    Date Created
                                </label>
                                <input name='dateCreated'
                                 value={drug.dateCreated} onChange={handleChange} 
                                 className='man_input_fields' 
                                 type='date' 
                                    required/>
                                <Form.Control.Feedback type="invalid">
                                    Please  select a date.
                                </Form.Control.Feedback>
                            </Col>
                            <Col md={6}>
                                <label>
                                    Dosages
                                </label>
                                <input name='dosage'
                                 value={drug.dosage} onChange={handleChange} 
                                 className='man_input_fields' 
                                 type='text'
                                    required />
                                <Form.Control.Feedback type="invalid">
                                    Please enter dosage.
                                </Form.Control.Feedback>
                            </Col>
                        </Row>
                        <Row className='pt-3'>
                            <Col md={6}>
                                <label>
                                    Expiry Date
                                </label>
                                <input name='expiryDate'
                                 value={drug.expiryDate} onChange={handleChange} 
                                 className='man_input_fields' 
                                 type='date' 
                                    required />
                                <Form.Control.Feedback type="invalid">
                                    Please select expiry date.
                                </Form.Control.Feedback>
                            </Col>
                            <Col md={6}>
                                <label>
                                    NAFDAC
                                </label>
                                <input name='nafdac' 
                                value={drug.nafdac} onChange={handleChange} 
                                className='man_input_fields' 
                                type='text' 
                                    required />
                                <Form.Control.Feedback type="invalid">
                                    Please  enter a nafdac.
                                </Form.Control.Feedback>
                            </Col>
                        </Row>
                    </Col>
                </Row>
                <div className='mt-3'>
                    {/* <button className='man_button' onClick={() => navigate('/QRCode')}>Register</button> */}
                    <button type='submit' className='man_button'>Register</button>
                </div>
            </Card>

        </Form >
    )
}
