import axios from "axios";
import { APP_URL,getToken } from "../../config/api";

export const errorMessage = (err) => {
  switch (err.response.status) {
    case 422:  
      return { type: "ADMIN_USER_ERROR", payload: err.response.data };
    case 405:
      return { type: "ADMIN_USER_ERROR", payload: { other_error: "Method Not Allowed" } };
    case 500:
      return {
        type: "ADMIN_USER_ERROR",
        payload: { other_error: "The given data was invalid"},
      };
    default:
      return {  
        type: "ADMIN_USER_ERROR",
        payload: { other_error: "Something went worng." },
      };
  }
};

export const getAdminUsersList = (user) => {
  return (dispatch) => {
    dispatch({
      type: "ADMIN_USER_REQUEST",
    });
    axios
      .request({
        method: "post",
        url: `${APP_URL}/admin/get-users-list`,      
        data:user,
        headers: {
          Authorization: `Bearer ${getToken().substring(
            1,
            getToken().length - 1
          )}`,
          "Content-Type": "application/json",
        },
      })
      .then((res) => {
        dispatch({
          type: "GET_ADMIN_USERS",
          payload: res.data.list,
        });
      })
      .catch((error) => {
        dispatch(errorMessage(error));       
      });
  };
};

export const getChildUsersList = (user) => {
    return (dispatch) => {
      dispatch({
        type: "ADMIN_USER_REQUEST",
      });
      axios
        .request({
          method: "post",
          url: `${APP_URL}/admin/get-users-list`,      
          data:user,
          headers: {
            Authorization: `Bearer ${getToken().substring(
              1,
              getToken().length - 1
            )}`,
            "Content-Type": "application/json",
          },
        })
        .then((res) => {
          dispatch({
            type: "GET_ADMIN_CHILD_USERS",
            payload: res.data.list,
          });
        })
        .catch((error) => {
          dispatch(errorMessage(error));       
        });
    };
  };