import axios from "axios";
import { APP_URL, getToken } from "../../config/api";
let token = getToken();

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

export const getTrainingDetailsForMeeting = (training) => {
  return (dispatch) => {
    dispatch({
      type: "TRAINING_REQUEST",
    });
    axios
      .request({
        method: "post",
        url: `${APP_URL}/lp-training-details`,
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
          type: "TRAINING_DETAILS",
          payload: res.data.details,
        });
      })
      .catch((error) => {
        dispatch(errorMessage(error));
      });
  };
};

export const createTraining = (training) => {
  return (dispatch) => {
    dispatch({
      type: "TRAINING_REQUEST",
    });
    axios
      .request({
        method: "post",
        url: `${APP_URL}/create-training`,
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
          type: "CREATE_TRAINING",
          payload: res.data.message,
        });
      })
      .catch((error) => {
        dispatch(errorMessage(error));
      });
  };
};


export const addMakePublicTraining = (training) => {
  return (dispatch) => {
    dispatch({
      type: "TRAINING_REQUEST",
    });
    axios
      .request({
        method: "post",
        url: `${APP_URL}/lp-public-training`,
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
          type: "LP_MAKE_PUBLIC_TRAINING",
          payload: res.data.message,
        });
      })
      .catch((error) => {
        dispatch(errorMessage(error));
      });
  };
};




//Update New Training
export const updateTraining = (training) => {
  return (dispatch) => {
    dispatch({
      type: "TRAINING_REQUEST",
    });
    axios
      .request({
        method: "post",
        url: `${APP_URL}/update-training`,
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
          type: "UPDATE_TRAINING",
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
      type: "TRAINING_REQUEST",
    });
    axios
      .request({
        method: "post",
        url: `${APP_URL}/get-training`,
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
          type: "GET_TRAINING",
          payload: res.data.details,
        });
      })
      .catch((error) => {
        dispatch(errorMessage(error));
      });
  };
};

export const getAllTrainings = () => { 
  return (dispatch) => {
    dispatch({
      type: "TRAINING_REQUEST",
    });
    axios
      .request({
        method: "post",
        url: `${APP_URL}/all-trainings`,
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
          type: "ALL_TRAINING",
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
      type: "TRAINING_REQUEST",
    });
    axios
      .request({
        method: "post",
        url: `${APP_URL}/delete-trainings`,
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
          type: "DELETE_TRAINING",
          payload: res.data,
        });
      })
      .catch((error) => {
        dispatch(errorMessage(error));
      });
  };
};
