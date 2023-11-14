import React, { useState } from "react";
import { useContext } from "react";
import { DataContext } from "../context/DataContext";
import Modal from "./Modal"; 

const EjercicioBiceps = () => {
  const { rutinas } = useContext(DataContext);
  const [selectedExercise, setSelectedExercise] = useState(null);

  const tiposEjerciciosBiceps = rutinas?.slice(0, 1);

  const handleExerciseClick = (exercise) => {
    setSelectedExercise({
      type: "biceps",
      exercise: exercise,
    });
  };

  const handleCloseModal = () => {
    setSelectedExercise(null);
  };

  return (
    <div className="flex flex-col  justify-center items-center w-full py-20 px-10 gap-8  bg-white shadow-lg shadow-red-500 rounded-lg">
      <h1 className="text-3xl font-bold mb-4 text-center font-dafont">Ejercicios para Bíceps</h1>
      <section className="flex gap-24">
        {tiposEjerciciosBiceps?.map((element, index) => (
        <div key={index} className="flex flex-col gap-5">
          {Object.entries(element).map(([indice, ejercicio]) => (
            <div key={ejercicio.id}>
              <p
                className="text-blue-500 cursor-pointer"
                onClick={() => handleExerciseClick(ejercicio)}
              >
                {ejercicio.nombre}
              </p>
            </div>
          ))}
        </div>
      ))}
      <img src="https://i.pinimg.com/564x/99/89/81/9989817d6f62668bc1ee79fb2b0a522e.jpg" alt="" />
      <img src="https://i.pinimg.com/originals/2e/08/0d/2e080d3ad6c12d8878a8abb669f2cca8.gif" alt="" className="w-96"/>
      </section>
      
      {selectedExercise && (
        <Modal exercise={selectedExercise} onClose={handleCloseModal} />
      )}
    </div>
  );
};

export default EjercicioBiceps;
