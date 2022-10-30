import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { Card, Col, Row } from 'react-bootstrap'
import drugcipherIcon from '../image/DRUG CIPHER (2).png'
import qrBackground from '../image/DRUG CIPHER (1).png'
import { v4 as uuid4 } from "uuid";
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
        Drug Name: ${drug.drugName = uuid4()},
        Drug GenericName: ${drug.drugGenericName = uuid4()},
        Dosages: ${drug.dosage = uuid4()}
        `)
    }, [drug])

    const downloadQRCode = () => {
        // Generate download with use canvas and stream
        const canvas = document.getElementById("qr-gen");
        const pngUrl = canvas
            .toDataURL("image/png")
            .replace("image/png", "image/octet-stream");
        let downloadLink = document.createElement("a");
        downloadLink.href = pngUrl;
        downloadLink.download = `${drugDetails}.png`;
        document.body.appendChild(downloadLink);
        downloadLink.click();
        document.body.removeChild(downloadLink);
    };

    return (
        <div>
            {/* {JSON.stringify({ drugDetails })} */}
            <Card className='man_card shadow p-3'>
                <h3 className='man_card_title'>Drug QR Code</h3>
                <Row>
                    <Col md={4}>
                        <div className='qr_code_div1' style={{ marginTop: 40 }}>
                            {/* <input type='text' name='drugName' value={drug.drugName} onChange={handleChange} /> */}
                            {/* <QRCode id="qrCodeEl" value={drugDetails} size={185} />, */}
                            <QRCode
                                id="qr-gen"
                                value={drugDetails}
                                // level={"H"}
                                includeMargin={true}
                                logoImage={drugcipherIcon}
                                logoWidth={100}
                                qrStyle={'dots'}
                                size={300}
                                // removeQrCodeBehindLogo={true}
                                // enableCORS={true}
                                logoOpacity={1}
                                eyeRadius={[
                                    [30, 0, 0, 0],
                                    [0, 30, 0, 0],
                                    [0, 0, 0, 30],
                                ]}
                                eyeColor={[
                                    {
                                        outer: 'black',
                                        inner: 'rgb(3, 66, 110)',
                                    },
                                    {
                                        outer: 'black',
                                        inner: 'rgb(3, 66, 110)',
                                    },
                                    {
                                        outer: 'black',
                                        inner: 'rgb(3, 66, 110)',
                                    }

                                ]}
                            // ecLevel={'H'} 
                            />
                        </div>
                        {/* <div className='qr_code_div2'>
                            <img src={qrBackground} style={{ width: 300 }} />
                        </div> */}
                    </Col>
                </Row>
                <div className='mt-3'>
                    <button className='man_button' onClick={downloadQRCode}>Download</button>
                </div>
            </Card>

        </div >
    )
}
