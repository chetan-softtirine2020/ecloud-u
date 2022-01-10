import axios from "axios";
import { APP_URL } from "../../config/api";
const token=localStorage.getItem('token');

export const errorMessage = (err) => {
  switch (err.response.status) {
    case 422:  
      return { type: "ERROR", payload: err.response.data };
    case 405:
      return { type: "ERROR", payload: { other_error: "Method Not Allowed" } };
    case 500:
      return {
        type: "ERROR",
        payload: { other_error: "The given data was invalid"},
      };
    default:
      return {  
        type: "ERROR",
        payload: { other_error: "Something went worng." },
      };
  }
};

export const getAllOrganization = () => {
  return (dispatch) => {
    dispatch({
      type: "REQUEST_ORGANIZATION",
    });
    axios
      .request({
        method: "post",
        url: `${APP_URL}/get-orgs`,      
        headers: {
          Authorization: `Bearer ${token.substring(1, token.length - 1)}`,
          "Content-Type": "application/json",
        },
      })
      .then((res) => {
        dispatch({
          type: "GET_ALL_ORGANIZATION",
          payload: res.data.list,
        });
      })
      .catch((error) => {
        dispatch(errorMessage(error));       
      });
  };
};



export const getAllNewOrganization = () => {
  return (dispatch) => {
    dispatch({
      type: "REQUEST_ORGANIZATION",
    });
    axios
      .request({
        method: "post",
        url: `${APP_URL}/get-org-approve`,      
        headers: {
          Authorization: `Bearer ${token.substring(1, token.length - 1)}`,
          "Content-Type": "application/json",
        },
      })
      .then((res) => {
        dispatch({
          type: "GET_APPROVE_ORGANIZATION",
          payload: res.data.list,
        });
      })
      .catch((error) => {
        dispatch(errorMessage(error));       
      });
  };
};

export const updateApproveOrganization = (org) => {
    return (dispatch) => {
      dispatch({
        type: "REQUEST_ORGANIZATION",
      });
      axios
        .request({
          method: "post",
          url: `${APP_URL}/org-approved`,      
          data: org,  
          headers: {
            Authorization: `Bearer ${token.substring(1, token.length - 1)}`,
            "Content-Type": "application/json",
          },
        })
        .then((res) => {
          dispatch({
            type: "UPDATE_APPROVE_ORGANIZATION",
            payload: res.data,
          });
        })
        .catch((error) => {
          dispatch(errorMessage(error));       
        });
    };
  };
  