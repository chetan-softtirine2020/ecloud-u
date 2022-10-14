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
        console.log("Data" + res.data.list);
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

export const updateAllCourse = (prm) => {
  return (dispatch) => {
    dispatch({
      type: COURSE.REQUEST,
    });
    axios
      .request({
        method: "post",
        url: `${APP_URL}/update-all-course`,
        data: prm,
      })
      .then((res) => {
        dispatch({
          type: COURSE.UPDATE_ALL_COURSE,
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

export const getCourseDetail = (prm) => {
  return (dispatch) => {
    dispatch({
      type: COURSE.REQUEST,
    });
    axios
      .request({
        method: "post",
        url: `${APP_URL}/get-course-details`,
        data: prm,
      })
      .then((res) => {
        dispatch({
          type: COURSE.GET_COURSE_DETAILS,
          payload: res.data,
        });
      })
      .catch((error) => {
        dispatch(errorMessage(error, COURSE.ERROR));
      });
  };
};

export const getCureseModuleTopicWiseList = (prm) => {
  return (dispatch) => {
    axios
      .request({
        method: "post",
        url: `${APP_URL}/get-course-module-topic-list`,
        data: prm,
      })
      .then((res) => {
        dispatch({
          type: COURSE.GET_COURSE_MODULE_TOPIC_LIST,
          payload: res.data.list,
        });
      })
      .catch((error) => {
        dispatch(errorMessage(error, COURSE.ERROR));
      });
  };
};

export const deleteTopicData = (prm) => {
  return (dispatch) => {
    axios
      .request({
        method: "post",
        url: `${APP_URL}/delete-topic`,
        data: prm,
      })
      .then((res) => {
        dispatch({
          type: COURSE.DELETE_TOPIC,
          payload: res.data,
        });
      })
      .catch((error) => {
        dispatch(errorMessage(error, COURSE.ERROR));
      });
  };
};

export const getCourseForUser = () => {
  return (dispatch) => {
    axios
      .request({
        method: "post",
        url: `${APP_URL}/course-list`,
      })
      .then((res) => {
        dispatch({
          type: COURSE.GET_COURSE_MODULE_TOPIC_LIST_USER,
          payload: res.data.list,
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
  UPDATE_ALL_COURSE: TAG + "UPDATE_ALL_COURSE",
  LIST_MODULE: TAG + "LIST_MODULE",
  PLAY_COURSE: TAG + "PLAY_DATA",
  GET_COURSE_MODULE_TOPIC_LIST: TAG + "GET_COURSE_MODULE_TOPIC_LIST",
  DELETE_TOPIC: TAG + "DELETE_TOPIC",
  GET_COURSE_MODULE_TOPIC_LIST_USER: TAG + "GET_COURSE_MODULE_TOPIC_LIST_USER",
};
