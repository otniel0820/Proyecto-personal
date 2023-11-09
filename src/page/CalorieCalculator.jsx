import React from "react";
import CalculateMacrosCalories from "../components/CalculateMacrosCalories";
import ConceptosConocer from "../components/ConceptosConocer";


const CalorieCalculator = () => {
  
  return (
    <div className=" bg-[#1C1F27]">
      <CalculateMacrosCalories/>
      <ConceptosConocer conceptCalories={'calculadora'}/>
    </div>
  );
};

export default CalorieCalculator;
