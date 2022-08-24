import axios from "axios";
import { APP_URL } from "../config/api";

export const errorMessage = (err) => {
  switch (err.response.status) {
    case 422:
      return { type: "CONF_ERROR", payload: err.response.data };
    case 405:
      return {
        type: "CONF_ERROR",
        payload: { other_error: "Method Not Allowed" },
      };
    case 500:
      return {
        type: "CONF_ERROR",
        payload: { other_error: "Internal server error" },
      };
    default:
      return {
        type: "CONF_ERROR",
        payload: { other_error: "Something went worng." },
      };
  }
};

export const joinConferanceCheckCount = (count) => {
  return (dispatch) => {
    dispatch({
      type: "CONF_REQUEST",
    });
    axios
      .request({
        method: "post",
        url: `${APP_URL}/lp/update-training-join-status`,
        data: count
      })
      .then((result) => {
        dispatch({
          type: "CHECK_USER_JOIN_COUNT",
          payload: result.data.count,
        });
      })
      .catch((error) => {
        dispatch(errorMessage(error));
      });
  };
};

export const getAllOrganization = (parm) => {
  return (dispatch) => {
    dispatch({
      type: "CONF_REQUEST",
    });
    axios
      .request({
        method: "post",
        url: `${APP_URL}/get-org-approved`,
        data: parm       
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

export const checkJoinCount = (count) => {
  return (dispatch) => {
    dispatch({
      type: "CONF_REQUEST",
    });
    axios
      .request({
        method: "post",
        url: `${APP_URL}/lp/get-training-join-count`,
        data: count
      })
      .then((result) => {        
        dispatch({
          type: "CHECK_TRANINING_COUNT",
          payload: result.data,
          });
      })
      .catch((error) => {
        dispatch(errorMessage(error));
      });
  };
};
