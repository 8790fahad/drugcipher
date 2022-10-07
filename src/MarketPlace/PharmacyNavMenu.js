import React from 'react'
import { Col, Row } from 'react-bootstrap'
import InputField from '../CustomFiles/InputField'
import search from '../image/search.png'
import cart from '../image/cart.png'
import bell from '../image/bell.png'
import help from '../image/help.png'
import account from '../image/account.png'
import './MarketPlace.css'
export default function PharmacyNavMenu() {
    return (
        <div>
            <Row className='m-0'>
                <Col md={3}></Col>
                <Col md={6} className=''>
                    <div style={{ marginTop: 13 }}>
                        <div>
                            <InputField type={'text'} name='searchDrugs' placeholder={'Search Drugs'} className='search_input' />
                        </div>
                    </div>
                </Col>
                <Col md={3}>
                    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '20px', height: '70px' }}>
                        <div className='icon_div p-1'>
                            <img src={cart} />
                        </div>
                        <div className='icon_div p-1'>
                            <img src={bell} />
                        </div>
                        <div className='icon_div p-1'>
                            <img src={help} />
                        </div>
                        <div className='icon_div p-1'>
                            <span>Account</span>{' '}<img src={account} />
                        </div>
                    </div>
                </Col>
            </Row>
        </div>
    )
}
