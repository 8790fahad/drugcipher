import React from 'react'
import { Card, Col, Row } from 'react-bootstrap'
import { MinusSquare, Plus, PlusSquare, Trash, Trash2 } from 'react-feather'
import { useSelector } from 'react-redux'
import Button from '../CustomFiles/Button'

export default function Cart() {
    const cartList = useSelector(state => state.cart.cartList)
    // const cartddd = useSelector(state => state.cart.cartList.drugName)
    return (
        <div className=''>
            <Row className='pharmacy_index pt-4 pb-4'>
                <Col md={8}>
                    {cartList.map((item) => (

                        <Card className='cart_card shadow-sm p-3 m-3'>
                            <Row>
                                <Col md={1}>
                                    check
                                </Col>
                                <Col md={2}>
                                    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '140px' }}>
                                        <div>
                                            <img src={item.drugImage} className='cart_image' />
                                        </div>
                                    </div>
                                </Col>
                                <Col md={7}>
                                    <h3 className='cart_drug_name'>
                                        {item.drugName}
                                    </h3>
                                    <p className='cart_drug_description'>
                                        {item.drugDescription}
                                    </p>
                                    <h3 className='cart_drug_price'>
                                        {item.drugPrice}<span className='cart_drug_currenct'>{' '}Near</span>
                                    </h3>
                                    <span className='pharmacy_name'>ABC Pharmacy, Kano.</span>
                                    <div style={{ textAlign: 'left' }}>
                                        <p className='shipping_fee'>Shipping fee: 1 Near</p>
                                    </div>
                                </Col>
                                <Col md={2}>
                                    <div className='cart_actions'>

                                        <div className='mb-4'>
                                            <Trash className='trash' />
                                        </div>
                                        <p className='shipping_fee'>Quantity</p>
                                        <div className='mb-1'>
                                            <PlusSquare className='arith' size='1.6em' />
                                        </div>
                                        <span>1</span>
                                        <div className='mb-1'>
                                            <MinusSquare className='arith' size='1.6em' />
                                        </div>
                                    </div>
                                    <p className='b_m_d'>Buy more drugs</p>
                                </Col>
                            </Row>
                        </Card>
                    ))}
                </Col>
                <Col md={4}>
                    <Card className='cart_card shadow-sm p-3 m-3'>
                        <h4 className='summary'>Summary</h4>
                        <Row>
                            <Col md={8}>
                                <p>Subtotal</p>
                                <p>Shipping fee</p>
                                <p>Total</p>
                            </Col>
                            <Col md={4}>
                                <div style={{ float: 'right', textAlign: 'right' }}>
                                    <p>10Near</p>
                                    <p>121Near</p>
                                    <p>121Near</p>
                                </div>
                            </Col>
                        </Row>
                        <Button btnText={'Checkout'} className={'checkout_btn'} />
                    </Card>
                </Col>
            </Row>
        </div>
    )
}
