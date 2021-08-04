import React ,{useContext} from 'react'
import { Context } from '../context/Context';
import Caricatura from "../images/caricatura2.png";

import Typewriter from 'typewriter-effect'
import { Navbar } from './Navbar';

export const Portada = () => {
  const {estado} = useContext(Context)
  console.log(estado.portafolio)
  return (
    <div className="content_portada">
      {/* <img
        src={Caricatura}
        alt="imagen en caricatura de juan jose "
        id="caricatura"
      /> */}
      <div id="caricatura"></div>
      <div className="Typewriter">
        Hello I am
        <Typewriter
          options={{
            autoStart: true,
            loop: true,
          }}
          onInit={(typewriter) => {
            typewriter
              .typeString("Juan Jose ")
              .start()
              .deleteAll()
              .typeString("System engineer")
              .start()
              .deleteAll()
              .typeString("Front-end developer")
              .start()
              .deleteAll();
          }}
        />
      </div>
     
      <Navbar primer="Projects" segundo="Contact" tercero="About me "/>

      {/* <img src={Logo} alt="logo frontend" id="logo_frontend" /> */}
    </div>
  );
}
