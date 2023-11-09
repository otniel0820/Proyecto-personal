import React from 'react'
import { Link } from 'react-router-dom'
import logo1 from '../assets/Logo1.png'

const Logo = ({navBar}) => {
  return (
    <div className='flex flex-wrap justify-start items-center text-[1.2em] text-white'>
      <Link to={'/'}><img src={logo1} alt="logo" className={`${navBar}`?'w-[4.2em]':'w-[11em]'}  /></Link>
      
    </div>
  )
}

export default Logo
