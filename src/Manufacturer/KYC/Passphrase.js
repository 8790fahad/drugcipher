import React, { useState } from 'react'
import { Card, Col, Form, Row } from 'react-bootstrap'
import { Copy, RefreshCcw } from 'react-feather'
import logo from '../../image/DRUG CIPHER (2).png'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
export default function Passphrase({ nextStep }) {
    const notify = () => toast("Passphrase Copied!");
    const submitForm = () => {
        nextStep()
    }
    const passphrase = [
        'name',
        'boy',
        'cat',
        'dog',
        'phone',
        'future',
        'lit',
        'gas',
        'film',
        'cop',
        'play',
        'poor',
        'good',
        'null',
        'ball'
    ]
// const show = passphrase.join(" ")
// alert(show)
    return (
        <Form className='container' onSubmit={submitForm}>
            <Card className='KYC_card shadow p-3'>
                <div>
                    <img src={logo} style={{ width: 70, borderRadius: 10 }} alt="" className='shadow' />{' '}
                    <h4 style={{ display: 'inline', color: 'rgb(3, 66, 110)', marginRight: 30 }}>Drug Cipher</h4>
                </div>
                <h3 className='man_card_title mt-4'>KYC - Step 4 of 4</h3>
                <div className='mt-3'>
                    <Row className='mt-3'>
                        <Col md={6} controlId="validationCustom03">
                            <p className='thankyou'>Passphrase</p>
                            <p style={{ textAlign: 'justify' }}>Copy the following words 'Passphrase' and <b>save them in a very secure place. Anyone who have acess to this words will have access to your account.</b> You will be asked to use the 'Passphrase' when login to your account!</p>
                            <Card className='pp_card p-2 shadow'>
                                <Row>
                                    {passphrase.map((item, index) => (
                                        <Col md={4}>
                                            <p className='word p-2'>
                                                {index + 1}:{' '} {item}
                                            </p>
                                        </Col>
                                    ))}
                                    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                                        <span className='man_button' style={{ cursor: 'pointer' }} onClick={() => {
                                            navigator.clipboard.writeText(passphrase.join(' '))
                                            notify()
                                        }}>
                                                {/* < ToastContainer /> */}
                                            <Copy />{' '}Copy
                                        </span>
                                        <span className='man_button' style={{ cursor: 'pointer' }}>
                                            <RefreshCcw />{' '}Regenerate
                                        </span>
                                    </div>
                                </Row>
                            </Card>
                        </Col>
                    </Row>
                </div>
                <div className='mt-3'>
                    <button type="submit" onClick={submitForm} className='man_button' style={{ float: 'right' }}>Done</button>
                </div>
            </Card>
        </Form>
    )
}
