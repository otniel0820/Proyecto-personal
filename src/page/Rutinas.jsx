import React from 'react'
import EjercicioBiceps from '../components/EjercicioBiceps'
import EjercicioEspalda from '../components/EjerciciosEspalda'
import EjercicioHombros from '../components/EjercicioHombros'
import EjercicioPecho from '../components/EjercicioPecho'
import EjercicioPiernas from '../components/EjercicioPiernas'
import EjercicioTrapecios from '../components/EjercicioTrapecios'
import EjercicioTriceps from '../components/EjercicioTriceps'

const Rutinas = () => {
  return (
    <div className='min-h-screen flex flex-col justify-center items-center bg-[#1C1F27] py-10 px-20 gap-14'>
      <EjercicioBiceps/>
      <EjercicioEspalda/>
      <EjercicioHombros/>
      <EjercicioPecho/>
      <EjercicioTrapecios/>
      <EjercicioTriceps/>
      <EjercicioPiernas/>
    </div>
  )
}

export default Rutinas
