import React from 'react'
import { Col, Row } from 'react-bootstrap'
import cart from '../image/cart.png'
import bell from '../image/bell.png'
import help from '../image/help.png'
import account from '../image/account.png'
import { useNavigate } from 'react-router-dom'
import InputField from '../CustomFiles/InputField'
export default function Navbar() {
    const navigate = useNavigate()
    return (
        <div>
            <Row className='m-0'>
                <Col md={9}>
                    <div>
                        <input type='text' placeholder='Search' className='man_search_field shadow' />
                    </div>
                </Col>
                <Col md={3}>
                    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '20px', height: '70px' }}>
                        <div className='icon_div p-1' style={{ position: 'relative' }} onClick={() => navigate('/notifications')}>
                            <div className='absolute'>
                                <span >11</span>
                            </div>
                            <img src={bell} />
                        </div>
                        {/* <div className='icon_div p-1'>
                            <img src={bell} />
                        </div> */}
                        <div className='icon_div p-1'>
                            <img src={help} />
                        </div>
                        <div className='icon_div p-1' onClick={() => navigate('/account')}>
                            <span className='account'>Account</span>{' '}<img src={account} />
                        </div>
                    </div>
                </Col>
            </Row>
        </div>
    )
}
