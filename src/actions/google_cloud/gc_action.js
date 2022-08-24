import axios from "axios";
import { APP_URL } from "../../config/api";
import { errorMessage } from "../errorHandle";

export const gcRegisterAdmin = (user) => {
  return (dispatch) => {
    dispatch({
      type: GOOGLECLOUD.REQUEST,
    });
    axios
      .request({
        method: "post",
        url: `${APP_URL}/register-gc-account`,
        data: user,
      })
      .then((res) => {
        dispatch({
          type: GOOGLECLOUD.REGISTER,
          payload: res.data,
        });
      })
      .catch((error) => {
        dispatch(errorMessage(error, GOOGLECLOUD.ERROR));
      });
  };
};

export const gcCreateVM = (cred) => {
  return (dispatch) => {
    dispatch({
      type: GOOGLECLOUD.REQUEST,
    });
    axios
      .request({
        method: "post",
        url: `${APP_URL}/gc-create-vm`,
        data: cred,
      })
      .then((res) => {
        dispatch({
          type: GOOGLECLOUD.CREATE_VM,
          payload: res.data,
        });
      })
      .catch((error) => {
        dispatch(errorMessage(error, GOOGLECLOUD.ERROR));
      });
  };
};

export const authorizeGCAccount = (cred) => {
  return (dispatch) => {
    dispatch({
      type: GOOGLECLOUD.REQUEST,
    });
    axios
      .request({
        method: "post",
        url: `${APP_URL}/authorize-gc-account`,
        data: cred,
      })
      .then((res) => {
        dispatch({
          type: GOOGLECLOUD.AUTHORIZE_GC,
          payload: res.data,
        });
      })
      .catch((error) => {
        dispatch(errorMessage(error, GOOGLECLOUD.ERROR));
      });
  };
};

export const getVmList = (cred) => {
  return (dispatch) => {
    dispatch({
      type: GOOGLECLOUD.REQUEST,
    });
    axios
      .request({
        method: "post",
        url: `${APP_URL}/vm-list`,
        data: cred,
      })
      .then((res) => {
        dispatch({
          type: GOOGLECLOUD.VM_LIST,
          payload: res.data.list,
        });
      })
      .catch((error) => {
        dispatch(errorMessage(error, GOOGLECLOUD.ERROR));
      });
  };
};

export const resetStatus = () => {
  return (dispatch) => {
    dispatch({
      type: GOOGLECLOUD.RESET,
    });
  };
};

const TAG = "GC_";
export const GOOGLECLOUD = {
  ERROR: TAG + "ERROR",
  REQUEST: TAG + "REQUEST",
  REGISTER: TAG + "REGISTER",
  CREATE_VM: TAG + "CREATE_VM",
  AUTHORIZE_GC: TAG + "AUTHORIZE_GC",
  VM_LIST: TAG + "VM_LIST",
  RESET: TAG + "RESET",
};
