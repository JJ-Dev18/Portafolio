import { types } from "../types/types";


// const state {
//     name:'fernando',
//     logeed: true ,
// }

export const reducer = (state = {}, action ) => {
 
     
     switch (action.type) {
         case types.login:
             return{
                 ...state,
                 logged :action.payload
             }
            
         case types.logout :
 
         return{
             ...state,
             logged:false
         }
         default:
             return state;
     }

}