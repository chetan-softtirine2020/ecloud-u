export const initState = {
  is_done: false,
  loading: false,
  errors: [],
  list: [],
};

const trainingUserReducer = (state = initState, { type, payload }) => {
  switch (type) {
    case "ERROR":
      return {
        ...state,
        loading: false,
        errors: payload,
      };

    case "REQUEST_TRAINING":
      return {
        ...state,
        loading: true,
        errors: [],
      };

    case "ADD_USER_TRAINING":
    case "IMPORT_USER_TRAINING":
      return {
        ...state,
        loading: false,
        errors: [],
        is_done: true,
      };

    case "ALL_TRAINING_USRS":
      return {
        ...state,
        loading: false,
        errors: [],
        list: payload,
      };

    case "REACTIVE_TRAINING":
      return {
        ...state,
        loading: false,
        errors: [],
      };

    default:
      return state;
  }
};

export default trainingUserReducer;
