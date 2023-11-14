import React from 'react'
import Button from './Button'
import Form from './Form'
import { Link } from 'react-router-dom'

const TmbAndForm = () => {
  return (
    <div className="flex flex-col lg:flex-row justify-center gap-20 p-5 md:p-16 bg-[#0f1219]">
  <div className="w-full lg:w-[60rem] flex flex-col justify-center items-center gap-10 bg-[#646671] p-5 md:p-9 shadow-lg shadow-[white] rounded-lg">
    <h1 className="text-3xl md:text-4xl lg:text-5xl text-white font-semibold">
      Tasa metabólica basal (TMB)
    </h1>
    <p className="text-base md:text-lg text-white font-normal text-justify">
      La Tasa Metabólica Basal (TMB) es la cantidad mínima de calorías que tu cuerpo necesita para mantener funciones vitales en reposo. Conocer tu TMB te ayuda a planificar una dieta y ejercicio adecuados para perder peso, mantenerlo o ganar masa muscular, así como mantener un estilo de vida saludable. Es una herramienta valiosa en la gestión de la salud y la forma física.
    </p>
    <p className="text-base md:text-lg text-white font-normal text-justify">
      Si quieres calcular tu TMB gratis, haz click en el siguiente botón. Si deseas una primera asesoría gratuita, llena el formulario a continuación y pronto nos pondremos en contacto contigo.
    </p>
    <Link to={'/calculadora_de_calorias_y_macros'}>
    <Button roundness="round">Calcular mi TMB</Button>
    </Link>
  </div>
  <div className="w-full flex flex-col gap-4 lg:w-[30rem] mt-5 lg:mt-0">
    <h2 className='text-white text-2xl text-center font-semibold'>Rellena para una asesoría gratuita</h2>
    <Form />
  </div>
</div>
  )
}

export default TmbAndForm
