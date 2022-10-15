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
                <h3 className='man_card_title'>Overview</h3>
                <Row style={{ color: 'rgb(3, 66, 110)' }}>
                    <Col md={2}>
                        <Card className='overview_card shadow p-2 mb-2'>
                            <p className='m-0'>Number of Scans</p>
                            <h3>245</h3>
                        </Card>
                        <Card className='overview_card shadow p-2 mb-2'>
                            <p className='m-0'>Invalid Scans</p>
                            <h3>45</h3>
                        </Card>
                        <Card className='overview_card shadow p-2 mb-2'>
                            <p className='m-0'>Countries</p>
                            <h3>5</h3>
                        </Card>
                        <Card className='overview_card shadow p-2 mb-2'>
                            <DoughnutChart />
                            <div>
                                <p className='d_p1' style={{ margin: 0, fontSize: 12, display: 'inline' }}>Valid Scans</p>
                                <p className='d_p2' style={{ margin: 0, fontSize: 12, display: 'inline' }}>Invalid Scans</p>
                            </div>
                        </Card>
                    </Col>
                    <Col md={10}>
                        <Row>
                            <Col md={6}>
                                <div>
                                    <p className='d_p1' style={{ margin: 0, fontSize: 12, display: 'inline' }}>Scanned Drugs Location</p>
                                </div>
                                <div className='barchart_div'>
                                    <DrugsLocation />
                                </div>
                            </Col>
                            <Col md={6} className=''>
                                <div className=''>
                                    <p className='d_p1' style={{ margin: 0, fontSize: 12, display: 'inline' }}>Number of scans per month</p>
                                    <div className='barchart_div'>
                                        <BarChart className />
                                    </div>
                                </div>
                            </Col>
                        </Row>
                        <Row>
                            <Col md={3}>
                                <Card className='overview_card shadow p-2 mb-2 text-center mt-2 expired_card'>
                                    <div className='expired_drug'>
                                        <div>
                                            <p className='m-0'>Expired Drugs</p>
                                            <h1 style={{ fontSize: 100 }}>20</h1>
                                        </div>
                                    </div>
                                </Card>
                            </Col>
                            <Col md={9}>
                                <div className='barchart_div mt-2'>
                                    <WrappedHeatmap />
                                </div>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Card>
        </div>
    )
}
