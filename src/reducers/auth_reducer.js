const initState = {
  name: null,
  email: null,
  token: localStorage.getItem("token"),
  _id: null,
  roles: [],
  isLoggedIn: false,
  is_done: false,
  errors: [],
  list: [],
  currentToken:"",
};

const authReducer = (state = initState, { type, payload }) => {
  switch (type) {
    case "AUTH_ERROR":
      return {
        ...state,
        loading: false,
        errors: payload,
      };
    case "AUTH_REQUEST":
      return {
        ...state,
        loading: true,
        is_done: false,
        errors: [],
      };

    case "SINGUP":
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
      };

    case "RESET_AUTH_ERROR":
      return {
        ...state,
        loading: false,
        errors: [],
        is_done: false,
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
      };
     case "CURRENT_TOKEN":
      return {
        ...state,
        loading: false,  
        errors:[],       
        currentToken:payload,          
       };   

    default:
      return state;
  }
};

export default authReducer;
