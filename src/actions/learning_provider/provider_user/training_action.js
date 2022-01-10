import axios from "axios";
import { APP_URL } from "../../../config/api";
 const token=localStorage.getItem('token');

 export const getUserWiseTraining = () => {
    return (dispatch) => {
      dispatch({
        type: "REQUEST",
      });
      axios
        .request({
          method: "post",
          url: `${APP_URL}/lpu/get-trainings`,          
          headers: {
            Authorization: `Bearer ${token.substring(1, token.length - 1)}`,
            "Content-Type": "application/json",
          },
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