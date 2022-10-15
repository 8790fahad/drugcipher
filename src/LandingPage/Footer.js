import React from 'react'
import { Instagram, Linkedin, Twitter, Facebook } from 'react-feather'
import { Col, Row } from 'reactstrap'
import drugcipherIcon from '../image/DCIcon5.png'

export default function Footer() {
    const year = new Date()
    const currentYear = year.getFullYear()
    return (
        <div className='footer' id='contact'>
            <Row className='m-0 p-4'>
                <Col xl={3} lg={3} md={12} sm={12} xs={12}>
                    <div>
                        <img src={drugcipherIcon} alt='drugcipherlogo' style={{ width: 55 }} className='shadow' />
                        <h5 style={{ margin: 0, display: 'inline', fontWeight: 'bold', marginLeft: 10 }}>Drug Cipher</h5>
                    </div>
                    <p className='footer_desc mt-3'>Sell online, process payments, build financial products, or use business tools designed to grow your business.</p>
                    <Row>
                        <Col md={8}>
                            <div className='icons_div mt-3'>
                                <div className='icons'>
                                    <a className='links' href='https://instagram.com/drugcipher' target='_blank'>
                                        {<Instagram />}
                                    </a>
                                </div>
                                <div className='icons'>
                                    <a className='links' href='https://www.linkedin.com/in/drug-cipher-358406251/' target='_blank'>
                                        <Linkedin />
                                    </a>
                                </div>
                                <div className='icons'>
                                    <a className='links' href='https://twitter.com/drugcipher' target='_blank'>
                                        <Twitter />
                                    </a>
                                </div>
                                <div className='icons'>
                                    <a className='links' href='https://fb.me/drugcipher' target='_blank'>
                                        <Facebook />
                                    </a>
                                </div>
                            </div>
                        </Col>
                        <Col md={4}></Col>
                    </Row>
                    <p className='mt-1 drug_text_footer'>DRUG CIPHER</p>
                </Col>
                <Col xl={3} lg={3} md={12} sm={12} xs={12}>
                    <h5 style={{ fontWeight: 'bold' }}>Products</h5>
                    <p>Payments</p>
                    <p>Transfers</p>
                    <p>Invoicing</p>
                    <p>Store</p>
                </Col>
                <Col xl={3} lg={3} md={12} sm={12} xs={12}>
                    <h5 style={{ fontWeight: 'bold' }}>Developers</h5>
                    <p>Documentation</p>
                    <p>API Reference</p>
                    <p>API Status</p>
                    <p>Open Source</p>
                </Col>
                <Col xl={3} lg={3} md={12} sm={12} xs={12}>
                    <h5 style={{ fontWeight: 'bold' }}>Contact Us</h5>
                    <p>Office: Floor 1, African Alliance Building, No 1 Sani Abacha Way, Kano.</p>
                    <p>+234 123 456 789 </p>
                    <p>+234 123 456 789 </p>
                    <p>+234 123 456 789 </p>
                </Col>
            </Row>
            <Row className='m-0 lastfootersection'>
                <Col md={4}><p>Copyright © {currentYear} Drug Cipher.
                    All rights reserved.</p></Col>
                <Col md={1}></Col>
                <Col md={2} className='text-center'>
                </Col>
                <Col md={1}></Col>
                <Col md={1}></Col>
                <Col md={3}>
                    <p>Privacy & Policy . Terms & Conditions</p>
                </Col>
            </Row>
        </div>
    )
}
