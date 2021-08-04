import { types } from "../types/types";


// const state {
//     name:'fernando',
//     logeed: true ,
// }

export const reducer = (state = {}, action ) => {
 
     
     switch (action.type) {
         case types.portOpen:
             return{
                 ...state,
                 portafolio : !state.portafolio
             }
            
         case types.logout :

         return{
             logged:false
         }
         default:
             return state;
     }

}