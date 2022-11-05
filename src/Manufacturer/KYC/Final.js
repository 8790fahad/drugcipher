import React, { useState } from 'react'
import { Card, Col, Row } from 'react-bootstrap'
import logo from '../../image/DRUG CIPHER (2).png'
import emoji from '../../image/emoji.png'
// import MyDropzone from './MyDropZone';
export default function Final() {
    return (
        <div className='container'>
            <Card className='KYC_card shadow p-3'>
                <div>
                    <img src={logo} style={{ width: 70, borderRadius: 10 }} alt="" className='shadow' />{' '}
                    <h4 style={{ display: 'inline', color: 'rgb(3, 66, 110)', marginRight: 30 }}>Drug Cipher</h4>
                </div>
                <div className='mt-3'>
                    <Row className='m-3 text-center'>
                        <p className='thankyou'>Thank you for registering!</p>
                        <div className='text-center mt-3'>
                            <img src={emoji} alt='thank you emoji' className='avatar' />
                        </div>
                        <p className='mssg'>A confirmation link has been sent to your email.</p>
                    </Row>
                </div>
            </Card>
        </div>
    )
}
