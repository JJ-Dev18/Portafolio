import React,{useReducer,useEffect} from 'react'
import { loggoutAdmin, loginAdmin } from './actions/auth';

import {Context } from './context/Context'
import { reducer } from './context/reducer';
import { AppRouter } from './router/AppRouter';
import { DashboardRouter } from './router/DashboardRouter';
export const Portfolio = ({history}) => {
   
  
   const init = () => {
     const estado  = {
       logged : false,
     }
     return estado;
   };
   const [estado, dispatch] = useReducer(reducer, {}, init);
  return (
    <Context.Provider value={{estado, dispatch}}>
     <DashboardRouter/>
    </Context.Provider>
  );
}
