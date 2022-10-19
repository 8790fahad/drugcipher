import React from 'react'
import { Card, Col, Row } from 'react-bootstrap'
import DrugTable from './DrugTable'
import { useNavigate } from 'react-router-dom'
import { Dropdown, DropdownMenu, DropdownToggle } from 'reactstrap'
import { useState } from 'react'
export default function ViewRegisteredDrugs() {
    const navigate = useNavigate()
    const [dropdown, setdropdown] = useState(false)
    const toggle1 = () => {
        setdropdown(!dropdown)
    }
    return (
        <div>
            <Card className='man_card shadow p-3'>
                <Row>
                    <Col md={6}>
                        <h3 className='man_card_title'>Registered Drugs</h3>
                    </Col>
                    <Col md={6}>
                        <div style={{ float: 'right' }}>
                            <div style={{ display: 'inline' }}>
                                <Dropdown toggle={toggle1} isOpen={dropdown}>
                                    <DropdownToggle
                                        data-toggle="dropdown"
                                        tag="span"
                                    >
                                        <button className='man_button' style={{ marginRight: 5 }} >Export</button>
                                    </DropdownToggle>
                                    <DropdownMenu className='dropdown_menu shadow'>
                                        <div className=''>
                                            <div className='drop_down_item'>
                                                <span className='p-3'>
                                                    CVV
                                                </span>
                                            </div>
                                        </div>
                                    </DropdownMenu>
                                </Dropdown>
                            </div>
                            <div style={{ display: 'inline' }}>
                                <button className='man_button' onClick={() => navigate('/register-new-drug')}>Create New</button>
                            </div>
                        </div>
                    </Col>
                </Row>
                <DrugTable />
            </Card>
        </div>
    )
}
