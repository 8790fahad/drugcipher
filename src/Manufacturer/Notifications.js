import React from 'react'
import { Card, Col, Row } from 'react-bootstrap'
import { Trash, Trash2 } from 'react-feather'
import { drugData } from './drugData'
export default function Notifications() {
    return (
        <div>
            <Card className='man_card shadow p-3'>
                <h3 className='man_card_title'>Notifications</h3>
                <h5 className='man_card_title'>Expired Drugs</h5>
                <Row>
                    {drugData.map((item) => (
                        <Col md={12}>
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
                                    <div>
                                        <Trash className='grid' />
                                        {/* <Trash2/> */}
                                    </div>
                                </div>
                            </Card>
                        </Col>
                    ))}
                </Row>
            </Card>
        </div>
    )
}
