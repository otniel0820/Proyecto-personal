import React from 'react'
import { Link } from 'react-router-dom'
import logo4 from '../assets/logo4.png'
import logoNavbar2 from '../assets/logoNavbar2.png'


const Logo = ({navBar}) => {
  return (
    <div className='flex flex-wrap justify-start items-center text-[1.2em] text-white'>
      <Link to={'/'}>{navBar==='nav'?<img src={logoNavbar2} alt="logo" className='w-[4em]'/>:<img src={logo4} alt="logo" className='w-[11em]'/>}</Link>
      
    </div>
  )
}

export default Logo
