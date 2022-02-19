export const initState = {
  is_done: false,
  loading: false,
  errors: [],
  list: [],
};

const adminUsersReducer = (state = initState, { type, payload }) => {
  switch (type) {
    case "ADMIN_USER_ERROR":
      return {
        ...state,
        loading: false,
        errors: payload,
      };

    case "ADMIN_USER_REQUEST":
      return {
        ...state,
        loading: true,
        errors: [],
      };

    case "GET_ADMIN_USERS":
      return {
        ...state,
        loading: false,
        errors: [],
        list: payload,
      };

    case "GET_ADMIN_CHILD_USERS":
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

export default adminUsersReducer;
