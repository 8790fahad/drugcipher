/* eslint-disable no-unused-vars */
import React, { useState } from 'react'
import { Card, Col, Row } from 'react-bootstrap'
import { Modal } from 'reactstrap'
import { useDispatch, useSelector } from 'react-redux'
import { CardBody } from 'reactstrap'
import Button from '../CustomFiles/Button'
import panadol from '../image/panadol.png'
import profile from '../image/profile.jpg'
import gestid from '../image/gestid.jpg'
import account from '../image/account.png'
import orders from '../image/orders.png'
import categories from '../image/categories.png'
import messages from '../image/messages.png'
import { ADD_ITEM_TO_CART } from '../redux/action/actionType'
import { MinusSquare, Plus, PlusSquare, Trash, Trash2, XCircle } from 'react-feather'
import { useNavigate } from 'react-router-dom'

export default function PharmacyIndex() {
    // const cartList = useSelector(state => state.cart.cartList)
    const navigate = useNavigate()
    const [selectItem, setSelectItem] = useState([])

    const drugData = [{
        drugImage: panadol,
        drugDescription: 'paracetamol/acetaminophen',
        drugName: 'Panadol',
        drugPrice: '150',

    },
    {
        drugImage: gestid,
        drugDescription: 'paracetamol/acetaminophen',
        drugName: 'Panadol',
        drugPrice: '150',
    },  {
        drugImage: panadol,
        drugDescription: 'paracetamol/acetaminophen',
        drugName: 'Panadol',
        drugPrice: '150',

    },  {
        drugImage: panadol,
        drugDescription: 'paracetamol/acetaminophen',
        drugName: 'Panadol',
        drugPrice: '150',

    },  {
        drugImage: panadol,
        drugDescription: 'paracetamol/acetaminophen',
        drugName: 'Panadol',
        drugPrice: '150',

    },  {
        drugImage: panadol,
        drugDescription: 'paracetamol/acetaminophen',
        drugName: 'Panadol',
        drugPrice: '150',

    },
    {
        drugImage: panadol,
        drugDescription: 'paracetamol/acetaminophen',
        drugName: 'Panadol',
        drugPrice: '150',

    },  {
        drugImage: panadol,
        drugDescription: 'paracetamol/acetaminophen',
        drugName: 'Panadol',
        drugPrice: '150',

    },{
        drugImage: panadol,
        drugDescription: 'paracetamol/acetaminophen',
        drugName: 'Panadol',
        drugPrice: '150',

    },  {
        drugImage: panadol,
        drugDescription: 'paracetamol/acetaminophen',
        drugName: 'Panadol',
        drugPrice: '150',

    },{
        drugImage: panadol,
        drugDescription: 'paracetamol/acetaminophen',
        drugName: 'Panadol',
        drugPrice: '150',

    },  {
        drugImage: panadol,
        drugDescription: 'paracetamol/acetaminophen',
        drugName: 'Panadol',
        drugPrice: '150',

    },{
        drugImage: panadol,
        drugDescription: 'paracetamol/acetaminophen',
        drugName: 'Panadol',
        drugPrice: '150',

    },  {
        drugImage: panadol,
        drugDescription: 'paracetamol/acetaminophen',
        drugName: 'Panadol',
        drugPrice: '150',

    },]
    const dispatch = useDispatch()
    const handleAddItem = (item) => {
        console.log(item)
        dispatch({
            type: ADD_ITEM_TO_CART,
            payload: item
        })
    }

    const [open, setOpen] = useState(false);
    const toggle = () => {
        setOpen(!open);
    }
    const [open2, setOpen2] = useState(false);
    const toggle2 = () => {
        setOpen2(!open2);
    }
    const [quantity, setQuantity] = useState(false)

    const showQuantityButton = () => {
        setQuantity(true)
    }
    return (
        <div>
            <Row className='pharmacy_index pt-4 pb-4'>
                <Col md={12}>
                    <div className='container'>
                        <Row>
                            <Col md={3}>
                                <Card className='index_top_card shadow-sm p-3'>
                                    <p>
                                        <img src={categories} alt='account' style={{ width: 20 }} />{' '}
                                        Categories
                                    </p>
                                    <p className='categories_item'>Central Nervous System (CNS) Depressants</p>
                                    <p className='categories_item'>CNS Stimulants</p>
                                    <p className='categories_item'>Hallucinogens</p>
                                    <p className='categories_item'>Dissociative Anesthetics</p>
                                    <p className='categories_item'>Narcotic Analgesics</p>
                                    <p className='categories_item'>Inhalants</p>
                                    <p className='categories_item'>Cannabis</p>
                                </Card>
                            </Col>
                            <Col md={6}>
                                <Card className='index_top_card shadow-sm'></Card>
                            </Col>
                            <Col md={3}>
                                <Card className='index_top_card shadow-sm p-3'>
                                    <div className='text-center'>
                                        <img src={profile} alt='profile_image' className='profile_image' />
                                        <p className='user_name'>Hi, Yasir</p>
                                        <div style={{ display: 'flex', justifyContent: 'space-around', marginTop: 10 }}>
                                            <div className='index_top_card_icons p-2'>
                                                <img src={account} alt='account' />
                                            </div>
                                            <div className='index_top_card_icons p-2'>
                                                <img src={orders} alt='orders' />
                                            </div>
                                            <div className='index_top_card_icons p-2'>
                                                <img src={messages} alt='messages' />
                                            </div>
                                        </div>
                                    </div>
                                </Card>
                            </Col>
                        </Row>
                        <Row>
                            {drugData.map((item) => (
                                <Col lg={2}>
                                    <Card className='index_card shadow-sm p-2' onClick={() => {
                                        toggle()
                                        setSelectItem(item)
                                    }}>
                                        {/* <CardBody> */}
                                        <img src={item.drugImage} alt="" />
                                        {/* </CardBody> */}
                                        <div>
                                            <h5 className='drug_name'>{item.drugName.length > 14 ? `${item.drugName.substring(0, 14)}...` : item.drugName}</h5>
                                            <p className='drug_generic_name'>{item.drugDescription.length > 20 ? `${item.drugDescription.substring(0, 20)}...` : item.drugDescription}</p>
                                            <h5 className='drug_name'>{item.drugPrice} <span className='near'>Near</span></h5>
                                        </div>
                                        {/* <Button className={'pharmacy_btn add_to_cart_btn mt-2'} btnText={`Add to cart`} onClick={() => handleAddItem(item)} /> */}
                                    </Card>
                                </Col>
                            ))}
                        </Row>
                    </div>
                </Col>
            </Row>

            <Modal size='lg' isOpen={open} className='pharmacy_index_modal'>

                <Row className='p-4'>
                    <Col md={3}>
                        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '140px' }}>
                            <div>
                                <img src={selectItem.drugImage} className='cart_image' alt="" />
                            </div>
                        </div>
                    </Col>
                    <Col md={7}>
                        <h3 className='cart_drug_name'>
                            {selectItem.drugName}
                        </h3>
                        <p className='cart_drug_description'>
                            {selectItem.drugDescription}
                        </p>
                        <h3 className='cart_drug_price'>
                            {selectItem.drugPrice}<span className='cart_drug_currenct'>{' '}Near</span>
                        </h3>
                        <span className='pharmacy_name'>ABC Pharmacy, Kano.</span>
                        <div style={{ textAlign: 'left' }}>
                            <p className='shipping_fee'>Shipping fee: 1 Near</p>
                        </div>
                        <div className='mt-2'>
                            <p className='shipping_fee'>Quantity</p>

                            <PlusSquare className='arith' size='1.6em' />
                            <span>{' '}1{' '}</span>
                            <MinusSquare className='arith' size='1.6em' />
                        </div>
                        <Button className={'pharmacy_btn add_to_cart_btn mt-3'} btnText={`Add to cart`} onClick={() => {
                            handleAddItem(selectItem)
                            toggle2()
                        }} style={{ width: '100%' }} />
                    </Col>
                    <Col md={2}>
                        {/* <div>
                            {quantity ? <span>dddd</span> : <input type="submit" value="Search" onClick={showQuantityButton} />}
                        </div> */}
                        {/* <div className='cart_actions'>
                            <div className='mb-1'>
                                <PlusSquare className='arith' size='1.6em' />
                            </div>
                            <span>1</span>
                            <div className='mb-1'>
                                <MinusSquare className='arith' size='1.6em' />
                            </div>
                        </div> */}
                        {/* <Row className='p-2'>
                    <Col md={12}> */}
                        <XCircle size='2em' className='modal_closer' onClick={toggle} style={{ float: 'right' }} />
                        {/* </Col>
                </Row> */}
                    </Col>
                </Row>
                {/* <Row className='p-4'>
                    <Col md={3}></Col>
                    <Col md={9}>
                    <div className=''>
                        <Button className={'pharmacy_btn add_to_cart_btn'} btnText={`Add to cart`} onClick={() => {
                            handleAddItem(selectItem)

                        }}/>
                    </div>
                    </Col>
                </Row> */}
                <Modal isOpen={open2} className='p-4'>
                    <div className='p-4'>
                        <Row className='text-center'>
                            <p className='added_notificatio'>A new drug has been added to your Shopping Cart.</p>
                            <Col md={6}>
                                <Button className={'pharmacy_btn add_to_cart_btn mt-2'} btnText={`View Shopping cart`} onClick={() => navigate('/drug-cipher/market-place/cart')} />
                            </Col>
                            <Col md={6}>
                                <Button className={'pharmacy_btn add_to_cart_btn continue_shopping mt-2'} btnText={`Continue shopping`} onClick={toggle2} />
                            </Col>
                        </Row>
                    </div>
                </Modal>
            </Modal>
        </div >
    )
}
