import React from 'react'
import { Link } from 'react-router-dom'

const Copyrigth = () => {
  return (
    <div className='h-[2.5em] flex items-center justify-center bg-[#0f1219]'>
      <Link to={'/copyright'}>
        <p className='text-[0.9em] not-italic font-semibold text-[#fff]'>Todos los derechos reservados - Fit Tech Pro SL - 2023</p>
      </Link>
    </div>
  )
}

export default Copyrigth