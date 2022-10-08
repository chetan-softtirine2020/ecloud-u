import { GOOGLECLOUD } from "../../actions/google_cloud/gc_action";

export const initState = {
  is_done: false,
  loading: false,
  errors: [],
  list: [],
  vm_details: [],
  is_delete: false,
  is_update: false,
  vm_count: "",
  is_created: "",
  price_updated: "",
  vm_pricing: [],
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
        is_done: false,
        is_delete: false,
        is_update: false,
        errors: [],
      };

    case GOOGLECLOUD.RESET:
      return {
        ...state,
        loading: false,
        is_done: false,
        errors: [],
      };

    case GOOGLECLOUD.REGISTER:
      return {
        ...state,
        loading: false,
        errors: [],
        is_done: true,
      };

    case GOOGLECLOUD.CREATE_VM:
      return {
        ...state,
        loading: false,
        errors: [],
        is_done: true,
      };

    case GOOGLECLOUD.AUTHORIZE_GC:
      return {
        ...state,
        loading: false,
        errors: [],
        is_done: true,
      };

    case GOOGLECLOUD.VM_LIST:
      return {
        ...state,
        loading: false,
        errors: [],
        list: payload,
      };

    case GOOGLECLOUD.VM_DETAILS:
      return {
        ...state,
        loading: false,
        errors: [],
        vm_details: payload,
      };
    case GOOGLECLOUD.DELETE_VM:
      return {
        ...state,
        loading: false,
        errors: [],
        is_delete: true,
      };

    case GOOGLECLOUD.UPDATE_START_STOP:
    case GOOGLECLOUD.START_STOP_MULTIPLE:
      return {
        ...state,
        loading: false,
        errors: [],
        is_update: true,
      };

    case GOOGLECLOUD.VM_ASSING:
    case GOOGLECLOUD.VM_ASSING_USER:   
      return {
        ...state,
        loading: false,
        errors: [],
        is_done: true,
      };   

    case GOOGLECLOUD.VM_COUNT:
      return {
        ...state,
        loading: false,
        errors: [],
        vm_count: payload,
      };

    case GOOGLECLOUD.CHECK_ACCOUNT:
      return {
        ...state,
        loading: false,
        errors: [],
        is_created: payload.is_created,
      };

    case GOOGLECLOUD.VM_PRICING:
      return {
        ...state,
        loading: false,
        errors: [],
        vm_pricing: payload,
      };

    case GOOGLECLOUD.UPDATE_VM_PRICING:
      return {
        ...state,
        loading: false,
        errors: [],
        is_update: true,
      };


    default:
      return state;
  }
};

export default gcReducer;
