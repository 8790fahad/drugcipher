import React from 'react'
import { Card, Col, Row } from 'react-bootstrap';
import { ArrowLeftCircle, CheckCircle, Mail, Map, MapPin, Phone, Pocket, XCircle } from 'react-feather';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import useQuery from "../../hooks/useQuery";
import logo from "../../image/DRUG CIPHER (2).png";
import { _updateApi } from '../../utils/helper';
import {
    NotificationError,
    NotificationSuccess,
} from "../../utils/Notification";

export default function ViewKYCApproval() {

    const navigate = useNavigate()

    const query = useQuery()
    const company_name = query.get("companyName");
    const company_phone = query.get("companyPhone");
    const company_email = query.get("companyEmail");
    const company_country = query.get("companyCountry");
    // const approve = (item) => {
    //     _updateApi(
    //         "/v1/approved-kyc",
    //         item,
    //         (reps) => {
    //             if (reps.success) {
    //                 toast(<NotificationSuccess text="Approved Successfully" />);
    //                 setLoading(false);
    //                 getPendingKYC();
    //             }
    //         },
    //         (err) => {
    //             console.error(err);
    //             toast(<NotificationError text="Failed, try again" />);
    //             setLoading(false);
    //         }
    //     );
    // };
    // const reject = (item) => {
    //     _updateApi(
    //         "/v1/reject-kyc",
    //         item,
    //         (reps) => {
    //             if (reps.success) {
    //                 toast(<NotificationSuccess text="Approved Successfully" />);
    //                 setLoading(false);
    //                 getPendingKYC();
    //             }
    //         },
    //         (err) => {
    //             console.error(err);
    //             toast(<NotificationError text="Failed, try again" />);
    //             setLoading(false);
    //         }
    //     );
    // };


    return (
        <div className="container">
            <Card className="KYC_card shadow p-3">
                <div>
                <Row>
                        <Col md={6}>
                            <img
                                src={logo}
                                style={{ width: 70, borderRadius: 10 }}
                                alt=""
                                className="shadow"
                                onClick={() => navigate('/')}

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
                        </Col>
                        <Col md={6}>
                            <ArrowLeftCircle className='shadow p-3' size='4em' style={{ color: 'rgb(3, 66, 110)', float:'right', cursor:'pointer' }} onClick={()=>navigate(-1)}/>
                        </Col>
                    </Row>
                    <h3 className="man_card_title mt-4">KYC Approval</h3>
                    <div className="mt-3">
                        <h5 style={{ color: 'rgb(3, 66, 110)' }}>Company Information</h5>
                        <Row className="mt-3">
                            <Col md={6} className='mb-3'>
                                <Card className='company_data shadow p-4'>
                                    <p className='company_data_title'><span className='company_data_icon'><Pocket /></span>{' '}Company Name</p>
                                    <p>{company_name}</p>
                                </Card>
                            </Col>
                            <Col md={6} className='mb-3'>
                                <Card className='company_data shadow p-4'>
                                    <p className='company_data_title'><span className='company_data_icon'><Phone /></span>{' '}Company Phone</p>
                                    <p>{company_phone}</p>
                                </Card>
                            </Col>
                            <Col md={6} className='mb-3'>
                                <Card className='company_data shadow p-4'>
                                    <p className='company_data_title'><span className='company_data_icon'><Mail /></span>{' '}Company Email</p>
                                    <p>{company_email}</p>
                                </Card>
                            </Col>
                            <Col md={6} className='mb-3'>
                                <Card className='company_data shadow p-4'>
                                    <p className='company_data_title'><span className='company_data_icon'><MapPin /></span>{' '}Company Country</p>
                                    <p>{company_country}</p>
                                </Card>
                            </Col>
                            <div>
                                <button className='man_button' style={{ marginRight: 10 }} onClick={() => {
                                    // approve(item);
                                }}><CheckCircle />{' '}Approve</button>
                                <button className='man_button' onClick={() => {
                                    // reject(item);
                                }}><XCircle style={{ color: 'rgb(255, 97, 97)' }} />{' '}Reject</button>
                            </div>
                        </Row>
                    </div>
                </div>
            </Card>
        </div>
    )
}
