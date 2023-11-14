import React from 'react'
import definicionNoBg from '../assets/definicionNoBg.png'
import Button from './Button'
import { Link } from 'react-router-dom'

const Hero = () => {
  return (
    <div className='bg-[#1c1f27] pt-10'>
      <div className='flex flex-col lg:flex-row justify-center items-center'>

        <div className='lg:w-1/2 w-full flex justify-center items-center'>
          <img src={definicionNoBg} alt="" className='w-full max-w-md lg:max-w-none' />
        </div>

        <div className='lg:w-1/2 w-full flex flex-col justify-center items-center lg:items-start p-4 gap-6'>
          <h1 className=' text-white text-3xl lg:text-5xl font-bold text-center lg:text-left '>
            Transforma tu vida
          </h1>
          <p className='text-white text-lg lg:text-2xl lg:text-left w-[20em] '>
            "El viaje de mil millas comienza con un solo paso. ¡Hoy es el día perfecto para comenzar tu viaje hacia una versión más fuerte y saludable de ti mismo! ¡No esperes más, empieza a entrenar ahora!"
          </p>
          <Link to={'/suscripcion'}>
          <Button intent='primary' size='large' roundness='round'>
            Suscribirte
          </Button>
          </Link>
          
        </div>
      </div>
    </div>
  )
}

export default Hero
