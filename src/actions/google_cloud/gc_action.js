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

export const getVmDetails = (cred) => {
  return (dispatch) => {
    dispatch({
      type: GOOGLECLOUD.REQUEST,
    });
    axios
      .request({
        method: "post",
        url: `${APP_URL}/vm-details`,
        data: cred,
      })
      .then((res) => {
        dispatch({
          type: GOOGLECLOUD.VM_DETAILS,
          payload: res.data.list,
        });
      })
      .catch((error) => {
        dispatch(errorMessage(error, GOOGLECLOUD.ERROR));
      });
  };
};

export const updateStartStopVm = (cred) => {
  return (dispatch) => {
    dispatch({
      type: GOOGLECLOUD.REQUEST,
    });
    axios
      .request({
        method: "post",
        url: `${APP_URL}/vm-start-stop`,
        data: cred,
      })
      .then((res) => {
        dispatch({
          type: GOOGLECLOUD.UPDATE_START_STOP,
          payload: res.data,
        });
      })
      .catch((error) => {
        dispatch(errorMessage(error, GOOGLECLOUD.ERROR));
      });
  };
};

export const deleteVM = (cred) => {
  return (dispatch) => {
    dispatch({
      type: GOOGLECLOUD.REQUEST,
    });
    axios
      .request({
        method: "post",
        url: `${APP_URL}/vm-delete`,
        data: cred,
      })
      .then((res) => {
        dispatch({
          type: GOOGLECLOUD.DELETE_VM,
          payload: res.data,
        });
      })
      .catch((error) => {
        dispatch(errorMessage(error, GOOGLECLOUD.ERROR));
      });
  };
};

export const importVMTrainingUser = (cred) => {
  return (dispatch) => {
    dispatch({
      type: GOOGLECLOUD.REQUEST,
    });
    axios
      .request({
        method: "post",
        url: `${APP_URL}/vm-assign-to-user`,
        data: cred,
      })
      .then((res) => {
        dispatch({
          type: GOOGLECLOUD.VM_ASSING,
          payload: res.data,
        });
      })
      .catch((error) => {
        dispatch(errorMessage(error, GOOGLECLOUD.ERROR));
      });
  };
};

export const getCountOfVirtualMachine = () => {
  return (dispatch) => {
    dispatch({
      type: GOOGLECLOUD.REQUEST,
    });
    axios
      .request({
        method: "post",
        url: `${APP_URL}/get-vm-count`,    
      })
      .then((res) => {
        dispatch({
          type: GOOGLECLOUD.VM_COUNT,
          payload: res.data,
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
  VM_DETAILS: TAG + "VM_DETAILS",
  VM_ASSING: TAG + "VM_ASSIGN",
  VM_COUNT: TAG + "VM_COUNT",
  RESET: TAG + "RESET",
  UPDATE_START_STOP: TAG + "UPDATE_START_STOP",
  DELETE_VM: TAG + "DELETE_VM",
};
