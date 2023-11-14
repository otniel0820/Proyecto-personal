import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


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

  const carouselItems = [
    {
      title: "Definición",
      image:
        "https://img.freepik.com/fotos-premium/atleta-entrenamiento-intenso-gimnasio-accion_946657-2753.jpg",
      description:
        "Programa diseñado para reducir la grasa corporal y resaltar la definición muscular. Incluye entrenamiento de resistencia, ejercicio cardiovascular, dieta equilibrada con déficit calórico, control de porciones, hidratación y descanso.",
    },
    {
      title: "Volumen",
      image:
        "https://img.freepik.com/fotos-premium/hombre-musculoso-haciendo-actividades-fisicas-gym_976142-1453.jpg",
      description:
        "Ideal para aquellos que buscan aumentar el tamaño muscular. Requiere un trabajo duro en el gimnasio y una dieta específica. No se trata solo de ganar peso, sino de ganar músculo magro.",
    },
    {
      title: "Modo pro",
      image:
        "https://i.ytimg.com/vi/AXBDzATZ_UE/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLC4Ky9J5osHEFWsB7gyhLkvd1j8OQ",
      description:
        "Enfoque avanzado centrado en maximizar el rendimiento, la fuerza y la hipertrofia muscular. Requiere dedicación y comprensión profunda de la ciencia del entrenamiento. Preparación física y mental esencial.",
    },
    {
      title: "Entrenamiento en casa",
      image:
        "https://s1.abcstatics.com/media/bienestar/2021/01/09/hacer-ejercicio-casa-k38F--620x349@abc.jpg",
      description:
        "Plan de entrenamiento centrado en mantener y mejorar la salud y condición física general. Ajustable según el nivel de condición física y preferencias. No se requiere equipo especial.",
    },
    {
      title: "Guía de nutrición",
      image:
        "https://media.gettyimages.com/id/1408299962/es/v%C3%ADdeo/mujer-que-recibe-consejos-de-alimentaci%C3%B3n-saludable-del-m%C3%A9dico.jpg?s=640x640&k=20&c=FBuEAnKn3dXC4BVMlJsXV6HnNsmDLoexQpj0YnHuyP8=",
      description:
        "Un plan de nutrición efectivo es sostenible y a largo plazo. La personalización y adaptabilidad son fundamentales. Cada persona es única, y el enfoque debe ser único para cada individuo.",
    },
    {
      title: "Guía de suplementación",
      image:
        "https://s2.abcstatics.com/media/familia/2019/02/26/suplementos-deportivos-3-kugH--620x349@abc.jpg",
      description:
        "Orientación y apoyo para una suplementación efectiva y adecuada. Los suplementos no deben reemplazar la dieta, sino complementarla según necesidades específicas. El entrenamiento adecuado y la planificación son cruciales.",
    },
    {
      title: "Principiantes",
      image:
        "https://thumbs.dreamstime.com/b/gym-funny-man-est%C3%A1-entrenando-una-aspirante-joven-te-ense%C3%B1a-balancear-piernas-con-motivos-de-escudos-gimnasio-un-hombre-199397053.jpg?w=576",
      description:
        "Ideal para aquellos nuevos en el gimnasio o que regresan después de mucho tiempo. Programa diseñado para preparar y acostumbrar el cuerpo a la actividad física.",
    },
  ];

  return (
    <div className="py-10 px-12 bg-[#646671]">
  <Slider {...settings}>
    {carouselItems.map((item, index) => (
      <div key={index} className="px-2 flex flex-col items-center">
        <img
          src={item.image}
          alt={item.title}
          className="w-full h-full object-cover rounded-xl mb-4"
        />
        <div className="flex flex-col items-center gap-2">
          <h3 className="text-white text-[1.5em]">{item.title}</h3>
          <p className="text-white text-[1em] text-center">{item.description}</p>
        </div>
      </div>
    ))}
  </Slider>
</div>
  );
};
