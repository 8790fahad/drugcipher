import React from 'react'
import { Col, Row } from 'react-bootstrap'
import mission from '../image/mission2.png'
import vision from '../image/vission.png'
import values from '../image/value.png'
export default function MVV() {
    const mvv = [
        {
            mvvImage: mission,
            mvvTitle: 'Mission',
            mvvContent: `Drug Cipher is a business with a strong track 
            record of successes that is passionate about pharmaceutical 
            innovation, high performance, quick expansion, and the beat 
            of our fast-paced culture. We are unyielding in our pursuit 
            of top talent whose leadership will enable us to realize the 
            full potential of our business, and we are committed to 
            attracting and hiring them.`
        },
        {
            mvvImage: vision,
            mvvTitle: 'Vision',
            mvvContent: `Drug Cipher is a business with a strong track 
            record of successes that is passionate about pharmaceutical 
            innovation, high performance, quick expansion, and the beat 
            of our fast-paced culture. We are unyielding in our pursuit 
            of top talent whose leadership will enable us to realize the 
            full potential of our business, and we are committed to 
            attracting and hiring them.`
        },
        {
            mvvImage: values,
            mvvTitle: 'Values',
            mvvContent: `Through innovation, quality, and competence, to become a worldwide healthcare
            organization and to be known as a domestic and international integrated healthcare and
            pharmaceutical enterprise. to consistently provide products that meet high standards of
            quality and affordability while rising to the position of the leading pharmaceutical
            business in the market. By building a portfolio of affordable medications that are
            accessible to everyone, we hope to leave our mark on society.`
        }
    ]
    return (
        <div className='container'>
            <div className='p-5 mvv'>
                <Row className=''>
                    <Col xl={2} lg={2} md={2} sm={12} xs={12}></Col>
                    <Col xl={8} lg={8} md={8} sm={12} xs={12} className=''>
                        {mvv.map((item) => (
                            <Row>
                                <Col md={12}>
                                    <Row>
                                        <Col xl={3} lg={3} md={3} sm={12} xs={12} className=''>
                                            <div className='mvv_img'>
                                                <div>
                                                    <img className='shadow' src={item.mvvImage} alt='mission' style={{ float: 'right', borderRadius: '50%', width: 100 }} />
                                                </div>
                                            </div>
                                        </Col>
                                        <Col xl={9} lg={9} md={9} sm={12} xs={12}>
                                            <h3 className='mvv_h'>{item.mvvTitle}</h3>
                                            <p className='mvv_p'>{item.mvvContent}</p>
                                        </Col>
                                    </Row>
                                </Col>
                            </Row>
                        ))}
                    </Col>
                    <Col xl={2} lg={2} md={2} sm={12} xs={12}></Col>
                </Row>
            </div>
        </div>
    )
}
