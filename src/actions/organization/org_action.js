import axios from "axios";
import { APP_URL,getToken } from "../../config/api";
import { authHeader } from "../../config/auth_header";

export const errorMessage = (err) => {
  switch (err.response.status) {
    case 422:  
      return { type: "ERROR", payload: err.response.data };
    case 405:
      return { type: "ERROR", payload: { other_error: "Method Not Allowed" } };
    case 500:
      return {
        type: "ERROR",
        payload: { other_error: "Internal server error"},
      };
    default:
      return {  
        type: "ERROR",
        payload: { other_error: "Something went worng." },
      };
  }
};

export const regiterOrganization = (org) => {
  return (dispatch) => {
    dispatch({
      type: "REQUEST",
    });
    axios
      .request({
        method: "post",
        url: `${APP_URL}/create-organization`,
        data: org,
        authHeader,
      })
      .then((result) => {
        dispatch({
          type: "REGITER_ORGANIZATION",
          payload: result.data,
        });
      })
      .catch((error) => {      
        dispatch(errorMessage(error));       
      })
  }
}

export const getAllOrganization = (parm) => {
  return (dispatch) => {
    dispatch({
      type: "REQUEST",
    });
    axios
      .request({
        method: "post",
        url: `${APP_URL}/get-org-approved`,
        data:parm, 
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
          type: "ALL_ORGANIZATIONS",
          payload: res.data.list,
        });
      })
      .catch((error) => {
        dispatch(errorMessage(error));       
      });
  };
};
