import React from 'react'
import { Card, Col, Row } from 'react-bootstrap'
import BarChart from './BarChart'
import DoughnutChart from './DoughnutChart'
import DrugsLocation from './DrugsLocation'
import WrappedHeatmap from './WrappedHeatmap'
export default function Overview() {
    return (
        <div>
            <Card className='man_card shadow p-3'>
                <h3 className='man_card_title'>DrugName</h3>
                <Row style={{ color: 'rgb(3, 66, 110)' }}>
                    <Col md={6}>
                        <Row>
                            <Col md={4}>
                                <Card className='overview_card shadow p-2 mb-2'>
                                    <p className='m-0'>Number of Scans</p>
                                    <h3>245</h3>
                                </Card>
                            </Col>
                            <Col md={4}>
                                <Card className='overview_card shadow p-2 mb-2'>
                                    <p className='m-0'>Invalid Scans</p>
                                    <h3>45</h3>
                                </Card>
                            </Col>
                            <Col md={4}>
                                <Card className='overview_card shadow p-2 mb-3'>
                                    <p className='m-0'>Countries</p>
                                    <h3>5</h3>
                                </Card>
                            </Col>
                        </Row>
                        <Card className='overview_card shadow p-2 mb-2 mt-1'>
                            <p className='m-0'>Expiry Date</p>
                            <h3>October 30th 2021</h3>
                        </Card>
                        <Card className='overview_card shadow p-2 mt-2'>
                            <BarChart />
                        </Card>
                    </Col>
                    <Col md={6}>
                        <Card className='overview_card shadow p-2 mb-2'>
                            <p>Drug Locations</p>
                            <DrugsLocation />
                        </Card>
                    </Col>
                </Row>

            </Card>
        </div >
    )
}
