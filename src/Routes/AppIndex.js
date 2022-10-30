import React from 'react'
import { Outlet } from 'react-router-dom'
import { Col, Row } from 'reactstrap'
import Sidebar from '../Manufacturer/Sidebar'

import '../Manufacturer/Manufacturer.css'
import Navbar from '../Manufacturer/Navbar'
export default function AppIndex() {
    return (
        <div>
            {/* <Row className='m-0'>
                <PharmacyNavMenu />
            </Row> */}
            <Row className='m-0'>
                <Col md={2} className='p-0 m-0'>
                    <Sidebar />
                </Col>
                <Col md={10} className='p-0 m-0 _outlet'>
                    <Navbar/>
                    <Outlet/>
                </Col>
            </Row>
            {/* <SectionDivider/>
            <Footer /> */}
        </div>
    )
}
