import React from 'react'
import { Card } from 'react-bootstrap'
import logo from '../image/DCIcon5.png'
import { useNavigate } from 'react-router-dom'
export default function KYC() {
    const navigate = useNavigate()
    return (
        <div className='container'>
            <Card className='KYC_card shadow p-3'>
                <div>
                    <img src={logo} style={{ width: 70 }} />
                    <h4 style={{ display: 'inline', color: 'rgb(3, 66, 110)' }}>Drug Cipher</h4>
                </div>
                <h3 className='man_card_title mt-4'>KYC</h3>
                <div className='mt-3'>
                    <button className='man_button' onClick={()=>navigate('/registered-drugs')}>Register</button>
                </div>
            </Card>
        </div>
    )
}
