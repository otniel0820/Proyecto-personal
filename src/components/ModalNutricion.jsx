// ModalNutricion.js
import React, { useRef, useEffect } from "react";

const ModalNutricion = ({ title, content, onClose }) => {
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
        <p className="text-xl font-bold mb-4 text-center">{title}</p>
        <div >
          
          <p>{content}</p>
          
        </div>
      </div>
    </div>
  );
};

export default ModalNutricion;
