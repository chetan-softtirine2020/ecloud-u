import axios from "axios";
import { APP_URL } from "../../../config/api";
import { errorMessage } from "../../errorHandle";

export const getUserWiseTraining = () => {
  return (dispatch) => {
    dispatch({
      type: LP_USER.REQUEST,
    });
    axios
      .request({
        method: "post",
        url: `${APP_URL}/lpu/get-trainings`,
      })
      .then((res) => {
        dispatch({
          type: LP_USER.USER_WISE_TRAINING,
          payload: res.data.list,
        });
      })
      .catch((error) => {
        dispatch(errorMessage(error, LP_USER.ERROR));
      });
  };
};

export const updateUserTrainingJoinStatus = (details) => {
  return (dispatch) => {
    axios
      .request({
        method: "post",
        url: `${APP_URL}/lp/update-training-join-status`,
        data: details,
      })
      .then((res) => {
        dispatch({
          type: LP_USER.UPDATE_TRAINING_JOIN_STATUS,
          payload: res.data,
        });
      })
      .catch((error) => {
        dispatch(errorMessage(error, LP_USER.ERROR));
      });
  };
};

export const getLPUDashboarData = () => {
  return (dispatch) => {
    dispatch({
      type: LP_USER.REQUEST,
    });
    axios
      .request({
        method: "post",
        url: `${APP_URL}/lpu/dashboard-data`,
      })
      .then((res) => {
        dispatch({
          type: LP_USER.DASHBOARD_DATA,
          payload: res.data,
        });
      })
      .catch((error) => {
        dispatch(errorMessage(error, LP_USER.ERROR));
      });
  };
};

const TAG = "LP_";

export const LP_USER = {
  ERROR: TAG + "ERROR",
  REQUEST: TAG + "REQUEST",
  UPDATE_TRAINING_JOIN_STATUS: TAG + "UPDATE_TRAINING_JOIN_STATUS",
  USER_WISE_TRAINING: TAG + "USER_WISE_TRAINING",
  DASHBOARD_DATA: TAG + "DASHBOARD_DATA",
};
