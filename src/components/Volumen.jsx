// Volumen.js
import React, { useState } from "react";
import { useContext } from "react";
import { DataContext } from "../context/DataContext";
import ModalNutricion from "./ModalNutricion";
import volumen1 from '../assets/volumen1.png'
import volumen2 from '../assets/volumen2.png'

const Volumen = () => {
  const { nutricion } = useContext(DataContext);
  const [selectedDay, setSelectedDay] = useState(null);
  const [selectedComidaId, setSelectedComidaId] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const dietaVolumen = nutricion?.slice(2,3);

  const handleDayClick = (dia,comidaId) => {
    setSelectedDay(dia);
    setSelectedComidaId(comidaId);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setSelectedDay(null);
    setIsModalOpen(false);
  };

  return (
    <div className="flex flex-col   w-full py-20 px-16 gap-8  bg-white shadow-lg shadow-red-500 rounded-lg">
      <h1 className="text-3xl font-bold mb-4 text-center font-dafont">Dieta para Volumen</h1>
      <section className="flex gap-40 items-center">
        {dietaVolumen?.map((element, index) => {
          const diasOrdenados = Object.entries(element).sort(
            ([diaA, comidaA], [diaB, comidaB]) =>
              Number(comidaA.id) - Number(comidaB.id)
          );

          return (
            <div key={index} className="flex flex-col gap-5">
              {diasOrdenados.map(([dia, comida]) => (
                <div key={dia} className="cursor-pointer" onClick={() => handleDayClick(dia, comida.id)}>
                  <h2 className="text-blue-500 cursor-pointer text-xl">Día: {comida.id}</h2>
                </div>
              ))}
            </div>
          );
        })}
        <img src={volumen1} alt="" />
        <img src={volumen2} alt="" />
      </section>
      {isModalOpen && (
        <ModalNutricion
          title={`Comidas para el día: ${selectedComidaId}`}
          content={
            dietaVolumen[0][selectedDay] && (
              <div className="flex flex-col gap-5">
                <p><span className="font-bold">Desayuno:</span> {dietaVolumen[0][selectedDay].desayuno}</p>
                <p><span className="font-bold">Merienda:</span> {dietaVolumen[0][selectedDay].merienda}</p>
                <p><span className="font-bold">Almuerzo:</span> {dietaVolumen[0][selectedDay].almuerzo}</p>
                <p><span className="font-bold">Cena:</span> {dietaVolumen[0][selectedDay].cena}</p>
              </div>
            )
          }
          onClose={handleCloseModal}
        />
      )}
    </div>
  );
};

export default Volumen;
