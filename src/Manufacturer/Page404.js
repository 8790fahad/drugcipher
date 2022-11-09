import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function Page404() {
  const navigate = useNavigate()
  return (
    <div>
      no match
      <button onClick={() => navigate('/')}>Go home</button>
    </div>
  )
}
