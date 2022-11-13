import React from 'react'
import { Instagram, Twitter, Facebook } from 'react-feather'
import whitepaper from '../DrugCipher.pdf'
import { Col, Row } from 'reactstrap'
import drugcipherIcon from '../image/DRUG CIPHER (2).png'

export default function Footer() {
    const year = new Date()
    const currentYear = year.getFullYear()
    return (
        <div className='footer' id='contact'>
            <Row className='m-0 p-4'>
                <Col xl={3} lg={3} md={12} sm={12} xs={12}>
                    <div>
                        <img src={drugcipherIcon} alt='drugcipherlogo' style={{ width: 55, borderRadius: 10 }} className='shadow' />
                        <h5 style={{ margin: 0, display: 'inline', fontWeight: '', marginLeft: 10 }}>DrugCipher</h5>
                    </div>
                    {/* <p className='footer_desc mt-3'>Sell online, process payments, build financial products, or use business tools designed to grow your business.</p> */}
                    <Row>
                        <Col md={8}>
                            <div className='icons_div mt-3'>
                                <div className='icons'>
                                    <a className='links' href='https://instagram.com/drugcipher'  target='_blank' rel="noreferrer">
                                        {<Instagram />}
                                    </a>
                                </div>
                                <div className='icons'>
                                    <a className='links' href='https://twitter.com/drugcipher' target='_blank' rel="noreferrer">
                                        <Twitter />
                                    </a>
                                </div>
                                <div className='icons'>
                                    <a className='links' href='https://fb.me/drugcipher' target='_blank' rel="noreferrer">
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
                    <h5 style={{ fontWeight: 'bold' }}>Legal</h5>
                    <p>Terms and Conditions</p>
                    <p>Privacy Policy</p>
                </Col>
                <Col xl={3} lg={3} md={12} sm={12} xs={12}>
                    <h5 style={{ fontWeight: 'bold' }}>Documents</h5>
                    <p>
                        <a href={whitepaper} target="_blank" rel='noreferrer' className='' style={{ color: 'rgb(3, 66, 110)' }}>
                            DrugCipher Whitepaper
                        </a>
                    </p>
                    <p>DrugCipher Deck</p>
                    <p>
                        <a href='https://github.com/ysquareimperial/drug-cipher' rel='noreferrer' target="_blank" className='' style={{ color: 'rgb(3, 66, 110)' }}>
                            Github
                        </a>
                    </p>
                </Col>

                <Col xl={3} lg={3} md={12} sm={12} xs={12}>
                    <h5 style={{ fontWeight: 'bold' }}>Contact Us</h5>
                    {/* <p>Office: Floor 1, African Alliance Building, No 1 Sani Abacha Way, Kano.</p>
                    <p>+234 123 456 789 </p>
                    <p>+234 123 456 789 </p> */}
                    <p>
                        <a style={{ display: 'block' }} className='links' href="mailto:mail@drugcipher.com">Email</a>
                    </p>
                    <p>
                        <a style={{ display: 'block' }} className='links' href='https://fb.me/drugcipher' target='_blank' rel="noreferrer">Facebook</a>
                    </p>
                    <p>
                        <a style={{ display: 'block' }} className='links' href='https://twitter.com/drugcipher' target='_blank' rel="noreferrer">Twitter</a >
                    </p>
                    <p>
                        <a style={{ display: 'block' }} className='links' href='https://instagram.com/drugcipher' target='_blank' rel="noreferrer">Instagram</a>
                    </p>
                </Col>
            </Row>
            <Row className='m-0 lastfootersection'>
                <Col md={4}><p>Copyright © {currentYear} DrugCipher.
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
