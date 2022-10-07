import React from 'react'
import { Outlet } from 'react-router-dom'
import { Col, Row } from 'reactstrap'
import PharmacyNavMenu from '../MarketPlace/PharmacyNavMenu'

export default function AppIndex() {
    return (
        <div>
            <Row className='m-0'>
                <PharmacyNavMenu />
            </Row>
            <Row className='m-0'>
                <div className='container'>
                    <Col md={12}>
                        <Outlet />
                    </Col>
                </div>
            </Row>
        </div>
    )
}
