import React ,{useContext} from 'react'
import { Context } from '../context/Context';
import Caricatura from "../images/caricatura2.png";
import Logo from "../images/Logo-front.png";

export const Portada = () => {
  const {estado} = useContext(Context)
  console.log(estado.portafolio)
  return (
    <div className="content_portada">
      <img
        src={Caricatura}
        alt="imagen en caricatura de juan jose "
        id="caricatura"
      />
      <img src={Logo} alt="logo frontend" id="logo_frontend" />
    </div>
  );
}
