import React from 'react'
import { Col, Row } from 'react-bootstrap'
import Clock from 'react-live-clock';
import { Instagram, Twitter, Facebook, GitHub } from 'react-feather'
import whitepaper from '../DrugCipher.pdf'
export default function HeaderInfo() {
    // const date = new Date()
    // const currentYear = date.getFullYear()
    // const currentMonth = date.getMonth()
    // const currentDay = date.getDay()
    // const time = new Date();
    // const currentTime = time.toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true })
    // const weekday = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    // const d = new Date();
    // const currentDayName = weekday[d.getDay()];
    return (
        <div className='section_divider small_header'>
            <Row className='m-0'>
                <Col md={2}>
                    <div className='paper-div'>
                        <div className='paper-div-item'>
                            <p>
                                <a href={whitepaper} rel='noreferrer' target="_blank" className='text-secondary'>
                                    Whitepaper
                                </a>
                            </p>
                        </div>
                    </div>
                </Col>
                <Col md={8}>
                    <marquee style={{ color: 'white' }}>
                        {/* {currentTime}{'. '} */}
                        <Clock filter={date => date.replace('8', '7a')} format={'HH:mm:ss, dddd, MMMM Mo, YYYY'} ticking={true} />{'. '}
                    </marquee>
                </Col>
                <Col md={2}>
                    <div className='header-icons-div'>
                        <div className='header-icon'>
                            <a className='' href='https://github.com/ysquareimperial/drug-cipher' target='_blank' rel="noreferrer">
                                <GitHub size='1em' />
                            </a>
                        </div>
                        <div className='header-icon'>
                            <a className='' href='https://instagram.com/drugcipher' target='_blank' rel="noreferrer">
                                <Instagram size='1em' />
                            </a>
                        </div>
                        <div className='header-icon'>
                            <a className='' href='https://twitter.com/drugcipher' target='_blank' rel="noreferrer">
                                <Twitter size='1em' />
                            </a>
                        </div>
                        <div className='header-icon'>
                            <a className='' href='https://fb.me/drugcipher' target='_blank' rel="noreferrer">
                                <Facebook size='1em' />
                            </a>
                        </div>
                    </div>
                </Col>
            </Row>
        </div>
    )
}
