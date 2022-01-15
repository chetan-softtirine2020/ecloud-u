export const initState = {
    isDone: false,
    is_done: false,
    loading: false,
    list:[],
    errors: [],
  };
  
  const homeReducer = (state = initState, { type, payload }) => {
    switch (type) {
      case "HOME_ERROR":
        return {
          ...state,
          loading: false,
          errors: payload,
        };
      case "HOME_REQUEST":
        return {
          ...state,
          loading: true,
          errors: [],
        };    
        case "ALL_HOME_TRAININGS":
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
  
  export default homeReducer;
  