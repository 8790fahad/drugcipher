import React from 'react'
import { Card } from 'react-bootstrap';
import logo from "../../image/DRUG CIPHER (2).png";

export default function Register() {
    return (
        <div>
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
                    <h1>
                        Drug Cipher
                    </h1>
                </div>
            </Card>
        </div>
    )
}