import React, { useState } from "react";
import { useContext } from "react";
import { DataContext } from "../context/DataContext";
import ModalNutricion from "./ModalNutricion";
import mantenimiento1 from '../assets/mantenimiento1.png'
import mantenimiento2 from '../assets/mantenimiento2.png'

const MantenerPeso = () => {
  const { nutricion } = useContext(DataContext);
  const [selectedDay, setSelectedDay] = useState(null);
  const [selectedComidaId, setSelectedComidaId] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const dietaMantenimiento = nutricion?.slice(1, 2);

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
    <div className="flex flex-col   w-full py-20 px-10 gap-8  bg-white shadow-lg shadow-red-500 rounded-lg">
      <h1 className="text-3xl font-bold mb-4 text-center font-dafont">Dieta para mantenimiento</h1>
      <section className="flex gap-14">
        <img src={mantenimiento1} alt="" />
        <img src={mantenimiento2} alt="" />
        {dietaMantenimiento?.map((element, index) => {
          const diasOrdenados = Object.entries(element).sort(
            ([diaA, comidaA], [diaB, comidaB]) =>
              Number(comidaA.id) - Number(comidaB.id)
          );

          return (
            <div key={index} className="flex flex-col gap-5">
              {diasOrdenados.map(([dia, comida]) => (
                <div key={dia} className="cursor-pointer" onClick={() => handleDayClick(dia, comida.id)}>
                  <h2 className="text-blue-500 cursor-pointer text-xl">Comida para el día: {comida.id}</h2>
                </div>
              ))}
            </div>
          );
        })}
      </section>
      {isModalOpen && (
        <ModalNutricion
          title={`Comidas para el día: ${selectedComidaId}`}
          content={
            dietaMantenimiento[0][selectedDay] && (
              <div className="flex flex-col gap-5">
                <p><span className="font-bold">Desayuno:</span> {dietaMantenimiento[0][selectedDay].desayuno}</p>
                <p><span className="font-bold">Merienda:</span> {dietaMantenimiento[0][selectedDay].merienda}</p>
                <p><span className="font-bold">Almuerzo:</span> {dietaMantenimiento[0][selectedDay].almuerzo}</p>
                <p><span className="font-bold">Cena:</span> {dietaMantenimiento[0][selectedDay].cena}</p>
              </div>
            )
          }
          onClose={handleCloseModal}
        />
      )}
    </div>
  );
};

export default MantenerPeso;
