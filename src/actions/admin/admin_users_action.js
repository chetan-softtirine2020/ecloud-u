import axios from "axios";
import { APP_URL } from "../../config/api";
import { errorMessage } from "../errorHandle";

export const getAdminUsersList = (user) => {
  return (dispatch) => {
    dispatch({
      type: ADMINUSER.REQUEST,
    });
    axios
      .request({
        method: "post",
        url: `${APP_URL}/admin/get-users-list`,
        data: user,
      })
      .then((res) => {
        dispatch({
          type: ADMINUSER.GET_ADMIN_USERS,
          payload: res.data.list,
        });
      })
      .catch((error) => {
        dispatch(errorMessage(error, ADMINUSER.ERROR));
      });
  };
};

export const getNewLeaninigProviderList = () => {
  return (dispatch) => {
    dispatch({
      type: ADMINUSER.REQUEST,
    });
    axios
      .request({
        method: "post",
        url: `${APP_URL}/admin/new-learninig-provider-request`,
      })
      .then((res) => {
        dispatch({
          type: ADMINUSER.GET_LEARNING_PROVIDER_REQUEST_LIST,
          payload: res.data.list,
        });
      })
      .catch((error) => {
        dispatch(errorMessage(error, ADMINUSER.ERROR));
      });
  };
};
export const updateNewLeaninigProviderRequest = (pra) => {
  return (dispatch) => {
    dispatch({
      type: ADMINUSER.REQUEST,
    });
    axios
      .request({
        method: "post",
        url: `${APP_URL}/admin/update-learninig-provider-request`,
        data: pra,
      })
      .then((res) => {
        dispatch({
          type: ADMINUSER.UPDATE_LEARNING_PROVIDER_REQUEST,
          payload: res.data,
        });
      })
      .catch((error) => {
        dispatch(errorMessage(error, ADMINUSER.ERROR));
      });
  };
};

export const getOrgSubAdminRequestList = (para) => {
  return (dispatch) => {
    dispatch({
      type: ADMINUSER.REQUEST,
    });
    axios
      .request({
        method: "post",
        url: `${APP_URL}/admin/new-org-subadmin-request`,
        data:para
      })
      .then((res) => {
        dispatch({
          type: ADMINUSER.GET_ORG_SUBADMIN_REQUEST_LIST,
          payload: res.data.list,
        });
      })
      .catch((error) => {
        dispatch(errorMessage(error, ADMINUSER.ERROR));
      });
  };
};

export const updateSubAdminRequest = (par) => {
  return (dispatch) => {
    dispatch({
      type: ADMINUSER.REQUEST,
    });
    axios
      .request({
        method: "post",
        url: `${APP_URL}/admin/update-org-subadmin-request`,
        data: par,
      })
      .then((res) => {
        dispatch({
          type: ADMINUSER.UPDATE_SUBADMIN_REQUEST,
          payload: res.data,
        });
      })
      .catch((error) => {
        dispatch(errorMessage(error, ADMINUSER.ERROR));
      });
  };
};

export const getChildUsersList = (user) => {
  return (dispatch) => {
    dispatch({
      type: ADMINUSER.REQUEST,
    });
    axios
      .request({
        method: "post",
        url: `${APP_URL}/admin/get-child-users-list`,
        data: user,
      })
      .then((res) => {
        dispatch({
          type: ADMINUSER.GET_ADMIN_CHILD_USERS,
          payload: res.data.list,
        });
      })
      .catch((error) => {
        dispatch(errorMessage(error, ADMINUSER.ERROR));
      });
  };
};

const TAG = "ADMIN_";

export const ADMINUSER = {
  ERROR: TAG + "ERROR",
  REQUEST: TAG + "ADMIN_USER_REQUEST",
  GET_ADMIN_USERS: TAG + "GET_ADMIN_USERS",
  GET_ADMIN_CHILD_USERS: TAG + "GET_ADMIN_CHILD_USERS",
  GET_LEARNING_PROVIDER_REQUEST_LIST:
    TAG + "GET_LEARNING_PROVIDER_REQUEST_LIST",
  GET_ORG_SUBADMIN_REQUEST_LIST: TAG + "GET_ORG_SUBADMIN_REQUEST_LIST",
  UPDATE_LEARNING_PROVIDER_REQUEST: TAG + "UPDATE_LEARNING_PROVIDER_REQUEST",
  UPDATE_SUBADMIN_REQUEST: TAG + "UPDATE_SUBADMIN_REQUEST",
};
