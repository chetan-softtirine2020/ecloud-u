import axios from "axios";
import { APP_URL} from "../../config/api";
import { errorMessage } from "../errorHandle";

export const getTrainingDetailsForMeeting = (training) => {
  return (dispatch) => {
    dispatch({
      type: TRAINING.REQUEST,
    });
    axios
      .request({
        method: "post",
        url: `${APP_URL}/lp-training-details`,
        data: training    
        })
      .then((res) => {
        dispatch({
          type: "TRAINING_DETAILS",
          payload: res.data.details,
        });
      })
      .catch((error) => {
        dispatch(errorMessage(error,TRAINING.ERROR));
      });
  };
};

export const createTraining = (training) => {
  return (dispatch) => {
    dispatch({
      type: TRAINING.REQUEST,
    });
    axios
      .request({
        method: "post",
        url: `${APP_URL}/create-training`,
        data: training
      })
      .then((res) => {
        dispatch({
          type: TRAINING.CREATE_TRAINING,
          payload: res.data.message,
        });
      })
      .catch((error) => {
        dispatch(errorMessage(error,TRAINING.ERROR));
      });
  };
};


export const addMakePublicTraining = (training) => {
  return (dispatch) => {
    dispatch({
      type: TRAINING.REQUEST,
    });
    axios
      .request({
        method: "post",
        url: `${APP_URL}/lp-public-training`,
        data: training        
      })
      .then((res) => {
        dispatch({
          type: "LP_MAKE_PUBLIC_TRAINING",
          payload: res.data.message,
        });
      })
      .catch((error) => {
        dispatch(errorMessage(error,TRAINING.ERROR));
      });
  };
};




//Update New Training
export const updateTraining = (training) => {
  return (dispatch) => {
    dispatch({
      type: TRAINING.REQUEST,
    });
    axios
      .request({
        method: "post",
        url: `${APP_URL}/update-training`,
        data: training
      })
      .then((res) => {
        dispatch({
          type: "UPDATE_TRAINING",
          data: res.data,
        });
      })
      .catch((error) => {
        dispatch(errorMessage(error,TRAINING.ERROR));
      });
  };
};

export const getTraining = (id) => {
  return (dispatch) => {
    dispatch({
      type: TRAINING.REQUEST,
    });
    axios
      .request({
        method: "post",
        url: `${APP_URL}/get-training`,
        data: id       
      })
      .then((res) => {
        dispatch({
          type: "GET_TRAINING",
          payload: res.data.details,
        });
      })
      .catch((error) => {
        dispatch(errorMessage(error,TRAINING.ERROR));
      });
  };
};

export const getAllTrainings = () => { 
  return (dispatch) => {
    dispatch({
      type: TRAINING.REQUEST,
    });
    axios
      .request({
        method: "post",
        url: `${APP_URL}/all-trainings`,       
      })
      .then((res) => {
        dispatch({
          type: "ALL_TRAINING",
          payload: res.data.list
        });
      })
      .catch((error) => {
        dispatch(errorMessage(error,TRAINING.ERROR));
      });
  };
};

export const deleteTraining = (slug) => {
  return (dispatch) => {
    dispatch({
      type: TRAINING.REQUEST,
    });
    axios
      .request({
        method: "post",
        url: `${APP_URL}/delete-trainings`,
        data:slug       
      })
      .then((res) => {
        dispatch({
          type: "DELETE_TRAINING",
          payload: res.data,
        });
      })
      .catch((error) => {
        dispatch(errorMessage(error,TRAINING.ERROR));
      });
  };
};


const TAG = "TRAINING_";

export const TRAINING = {
    ERROR: TAG + "ERROR",
    REQUEST: TAG + "REQUEST",
    GET_COURSE_DETAILS: TAG + "GET_COURSE_DETAILS",
    CREATE_TRAINING:  "CREATE_TRAINING",
    LIST_COURSE: TAG + "LIST_COURSE",  
 };
