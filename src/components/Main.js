import React, { useContext } from "react";
import { Context } from "../context/Context";
import { Portada } from "./Portada";
import { Projects } from "./Projects";
import Logo from "../images/logo.png";

export const Main = () => {
  const { estado } = useContext(Context);
  const { portafolio } = estado;
  return (
    <>
      {/* <img src={Logo} id="logo" alt="logo" /> */}
      {portafolio ? <Projects /> : <Portada />}
    </>
  );
};
