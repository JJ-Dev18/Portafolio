import React,{useReducer} from 'react'
import AlertTemplate from "react-alert-template-basic";
import {Context } from './context/Context'
import { reducer } from './context/reducer';
import { transitions, positions, Provider as AlertProvider } from "react-alert";
import { AppRouter } from './router/AppRouter';
export const Portfolio = ({history}) => {
   const options = {
     // you can also just use 'bottom center'
     position: positions.BOTTOM_CENTER,
     timeout: 5000,
     offset: "30px",
     // you can also just use 'scale'
     transition: transitions.SCALE,
   };
  
   const init = () => {
     const estado  = {
       logged :  false,
     }
     return estado;
   };
   const [estado, dispatch] = useReducer(reducer, {}, init);
  return (
    <Context.Provider value={{ estado, dispatch }}>
      <AlertProvider template={AlertTemplate} {...options}>
        <AppRouter />
      </AlertProvider>
    </Context.Provider>
  );
}
