const initState = {
  name: null,
  email: null,
  token: localStorage.getItem("token"),
  _id: null,
  roles: [],
  isLoggedIn: false,
  is_done: true,
  errors: [],
  list: [],
  currentToken: "",
  isRegister: false,
  lob: [],
  isAddLob: false,
  current_opt: "",
};

const authReducer = (state = initState, { type, payload }) => {
  switch (type) {
    case "AUTH_ERROR":
      return {
        ...state,
        loading: false,
        errors: payload,
        isAddLob: false,
      };
    case "AUTH_REQUEST":
      return {
        ...state,
        loading: true,
        is_done: false,
        isAddLob: false,
        errors: [],
      };

    case "SINGUP":
      return {
        ...initState,
        isRegister: true,
        isLoggedIn: true,
        // token: user.token,
        // name: user.name,
        // email: user.email,
        // _id: user._id,
        // roles: user.roles,
        // isLoggedIn: true,
      };
    case "SINGIN":
      // toast("Welcome......", {
      //   position: toast.POSITION.BOTTOM_RIGHT,
      // });
      const user = payload;
      return {
        ...initState,
        token: user.token,
        name: user.name,
        email: user.email,
        _id: user._id,
        roles: user.roles,
        isLoggedIn: true,
        isAddLob: false,
      };
    case "FORGOT_PASSWORD":
      return {
        ...state,
        loading: false,
        errors: [],
        is_done: true,
      };

    case "RESET_PASSWORD":
      return {
        ...state,
        loading: false,
        errors: [],
        is_done: true,
        isAddLob: false,
      };

    case "RESET_AUTH_ERROR":
      return {
        ...state,
        loading: false,
        errors: [],
        is_done: false,
        isAddLob: false,
        isRegister: false,
      };

    case "SIGN_OUT":
      localStorage.removeItem("token");
      localStorage.removeItem("data");
      return {
        name: null,
        email: null,
        token: null,
        _id: null,
        roles: [],
        isLoggedIn: false,
        isAddLob: false,
      };
    case "GET_REGISTER_ORGANIZATIONS":
      return {
        ...state,
        loading: false,
        errors: [],
        list: payload,
      };

    case "CHANGE_PASSWORD":
      return {
        ...state,
        loading: false,
        errors: [],
        is_done: true,
        isAddLob: false,
      };
    case "CURRENT_TOKEN":
      return {
        ...state,
        loading: false,
        errors: [],
        currentToken: payload,
      };

    case "ADD_LINE_OF_BUSINESS":
      return {
        ...state,
        loading: false,
        errors: [],
        isAddLob: true,
      };
    case "GET_LINE_OF_BUSINESS":
      return {
        ...state,
        loading: false,
        errors: [],
        lob: payload,
        isAddLob: false,
      };
    case "SEND_OTP":
      return {
        ...state,
        loading: false,
        errors: [],
        current_opt: payload,
      };

    default:
      return state;
  }
};

export default authReducer;
