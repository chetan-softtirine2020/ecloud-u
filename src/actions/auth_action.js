import axios from "axios";
import { APP_URL, getToken } from "../config/api";
import { authHeader } from "../config/auth_header";

export const errorMessage = (err) => {
  
  //console.log("erreee"+err.response.status);
  switch (err.response.status) {
    case 422:
      return { type: "AUTH_ERROR", payload: err.response.data };
    case 405:
      return {
        type: "AUTH_ERROR",
        payload: { other_error: "Method Not Allowed" },
      };
    case 500:
      return {
        type: "AUTH_ERROR",
        payload: { other_error: "Internal Server Error." },
      };
    case 403:
      return {
        type: "AUTH_ERROR",
        payload: { other_error: err.response.data.message },
      };      
    default:
      return {
        type: "AUTH_ERROR",
        payload: { other_error: "Something went worng." },
      };
  }
};

//action for singup
export const signUp = (user) => {
  return (dispatch) => {
    dispatch({
      type: "AUTH_REQUEST",
    });
    axios
      .request({
        method: "post",
        url: `${APP_URL}/register`,
        data: user,
        authHeader,
      })
      .then((token) => {
       // localStorage.setItem("token", JSON.stringify(token.data.success.token));
       // localStorage.setItem("data", JSON.stringify(token.data.success));
        dispatch({
          type: "SINGUP",
          payload: token.data.success,
        });
      })
      .catch((error) => {
        dispatch(errorMessage(error));
      });
  };
};

export const logIn = (cred) => {
  return (dispatch) => {
    dispatch({
      type: "AUTH_REQUEST",
    });
    axios
      .post(`${APP_URL}/login`, cred, authHeader())
      .then((token) => {
        localStorage.setItem("token", JSON.stringify(token.data.success.token));
        localStorage.setItem("data", JSON.stringify(token.data.success));
        dispatch({
          type: "SINGUP",
          payload: token.data.success,
        });
      })
      .catch((error) => {
        dispatch(errorMessage(error));
      });
  };
};

export const getAllOrganizationRegister = () => {
  return (dispatch) => {
    dispatch({
      type: "AUTH_REQUEST",
    });
    axios
      .request({
        method: "post",
        url: `${APP_URL}/get-org-register`,
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((res) => {
        dispatch({
          type: "GET_REGISTER_ORGANIZATIONS",
          payload: res.data.list,
        });
      })
      .catch((error) => {
        dispatch(errorMessage(error));
      });
  };
};

export const loadUser = () => {
  return (dispatch, getState) => {
    const token = getState.auth.token;
    if (token) {
      dispatch({
        type: "LOAD_USER",
        token,
      });
    } else return null;
  };
};

export const singOut = () => {
  return (dispatch) => {
    dispatch({
      type: "AUTH_REQUEST",
    });
    axios
      .request({
        method: "post",
        url: `${APP_URL}/logout`,
        data: { token: getToken().substring(1, getToken().length - 1) }
        })
      .then((token) => {
        dispatch({
          type: "SIGN_OUT",
          payload: token.data.success,
        });
      })
      .catch((error) => {
        dispatch(dispatch(errorMessage(error)));
      });
  };
};

// Action for the forgot password
export const forgotPassword = (user) => {
  return (dispatch) => {
    dispatch({
      type: "AUTH_REQUEST",
    });
    axios
      .request({
        method: "post",
        url: `${APP_URL}/forgot-password`,
        data: user,
      })
      .then((token) => {
        dispatch({
          type: "FORGOT_PASSWORD",
          payload: token.data.success,
        });
      })
      .catch((error) => {
        dispatch(errorMessage(error));
      });
  };
};

export const resetPassword = (user) => {
  return (dispatch) => {
    dispatch({
      type: "AUTH_REQUEST",
    });
    axios
      .request({
        method: "post",
        url: `${APP_URL}/reset-password`,
        data: user,
      })
      .then((token) => {
        dispatch({
          type: "RESET_PASSWORD",
          payload: token.data.success,
        });
      })
      .catch((error) => {
        dispatch(errorMessage(error));
      });
  };
};

export const resetErorrs = () => {
  return (dispatch) => {
    dispatch({
      type: "RESET_AUTH_ERROR",
    });
  };
};

export const changePassword = (cred) => {
  return (dispatch) => {
    dispatch({
      type: "AUTH_REQUEST",
    });
    axios
      .request({
        method: "post",
        url: `${APP_URL}/change-password`,
        data: cred
       })
      .then((res) => {
        dispatch({
          type: "CHANGE_PASSWORD",
          payload: res.data,
        });
      })
      .catch((error) => {
        dispatch(errorMessage(error));
      });
  };
};


export const getCurrentToken = (pram) => {
 
  return (dispatch) => {
    dispatch({
      type: "AUTH_REQUEST",
    });
    axios
      .request({
        method: "post",
        url: `${APP_URL}/current-token`,
        data:pram
      })
      .then((res) => {
        dispatch({
          type: "CURRENT_TOKEN",
          payload: res.data,
        });
      })
      .catch((error) => {
        dispatch(errorMessage(error));
      });
   };
};


