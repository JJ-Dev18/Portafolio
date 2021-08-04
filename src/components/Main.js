import React, { useContext } from "react";
import { Context } from "../context/Context";
import { Portada } from "./Portada";
import { ProjectsScreen } from "./ProjectsScreen";
import Logo from "../images/logo.png";

export const Main = () => {
  const { estado } = useContext(Context);
  const { portafolio } = estado;
  return (
    <>
      {/* <img src={Logo} id="logo" alt="logo" /> */}
      {portafolio ? <ProjectsScreen /> : <Portada />}
    </>
  );
};
