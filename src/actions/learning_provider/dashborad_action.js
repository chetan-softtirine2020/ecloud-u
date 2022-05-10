import axios from "axios";
import { APP_URL } from "../../config/api";
export const errorMessage = (err) => {
  switch (err.response) {
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

export const getDashboardData = () => {
  return (dispatch) => {
    dispatch({
      type:  "LP_DASHBOARD_REQUEST",
    });
    axios
      .request({
        method: "post",
        url: `${APP_URL}/get-dashboard-data`,
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token').slice(1, -1)}`,
          "Content-Type": "application/json",
        },
      })
      .then((res) => {
        dispatch({
          type: "LP_DASHBOARD_DATA",
          payload: res.data.list,
        });
      })
      .catch((error) => {
        dispatch(errorMessage(error));       
      });
  };
};
