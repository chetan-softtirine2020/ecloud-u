export const initState = {
    is_done: false,
   loading: false,
   errors: [],
   list:[]
 };
 
 const dashboardReducer = (state = initState, { type, payload }) => {
   switch (type) {
     case "ERROR":
       return {
         ...state,
         loading: false,
         errors: payload,       
       };
       
       case "DASHBOARD_REQUEST":    
       return {
           ...state,
           loading: true,
           errors: [],
       };       
            
       case "LP_DASHBOARD_DATA":
         return {
           ...state,
           loading: false,
           errors: [],
           list: payload,         
         };
   
     default:
       return state;
   }
 };
 
 export default dashboardReducer;
 