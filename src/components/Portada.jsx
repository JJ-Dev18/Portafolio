import React  from 'react'
import { motion } from "framer-motion";
import Typewriter from 'typewriter-effect'
import { Navbar } from './Navbar';
import { Link } from 'react-router-dom';

export const Portada = ({history}) => {
  // const {estado,dispatch} = useContext(Context)
  console.log(import.meta.env.VITE_API_URL);
  console.log("se realizo el cambio la pt")
  return (
    <div className="content_portada">
      {/* <img
        src={Caricatura}
        alt="imagen en caricatura de juan jose "
        id="caricatura"
      /> */}
      <Link  end="true" to={`../login`}>
        <motion.div
          id="caricatura"
          initial={{ x: -1000, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ ease: "easeOut", duration: 1.5 }}
        ></motion.div>
      </Link>
      <motion.div
        className="Typewriter"
        initial={{ x: -1000, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ ease: "easeOut", duration: 2, delay: 1.5 }}
      >
        Hello I am
        <Typewriter
          options={{
            autoStart: true,
            loop: true,
          }}
          onInit={(typewriter) => {
            typewriter
              .pauseFor(2300)
              .typeString("Juan Jose")
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
      </motion.div>

      <Navbar primer="Projects" segundo="About" tercero="About" />

      {/* <img src={Logo} alt="logo frontend" id="logo_frontend" /> */}
    </div>
  );
}
