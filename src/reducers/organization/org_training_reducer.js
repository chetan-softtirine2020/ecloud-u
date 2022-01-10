
export const initState = {
  details: {},
  list: [],
  is_done: false,
  loading: false,
  errors: [],
};

const orgTrainingReducer = (state = initState, { type, payload }) => {
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
        is_done: false,
        errors: [],
      };
    case "CREATE_ORG_TRAINING":
      return {
        ...state,
        loading: false,
        errors: [],
        is_done: true,
      };

    case "UPDATE_ORG_TRAINING":
      return {
        ...state,
        loading: false,
        errors: [],
        is_done: true,
      };
    case "GET_ORG_TRAINING":
      return {
        ...state,
        loading: false,
        errors: [],
        details: payload,
      };
    case "ALL_ORG_TRAINING":
      return {
        ...state,
        loading: false,
        errors: [],
        list: payload,
      };

    default:
    return  state;
    
  }
};

export default orgTrainingReducer;
