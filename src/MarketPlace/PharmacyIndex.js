import React from 'react'
import { Card, Col, Row } from 'react-bootstrap'
import { CardBody } from 'reactstrap'
import panadol from '../image/panadol.png'
export default function PharmacyIndex() {
    const drugData = [{
        drugImage: panadol,
        drugGenericName: 'Paracetamol',
        drugName: 'Panadol',
        drugPrice: '100',

    },
    {
        drugImage: panadol,
        drugGenericName: 'Paracetamol',
        drugName: 'Panadol',
        drugPrice: '100',

    },
    {
        drugImage: panadol,
        drugGenericName: 'Paracetamol',
        drugName: 'Panadol',
        drugPrice: '100',

    },
    {
        drugImage: panadol,
        drugGenericName: 'Paracetamol',
        drugName: 'Panadol',
        drugPrice: '100',

    },
    {
        drugImage: panadol,
        drugGenericName: 'Paracetamol',
        drugName: 'Panadol',
        drugPrice: '100',

    },
    {
        drugImage: panadol,
        drugGenericName: 'Paracetamol',
        drugName: 'Panadol',
        drugPrice: '100',

    },
    ]

    return (
        <div>
            <Row className='pharmacy_index pt-3'>
                <Col md={12}>
                    <div className='container'>
                        <Row>
                            {drugData.map((item) => (
                                <Col lg={2}>
                                    <Card className='index_card shadow-sm p-2'>
                                        {/* <CardBody> */}
                                        <img src={item.drugImage} />
                                        {/* </CardBody> */}
                                        <div>
                                            <p className='drug_generic_name'>{item.drugGenericName}</p>
                                            <h5 className='drug_name'>{item.drugName}</h5>
                                        </div>
                                    </Card>
                                </Col>
                            ))}
                        </Row>
                    </div>
                </Col>
            </Row>
        </div>
    )
}
