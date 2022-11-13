import React from 'react'
import { useNavigate } from 'react-router-dom'
import './Manufacturer.css'
export default function Page404() {
  const navigate = useNavigate()
  return (
    <div className='text-center'>
      <h1 className='four_head'>404</h1>
      <p className='four_p'>OOPS! PAGE NOT FOUND</p>
      <p className='four_m'>Sorry the page you are looking for does not exist.</p>
      <button onClick={() => navigate('/')} className='man_button'>Return home</button>
    </div>
  )
}
