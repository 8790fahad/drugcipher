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
import Slider from './Slider'

export default function Showroom() {
    // const cartList = useSelector(state => state.cart.cartList)
    const navigate = useNavigate()
    const [selectItem, setSelectItem] = useState([])

    const drugData = [{
        drugImage: panadol,
        drugDescription: 'paracetamol/acetaminophen',
        drugName: 'Panadol',
        drugPrice: '150',
        drugQuantity: '10 cartons',
        drugSupplier: 'Abc Drug Suppliers'

    },
    {
        drugImage: panadol,
        drugDescription: 'paracetamol/acetaminophen',
        drugName: 'Panadol',
        drugPrice: '150',
        drugQuantity: '10 cartons',
        drugSupplier: 'Abc Drug Suppliers'

    },
    {
        drugImage: panadol,
        drugDescription: 'paracetamol/acetaminophen',
        drugName: 'Panadol',
        drugPrice: '150',
        drugQuantity: '10 cartons',
        drugSupplier: 'Abc Drug Suppliers'

    },
    {
        drugImage: panadol,
        drugDescription: 'paracetamol/acetaminophen',
        drugName: 'Panadol',
        drugPrice: '150',
        drugQuantity: '10 cartons',
        drugSupplier: 'Abc Drug Suppliers'

    },
    {
        drugImage: panadol,
        drugDescription: 'paracetamol/acetaminophen',
        drugName: 'Panadol',
        drugPrice: '150',
        drugQuantity: '10 cartons',
        drugSupplier: 'Abc Drug Suppliers'

    },
    {
        drugImage: panadol,
        drugDescription: 'paracetamol/acetaminophen',
        drugName: 'Panadol',
        drugPrice: '150',
        drugQuantity: '10 cartons',
        drugSupplier: 'Abc Drug Suppliers'

    }
    ]
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
            {/* <Slider/> */}
            <Row className='pharmacy_index pt-4 pb-4'>
                <Col md={12}>
                    {/* <div className='container'> */}
                    <p className='showroom'><b>Showrooms</b> - (10,000 Drugs Available)</p>
                    <Row>
                        {drugData.map((item) => (
                            <Col lg={2}>
                                <Card className='showroom_card shadow-sm' onClick={() => {
                                    toggle()
                                    setSelectItem(item)
                                }}>
                                    {/* <CardBody> */}
                                    {/* <img src={item.drugImage} /> */}
                                    <Slider/>
                                    {/* </CardBody> */}
                                    <div className='p-2'>
                                        <h5 className='drug_name'>{item.drugName.length > 14 ? `${item.drugName.substring(0, 14)}...` : item.drugName}</h5>
                                        <p className='drug_generic_name'>{item.drugDescription.length > 20 ? `${item.drugDescription.substring(0, 20)}...` : item.drugDescription}</p>
                                        <h5 className='drug_name mt-3'>{item.drugPrice} <span className='near'>Near/set</span></h5>
                                        <span className='near'>10 cartons (min. order)</span>
                                        <h5 className='drug_supplier mt-3'>{item.drugSupplier.length > 26 ? `${item.drugSupplier.substring(0, 26)}...` : item.drugSupplier}</h5>
                                        <Button className={'pharmacy_btn add_to_cart_btn mt-2'} btnText={`Contact supplier`} onClick={() => handleAddItem(item)} style={{width:'100%'}}/>
                                    </div>
                                </Card>
                            </Col>
                        ))}
                    </Row>
                    {/* </div> */}
                </Col>
            </Row>
        </div >
    )
}
