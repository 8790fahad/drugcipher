import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { Card, Col, Row } from 'react-bootstrap'
import drugcipherIcon from '../image/DRUG CIPHER (2).png'

import Button from '../CustomFiles/Button'
// import QRCode from 'react-qr-code';
import { useRef } from 'react'
import { QRCode } from 'react-qrcode-logo';

export default function QRCodePage() {
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
                <h3 className='man_card_title'>Drug QR Code</h3>
                <Row>
                    <Col md={4}>
                        <div style={{ marginTop: 40 }}>
                            {/* <QRCode id="qrCodeEl" value={drugDetails} size={185} />, */}
                            <QRCode value={drugDetails} bgColor={'rgb(3, 66, 110)'} fgColor={'#FFFFFF'} logoImage={drugcipherIcon} logoWidth={50}/>
                        </div>
                    </Col>
                </Row>
                <div className='mt-3'>
                    <button className='man_button' onClick={downloadQRCode}>Download</button>
                </div>
            </Card>

        </div >
    )
}
