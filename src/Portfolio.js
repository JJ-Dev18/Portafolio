import React from 'react'
import { ParticleBackground } from './components/ParticleBackground'
import Caricatura from './images/Caricatura.png'
import Logo from './images/Logo-front.png'
export const Portfolio = () => {
  
  return (
    <div className="App">
      <div className="content_portada">
        <img src={Caricatura} alt="imagen en caricatura de juan jose " id="caricatura"/>
        <img src={Logo} alt="logo frontend" id="logo_frontend"/>
      </div>
      <ParticleBackground />
    </div>
  );
}
