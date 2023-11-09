import React, { useState } from "react";
import Button from "./Button";

const CalculateMacrosCalories = () => {
  const [gender, setGender] = useState("male");
  const [age, setAge] = useState(25);
  const [height, setHeight] = useState(170); // en centímetros
  const [weight, setWeight] = useState(70); // en kilogramos
  const [activityLevel, setActivityLevel] = useState(1.2);
  const [goal, setGoal] = useState("maintain");
  const [result, setResult] = useState(null);

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

    const protein = (calories * proteinRatio) / 4; // 4 calorías por gramo de proteína
    const carbs = (calories * carbRatio) / 4; // 4 calorías por gramo de carbohidratos
    const fats = (calories * fatRatio) / 9; // 9 calorías por gramo de grasa

    return { protein, carbs, fats };
  };

  const handleCalculate = () => {
    const maintenanceCalories = calculateCalories();

    let adjustedCalories = maintenanceCalories;

    if (goal === "loseWeight") {
      adjustedCalories -= 500; // Restar 500 calorías para perder peso
    } else if (goal === "bulk") {
      adjustedCalories += 500; // Sumar 500 calorías para la etapa de volumen
    }

    const macros = calculateMacros(adjustedCalories);

    setResult({ maintenanceCalories, adjustedCalories, macros });
  };

  return (
    <div className=" flex flex-col gap-8 justify-center items-center bg-[#1C1F27] min-h-screen px-4 py-20 md:p-20">
      <h1 className="text-white text-[3em]">
        Calculadora de Macros y Calórias Diarias
      </h1>
      <div className='w-full md:w-[30rem] max-w-screen-md mx-auto p-4 md:p-10 rounded-xl flex flex-col gap-5 shadow-lg bg-white border-[#646671] border-solid border-3  "'>
        <div className="flex flex-col gap-2">
          <label className="text-black text-[1.5em]">Género:</label>
          <select
            onChange={(e) => setGender(e.target.value)}
            value={gender}
            className="border-[#1c1f27] border-solid border-[3px] rounded-md p-2"
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
            className="border-[#1c1f27] border-solid border-[3px] rounded-md p-2"
          />
        </div>
        <div className="flex flex-col gap-1">
          <label className="text-black text-[1.5em]">Altura (cm):</label>
          <input
            type="number"
            value={height}
            onChange={(e) => setHeight(e.target.value)}
            className="border-[#1c1f27] border-solid border-[3px] rounded-md  p-2"
          />
        </div>
        <div className="flex flex-col gap-1">
          <label className="text-black text-[1.5em]">Peso (kg):</label>
          <input
            type="number"
            value={weight}
            onChange={(e) => setWeight(e.target.value)}
            className="border-[#1c1f27] border-solid border-[3px] rounded-md  p-2"
          />
        </div>
        <div></div>
        <div className="flex flex-col gap-1">
          <label className="text-black text-[1.5em]">Nivel de actividad:</label>
          <select
            onChange={(e) => setActivityLevel(parseFloat(e.target.value))}
            value={activityLevel}
            className="border-[#1c1f27] border-solid border-[3px] rounded-md p-2"
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
            className="border-[#1c1f27] border-solid border-[3px] rounded-md p-2"
          >
            <option value="maintain">Mantener peso</option>
            <option value="loseWeight">Perder peso</option>
            <option value="bulk">Etapa de volumen</option>
          </select>
        </div>
        <div className="flex justify-center items-center">

        <Button roundness="round" onClick={()=>handleCalculate()}>Calcular</Button>
        </div>
        {result && (
          <div className=" sm:w-[90%] md:w-[100%] cursor-pointer shadow-lg shadow-white bg-[#0f1219] rounded-xl text-white p-4 flex flex-col gap-5">
            <h2 className="text-white text-[1.5em]">
              Calorias totales segun tu (TMB):
            </h2>
            <p>Calorías por día: {result.maintenanceCalories.toFixed(0)}</p>
            <h2 className="text-white text-[1.2em]">
              Distribución de macros recomendada:
            </h2>
            <p>Proteína: {result.macros.protein.toFixed(0)} gramos.</p>
            <p>Carbohidratos: {result.macros.carbs.toFixed(0)} gramos.</p>
            <p>Grasa: {result.macros.fats.toFixed(0)} gramos.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default CalculateMacrosCalories;
