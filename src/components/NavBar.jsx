import React, { useState } from "react";
import Logo from "./Logo";
import { Link } from "react-router-dom";
import { FaBars,FaTimes } from "react-icons/fa";

import {
  IconLogo,
  NavBarContainer,
  NavWrapper,
  Menu,
  MenuItem,
  FaBarIcon,
} from "./NavBarElements";
import { UserButton, useUser, } from "@clerk/clerk-react";

const NavBar = () => {
  const { user } = useUser();
  
  const [click, setClick]= useState(false)
  const handleClick = ()=>{
    setClick(!click);
  }
  return (
    <div className="sticky w-full top-0  backdrop-blur-[5px] z-50">
      <NavBarContainer>
        <NavWrapper>
          <IconLogo>
            <Logo navBar={'nav'}/>
          </IconLogo>
          <FaBarIcon onClick={()=> handleClick()}>
            {click? <FaTimes/>:<FaBars/>}
          </FaBarIcon>
          <Menu click={click}>
            <MenuItem>
              <Link to={"/"} onClick={click} className="links">Inicio</Link>
            </MenuItem>
            <MenuItem>
              <Link to={"/calculadora_de_calorias_y_macros"} onClick={click} className="links">Calculadora Kcal</Link>
            </MenuItem>
            <MenuItem>
              {user?<Link to={"/rutinas"} onClick={click} className="links">Rutinas</Link>:<Link to={"/suscripcion"} onClick={click} className="links">Suscripción</Link>}
            </MenuItem>
            <MenuItem>
              {user && <Link to={"/nutricion"} onClick={click} className="links">Nutrición</Link>}
            </MenuItem>
            <MenuItem>
            {user ? (
                <UserButton afterSignOutUrl="/inicio_sesión"/>
              ) : (
                <Link to={"/inicio_sesión"} onClick={click} className="links">
                  Iniciar Sesión
                </Link>
              )}
            </MenuItem>
          </Menu>
        </NavWrapper>
      </NavBarContainer>
    </div>
  );
};

export default NavBar;
