import { GOOGLECLOUD } from "../../actions/google_cloud/gc_action";

export const initState = {
  is_done: false,
  loading: false,
  errors: [],
  list: [],
};

const gcReducer = (state = initState, { type, payload }) => {
  switch (type) {
    case GOOGLECLOUD.ERROR:
      return {
        ...state,
        loading: false,
        errors: payload,
      };

    case GOOGLECLOUD.REQUEST:
      return {
        ...state,
        loading: true,
        is_done:false,
        errors: [],
      };

    
      case GOOGLECLOUD.RESET:
        return {
          ...state,
          loading: false,
          is_done:false,
          errors: [],
        };

    case GOOGLECLOUD.REGISTER:
      return {
        ...state,
        loading: false,
        errors: [],
        is_done:true,
      };

    case GOOGLECLOUD.CREATE_VM:
      return {
        ...state,
        loading: false,
        errors: [],
        is_done:true,
      };

      case GOOGLECLOUD.AUTHORIZE_GC:
        return {
          ...state,
          loading: false,
          errors: [],
          is_done:true,
        }; 

        case GOOGLECLOUD.AUTHORIZE_GC:
          return {
            ...state,
            loading: false,
            errors: [],
            list:payload
          }; 
          
    default:
      return state;
  }
};

export default gcReducer;
