import React from 'react'
import { Card } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import logo from "../../image/DRUG CIPHER (2).png";

export default function Register() {
    const navigate = useNavigate()

    return (
        <div className='container'>
            <Card className="KYC_card shadow p-3">
                <div>
                    <img
                        src={logo}
                        style={{ width: 70, borderRadius: 10 }}
                        alt=""
                        className="shadow"
                    />{" "}
                    <h4
                        style={{
                            display: "inline",
                            color: "rgb(3, 66, 110)",
                            marginRight: 30,
                        }}
                    >
                        Drug Cipher
                    </h4>
                </div>
                <div className='text-center'>
                    <h3 className='register_heading mt-3'>
                        ...trust is good, but encryption is better!
                    </h3>
                    <p className='m-0' style={{ color: '#029f41' }}>Drug Cipher introduces a sophisticated solution to tackling the issues surrounding pharmaceutical products.</p>
                    <div style={{}} className='text-center mt-5'>
                        <button className='man_button' style={{ marginRight: 10 }} onClick={() => navigate('/KYC')}>Create Account</button>
                        <span style={{ marginRight: 10 }}>Or</span>
                        <button style={{ border: '1px dashed #029f41', padding: '7px', backgroundColor: 'white', color: 'rgb(3, 66, 110)' }} onClick={() => navigate('/login')}>Import Existing Account</button>
                    </div>
                </div>
            </Card>
        </div>
    )
}