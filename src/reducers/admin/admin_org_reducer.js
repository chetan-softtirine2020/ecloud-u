export const initState = {
  is_done: false,
  loading: false,
  errors: [],
  list: [],
};

const adminOrgReducer = (state = initState, { type, payload }) => {
  switch (type) {
    case "ERROR":
      return {
        ...state,
        loading: false,
        errors: payload,
      };

    case "REQUEST_ORGANIZATION":
      return {
        ...state,
        loading: true,
        errors: [],
      };

    case "GET_ALL_ORGANIZATION":
      return {
        ...state,
        loading: false,
        errors: [],
        list: payload,
      };

      case "GET_APPROVE_ORGANIZATION":
        return {
          ...state,
          loading: false,
          errors: [],
          list: payload,
        };
      case "UPDATE_APPROVE_ORGANIZATION":
        return {
            ...state,
            loading: false,
            errors: [],
            is_done: true,
          };
    default:
      return state;
  }
};

export default adminOrgReducer;
