import React ,{useContext} from 'react'
import { Context } from '../context/Context';
import Caricatura from "../images/caricatura2.png";
import Logo from "../images/Logo-front.png";
import Typewriter from 'typewriter-effect'

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
      <p className="Typewriter">
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
              .typeString("Front developer")
              .start()
              .deleteAll();
          }}
        />
      </p>

      {/* <img src={Logo} alt="logo frontend" id="logo_frontend" /> */}
    </div>
  );
}
