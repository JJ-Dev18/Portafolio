import React,{useReducer} from 'react'
import { Copy } from './components/Copy';
import { Main } from './components/Main';
import { Navbar } from './components/Navbar'
import { ParticleBackground } from './components/ParticleBackground'
import {Context } from './context/Context'
import { reducer } from './context/reducer';
import { AppRouter } from './router/AppRouter';
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
     <AppRouter/>
    </Context.Provider>
  );
}
