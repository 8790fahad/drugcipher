import React from 'react'
import { Col, Row } from 'react-bootstrap'
import Button from '../CustomFiles/Button'
import drugcipherIcon from '../image/DRUG CIPHER (2).png'
import { useNavigate } from 'react-router-dom'
// import { login } from '../utils/helper'
export default function Navbar() {
    const navigate = useNavigate()
    return (
        <div className='nav_bar large_nav_bar'>
            <Row className='m-0'>
                <Col xl={2} lg={2} md={2} sm={2} xs={2}>
                    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '75px' }} >
                        <div>
                            <img src={drugcipherIcon} alt='drugcipherlogo' style={{ width: 55, borderRadius:10 }} />
                            <h5 className='dc-name'>Drug Cipher</h5>
                        </div>
                    </div>
                </Col>
                <Col xl={2} lg={2} md={2} sm={2} xs={2}></Col>
                <Col xl={4} lg={4} md={4} sm={4} xs={4} className='nav_menuu'>
                    <div className='' style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap:30, height: '75px' }} >
                        <div>
                            <p className='nav_menu' style={{ margin: 0 }}><a href='#about-us'>About us</a></p>
                        </div>
                        <div>
                            <p className='nav_menu' style={{ margin: 0 }}><a href='#team'>Team</a></p>
                        </div>
                        <div>
                            <p className='nav_menu' style={{ margin: 0 }}><a href='#contact'>Contact</a></p>
                        </div>
                        <div>
                            <p className='nav_menu' style={{ margin: 0 }}><a href='#blog'>Blog</a></p>
                        </div>
                    </div>
                </Col>

                <Col xl={2} lg={2} md={2} sm={2} xs={2}></Col>
                <Col xl={2} lg={2} md={6} sm={6} xs={6}>
                    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '75px' }} >
                        <div>
                            <Button className={'market_place_btn'} btnText={'Register'} onClick={() => navigate('/register')}
                            />
                        </div>
                    </div>
                </Col>
            </Row>
        </div>
    )
}
