import React from 'react'

const WhatsappBubble = () => {
    const phoneNumber = "+34635196926"; 
    const message = "Hola, quiero contactar con ustedes";

    const handleClickWhatsapp = () => {
        const encodedMessage = encodeURIComponent(message);
        window.open(`https://wa.me/${phoneNumber}?text=${encodedMessage}`, "_blank");
      };
  return (
    <div className='fixed bottom-10 right-4 bg-green-600 text-white rounded-full w-16 h-16 flex items-center justify-center cursor-pointer shadow-lg hover:bg-green-700 transition-all duration-300'
    onClick={handleClickWhatsapp}>
      <img width="94" height="94" src="https://img.icons8.com/3d-fluency/94/whatsapp.png" alt="whatsapp"/>
    </div>
  )
}

export default WhatsappBubble
