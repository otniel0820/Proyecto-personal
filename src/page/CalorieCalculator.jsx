import React from "react";
import CalculateMacrosCalories from "../components/CalculateMacrosCalories";
import ConceptosConocer from "../components/ConceptosConocer";
import Footer from "../components/Footer";


const CalorieCalculator = () => {
  
  return (
    <div className=" ">
      <CalculateMacrosCalories/>
      <ConceptosConocer conceptCalories={'calculadora'}/>
      <Footer/>
    </div>
  );
};

export default CalorieCalculator;
