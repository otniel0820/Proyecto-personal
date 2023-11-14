import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import definicion from "../assets/definicion.jpg";
import volumen from "../assets/volumen.jpg";
import pro from "../assets/pro.jpg";
import enCasa from "../assets/enCasa.jpg";
import nutricion from "../assets/nutricion.jpg";
import suplementacion from "../assets/suplementacion.jpg";
import principiantes from "../assets/principiantes.jpg";

export const Carousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    cssEase: "linear",
    swipeToSlide: true,
    className: "",
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className="py-10 px-12 bg-[#646671] ">
      <Slider {...settings}>
        <div className="px-2">
          <img
            src={definicion}
            alt=""
            className="w-[30em] h-[25em] rounded-xl"
          />
          <div className="flex flex-col justify-center items-center pr-5 pt-5 gap-2 ">
            <h3 className="text-white text-[1.5em]">Definición</h3>
            <p className="text-white text-[1em] text-justify">El programa de definición en el gimnasio tiene como objetivo principal reducir la grasa corporal y destacar la definición muscular. Esto se logra mediante un programa que combina entrenamiento de resistencia para mantener la masa muscular, ejercicio cardiovascular para quemar calorías, una dieta equilibrada con un déficit calórico controlado, control de porciones, hidratación adecuada, descanso y recuperación, y una mentalidad positiva. El seguimiento del progreso y los ajustes son esenciales, y se puede considerar la inclusión de suplementos.</p>
          </div>
        </div>
        <div className="px-2">
          <img src={volumen} alt="" className="w-[30em] h-[25em] rounded-xl" />
          <div className="flex flex-col justify-center items-center pr-5 pt-5 gap-2 ">
            <h3 className="text-white text-[1.5em]">Volumen</h3>
            <p className="text-white text-[1em] text-justify">Un plan de volumen es ideal para personas que desean aumentar su tamaño muscular y están dispuestas a trabajar duro en el gimnasio y a mantener una dieta específica para lograrlo. Es importante tener en cuenta que este tipo de plan no solo se trata de ganar peso, sino de ganar músculo magro, por lo que la alimentación y el entrenamiento deben ser apropiados para dicho objetivo.</p>
          </div>
        </div>
        <div className="px-2">
          <img src={pro} alt="" className="w-[30em] h-[25em] rounded-xl" />
          <div className="flex flex-col justify-center items-center pr-5 pt-5 gap-2 ">
            <h3 className="text-white text-[1.5em]">Modo pro</h3>
            <p className="text-white text-[1em] text-justify">Este enfoque de entrenamiento "modo pro" se centra en maximizar el rendimiento, la fuerza y la hipertrofia muscular. Es un enfoque avanzado que requiere una dedicación significativa y una comprensión profunda de la ciencia del entrenamiento. Asegúrate de estar preparado física y mentalmente para un programa de este nivel.</p>
          </div>
        </div>
        <div className="px-2">
          <img src={enCasa} alt="" className="w-[30em] h-[25em] rounded-xl" />
          <div className="flex flex-col justify-center items-center pr-5 pt-5 gap-2 ">
            <h3 className="text-white text-[1.5em]">Entrenaiento en casa</h3>
            <p className="text-white text-[1em] text-justify">Este plan de entrenamiento en casa se enfoca en mantener y mejorar tu salud y condición física general. Puedes ajustar la intensidad según tu nivel de condición física y preferencias. No se requiere equipo especial, pero si tienes mancuernas o bandas elásticas, puedes incorporarlas para añadir resistencia. Recuerda mantener una alimentación equilibrada y beber suficiente agua para apoyar tus objetivos de acondicionamiento físico.</p>
          </div>
        </div>
        <div className="px-2">
          <img
            src={nutricion}
            alt=""
            className="w-[30em] h-[25em] rounded-xl"
          />
          <div className="flex flex-col justify-center items-center pr-5 pt-5 gap-2 ">
            <h3 className="text-white text-[1.5em] ">Guía de nutrición</h3>
            <p className="text-white text-[1em] text-justify">Un plan de nutrición efectivo no es una dieta a corto plazo, sino un enfoque sostenible y a largo plazo para el bienestar y la salud. Es importante recordar que cada persona es única, y lo que funciona para una persona puede no ser adecuado para otra. Por lo tanto, la personalización y la adaptabilidad son fundamentales en un plan de nutrición exitoso.</p>
          </div>
        </div>
        <div className="px-2">
          <img
            src={suplementacion}
            alt=""
            className="w-[30em] h-[25em] rounded-xl"
          />
          <div className="flex flex-col justify-center items-center pr-5 pt-5 gap-2 ">
            <h3 className="text-white text-[1.5em]">Guía de suplementación</h3>
            <p className="text-white text-[1em] text-justify">Fit Tech Pro te brinda orientación y apoyo para lograr una suplementación efectiva y adecuada. En la mayoría de los casos, una dieta equilibrada es suficiente para satisfacer las necesidades nutricionales. Los suplementos deportivos no deben reemplazarla, sino complementarla según necesidades específicas. Además, es importante entender que los suplementos no garantizan el éxito deportivo; el entrenamiento adecuado y la planificación son cruciales para obtener resultados en el rendimiento deportivo. Fit Tech Pro te ayuda y te guía en este proceso.</p>
          </div>
        </div>
        <div className="px-2">
          <img
            src={principiantes}
            alt=""
            className="w-[30em] h-[25em] rounded-xl"
          />
          <div className="flex flex-col justify-center items-center pr-5 pt-5 gap-2 ">
            <h3 className="text-white text-[1.5em]">Principiantes</h3>
            <p className="text-white text-[1em] text-justify">Si eres totalmente nuevo en el gym, o estas regresando después de mucho tiempo, este programa es ideal para tu primera semana, con el fin de preparar y acostumbrar tu cuerpo a este nuevo deporte.</p>
          </div>
        </div>
      </Slider>
    </div>
  );
};
