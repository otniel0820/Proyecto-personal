import { React, createContext, useState, useEffect } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../firebase/configFireBase";

export const DataContext = createContext(null);


const arrRutinas = [];
const arrNutricion = [];
const getData= async ()=>{
    
      const collectionRutinas = await getDocs(collection(db, "Rutinas"));
      collectionRutinas.forEach((doc) => {
        arrRutinas.push(doc.data());
      });
      const collectionNutricion = await getDocs(collection(db, "guiaNutricion"));
      collectionNutricion.forEach((doc) => {
        arrNutricion.push(doc.data());
      });
    }

export const DataContextProvider = ({ children }) => {
  const [rutinas, setRutinas] = useState();
  const [nutricion, setNutricion] = useState();
  
  useEffect(() => {
    
    getData().then(data=>{
      console.log(data);
      setNutricion(arrNutricion)
      setRutinas(arrRutinas)
    })
  }, []);

 console.log(nutricion)
 console.log(rutinas)
  return (
    <>
      <DataContext.Provider value={{ rutinas, nutricion }}>
        {children}
      </DataContext.Provider>
    </>
  );
};
