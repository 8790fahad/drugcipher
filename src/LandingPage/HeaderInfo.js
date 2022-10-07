import React from 'react'
import { Col, Row } from 'react-bootstrap'
import { Instagram, Linkedin, Twitter, Facebook, GitHub } from 'react-feather'

export default function HeaderInfo() {
    const date = new Date()
    const currentYear = date.getFullYear()
    const currentMonth = date.getMonth()
    // const currentDay = date.getDay()
    const time = new Date();
    const currentTime = time.toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true })
    const weekday = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const d = new Date();
    const currentDayName = weekday[d.getDay()];
    return (
        <div className='section_divider small_header'>
            <Row className='m-0'>
                <Col md={2}>
                    <div className='paper-div'>
                        <div className='paper-div-item'>
                            <p>Whitepaper</p>
                        </div>
                    </div>
                </Col>
                <Col md={8}>
                    <marquee style={{ color: 'white' }}>
                        {currentTime}{'. '}
                        {currentDayName}{' '}
                        {currentMonth}{', '}
                        {currentYear}
                    </marquee>
                </Col>
                <Col md={2}>
                    <div className='header-icons-div'>
                        <div className='header-icon'>
                            <GitHub size='1em' />
                        </div>
                        <div className='header-icon'>
                            <Instagram size='1em' />
                        </div>
                        <div className='header-icon'>
                            <Linkedin size='1em' />
                        </div>
                        <div className='header-icon'>
                            <Twitter size='1em' />
                        </div>
                        <div className='header-icon'>
                            <Facebook size='1em' />
                        </div>
                    </div>
                </Col>
            </Row>
        </div>
    )
}
