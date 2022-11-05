import React from 'react'
import { Col, Row } from 'react-bootstrap'
import Button from '../CustomFiles/Button'
import { Instagram, Linkedin, Twitter, Facebook, GitHub } from 'react-feather'
import pharmacist from '../image/ddd.png'
export default function Section1() {
    return (
        <div className='section1_whole'>
            <div className='container'>
                <Row className=''>
                    <Col xl={6} lg={6} md={12} sm={12} xs={12}>
                        <div className='heading_div'>
                            <div className='mobile_heading_div'>
                                <h1 className='heading'>Track.</h1>
                                <h1 className='heading'>Own.</h1>
                                <h1 className='heading'>Substanciate.</h1>
                                <p className='sub_heading'>Health is wealth. Live longer and healthier when you trust Drug Cipher for total wellness.</p>
                                <Button className={'market_place_btn'} btnText={'Buy Your Medication'} style={{ marginRight: 10 }} />
                                <Button className={'market_place_btn doctor_btn'} btnText={'Consult a Doctor'} />
                                <p className='m-0 mt-5 text-white follow-us'>Follow us</p>
                                <div className='header-icons-div mt-2'>
                                    <div className='header-icon'>
                                        <GitHub size='1.5em' />
                                    </div>
                                    <div className='header-icon'>
                                        <Twitter size='1.5em' />
                                    </div>
                                    <div className='header-icon'>
                                        <Facebook size='1.5em' />
                                    </div>
                                    <div className='header-icon'>
                                        <Linkedin size='1.5em' />
                                    </div>
                                    <div className='header-icon'>
                                        <Instagram size='1.5em' />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Col>
                    <Col xl={6} lg={6} md={12} sm={12} xs={12}>
                        <div className='heading_div architecture-container'>
                            <div className='animate-img'>
                                <img src={pharmacist} alt='pharmacist' className='header-image' />
                            </div>
                            <div className='architecture-data1'>
                                01
                                <div className="architecture-content">
                                    <p style={{ fontWeight: 'bold', margin: 0 }}>Title here here.</p>
                                    <p>Hello World! my name i syaasdf as fasdfsd fasfasd fasdf asdfasdf fasdfsad fasf fassdf asdfasd fasdf fasdfas fasf asdfasd</p>
                                </div>
                            </div>
                            <div className='architecture-data2'>02
                                <div className="architecture-content">
                                    <p style={{ fontWeight: 'bold', margin: 0 }}>Title here here.</p>
                                    <p>Hello World! my name i syaasdf as fasdfsd fasfasd fasdf asdfasdf fasdfsad fasf fassdf asdfasd fasdf fasdfas fasf asdfasd</p>
                                </div>
                            </div>
                            <div className='architecture-data3'>03
                                <div className="architecture-content">
                                    <p style={{ fontWeight: 'bold', margin: 0 }}>Title here here.</p>
                                    <p>Hello World! my name i syaasdf as fasdfsd fasfasd fasdf asdfasdf fasdfsad fasf fassdf asdfasd fasdf fasdfas fasf asdfasd</p>
                                </div>
                            </div>
                            <div className='architecture-data4'>04
                                <div className="architecture-content">
                                    <p style={{ fontWeight: 'bold', margin: 0 }}>Title here here.</p>
                                    <p>Hello World! my name i syaasdf as fasdfsd fasfasd fasdf asdfasdf fasdfsad fasf fassdf asdfasd fasdf fasdfas fasf asdfasd</p>
                                </div>
                            </div>
                        </div>
                    </Col>
                </Row>
            </div>
        </div >
    )
}
