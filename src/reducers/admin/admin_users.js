import { ADMINUSER } from "../../actions/admin/admin_users_action";

export const initState = {
  is_done: false,
  loading: false,
  errors: [],
  list: [],
  childList: [],
};

const adminUsersReducer = (state = initState, { type, payload }) => {
  switch (type) {
    case ADMINUSER.ERROR:
      return {
        ...state,
        loading: false,
        errors: payload,
      };

    case ADMINUSER.REQUEST:
      return {
        ...state,
        loading: true,
        is_done: false,
        errors: [],
      };

    case ADMINUSER.GET_ORG_SUBADMIN_REQUEST_LIST:
    case ADMINUSER.GET_LEARNING_PROVIDER_REQUEST_LIST:
    case ADMINUSER.GET_ADMIN_USERS:
      return {
        ...state,
        loading: false,
        errors: [],
        is_done: false,
        list: payload,
      };

    case ADMINUSER.GET_ADMIN_CHILD_USERS:
      return {
        ...state,
        loading: false,
        is_done: true,
        errors: [],
        childList: payload,
      };
    case ADMINUSER.UPDATE_SUBADMIN_REQUEST:
    case ADMINUSER.UPDATE_LEARNING_PROVIDER_REQUEST:
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

export default adminUsersReducer;
