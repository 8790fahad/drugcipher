import React from 'react'
import { Card, Col, Row } from 'react-bootstrap'
import './DrugTable.css'
import './Manufacturer.css'
import Accordion from 'react-bootstrap/Accordion';


export default function Gethelp() {
    return (
        <div className='GH'>
            <Card className='man_card shadow p-3'>GH
                <Row>
                    <Col md={6}>
                        <h3 className='man_card_title'>Frequently Helped Questions</h3>
                    </Col>
                    {/* <Col md={6}>
                        <div style={{ float: 'right', display: 'flex' }}>```````````````````
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
                    </Col> */}
                </Row>
                {/* <DrugTable /> */}
                <Accordion>
                    <Accordion.Item eventKey="0">
                        <Accordion.Header>How do I check if my payment is being comfirmed?</Accordion.Header>
                        <Accordion.Body className="GH">
                            Click on Transactions on the menu to get all your transactions and their statuses. You can also filter the list with date range
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="1">
                        <Accordion.Header>My State Dues are not showing on the app, what should I do?</Accordion.Header>
                        <Accordion.Body className='GH'>
                            First check your profile and confirm that you have selected your State of Practice and the appropriate Practice and Interest Groups. If by then you still cannot find your State Dues, then the neccessary payment information has not been provided by your State Chairman, we are still collecting this information from individual Chairman, so you may want to check back later.
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="2">
                        <Accordion.Header>How do I get the receipt for my payment?</Accordion.Header>
                        <Accordion.Body className='GH'>
                            An automated email of your transaction receipt would be sent to your registered email, you can also download a copy of the receipt anytime from the app, simply go to the History option on the menu and select the particular transaction, then click on Download Receipt button provided.
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="3">
                        <Accordion.Header>How do I retrieve my Username or Password?</Accordion.Header>
                        <Accordion.Body className='GH'>
                            As long as you still remember your email, you can simply use the Forgot Password link on the login page, an automated email would be sent to your registered email address with your username and also an instruction on how you can reset your password.
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="4">
                        <Accordion.Header>What are the options of payment?</Accordion.Header>
                        <Accordion.Body className='GH'>
                            You can either pay with your Debit/Credit card, Bank Transfer or even USSD Code or any of the other options available in the app. Simply click the Change Payment Method at the bottom of the page to get other payment options.
                        </Accordion.Body>
                    </Accordion.Item>
                </Accordion>

            </Card>
        </div>
    )
}
