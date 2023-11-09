import React, { useState } from "react";
import { BiPlus, BiMinus } from "react-icons/bi";

const Faq = () => {
  const objFaq = [
    {
      question: "¿Estos programas los puedo realizar desde cualquier país?",
      answer:
        "Sí, nuestros programas de entrenamiento en línea están disponibles para personas de cualquier país. Fit Tech Pro se enorgullece de ofrecer acceso global a nuestros servicios. No importa dóonde te encuentres, puedes unirte a nuestra comunidad en línea y comenzar tu viaje hacia una vida más saludable y activa. Nuestros entrenadores certificados y recursos están diseñados para adaptarse a las necesidades y objetivos de personas de todo el mundo. ¡Esperamos ayudarte a lograr tus metas de fitness sin importar dónde te encuentres!",
    },
    {
      question: "¿Los programas son personalizados?",
      answer:
        "Sí, en Fit Tech Pro, todos nuestros programas de entrenamiento son altamente personalizados. Entendemos que cada persona tiene objetivos, necesidades y niveles de condición física únicos. Nuestros entrenadores profesionales trabajan contigo para crear un programa de entrenamiento que se adapte específicamente a tus metas individuales, ya sea perder peso, ganar masa muscular, mejorar la resistencia o simplemente llevar un estilo de vida más saludable. A través de una evaluación inicial y la comunicación continua, ajustamos tu programa para garantizar que obtengas los mejores resultados. Tu éxito es nuestra prioridad, y la personalización es fundamental para lograrlo.",
    },
    {
      question: "¿Que incluye el plan de nutrición?",
      answer:
        "Nuestro plan de nutrición en Fit Tech Pro es completamente personalizado para adaptarse a tus necesidades y objetivos específicos. Incluye una evaluación detallada, un plan de alimentación personalizado con recomendaciones calóricas y de nutrientes, recetas saludables, listas de compras, seguimiento constante de tu progreso, educación nutricional y apoyo continuo. Nuestro enfoque es ayudarte a mantener un estilo de vida saludable a largo plazo a través de la nutrición adecuada y la educación sobre elecciones alimentarias saludables. Tu éxito es nuestra prioridad, y trabajamos contigo para que alcances tus metas nutricionales y de bienestar.",
    },
    {
      question: "¿El precio es en Euros?",
      answer:
        "Sí, aceptamos otras monedas como forma de pago además de los euros. Puedes pagar con tarjeta de credito o debito de tu pais de residencia. ",
    },
  ];

  const [openIndex, setOpenIndex] = useState(null);
  const handleClickFaq = (index) => {
    if (openIndex === index) {
      setOpenIndex(null);
    } else {
      setOpenIndex(index);
    }
  };

  return (
    <div className="flex flex-col justify-center items-center gap-4 sm:gap-8 p-4 sm:p-8 md:p-14 bg-[#646671]">
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4 sm:mb-8 md:mb-10">
        Preguntas frecuentes
      </h2>
      {objFaq.map((element, i) => {
        const isQuestionOpen = openIndex === i;
        return (
          <div
            key={i}
            className="w-full sm:w-[90%] md:w-[70%] cursor-pointer shadow-lg shadow-white bg-[#0f1219] rounded-xl"
          >
            <article
              className="flex justify-start items-center text-white gap-5 p-6 sm:p-6 md:p-8"
              onClick={() => handleClickFaq(i)}
            >
              {isQuestionOpen?<BiMinus className="text-2xl sm:text-3xl md:text-4xl"/>:<BiPlus className="text-2xl sm:text-3xl md:text-4xl" />}
              <p className="text-2xl sm:text-lg md:text-2xl">{element.question}</p>
            </article>
            {isQuestionOpen ? (
              <article className="flex flex-col justify-start items-start text-white p-6 gap-6 sm:p-6 md:p-8">
                <div className="my-[1em] bg-[#E3DED7] min-w-full h-[1px] "></div>
                <p className="text-xl sm:text-lg md:text-xl text-justify">{element.answer}</p>
              </article>
            ) : (
              ""
            )}
          </div>
        );
      })}
    </div>
  );
};

export default Faq;
