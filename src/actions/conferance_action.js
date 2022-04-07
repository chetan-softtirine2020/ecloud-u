import axios from "axios";
import { APP_URL, getToken } from "../config/api";

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
        data: count,
        headers: {
          Authorization: `Bearer ${getToken().substring(
            1,
            getToken().length - 1
          )}`,
          "Content-Type": "application/json",
        },
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
        data: parm,
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
export const checkJounCount = (parm) => {
  return (dispatch) => {
    dispatch({
      type: "CONF_REQUEST",
    });

    dispatch({
      type: "SET_JOIN_COUNT",
      payload: 1,
    });
  };
};
