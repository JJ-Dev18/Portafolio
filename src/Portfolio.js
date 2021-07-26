import React,{useReducer} from 'react'
import { Main } from './components/Main';
import { Navbar } from './components/Navbar'
import { ParticleBackground } from './components/ParticleBackground'
import {Context } from './context/Context'
import { reducer } from './context/reducer';
export const Portfolio = () => {

   const init = () => {
     const estado  = {
       portafolio : false,
       inicio : false,
     }
     return estado;
   };
   const [estado, dispatch] = useReducer(reducer, {}, init);
  return (
    <Context.Provider value={{estado, dispatch}}>
      <div className="App">
        <Navbar />
        <Main />
        <ParticleBackground />
      </div>
    </Context.Provider>
  );
}
