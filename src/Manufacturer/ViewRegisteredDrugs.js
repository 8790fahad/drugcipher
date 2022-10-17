import React from 'react'
import { Card, Col, Row } from 'react-bootstrap'
import DrugTable from './DrugTable'
import { useNavigate } from 'react-router-dom'
export default function ViewRegisteredDrugs() {
    const navigate = useNavigate()
    return (
        <div>
            <Card className='man_card shadow p-3'>
                <Row>
                    <Col md={6}>
                        <h3 className='man_card_title'>Registered Drugs</h3>
                    </Col>
                    <Col md={6}>
                        <div style={{ float: 'right' }}>
                            <button className='man_button' onClick={() => navigate('/register-new-drug')}>Create New</button>
                        </div>
                    </Col>
                </Row>
                <DrugTable />
            </Card>
        </div>
    )
}
