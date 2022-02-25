export const initState = {
  details: {},
  list: [],
  is_done: false,
  loading: false,
  errors: [],
  joinCount: 0,
};

const conferanceReducer = (state = initState, { type, payload }) => {
  switch (type) {
    case "CONF_ERROR":
      return {
        ...state,
        loading: false,
        errors: payload,
      };
    case "CONF_REQUEST":
      return {
        ...state,
        loading: true,
        is_done: false,
        errors: [],
      };
    case "CHECK_USER_JOIN_COUNT":
      return {
        ...state,
        loading: false,
        errors: [],
        joinCount:payload,
      };

    default:
      return state;
  }
};

export default conferanceReducer;
