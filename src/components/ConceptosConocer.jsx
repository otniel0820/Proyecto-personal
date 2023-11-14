import React from "react";
import {
  FaSquareMinus,
  FaSquarePlus,
  FaEquals,
  FaFireFlameCurved,
  FaBowlFood,
  FaBowlRice,
  FaWeightScale,
  FaInfinity,
  FaBoltLightning,
} from "react-icons/fa6";
import { GiGroupedDrops, GiBrickWall, GiForkKnifeSpoon } from "react-icons/gi";

const ConceptosConocer = ( {conceptCalories}) => {
  const arrConceptCalories = [
    {
      icon: FaSquareMinus,
      title: "DÉFICIT",
      text: "Son las calorías que te hacen faltan para alcanzar un estado de manteni-miento. Por tanto cuando estás en déficit estás quemando más energía que la que consumes.",
    },
    {
      icon: FaSquarePlus,
      title: "SUPERHABIT",
      text: "Son las calorías que estás consumiendo de más una vez superado el estado de mantenimiento. Cuando estás en déficit estás quemando menos energía de la que consumes.",
    },
    {
      icon: FaEquals,
      title: "MANTENIMIENTO",
      text: "Lo comido por lo servido. Estar en mantenimiento es lo que ocurre cuando quemas prácticamente la misma cantidad de calorías de las que consumes.",
    },
    {
      icon: FaFireFlameCurved,
      title: "NEAT",
      text: "Es el conjunto de actividades cotidianas no deporitivas, como andar, subir escaleras o poner el lavavajillas. Cuanto más alto sea tu NEAT más calorías quemarás al día.",
    },
    {
      icon: FaBowlFood,
      title: "MACROS",
      text: "Son las proteínas, los carbohidratos y las grasas: los tres macronutrientes que necesita tu cuerpo para sobrevivir. Cada uno tiene una función que es regulada por el sistema hornonal.",
    },
    {
      icon: FaBowlRice,
      title: "MICROS",
      text: "Son el resto de nutrientes que nuestro cuerpo necesita para vivir y realizar sus procesos de forma efectiva: vitaminas (hidrosolubles y liposolubles), minerales y oligoelementos.",
    },
    {
      icon: FaWeightScale,
      title: "IMC",
      text: "Sencilla métrica que nos permite saber con facilidad si estamos por encima o por debajo de nuestro peso ideal. No hay que obsesionarse porque sin contexto no tiene valor",
    },
    {
      icon: FaInfinity,
      title: "TMB",
      text: "Es el número de calorías más o menos exacto que necesita su cuerpo para sobrevivir. No incluye la cantidad de calorías quemadas en la actividad diaria de una persona.",
    },
    {
      icon: GiGroupedDrops,
      title: "GRASA",
      text: "La grasa es uno de los tres macronutrientes: tiene una función de gran relevancia en la regulación hormonal. Mejor priorizar las grasas poliinsaturadas y monoinsaturadas.",
    },
    {
      icon: GiBrickWall,
      title: "PROTEINA",
      text: "Las proteínas son uno de los tres macronutrientes: su función es proveer al cuerpo de la materia prima necesaria para desarrollar construir y reparar la masa muscular.",
    },
    {
      icon: FaBoltLightning,
      title: "CARBOHIDRATOS",
      text: "Los carbohidratos son uno de los tres macronu-trientes: energía de alta disponibilidad. Sin carbohidratos nuestro cuerpo entra en estado de cetosis.",
    },
    {
      icon: GiForkKnifeSpoon,
      title: "CALORÍAS",
      text: "La palabra caloría se refiere al nº de kilo-calorías (kcal). Las grasas contienen 9 kcal/g. Los carbohidratos y proteínas contienen aproxima-damente 4 kcal/g.",
    },
  ];

  const arrConceptPlanes = [
    {
      img: "https://cdn-fimei.nitrocdn.com/vkMkHKckuullYXNJmhggYnzEUdnpLRRa/assets/images/optimized/rev-65a0528/getindya.com/wp-content/uploads/2023/03/plan-nutricional.webp",
      title: 'PLAN NUTRICIONAL',
      text:'Planificación ultrapersonalizada de todas las comidas de cada semana.'

    },
    {
      img: "https://cdn-fimei.nitrocdn.com/vkMkHKckuullYXNJmhggYnzEUdnpLRRa/assets/images/optimized/rev-65a0528/getindya.com/wp-content/uploads/2023/03/chat-con-nutricionista.webp",
      title: 'CHAT CON NUTRICIONISTA',
      text:'Escribe a tu nutricionista cuando tengas dudas o necesites algún cambio.'

    },
    {
      img: "https://cdn-fimei.nitrocdn.com/vkMkHKckuullYXNJmhggYnzEUdnpLRRa/assets/images/optimized/rev-65a0528/getindya.com/wp-content/uploads/2023/03/consulta-online.webp",
      title: 'VIDEOCONSULTA',
      text:'Para sentar las bases, tendrás gratis la primera vídeoconsulta con tu nutricionista.'

    },
    {
      img: "https://cdn-fimei.nitrocdn.com/vkMkHKckuullYXNJmhggYnzEUdnpLRRa/assets/images/optimized/rev-65a0528/getindya.com/wp-content/uploads/2023/03/cambio-inteligente-de-recetas.webp",
      title: 'CAMBIO DE RECETA',
      text:'Elige otras alternativas sin alterar ni una caloría tu arquitectura nutricional.'

    },
    {
      img: "https://cdn-fimei.nitrocdn.com/vkMkHKckuullYXNJmhggYnzEUdnpLRRa/assets/images/optimized/rev-65a0528/getindya.com/wp-content/uploads/2023/03/cambio-entrenamientos.webp",
      title: 'CAMBIO DE ENTRENAMIENTOS',
      text:'Si tus entrenamientos cambian, tu nutrición se reajusta automáticamente.'

    },
    {
      img: "https://cdn-fimei.nitrocdn.com/vkMkHKckuullYXNJmhggYnzEUdnpLRRa/assets/images/optimized/rev-65a0528/getindya.com/wp-content/uploads/2023/03/reajustes-automaticos.webp",
      title: 'REAJUSTES AUTOMÁTICOS',
      text:'Cambia lo que necesites y tu nutrición se reajustará automáticamente.'

    },
    {
      img: "https://cdn-fimei.nitrocdn.com/vkMkHKckuullYXNJmhggYnzEUdnpLRRa/assets/images/optimized/rev-65a0528/getindya.com/wp-content/uploads/2023/03/lista-de-la-compra.webp",
      title: 'LISTA DE LA COMPRA',
      text:'El lujo de comprar con la lista hecha de todo lo que necesitas. Ni más, ni menos.'

    },
    {
      img: "https://cdn-fimei.nitrocdn.com/vkMkHKckuullYXNJmhggYnzEUdnpLRRa/assets/images/optimized/rev-65a0528/getindya.com/wp-content/uploads/2023/03/graficos-de-evolucion.webp",
      title: 'GRÁFICOS DE EVOLUCIÓN',
      text:'La nutrición ya no es invisible. Comparte tu mejora con tus amigos y enemigos.'

    },
    {
      img: "https://cdn-fimei.nitrocdn.com/vkMkHKckuullYXNJmhggYnzEUdnpLRRa/assets/images/optimized/rev-65a0528/getindya.com/wp-content/uploads/2023/03/suplementacion.webp",
      title: 'SUPLEMENTACIÓN',
      text:'Planificación de preentrenos, avituallamientos y postentrenos.'

    },
    {
      img: "https://cdn-fimei.nitrocdn.com/vkMkHKckuullYXNJmhggYnzEUdnpLRRa/assets/images/optimized/rev-65a0528/getindya.com/wp-content/uploads/2023/03/patologias.webp",
      title: 'PATOLOGÍAS',
      text:'Tu nutricionista adapta tu planificación según la patología indicada.'

    },
    {
      img: "https://cdn-fimei.nitrocdn.com/vkMkHKckuullYXNJmhggYnzEUdnpLRRa/assets/images/optimized/rev-65a0528/getindya.com/wp-content/uploads/2023/03/conciliacion-parejas.webp",
      title: 'CONCILIACIÓN PAREJAS',
      text:'Contaréis con el mismo nutricionista que os pondrá las mismas recetas y lista de la compra.'

    },
    {
      img: "https://cdn-fimei.nitrocdn.com/vkMkHKckuullYXNJmhggYnzEUdnpLRRa/assets/images/optimized/rev-65a0528/getindya.com/wp-content/uploads/2023/03/sincronizacion-apps.webp",
      title: 'SINCRONIZACIÓN',
      text:'Muy pronto podras sincronizar Fit Tech Pro con tus dispositivos para personalizar mejor tu planificación nutricional, estara disponible en IOS y en Android.'

    },
  ]
  return (
    <div className={`flex flex-col justify-center items-center p-20 ${ conceptCalories==='calculadora'? 'bg-[#646671]':'bg-[#0f1219]'}`}>
      <h2 className="text-center text-4xl text-white pb-10">
        CONCEPTOS A CONOCER
      </h2>
      <div className=" grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {conceptCalories=== 'calculadora'? arrConceptCalories.map((element, i) => {
          return (
            <div
              key={i}
              className="text-white p-2 md:p-4 lg:p-2 flex justify-center items-center"
            >
              <div className="flex flex-col gap-4 justify-center items-center text-center">
                <element.icon className="text-6xl" />
                <h1 className="text-2xl">{element.title}</h1>
                <p className="w-[12em] h-[13em] flex-grow">{element.text}</p>
              </div>
            </div>
          );
        }): arrConceptPlanes.map((element, i)=>{
          return(
            <div
              key={i}
              className="text-white p-2 md:p-4 lg:p-5 flex justify-center items-center bg-slate-800 rounded-lg shadow-md shadow-white"
            >
              <div className="flex flex-col gap-4 justify-center items-center pt-5">
                <img src={element.img} className="text-6xl " />
                <h1 className="text-2xl">{element.title}</h1>
                <p className="flex-grow w-[21em] h-[8em]">{element.text}</p>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  );
};

export default ConceptosConocer;
