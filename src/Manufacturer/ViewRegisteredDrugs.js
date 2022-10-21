import React from 'react'
import { Card, Col, Row } from 'react-bootstrap'
import DrugTable from './DrugTable'
import { useNavigate } from 'react-router-dom'
import { Dropdown, DropdownMenu, DropdownToggle } from 'reactstrap'
import { useState } from 'react'
import { Table } from 'reactstrap'
import './DrugTable.css'
import { drugData } from './drugData'

import action from '../image/action.png'
import { CSVLink } from 'react-csv'
import { Eye, File, FileText, Grid } from 'react-feather'
export default function ViewRegisteredDrugs() {
    const navigate = useNavigate()
    const [dropdown, setdropdown] = useState(false)
    const toggle1 = () => {
        setdropdown(!dropdown)
    }
    const [actions, setActions] = useState(false)
    const toggle = () => {
        setActions(!actions)
    }



    return (
        <div>
            <Card className='man_card shadow p-3'>
                <Row>
                    <Col md={6}>
                        <h3 className='man_card_title'>Registered Drugs</h3>
                    </Col>
                    <Col md={6}>
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
                                                    <CSVLink data={drugData} filename={'Drugs Data'} className='csv'>CSV</CSVLink>
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
                {/* <DrugTable /> */}

                <div className="mt-3">
                    <Table hover responsive className="table" size="">
                        <thead className="">
                            <tr>
                                <th>S/N</th>
                                <th> Drug Name</th>
                                <th> Drug Generic Name</th>
                                <th>Creation date</th>
                                <th>Expiry date</th>
                                <th>NAFDAC</th>
                                <th>Dosages</th>
                                <th>
                                    <div className="last-column">Action</div>
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {drugData.map((item, index) => (
                                <tr>
                                    <td>{index + 1}</td>
                                    <td>{item.drugName}</td>
                                    <td>{item.genericName}</td>
                                    <td>{item.date}</td>
                                    <td>{item.expiryDate}</td>
                                    <td>{item.NAFDAC}</td>
                                    <td>{item.dosages}</td>
                                    <td>
                                        <Grid className='grid' onClick={()=>navigate('/overview')}/>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </Table>
                </div>

            </Card>
        </div>
    )
}
