import React from 'react'
import Particle from 'react-particles-js'
import { configParticle } from "../config/particleConfig";


export const ParticleBackground = () => {
  return (
    <Particle
      params={configParticle}
    ></Particle>
  );
}
