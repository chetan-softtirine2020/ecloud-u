export const initState = {
  details: {},
  list: [],
  is_done: false,
  loading: false,
  errors: [],
  joinCount: 0,
  isTrainingStart: 0,
  training: {},
  isAssing:'',
  isModerator:false
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
        training: {},
      };
    case "CHECK_USER_JOIN_COUNT":
      return {
        ...state,
        loading: false,
        errors: [],
        joinCount: payload,
        //training:payload.training
      };
    case "CHECK_TRANINING_COUNT":
      return {
        ...state,
        loading: false,
        errors: [],
        isTrainingStart: payload.count,
        isAssing: payload.isAssing,
        isModerator: payload.isModerator,
       };
    default:
      return state;
  }
};

export default conferanceReducer;
