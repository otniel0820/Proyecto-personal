import React, { useRef } from "react";
import Button from "./Button";

const MacroCaloriesModal = ({ result, closeModal }) => {
  const modalRef = useRef(null);

  const handleCloseModal = (e) => {
    if (modalRef.current && !modalRef.current.contains(e.target)) {
      closeModal();
    }
  };

  return (
    <div
      className="fixed inset-0 w-full h-full flex justify-center items-center bg-black bg-opacity-70"
      onClick={handleCloseModal}
    >
      <div ref={modalRef} className="bg-[#1c1f27] text-white p-8 rounded-lg text-center flex flex-col gap-5">
        <h2 className="text-[1.5em] font-bold mb-4">
        Calorias totales segun tu (TMB):
        </h2>
        <p><span className="font-bold">Calorías por día:</span> {result.maintenanceCalories.toFixed(0)}</p>
        <h2 className="text-[1.5em] font-bold mb-4">
        Distribución de macros recomendada:
        </h2>

        <p><span className="font-bold">Proteína:</span> {result.macros.protein.toFixed(0)} gramos.</p>
        <p><span className="font-bold">Carbohidratos:</span> {result.macros.carbs.toFixed(0)} gramos.</p>
        <p><span className="font-bold">Grasa:</span> {result.macros.fats.toFixed(0)} gramos.</p>
        <div>
          <Button intent="primary" roundness="round" onClick={closeModal}>
          Cerrar
        </Button>  
        </div>
        
      </div>
    </div>
  );
};

export default MacroCaloriesModal;
