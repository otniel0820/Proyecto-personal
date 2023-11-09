import React from "react";
import Button from "./Button";

const Planes = () => {
  const arrPlanes = [
    {
      type: "ANUAL",
      price: 238,
      typePay: "PAGO UNICO",
      equivalent: "Equivale a 19.9€/mes",
    },
    {
      type: "SEMESTRAL",
      price: 179,
      typePay: "PAGO UNICO",
      equivalent: "Equivale a 29.9€/mes",
    },
    {
      type: "MENSUAL",
      price: 29,
      typePay: "PRIMER MES",
      equivalent: "Despues 39€/mes",
    },
  ];
  return (
    <div className="bg-[#646671] pt-28 pb-10 flex flex-col gap-10 justify-center items-center">
    <div className="flex flex-col gap-10 justify-center items-center sm:flex-row">
      {arrPlanes.map((plan, i) => {
        return (
          <div className="bg-[#212330] flex flex-col justify-center items-center py-16 px-28 rounded-xl gap-5" key={i}>
            <h1 className="text-white text-3xl">{plan.type}</h1>
            <div className="flex flex-col items-center">
              <h2 className="text-white text-5xl font-bold">{plan.price} €</h2>
              <h3 className="text-[#ebebec] text-md">{plan.typePay}</h3>
              <p className="text-gray-400">{plan.equivalent}</p>
            </div>

            <div>
              <Button roundness="pill">
                {plan.type === "ANUAL"
                  ? "Ahorra 50%"
                  : plan.type === "SEMESTRAL"
                  ? "Ahorra 25%"
                  : "Seleccionar"}
              </Button>
            </div>
          </div>
        );
      })}
    </div>
    <p className="text-white w-[90%] sm:w-[60%] text-center">
      Con las opciones de 6 o 12 meses eliges abonar el precio total en un único pago por adelantado. Estas opciones no permiten la devolución total o parcial si decides dejar el servicio antes de los 6 o 12 meses, respectivamente.
    </p>
  </div>
      
  );
};

export default Planes;
