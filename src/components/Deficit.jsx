import React, { useState } from "react";
import { useContext } from "react";
import { DataContext } from "../context/DataContext";
import ModalNutricion from "./ModalNutricion";
import logoSinFondo from '../assets/logoSinFondo.png'

const Deficit = () => {
  const { nutricion } = useContext(DataContext);
  const [selectedDay, setSelectedDay] = useState(null);
  const [selectedComidaId, setSelectedComidaId] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const dietaDeficit = nutricion?.slice(0, 1);

  const handleDayClick = (dia, comidaId) => {
    setSelectedDay(dia);
    setSelectedComidaId(comidaId);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setSelectedDay(null);
    setSelectedComidaId(null);
    setIsModalOpen(false);
  };

  return (
    <div className="flex flex-col   w-full py-20 px-10 gap-8 bg-white shadow-lg shadow-red-500 rounded-lg" >
      <h1 className="text-3xl font-bold mb-4 text-center font-dafont">Dieta para un déficit calórico</h1>
      <section className="flex gap-24">
        {dietaDeficit?.map((element, index) => {
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
        <img src="" alt="" />
      </section>
      {isModalOpen && (
        <ModalNutricion
          title={`Comidas para el día: ${selectedComidaId}`}
          content={
            dietaDeficit[0][selectedDay] && (
              <div className="flex flex-col gap-5">
                <p><span className="font-bold">Desayuno:</span> {dietaDeficit[0][selectedDay].desayuno}</p>
                <p><span className="font-bold">Merienda:</span> {dietaDeficit[0][selectedDay].merienda}</p>
                <p><span className="font-bold">Almuerzo:</span> {dietaDeficit[0][selectedDay].almuerzo}</p>
                <p><span className="font-bold">Cena:</span> {dietaDeficit[0][selectedDay].cena}</p>
              </div>
            )
          }
          onClose={handleCloseModal}
        />
      )}
    </div>
  );
};

export default Deficit;