import React from 'react'
import { Card, Col, Row } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
import { Dropdown, DropdownMenu, DropdownToggle } from 'reactstrap'
import { useState } from 'react'
import { Table } from 'reactstrap'
import './DrugTable.css'
import { drugData } from './drugData'
import { CSVLink } from 'react-csv'
export default function SoleAgent() {
    const navigate = useNavigate()
    const [dropdown, setdropdown] = useState(false)
    const toggle1 = () => {
        setdropdown(!dropdown)
    }
    const [actions, setActions] = useState(false)
    const toggle = () => {
        setActions(!actions)
    }
    const soleAgents = [
        {
           
            soleAgentFullName: 'Mike Joe',
            soleAgentPhone: '+234 343 2323 32',
            soleAgentEmail: 'abc@gmail.com',
            soleAgentAddress: 'Kano Nigeria'
        }
    ]


    return (
        <div>
            <Card className='man_card shadow p-3'>
                <Row>
                    <Col xl={6} lg={6} md={6} sm={6} xs={6}>
                        <h3 className='man_card_title'>Sole Agens</h3>
                    </Col>
                    <Col xl={6} lg={6} md={6} sm={6} xs={6}>
                        <div style={{ float: 'right', display: 'flex' }}>
                            <div style={{ display: 'inline' }}>
                                <Dropdown toggle={toggle1} isOpen={dropdown}>
                                    <DropdownToggle
                                        data-toggle="dropdown"
                                        tag="span"
                                    >
                                        <button className='man_button' style={{ marginRight: 5 }} >Export As</button>
                                    </DropdownToggle>
                                    <DropdownMenu className='dropdown_menu shadow mt-3'>
                                        <div className=''>
                                            <div className='drop_down_item'>
                                                <span className='p-3'>
                                                    <CSVLink data={soleAgents} filename={'Sole Agents'} className='csv'>CSV</CSVLink>
                                                </span>
                                            </div>
                                        </div>
                                    </DropdownMenu>
                                </Dropdown>
                            </div>
                            <div style={{ display: 'inline' }}>
                                <button className='man_button' onClick={() => navigate('/create-sole-agent')}>Create New</button>
                            </div>
                        </div>
                    </Col>
                </Row>
                {/* <DrugTable /> */}

                <div className="mt-3">
                    <Table hover responsive className="table" size="">
                        <thead className="">
                            <tr>
                                <th>S/N</th>
                                <th>Sole Agent Full Name</th>
                                <th>Sole Agent Phone</th>
                                <th>Sole Agent Email</th>
                                <th>Sole Agent Address</th>
                            </tr>
                        </thead>
                        <tbody>
                            {soleAgents.map((item, index) => (
                                <tr>
                                    <td>{index + 1}</td>
                                    <td>{item.soleAgentFullName}</td>
                                    <td>{item.soleAgentPhone}</td>
                                    <td>{item.soleAgentEmail}</td>
                                    <td>{item.soleAgentAddress}</td>
                                </tr>
                            ))}
                        </tbody>
                    </Table>
                </div>
            </Card>
        </div>
    )
}
