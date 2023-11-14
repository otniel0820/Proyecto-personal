import { SignUp } from '@clerk/clerk-react'
import React from 'react'
import fondoRegistro from '../assets/fondoRegistro.jpg'

const SingUpPage = () => {
  return (
    <div className='h-screen flex justify-center items-center pt-20 bg-cover bg-no-repeat bg-center ' style={{backgroundImage:`url(${fondoRegistro})`}}>
      

      <SignUp signInUrl='/inicio_sesión'/>
      
    </div>
  )
}

export default SingUpPage
