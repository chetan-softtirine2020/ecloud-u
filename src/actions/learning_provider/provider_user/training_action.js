import axios from "axios";
import { APP_URL,getToken } from "../../../config/api";

 export const errorMessage = (err) => {
  switch (err.response.status) {
    case 422:     
      return { type: "PROVIDER_USER_ERROR", payload: err.response.data };
    case 405:
      return { type: "PROVIDER_USER_ERROR", payload: { other_error: "Method Not Allowed" } };
    case 500:
      return {
        type: "PROVIDER_USER_ERROR",
        payload: { other_error: "The given data was invalid"},
      };
    default:
      return {  
        type: "PROVIDER_USER_ERROR",
        payload: { other_error: "Something went worng." },
      };
  }
};

 export const getUserWiseTraining = () => {
    return (dispatch) => {
      dispatch({
        type: "PRVIDER_USER_REQUEST",
      });
      axios
        .request({
          method: "post",
          url: `${APP_URL}/lpu/get-trainings`,          
          })
        .then((res) => {
          dispatch({
            type: "USER_WISE_TRAINING",
            payload: res.data.list,
          });
        })
        .catch((error) => {
          dispatch({
            type: "ERROR",
            payload: error.response.data,
          });
        });
    };
  };

  export const updateUserTrainingJoinStatus = (details) => {
    return (dispatch) => {  
      axios
        .request({
          method: "post",
          url: `${APP_URL}/lp/update-training-join-status`,
          data: details         
        })
        .then((res) => {
          dispatch({
            type: "UPDATE_TRAINING_JOIN_STATUS",
            payload: res.data,
          });
        })
        .catch((error) => {
          dispatch(errorMessage(error));
        });
    };
  };