import React from 'react'
import Button from './Button'
import { Link } from 'react-router-dom'

const objDescription = [
  {
    url:"https://images.pexels.com/photos/4944958/pexels-photo-4944958.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    text:'Fit Tech Pro es tu destino definitivo para el entrenamiento personalizado y el bienestar integral. Estamos comprometidos con tu éxito en el viaje hacia una vida más saludable y activa. Nuestra plataforma en línea te ofrece acceso a entrenadores personales altamente calificados y a una amplia variedad de recursos diseñados para ayudarte a alcanzar tus objetivos de fitness de manera eficaz y sostenible.'
  },
  {
    url:"https://images.pexels.com/photos/414029/pexels-photo-414029.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    text:'Nuestros entrenadores profesionales utilizan tecnología de vanguardia y un enfoque personalizado para crear programas de entrenamiento adaptados a tus necesidades, nivel de condición física y metas específicas. Ya sea que estés buscando perder peso, ganar músculo, mejorar tu resistencia o simplemente llevar un estilo de vida más saludable, estamos aquí para guiarte en cada paso del camino.'
  },
  {
    url:"https://images.pexels.com/photos/907826/pexels-photo-907826.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    text:'Nuestra visión es transformar la vida de las personas, brindando soluciones integrales para la salud y el bienestar. Únete a la revolución del fitness en línea y descubre cómo Fit Tech Pro puede ayudarte a convertir tus sueños de acondicionamiento físico en una realidad. ¡Prepárate para dar el siguiente paso hacia una versión más saludable y en forma de ti mismo con Fit Tech Pro.'
  }
]

const Descripcion = () => {
  return (
    <div className=' p-10 flex flex-col justify-center items-center bg-[#0f1219] gap-10'>
      {objDescription.map((element, i)=>{
        return(
          <div key={i} className={`flex justify-center items-center gap-20 bg-[#646671] p-8 rounded-xl shadow-lg shadow-slate-400 sm:flex-col md: flex-col lg:flex-row ${i % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'}`}>
        
        <img src={element.url} alt="" className='w-[35em] h-[30em] rounded-lg shadow-xl'/>
        <p className='text-[1.5em] text-white text-justify'>{element.text}</p>
      </div>
        )
      })}

      <Link to={'/suscripcion'}><Button intent='secondary' size='large' roundness='pill'>Registrate ahora</Button></Link>
    </div>
  )
}

export default Descripcion
