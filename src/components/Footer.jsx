import React from "react";
import { BsWhatsapp } from "react-icons/bs";
import { HiOutlineMail } from "react-icons/hi";
import {
  BiLogoFacebookCircle,
  BiLogoInstagram,
  BiLogoYoutube,
  BiLogoTiktok,
} from "react-icons/bi";
import { Link } from "react-router-dom";
import Logo from "./Logo";

const Footer = () => {
  return (
    <div className="flex flex-col md:flex-row justify-center items-start gap-80 p-5 md:p-10 bg-[#646671]">
      <div className="flex flex-col text-white text-[1.5em] items-start">
        <Link to={"/"}>
          <Logo/>
        </Link>
      </div>
      <div className="flex flex-col gap-5 justify-center items-start pt-10">
        <section>
          <article className="flex justify-center items-center gap-4 text-white text-[1.3em]">
            <BsWhatsapp />
            <h1>WHATSAPP</h1>
          </article>
          <p className="text-white text-[1em]">+34 635 196 926</p>
        </section>
        <section>
          <article className="flex justify-start items-center gap-4 text-white text-[1.3em]">
            <HiOutlineMail />
            <h1>Email</h1>
          </article>
          <p className="text-white text-[1em]">fit.tech.pro@gmail.com</p>
        </section>
        <section>
          <h1 className="text-white text-[1.5em]">Síguenos en redes</h1>
        <div className="flex justify-start items-center gap-4 text-white text-[1.5em]">
          <BiLogoFacebookCircle />
          <BiLogoInstagram />
          <BiLogoYoutube />
          <BiLogoTiktok />
        </div>
        </section>
        
      </div>
      <div className="flex flex-col gap-5 justify-center items-start pt-10">
        <Link>
          <p className="text-white text-[1em]">Términos y Condiciones</p>
        </Link>
        <Link>
          <p className="text-white text-[1em]">Política de Privacidad</p>
        </Link>
        <Link>
          <p className="text-white text-[1em]">Política de Cookies</p>
        </Link>
      </div>
    </div>
  );
};

export default Footer;
