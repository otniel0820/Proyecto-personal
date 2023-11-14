import { SignIn, useUser } from '@clerk/clerk-react'
import {React, useEffect} from 'react'
import { useNavigate } from 'react-router-dom'
import fondoLoging from '../assets/fondoLoging.jpg'


const SingInPage = () => {
  const navigate = useNavigate()
  const {user} = useUser()
  useEffect(() => {
    if (!user) {
      navigate("/inicio_sesión");
    }
  }, []);
  return (
    <div className='min-h-screen flex justify-center items-center  bg-cover bg-no-repeat bg-center ' style={{backgroundImage:`url(${fondoLoging})`}}>
      <SignIn signUpUrl='/registro_usuario'/>
    </div>
  )
}

export default SingInPage
