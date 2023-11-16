import React, { useRef, useEffect } from "react";

const Modal = ({ exercise, onClose }) => {
  const modalRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        onClose();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [onClose]);

  const renderExerciseDetails = () => {
    if (!exercise) {
      return null;
    }

    switch (exercise.type) {
      case "biceps":
      case "espalda":
      case "hombros":
      case "pecho":
      case "piernas":
      case "trapecios":
      case "triceps":
        return (
          <div className="flex flex-col gap-2">
            <p><span className="font-semibold">Nombre:</span> {exercise.exercise.nombre}</p>
            <p> <span className="font-semibold">Repeticiones:</span> {exercise.exercise.repeticiones}</p>
            <p> <span className="font-semibold">Descripción:</span> {exercise.exercise.descripcion}</p>
          </div>
        );
      default:
        return null; 
    }
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center">
      <div className="fixed inset-0 bg-gray-800 bg-opacity-50"></div>
      <div ref={modalRef} className="bg-[#1C1F27] text-white p-8 rounded-lg shadow-lg z-10 relative w-[30em]">
        <span
          className="text-white text-2xl font-bold cursor-pointer absolute top-2 right-4"
          onClick={onClose}
        >
          &times;
        </span>
        <p className="text-xl font-bold mb-4 text-center">Detalles del ejercicio</p>
        {renderExerciseDetails()}
      </div>
    </div>
  );
};

export default Modal;
