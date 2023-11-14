import React from "react";
import CalculateMacrosCalories from "../components/CalculateMacrosCalories";
import ConceptosConocer from "../components/ConceptosConocer";


const CalorieCalculator = () => {
  
  return (
    <div className=" ">
      <CalculateMacrosCalories/>
      <ConceptosConocer conceptCalories={'calculadora'}/>
    </div>
  );
};

export default CalorieCalculator;
