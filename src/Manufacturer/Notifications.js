import React from 'react'
import { Card, Col, Row } from 'react-bootstrap'
import { Trash, Trash2 } from 'react-feather'
import { drugData } from './drugData'
export default function Notifications() {
    return (
        <div>
            <Card className='man_card shadow p-3'>
                <h3 className='man_card_title'>Notifications</h3>
                <h5 className='man_card_title'>About to expire</h5>
                 
                {drugData.map((item) => (
                    <Row>
                        <Col xl={10} lg={10} md={10} sm={10} xs={10}>
                            <Card className='not_card p-3 mb-3 shadow'>
                                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                                    <div>
                                        {item.drugName}
                                    </div>
                                    <div>
                                        {item.genericName}
                                    </div>
                                    <div>
                                        {item.NAFDAC}
                                    </div>
                                    <div>
                                        {item.expiryDate}
                                    </div>
                                </div>
                            </Card>
                        </Col>
                        <Col xl={2} lg={2} md={2} sm={2} xs={2}>
                            <Card className='not_card p-3 mb-3 shadow'>
                                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                                    <div>
                                        <p className='m-0'>0m</p>
                                    </div>
                                    <div>
                                        <Trash className='grid' />
                                    </div>
                                </div>
                            </Card>
                        </Col>
                    </Row>
                ))}
                <hr></hr>

                <h5 className='man_card_title'>Expired Drugs</h5>

                {drugData.map((item) => (
                    <Row>
                        <Col xl={10} lg={10} md={10} sm={10} xs={10}>
                            <Card className='not_card p-3 mb-3 shadow'>
                                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                                    <div>
                                        {item.drugName}
                                    </div>
                                    <div>
                                        {item.genericName}
                                    </div>
                                    <div>
                                        {item.NAFDAC}
                                    </div>
                                    <div>
                                        {item.expiryDate}
                                    </div>
                                </div>
                            </Card>
                        </Col>
                        <Col xl={2} lg={2} md={2} sm={2} xs={2}>
                            <Card className='not_card p-3 mb-3 shadow'>
                                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                                    <div>
                                        <p className='m-0'>0m</p>
                                    </div>
                                    <div>
                                        <Trash className='grid' />
                                    </div>
                                </div>
                            </Card>
                        </Col>
                    </Row>

                ))}
            </Card>
        </div>
    )
}
