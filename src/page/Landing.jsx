import React from "react";
import { Carousel } from "../components/Carousel";
import Hero from "../components/Hero";
import Descripcion from "../components/Descripcion";
import Faq from "../components/Faq";
import TmbAndForm from "../components/TmbAndForm";
import Footer from "../components/Footer";



const Landing = () => {
  return (
    <div >

      <Hero/>
      <Carousel />
      <Descripcion/>
      <Faq/>
      <TmbAndForm/>
      <Footer/>
      
    </div>
  );
};

export default Landing;
