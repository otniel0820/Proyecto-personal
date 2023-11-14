import React from 'react'
import Deficit from '../components/Deficit'
import MantenerPeso from '../components/MantenerPeso'
import Volumen from '../components/Volumen'

const Nutricion = () => {
  return (
    <div className='min-h-screen flex flex-col justify-center items-center bg-[#1C1F27] py-10 px-20 gap-14'>
      <Deficit/>
      <MantenerPeso/>
      <Volumen/>
    </div>
  )
}

export default Nutricion
