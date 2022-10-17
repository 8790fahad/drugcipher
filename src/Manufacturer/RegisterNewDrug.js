import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { Card, Col, Row } from 'react-bootstrap'
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
    return (
        <div>
            {/* {JSON.stringify({ drugDetails })} */}
            <Card className='man_card shadow p-3'>
                <h3 className='man_card_title'>Register New Drug</h3>
                <Row>
                    <Col md={12}>
                        <Row className='pt-3'>
                            <Col md={6} className=''>
                                <label>
                                    Drug Name
                                </label>
                                <input name='drugName' value={drug.drugName} onChange={handleChange} className='man_input_fields' type='text' />
                            </Col>
                            <Col md={6}>
                                <label>
                                    Drug Generic Name
                                </label>
                                <input name='drugGenericName' value={drug.drugGenericName} onChange={handleChange} className='man_input_fields' type='text' />
                            </Col>
                        </Row>
                        <Row className='pt-3'>
                            <Col md={6} className=''>
                                <label>
                                    Date Created
                                </label>
                                <input name='dateCreated' value={drug.dateCreated} onChange={handleChange} className='man_input_fields' type='text' />
                            </Col>
                            <Col md={6}>
                                <label>
                                    Dosages
                                </label>
                                <input name='dosage' value={drug.dosage} onChange={handleChange} className='man_input_fields' type='text' />
                            </Col>
                        </Row>
                        <Row className='pt-3'>
                            <Col md={6}>
                                <label>
                                    Expiry Date
                                </label>
                                <input name='expiryDate' value={drug.expiryDate} onChange={handleChange} className='man_input_fields' type='text' />
                            </Col>
                            <Col md={6}>
                                <label>
                                    NAFDAC
                                </label>
                                <input name='nafdac' value={drug.nafdac} onChange={handleChange} className='man_input_fields' type='text' />
                            </Col>
                        </Row>
                    </Col>
                    {/* <Col md={4}>
                        <div style={{ marginTop: 40 }}>
                            <QRCode id="qrCodeEl" value={drugDetails} size={185} />,
                        </div>
                    </Col> */}
                </Row>
                <div className='mt-3'>
                    <button className='man_button' onClick={()=>navigate('/QRCode')}>Register</button>
                </div>
            </Card>

        </div >
    )
}
