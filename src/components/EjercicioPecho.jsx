import React, { useState } from "react";
import { useContext } from "react";
import { DataContext } from "../context/DataContext";
import Modal from "./Modal";

const EjercicioPecho = () => {
  const { rutinas } = useContext(DataContext);
  const [selectedExercise, setSelectedExercise] = useState(null);

  const tiposEjerciciosPecho = rutinas?.slice(3, 4); 

  const handleExerciseClick = (exercise) => {
    setSelectedExercise({
      type: "pecho",
      exercise: exercise,
    });
  };

  const handleCloseModal = () => {
    setSelectedExercise(null);
  };

  return (
    <div className="flex flex-col  justify-center items-center w-full py-20 px-10 gap-8  bg-white shadow-lg shadow-red-500 rounded-lg">
      <h1 className="text-3xl font-bold mb-4 text-center font-dafont">Ejercicios para Pecho</h1>
      <section className="flex gap-24 items-center ">
        <img src="https://i.pinimg.com/originals/22/6f/8b/226f8bed78eb03d988c67bbe2bfff9e0.gif" alt="" className="w-[30em]"/>
        <img src="https://i.pinimg.com/564x/df/7d/c3/df7dc392da5f4d3fcaa5f02cb60dd3d5.jpg" alt="" />
        {tiposEjerciciosPecho?.map((element, index) => (
        <div key={index} className="flex flex-col gap-5">
          {Object.entries(element).map(([indice, ejercicio]) => (
            <div key={ejercicio.id}>
              <p
                className="text-blue-500 cursor-pointer text-right"
                onClick={() => handleExerciseClick(ejercicio)}
              >
                {ejercicio.nombre}
              </p>
            </div>
          ))}
        </div>
      ))}
      </section>
      
      {selectedExercise && (
        <Modal exercise={selectedExercise} onClose={handleCloseModal} />
      )}
    </div>
  );
};

export default EjercicioPecho;
