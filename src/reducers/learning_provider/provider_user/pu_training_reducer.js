import { LP_USER } from "../../../actions/learning_provider/provider_user/training_action";

export const initState = {
  isDone: false,
  is_done: false,
  loading: false,
  errors: [],
  d_vm_data: {},
};

const puTrainingReducer = (state = initState, { type, payload }) => {
  switch (type) {
    case LP_USER.ERROR:
      return {
        ...state,
        loading: false,
        errors: payload,
      };
    case LP_USER.REQUEST:
      return {
        ...state,
        loading: true,
        errors: [],
      };

    case "UPDATE_USER_TRAINING":
      return {
        ...state,
        loading: false,
        errors: [],
        is_done: true,
      };

    case "UPDATE_TRAINING_MIN":
      return {
        ...state,
        loading: false,
        errors: [],
        is_done: true,
      };

    case LP_USER.USER_WISE_TRAINING:
      return {
        ...state,
        loading: false,
        errors: [],
        list: payload,
      };

    case LP_USER.DASHBOARD_DATA:
      return {
        ...state,
        loading: false,
        errors: [],
        d_vm_data: payload.vm_data,
      };

    default:
      return state;
  }
};

export default puTrainingReducer;
