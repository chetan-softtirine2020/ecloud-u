import axios from "axios";
import { APP_URL } from "../../config/api";


export const errorMessage = (err) => {
  switch (err.response.status) {
    case 422:  
      return { type: "ERROR", payload: err.response.data };
    case 405:
      return { type: "ERROR", payload: { other_error: "Method Not Allowed" } };
    case 500:
      return {
        type: "ERROR",
        payload: { other_error: "Internal server error"},
      };
    default:
      return {  
        type: "ERROR",
        payload: { other_error: "Something went worng." },
      };
  }
};

export const addOrganizationSubAdmin = (org) => {
  return (dispatch) => {
    dispatch({
      type: "ORG_SUBADMIN_REQUEST",
    });
    axios
      .request({
        method: "post",
        url: `${APP_URL}/create-organization`,
        data: org
      })
      .then((result) => {
        dispatch({
          type: "ADD_ORG_SUBADMIN",
          payload: result.data,
        });
      })
      .catch((error) => {      
        dispatch(errorMessage(error));       
      })
  }
}

export const addOrgDeptBranchSection = (org) => {
    return (dispatch) => {
      dispatch({
        type: "ORG_SUBADMIN_REQUEST",
      });
      axios
        .request({
          method: "post",
          url: `${APP_URL}/create-organization`,
          data: org         
        })
        .then((result) => {
          dispatch({
            type: "ADD_ORG_SUBADMIN",
            payload: result.data,
          });
        })
        .catch((error) => {      
          dispatch(errorMessage(error));       
        })
    }
  }


export const getAllOrganization = (parm) => {
  return (dispatch) => {
    dispatch({
      type: "REQUEST",
    });
    axios
      .request({
        method: "post",
        url: `${APP_URL}/get-org-approved`,
        data:parm
      })
      .then((res) => {
        dispatch({
          type: "ALL_ORGANIZATIONS",
          payload: res.data.list,
        });
      })
      .catch((error) => {
        dispatch(errorMessage(error));       
      });
  };
};
