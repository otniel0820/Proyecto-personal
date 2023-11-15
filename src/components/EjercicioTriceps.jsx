import React, { useState } from "react";
import { useContext } from "react";
import { DataContext } from "../context/DataContext";
import Modal from "./Modal";

const EjercicioTriceps = () => {
  const { rutinas } = useContext(DataContext);
  const [selectedExercise, setSelectedExercise] = useState(null);

  const tiposEjerciciosTriceps = rutinas?.slice(6,7); 

  const handleExerciseClick = (exercise) => {
    setSelectedExercise({
      type: "triceps",
      exercise: exercise,
    });
  };

  const handleCloseModal = () => {
    setSelectedExercise(null);
  };

  return (
    <div className="flex flex-col  justify-center items-center w-full py-20 px-10 gap-8  bg-white shadow-lg shadow-red-500 rounded-lg">
      <h1 className="text-3xl font-bold mb-4 text-center font-dafont">Ejercicios para Tríceps</h1>
      <section className="flex gap-24 items-center ">
        {tiposEjerciciosTriceps?.map((element, index) => (
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
      <img src="https://i.pinimg.com/564x/92/d8/0f/92d80f9a85f380385457cf198331057e.jpg" alt="" />
      <img src="https://i.pinimg.com/originals/ad/fa/07/adfa071cbb701eda0a8ea9887eb938d0.gif" alt="" className="w-[30em]"/>
      </section>
      
      {selectedExercise && (
        <Modal exercise={selectedExercise} onClose={handleCloseModal} />
      )}
    </div>
  );
};

export default EjercicioTriceps;
