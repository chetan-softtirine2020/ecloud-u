import axios from "axios";
import { APP_URL,getToken } from "../../config/api";

// Create New Training

export const errorMessage = (err) => {
  switch (err.response.status) {
    case 422:
      return { type: "ERROR", payload: err.response.data };
    case 405:
      return { type: "ERROR", payload: { other_error: "Method Not Allowed" } };
    case 500:
      return {
        type: "ERROR",
        payload: { other_error: "Internal Server Error." },
      };
    default:
      return {
        type: "ERROR",
        payload: { other_error: "Something went worng." },
      };
  }
};

export const createOrgTraining = (training) => {
  return (dispatch) => {
    dispatch({
      type: "REQUEST",
    });
    axios
      .request({
        method: "post",
        url: `${APP_URL}/create-org-training`,
        data: training,
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
          type: "CREATE_ORG_TRAINING",
          payload: res.data.message,
        });
      })
      .catch((error) => {
          dispatch(errorMessage(error));
      });
  };
};

//Update New Training
export const updateOrgTraining = (training) => {
  return (dispatch) => {
    dispatch({
      type: "REQUEST",
    });
    axios
      .request({
        method: "post",
        url: `${APP_URL}/update-org-training`,
        data: training,
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
          type: "UPDATE_ORG_TRAINING",
          data: res.data,
        });
      })
      .catch((error) => {
        dispatch(errorMessage(error));
      });
  };
};

export const getTraining = (id) => {
  return (dispatch) => {
    dispatch({
      type: "REQUEST",
    });
    axios
      .request({
        method: "post",
        url: `${APP_URL}/get-org-training`,
        data: id,
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
          type: "GET_ORG_TRAINING",
          payload: res.data.details,
        });
      })
      .catch((error) => {
        dispatch(errorMessage(error));
      });
  };
};

export const getAllOrgTrainings = () => {
  return (dispatch) => {
    dispatch({
      type: "REQUEST",
    });
    axios
      .request({
        method: "post",
        url: `${APP_URL}/get-org-training`,
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
          type: "ALL_ORG_TRAINING",
          payload: res.data.list,
        });
      })
      .catch((error) => {
        dispatch(errorMessage(error));
      });
  };
};

export const deleteTraining = (id) => {
  return (dispatch) => {
    dispatch({
      type: "REQUEST",
    });
    axios
      .request({
        method: "post",
        url: `${APP_URL}/delete-org-trainings`,
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
          type: "DELETE_ORG_TRAINING",
          payload: res.data,
        });
      })
      .catch((error) => {
        dispatch(errorMessage(error));
      });
  };
};
