import React, { useState } from "react";
import Button from "./Button";
import MacroCaloriesModal from "./MacroCaloriesModal";

const CalculateMacrosCalories = () => {
  const [gender, setGender] = useState("male");
  const [age, setAge] = useState(25);
  const [height, setHeight] = useState(170); 
  const [weight, setWeight] = useState(70); 
  const [activityLevel, setActivityLevel] = useState(1.2);
  const [goal, setGoal] = useState("maintain");
  const [result, setResult] = useState(null);
  const [showModal, setShowModal] = useState(false);

  const activityLevels = {
    1.2: "Sedentario (poco o ningún ejercicio)",
    1.375: "Ligera (ejercicio ligero/deportes 1-3 días/semana)",
    1.55: "Moderada (ejercicio moderado/deportes 3-5 días/semana)",
    1.725: "Alta (ejercicio vigoroso/deportes 6-7 días/semana)",
    1.9: "Muy alta (trabajo o ejercicio intenso y actividad adicional)",
  };

  const calculateCalories = () => {
    let bmr = 0;
    if (gender === "male") {
      bmr = 88.362 + 13.397 * weight + 4.799 * height - 5.677 * age;
    } else {
      bmr = 447.593 + 9.247 * weight + 3.098 * height - 4.33 * age;
    }

    const maintenanceCalories = bmr * activityLevel;
    return maintenanceCalories;
  };

  const calculateMacros = (calories) => {
    const proteinRatio = 0.2;
    const carbRatio = 0.5;
    const fatRatio = 0.3;

    const protein = (calories * proteinRatio) / 4; 
    const carbs = (calories * carbRatio) / 4; 
    const fats = (calories * fatRatio) / 9; 

    return { protein, carbs, fats };
  };

  const handleCalculate = () => {
    const maintenanceCalories = calculateCalories();

    let adjustedCalories = maintenanceCalories;

    if (goal === "loseWeight") {
      adjustedCalories -= 500; 
    } else if (goal === "bulk") {
      adjustedCalories += 500; 
    }

    const macros = calculateMacros(adjustedCalories);

    setResult({ maintenanceCalories, adjustedCalories, macros });
    setShowModal(true); 
  };
  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <div className=" flex flex-col gap-8 justify-center items-center  min-h-screen px-4 py-20 md:py-20 bg-cover bg-center" style={{backgroundImage:'url(https://wallpapercave.com/wp/wp2639543.jpg)'}}>
      <h1 className="text-white text-[3em] pt-8" >
        Calculadora de Macros y Calórias Diarias
      </h1>
      <div className='w-full md:w-[30rem] max-w-screen-md mx-auto p-4 md:p-10 rounded-xl flex flex-col gap-5 shadow-xl shadow-red-500 bg-slate-200 bg-opacity-70  backdrop-blur-[10px] '>
        <div className="flex flex-col gap-2">
          <label className="text-black text-[1.5em]">Género:</label>
          <select
            onChange={(e) => setGender(e.target.value)}
            value={gender}
            className="border-[#1c1f27] border-solid border-[1px] rounded-md p-2"
          >
            <option value="male">Hombre</option>
            <option value="female">Mujer</option>
          </select>
        </div>
        <div className="flex flex-col  gap-1">
          <label className="text-black text-[1.5em]">Edad:</label>
          <input
            type="number"
            value={age}
            onChange={(e) => setAge(e.target.value)}
            className="border-[#1c1f27] border-solid border-[1px] rounded-md p-2"
          />
        </div>
        <div className="flex flex-col gap-1">
          <label className="text-black text-[1.5em]">Altura (cm):</label>
          <input
            type="number"
            value={height}
            onChange={(e) => setHeight(e.target.value)}
            className="border-[#1c1f27] border-solid border-[1px] rounded-md  p-2"
          />
        </div>
        <div className="flex flex-col gap-1">
          <label className="text-black text-[1.5em]">Peso (kg):</label>
          <input
            type="number"
            value={weight}
            onChange={(e) => setWeight(e.target.value)}
            className="border-[#1c1f27] border-solid border-[1px] rounded-md  p-2"
          />
        </div>
        
        <div className="flex flex-col gap-1">
          <label className="text-black text-[1.5em]">Nivel de actividad:</label>
          <select
            onChange={(e) => setActivityLevel(parseFloat(e.target.value))}
            value={activityLevel}
            className="border-[#1c1f27] border-solid border-[1px] rounded-md p-2"
          >
            {Object.entries(activityLevels).map(([level, label]) => {
              return (
                <option key={level} value={level}>
                  {label}
                </option>
              );
            })}
          </select>
        </div>
        <div className="flex flex-col gap-2">
          <label className="text-black text-[1.5em]">Objetivo:</label>
          <select
            onChange={(e) => setGoal(e.target.value)}
            value={goal}
            className="border-[#1c1f27] border-solid border-[1px] rounded-md p-2"
          >
            <option value="maintain">Mantener peso</option>
            <option value="loseWeight">Perder peso</option>
            <option value="bulk">Etapa de volumen</option>
          </select>
        </div>
        <div className="flex justify-center items-center">

        <Button roundness="round" onClick={()=>handleCalculate()}>Calcular</Button>
        </div>
        {result && showModal && (
          <MacroCaloriesModal
            result={result}
            closeModal={closeModal}
          />
        )}
      </div>
    </div>
  );
};

export default CalculateMacrosCalories;
