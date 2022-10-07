import React from 'react'
import Button from '../CustomFiles/Button'
import '../CustomFiles/InputFields.css'
export default function NewsLetter() {
    return (
        <div className='text-center news_letter_section p-5'>
            <h1 className='heading_two'>News Letter</h1>
            <p className='sub_heading text-white'>Subscribe to our news letter for more updates</p>
            <input type='email' placeholder='example@mail.com' className='input_fields'/>
            <Button className={'market_place_btn mt-2'} style={{marginLeft:10}} btnText={'Subscribe'}/>
        </div>
    )
}
