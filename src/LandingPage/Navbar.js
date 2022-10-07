import React from 'react'
import { Col, Row } from 'react-bootstrap'
import Button from '../CustomFiles/Button'
import drugcipherIcon from '../image/DCIcon5.png'
import { useNavigate } from 'react-router-dom'
export default function Navbar() {
    const navigate = useNavigate()
    return (
        <div className='nav_bar large_nav_bar'>
            <Row className='m-0'>
                <Col xl={2} lg={2} md={2} sm={2} xs={2}>
                    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '75px' }} >
                        <div>
                            <img src={drugcipherIcon} alt='drugcipherlogo' style={{ width: 55 }} />
                            <h5 className='dc-name'>Drug Cipher</h5>
                        </div>
                    </div>
                </Col>
                <Col xl={2} lg={2} md={2} sm={2} xs={2}></Col>
                <Col xl={4} lg={4} md={4} sm={4} xs={4} className='nav_menuu'>
                    <div className='' style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', justifyContent: 'space-around', height: '75px' }} >
                        <div>
                            <p className='nav_menu' style={{ margin: 0 }}>About us</p>
                        </div>
                        <div>
                            <p className='nav_menu' style={{ margin: 0 }}>Team</p>
                        </div>
                        <div>
                            <p className='nav_menu' style={{ margin: 0 }}>Contact</p>
                        </div>
                        <div>
                            <p className='nav_menu' style={{ margin: 0 }}>Blog</p>
                        </div>
                    </div>
                </Col>

                <Col xl={2} lg={2} md={2} sm={2} xs={2}></Col>
                <Col xl={2} lg={2} md={6} sm={6} xs={6}>
                    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '75px' }} >
                        <div>
                            <Button className={'market_place_btn'} btnText={'Market Place'} onClick={() => navigate('/drug-cipher/market-place')} />
                        </div>
                    </div>
                </Col>
            </Row>
        </div>
    )
}
