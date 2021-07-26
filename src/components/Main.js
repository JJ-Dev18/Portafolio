import React, { useContext } from "react";
import { Context } from "../context/Context";
import { Portada } from "./Portada";
import { Projects } from "./Projects";

export const Main = () => {
  const { estado } = useContext(Context);
  const { portafolio } = estado;
  return (
    <>
    {
       (portafolio) ? <Projects/> : <Portada/>
    }
     
    </>
  );
};
