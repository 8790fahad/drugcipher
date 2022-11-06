import React, { useState } from 'react'
import { Col, Row } from 'react-bootstrap'
import cart from '../image/cart.png'
import bell from '../image/bell.png'
import help from '../image/help.png'
import account from '../image/account.png'
import { useLocation, useNavigate } from 'react-router-dom'
import InputField from '../CustomFiles/InputField'
import { Dropdown, DropdownMenu, DropdownToggle } from 'reactstrap'
import { login } from '../utils/helper'
import { Typeahead } from 'react-bootstrap-typeahead'
import { drugData } from './drugData'
import useQuery from '../hooks/useQuery'
import logo from '../image/DRUG CIPHER (2).png'
import { Menu } from 'react-feather'

export default function Navbar() {
    const query = useQuery()
    const navigate = useNavigate()
    const location = useLocation()

    const [dropdown, setdropdown] = useState(false)
    const toggle1 = () => {
        setdropdown(!dropdown)
    }

    const [dropdown2, setdropdown2] = useState(false)
    const toggle2 = () => {
        setdropdown2(!dropdown2)
    }
    const [singleSelections, setSingleSelections] = useState([]);
    return (
        <div>
            <Row className='m-0 webnavbar'>
                <Col xl={9} lg={9} md={9} sm={9} xs={9}>
                    <Typeahead
                        id="basic-typeahead-single"
                        labelKey="drugName"
                        onChange={(a) => {
                            if (a.length) {
                                navigate(`/registered-drugs?searchTerm=${a[0].drugName}`)
                            }
                        }}
                        options={drugData}
                        placeholder="Search drugs by name"
                        selected={singleSelections}
                        inputProps={{ className: 'man_search_field', style: { 'outline': 'none' } }}

                    />
                    {/* <input type='text' placeholder='Search Drugs' className='man_search_field shadow' /> */}
                </Col>
                <Col xl={3} lg={3} md={3} sm={3} xs={3}>
                    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '20px', height: '70px' }}>
                        <div className={`icon_div p-1 ${location.pathname === '/notifications' && 'active_nav_menu'}`} style={{ position: 'relative' }} onClick={() => navigate('/notifications')}>
                            <div className='absolute'>
                                <span >11</span>
                            </div>
                            <img src={bell} />
                        </div>
                        <div className={`icon_div p-1 ${location.pathname === '/GetHelp' && 'active_nav_menu'}`} onClick={() => navigate('/GetHelp')}>
                            <img src={help} />
                        </div>

                        <Dropdown toggle={toggle1} isOpen={dropdown}>
                            <DropdownToggle
                                data-toggle="dropdown"
                                tag="span"
                            >
                                <div className='icon_div p-1'>
                                    <span className='account'>Account</span>{' '}<img src={account} />
                                </div>
                            </DropdownToggle>
                            <DropdownMenu className='dropdown_menu shadow'>
                                <div className=''>
                                    <div className='drop_down_item' onClick={() => navigate('/profile')}>
                                        <span className='p-3'>
                                            Profile
                                        </span>
                                    </div>
                                    <div className='drop_down_item' onClick={login}>
                                        <span className='p-3'>
                                            Connect NEAR
                                        </span>
                                    </div>
                                </div>
                            </DropdownMenu>
                        </Dropdown>
                    </div>
                </Col>
            </Row>
            <div>
                <Row className='m-0 p-0 mobilenavbar mb-3'>
                    <Col xl={6} lg={6} md={6} sm={6} xs={6}>
                        <img src={logo} style={{ borderRadius: 10, width: 50, margin: '15px 7px' }} />
                    </Col>
                    <Col xl={6} lg={6} md={6} sm={6} xs={6}>
                        <div style={{ color: 'white', float: 'right' }} className='pt-3'>
                            <Dropdown toggle={toggle2} isOpen={dropdown2}>
                                <DropdownToggle
                                    data-toggle="dropdown"
                                    tag="span"
                                >
                                    <Menu className='menu_' size='2.5em' />

                                </DropdownToggle>
                                <DropdownMenu className='dropdown_menu shadow'>
                                    <div className=''>
                                        <div className='drop_down_item' onClick={() => {
                                            navigate('/profile')
                                        }}>

                                            <span className='p-3'>
                                                Profile
                                            </span>
                                        </div>
                                        <div className='drop_down_item' onClick={login}>
                                            <span className='p-3'>
                                                Connect NEAR
                                            </span>
                                        </div>
                                        <div className='drop_down_item' onClick={() => navigate('/registered-drugs')}>
                                            <span className='p-3'>
                                                Registered Drugs
                                            </span>
                                        </div>
                                        <div className='drop_down_item' onClick={() => navigate('/notifications')}>
                                            <span className='p-3'>
                                                Notifications
                                            </span>
                                        </div>
                                        <div className='drop_down_item' onClick={() => navigate('/settings')}>
                                            <span className='p-3'>
                                                Settings
                                            </span>
                                        </div>
                                        <div className='drop_down_item' onClick={() => navigate('/GetHelp')}>
                                            <span className='p-3'>
                                                Get Help
                                            </span>
                                        </div>
                                        <div className='drop_down_item' onClick={() => navigate('/')}>
                                            <span className='p-3'>
                                                Logout
                                            </span>
                                        </div>
                                    </div>
                                </DropdownMenu>
                            </Dropdown>
                        </div>
                    </Col>
                </Row>
                {/* <div>

                    <Typeahead
                        id="basic-typeahead-single"
                        labelKey="drugName"
                        onChange={(a) => {
                            if (a.length) {
                                navigate(`/registered-drugs?searchTerm=${a[0].drugName}`)
                            }
                        }}
                        options={drugData}
                        placeholder="Search drugs by name"
                        selected={singleSelections}
                        inputProps={{ className: ' man_search_field man_nav_search_field', style: { 'outline': 'none', 'marginLeft':10 } }}
                    // onInputChange={}
                    />
                </div> */}
            </div>

        </div>
    )
}
