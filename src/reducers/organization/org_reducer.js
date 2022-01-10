export const initState = {
  is_done: false,
  loading: false,
  errors: [],
  list:[],
};

const organizationReducer = (state = initState, { type, payload }) => {
  switch (type) {
    case "ERROR":
      return {
        ...state,
        loading: false,
        errors: payload,
      };
    case "REQUEST":
      return {
        ...state,
        loading: true,
        errors: [],
      };
    case "REGITER_ORGANIZATION":
      return {
        ...state,
        loading: false,
        errors: [],
        is_done: true,
      };
      case "ALL_ORGANIZATIONS":
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
export default organizationReducer;
