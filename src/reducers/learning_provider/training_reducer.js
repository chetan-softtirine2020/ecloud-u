export const initState = {
  details: {},
  list: [],
  is_done: false,
  loading: false,
  errors: [],
};

const trainingReducer = (state = initState, { type, payload }) => {
  switch (type) {
    case "ERROR":
      return {
        ...state,
        loading: false,
        errors: payload,
      };
    case "TRAINING_REQUEST":
      return {
        ...state,
        loading: true,
        is_done: false,
        errors: [],
      };
    case "CREATE_TRAINING":
      return {
        ...state,
        loading: false,
        errors: [],
        is_done: true,
      };
      case "LP_MAKE_PUBLIC_TRAINING":
        return {
          ...state,
          loading: false,
          errors: [],
          is_done: true,
        };
    case "TRAINING_DETAILS":
      return {
        ...state,
        loading: false,
        errors: [],
        details: payload,
      };

    case "UPDATE_TRAINING":
      return {
        ...state,
        loading: false,
        errors: [],
        is_done: true,
      };
    case "GET_TRAINING":
      return {
        ...state,
        loading: false,
        errors: [],
        details: payload,
      };
    case "ALL_TRAINING":
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

export default trainingReducer;
