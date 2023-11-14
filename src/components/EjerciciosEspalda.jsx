import React, { useState } from "react";
import { useContext } from "react";
import { DataContext } from "../context/DataContext";
import Modal from "./Modal"; // Ajusta la ruta según la ubicación de tu componente Modal

const EjercicioEspalda = () => {
  const { rutinas } = useContext(DataContext);
  const [selectedExercise, setSelectedExercise] = useState(null);

  const tiposEjerciciosEspalda = rutinas?.slice(1, 2); 

  const handleExerciseClick = (exercise) => {
    setSelectedExercise({
      type: "espalda",
      exercise: exercise,
    });
  };

  const handleCloseModal = () => {
    setSelectedExercise(null);
  };

  return (
    <div className="flex flex-col  justify-center items-center w-full py-20 px-10 gap-8  bg-white shadow-lg shadow-red-500 rounded-lg">
      <h1 className="text-3xl font-bold mb-4 text-center font-dafont">Ejercicios para Espalda</h1>
      <section className="flex gap-24 items-center ">
        <img src="https://i.pinimg.com/originals/84/d0/66/84d066dbf01d6f4c7fbc83be47a8ba16.gif" alt=""  className="w-[30em]"/>
        <img src="https://i.pinimg.com/564x/55/0d/af/550daf2a654f1dd904235ea7ccf5a1b3.jpg" alt="" />
        {tiposEjerciciosEspalda?.map((element, index) => (
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

export default EjercicioEspalda;
