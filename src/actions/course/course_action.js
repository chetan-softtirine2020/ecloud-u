import axios from "axios";
import { APP_URL } from "../../config/api";
import { errorMessage } from "../errorHandle";

export const createCourse = (prm) => {
  return (dispatch) => {
    dispatch({
      type: COURSE.REQUEST,
    });
    axios
      .request({
        method: "post",
        url: `${APP_URL}/create-course`,
        data: prm,
      })
      .then((res) => {
        dispatch({
          type: COURSE.ADD_COURSE,
          payload: res.data,
        });
      })
      .catch((error) => {
        dispatch(errorMessage(error, COURSE.ERROR));
      });
  };
};

export const getCoureseList = (prm) => {
  return (dispatch) => {
    axios
      .request({
        method: "post",
        url: `${APP_URL}/get-courses`,
        data: prm,
      })
      .then((res) => {
        dispatch({
          type: COURSE.LIST_COURSE,
          payload: res.data.list,
        });
      })
      .catch((error) => {
        dispatch(errorMessage(error, COURSE.ERROR));
      });
  };
};


export const createCourseModule = (prm) => {
  return (dispatch) => {
    dispatch({
      type: COURSE.REQUEST,
    });
    axios
      .request({
        method: "post",
        url: `${APP_URL}/create-module`,
        data: prm,
      })
      .then((res) => {
        dispatch({
          type: COURSE.ADD_MODULE,
          payload: res.data,
        });
      })
      .catch((error) => {
        dispatch(errorMessage(error, COURSE.ERROR));
      });
  };
};

export const getCoureseWiseModuleList = (prm) => {
  return (dispatch) => {
    axios
      .request({
        method: "post",
        url: `${APP_URL}/get-modules`,
        data: prm,
      })
      .then((res) => {
         console.log("Data"+ res.data.list);
        dispatch({
          type: COURSE.LIST_MODULE,
          payload: res.data.list,
        });
      })
      .catch((error) => {
        dispatch(errorMessage(error, COURSE.ERROR));
      });
  };
};

export const createAllCourse = (prm) => {
  return (dispatch) => {
    dispatch({
      type: COURSE.REQUEST,
    });
    axios
      .request({
        method: "post",
        url: `${APP_URL}/create-all-course`,
        data: prm,
      })
      .then((res) => {
        dispatch({
          type: COURSE.ADD_ALL_COURSE,
          payload: res.data,
        });
      })
      .catch((error) => {
        dispatch(errorMessage(error, COURSE.ERROR));
      });
  };
};

export const getPlayCourseData = (prm) => {
  return (dispatch) => {
    dispatch({
      type: COURSE.REQUEST,
    });
    axios
      .request({
        method: "post",
        url: `${APP_URL}/play-course-data`,
        data: prm,
      })
      .then((res) => {
        dispatch({
          type: COURSE.PLAY_COURSE,
          payload: res.data,
        });
      })
      .catch((error) => {
        dispatch(errorMessage(error, COURSE.ERROR));
      });
  };
};


const TAG = "COURSE_";

export const COURSE = {
  ERROR: TAG + "ERROR",
  REQUEST: TAG + "REQUEST",
  GET_COURSE_DETAILS: TAG + "GET_COURSE_DETAILS",
  ADD_COURSE: TAG + "ADD_COURSE",
  LIST_COURSE: TAG + "LIST_COURSE",
  ADD_MODULE: TAG + "ADD_MODULE",
  ADD_ALL_COURSE: TAG + "ADD_ALL_COURSE",
  LIST_MODULE: TAG + "LIST_MODULE",
  PLAY_COURSE:TAG + "PLAY_DATA"
  };
