import React, { useState } from "react";
import { useContext } from "react";
import { DataContext } from "../context/DataContext";
import Modal from "./Modal";

const EjercicioHombros = () => {
  const { rutinas } = useContext(DataContext);
  const [selectedExercise, setSelectedExercise] = useState(null);

  const tiposEjerciciosHombros = rutinas?.slice(2, 3); 

  const handleExerciseClick = (exercise) => {
    setSelectedExercise({
      type: "hombros",
      exercise: exercise,
    });
  };

  const handleCloseModal = () => {
    setSelectedExercise(null);
  };

  return (
    <div className="flex flex-col  justify-center items-center w-full py-20 px-10 gap-8  bg-white shadow-lg shadow-red-500 rounded-lg">
      <h1 className="text-3xl font-bold mb-4 text-center font-dafont">Ejercicios para Hombros</h1>
<section className="flex gap-24 items-center ">
   {tiposEjerciciosHombros?.map((element, index) => (
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
    <img src="https://i.pinimg.com/564x/f2/0e/66/f20e660ee3d6f9996a783d3a07537aad.jpg" alt="" />
    <img src="https://i.pinimg.com/originals/6c/2d/f5/6c2df56d5e3aa41321f278dbf9c730a4.gif" alt="" className="w-[30em]"/>
</section>
     
      {selectedExercise && (
        <Modal exercise={selectedExercise} onClose={handleCloseModal} />
      )}
    </div>
  );
};

export default EjercicioHombros;
