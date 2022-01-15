import axios from "axios";
import { APP_URL } from "../../config/api";

export const errorMessage = (err) => {
  switch (err.response.status) {
    case 422:
      return { type: "HOME_ERROR", payload: err.response.data };
    case 405:
      return { type: "HOME_ERROR", payload: { other_error: "Method Not Allowed" } };
    case 500:
      return {
        type: "HOME_ERROR",
        payload: { other_error: "Internal server error" },
      };
    default:
      return {
        type: "HOME_ERROR",
        payload: { other_error: "Something went worng." },
      };
  }
};

export const getAllHomeTrainings = () => {
  return (dispatch) => {
    dispatch({
      type: "HOME_REQUEST",
    });
    axios
      .request({
        method: "post",
        url: `${APP_URL}/get-home-trainings`,
        headers: {         
          "Content-Type": "application/json",
        },
      })
      .then((res) => {
        dispatch({
          type: "ALL_HOME_TRAININGS",
          payload: res.data.list,
        });
      })
      .catch((error) => {
        dispatch(errorMessage(error));
      });
  };
};
