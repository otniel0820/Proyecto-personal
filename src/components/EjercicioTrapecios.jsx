import React, { useState } from "react";
import { useContext } from "react";
import { DataContext } from "../context/DataContext";
import Modal from "./Modal";

const EjercicioTrapecios = () => {
  const { rutinas } = useContext(DataContext);
  const [selectedExercise, setSelectedExercise] = useState(null);

  const tiposEjerciciosTrapecios = rutinas?.slice(5, 6); 
  const handleExerciseClick = (exercise) => {
    setSelectedExercise({
      type: "trapecios",
      exercise: exercise,
    });
  };

  const handleCloseModal = () => {
    setSelectedExercise(null);
  };

  return (
    <div className="flex flex-col  justify-center items-center w-full py-20 px-10 gap-8  bg-white shadow-lg shadow-red-500 rounded-lg">
      <h1 className="text-3xl font-bold mb-4 text-center font-dafont">Ejercicios para Trapecios</h1>
      <section className="flex gap-24 items-center ">
        <img src="https://i.pinimg.com/originals/5c/e8/16/5ce8166f5c0f463f751756f7add8f6d3.gif" alt="" className="w-[24em]"/>
        <img src="https://i.pinimg.com/564x/97/81/c6/9781c63cc29f47cde9baf2142664a392.jpg" alt="" />
        {tiposEjerciciosTrapecios?.map((element, index) => (
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

export default EjercicioTrapecios;
