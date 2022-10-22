/* eslint-disable no-unused-vars */
import React from 'react'
import './Manufacturer.css'
import logo from '../image/DCIcon5.png'
import overview from '../image/overview.png'
import overview1 from '../image/overview1.png'
import kyc from '../image/kyc.png'
import kyc1 from '../image/kyc1.png'
import view1 from '../image/view1.png'
import view from '../image/view.png'
import get_help from '../image/get_help.png'
import get_help1 from '../image/get_help1.png'
import add from '../image/add.png'
import add1 from '../image/add1.png'
import logout from '../image/logout.png'
import settings1 from '../image/settings1.png'
import pills1 from '../image/pills1.png'
import pills from '../image/pills.png'
import settings from '../image/settings.png'
import { useLocation, useNavigate } from 'react-router-dom'
export default function Sidebar() {
    const navigate = useNavigate()
    const location = useLocation()
    return (
        <div className='man_sidebar m-0'>
            <div className=''>
                <img src={logo} className='sidebarlogo' alt="" />
                <div className='sidemenu_div'>
                    {/* <p className={`sidemenu ${location.pathname === '/overview' && 'active_side_menu'}`}
                        onClick={() => navigate('/overview')}>
                        {location.pathname === '/overview' ?
                            <img src={overview1} style={{ width: '20px', marginRight: 10 }} />
                            : <img src={overview} style={{ width: '20px', marginRight: 10 }} />}
                        {' '}Overview</p> */}

                    {/* <p className={`sidemenu ${location.pathname === '/KYC' && 'active_side_menu'}`}
                        onClick={() => navigate('/KYC')}>
                        {location.pathname === '/KYC' ?
                            <img src={kyc1} style={{ width: '20px', marginRight: 10 }} />
                            : <img src={kyc} style={{ width: '22px', marginRight: 10 }} />}
                        {' '}KYC</p> */}

                    {/* <p className={`sidemenu ${location.pathname === '/register-new-drug' && 'active_side_menu'}`}
                        onClick={() => navigate('/register-new-drug')}>
                        {location.pathname === '/register-new-drug' ?
                            <img src={add1} style={{ width: '22px', marginRight: 10 }} />
                            : <img src={add} style={{ width: '20px', marginRight: 10 }} />}
                        {' '}Register New Drug</p> */}

                    <p className={`sidemenu ${location.pathname === '/registered-drugs' && 'active_side_menu'}`}
                        onClick={() => navigate('/registered-drugs')}>
                        {location.pathname === '/registered-drugs' ?
                            <img src={pills1} style={{ width: '22px', marginRight: 10 }} alt="" />
                            : <img src={pills} style={{ width: '22px', marginRight: 10 }} alt="" />}
                        {' '}Registered Drugs</p>


                    <p className={`sidemenu ${location.pathname === '/settings' && 'active_side_menu'}`}
                        onClick={() => navigate('/settings')}>
                        {location.pathname === '/settings' ?
                            <img src={settings1} style={{ width: '22px', marginRight: 10 }} alt="" />
                            : <img src={settings} style={{ width: '20px', marginRight: 10 }} alt="" />}
                        {' '}Settings</p>

                    <div className='sidemenu_bottom m-0 p-0'>
                        <p className={`sidemenu_bottom_icon ${location.pathname === '/GH' && 'active_side_menu'}`} onClick={() => navigate('/GH')}><img src={get_help} style={{ width: '22px', marginRight: 10 }} alt="" />{' '}Get Help</p>
                        <p className={`sidemenu_bottom_icon ${location.pathname === '/' && 'active_side_menu'}`} onClick={() => navigate('/')}><img src={logout} style={{ width: '22px', marginRight: 10 }} alt="" />{' '}Logout</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
