import React, { useState } from "react";
import { useContext } from "react";
import { DataContext } from "../context/DataContext";
import Modal from "./Modal";

const EjercicioPiernas = () => {
  const { rutinas } = useContext(DataContext);
  const [selectedExercise, setSelectedExercise] = useState(null);

  const tiposEjerciciosPiernas = rutinas?.slice(4, 5); 

  const handleExerciseClick = (exercise) => {
    setSelectedExercise({
      type: "piernas",
      exercise: exercise,
    });
  };

  const handleCloseModal = () => {
    setSelectedExercise(null);
  };

  return (
    <div className="flex flex-col  justify-center items-center w-full py-20 px-10 gap-8  bg-white shadow-lg shadow-red-500 rounded-lg">
      <h1 className="text-3xl font-bold mb-4 text-center font-dafont">Ejercicios para Piernas</h1>
      <section className="flex gap-24 items-center ">
        <article className="grid grid-cols-2 gap-4 items-center">
        <img src="https://i.pinimg.com/564x/ca/54/cc/ca54cca855e901606b5eb95ea44d4399.jpg" alt="" />
        <img src="https://i.pinimg.com/originals/25/a9/6c/25a96cc17cda11febd06b14157418b6c.gif" alt="" className="w-[25em]"/>
        <img src="https://i.pinimg.com/564x/b6/7b/65/b67b65ddaeae39b321933c803940d8af.jpg" alt="" />
        <img src="https://i.pinimg.com/originals/2f/88/8a/2f888a80d3e49f5e31ee372116437540.gif" alt="" className="w-[25em]"/>
      </article>
      {tiposEjerciciosPiernas?.map((element, index) => (
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

export default EjercicioPiernas;
