import React, { useEffect, useState } from "react";
import AppBody from "../components/AppBody";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  getAllTrainings,
  addMakePublicTraining,
} from "../../actions/learning_provider/training_action";
const ShowAllTrainings = () => {
  const state = useSelector((state) => state.trainingReducer);
  const dispatch = useDispatch();
  const navigate = useNavigate();
 

  useEffect(() => {
    if (state.list.length == 0) {
      dispatch(getAllTrainings());
    }   
  }, []);

  const handelClick = (slug) => {
    navigate("/add-training-user/" + slug);
  };

  const handelUserClick = (slug) => {
    navigate("/show-training-users/" + slug);
  };

  const handelPublicClick = (id) => {
    dispatch(addMakePublicTraining({ id: id }));
  };

  const handelStartMeetingClick = (slug) => {
    navigate("/training/" + slug);
  };
  if (state.is_done) {
    dispatch(getAllTrainings());
  }

  return (
    <AppBody
      loading={state.loading}
      content={
        <div className="middle-sidebar-left">       
        <div className="card w-100 border-0 bg-white shadow-xs p-0 mb-4">
            <div className="card-body p-3 w-100 bg-current border-0 d-flex rounded-lg">
              <a href="default-settings.html" className="d-inline-block mt-2">
                <i className="ti-arrow-left font-sm text-white"></i>
              </a>
              <h4 className="font-xs text-white fw-600 ml-4 mb-0 mt-2">
                All Training 
              </h4>
            </div>
            <div className="card-body p-4 w-100 border-0 ">
              <table className="table table-bordered">
                <thead>
                  <tr>
                    <th>Sr.No</th>
                    <th>Name</th>
                    <th>Date</th>
                    <th>Availbale</th>
                    {/* <th>Description</th>*/}
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {state.list &&
                    state.list.map((li, i) => (
                      <tr key={i}>
                        <td>{i + 1}</td>
                        <td>{li.name}</td>
                        <td>{li.date}</td>
                        <td>{li.is_public == 0 ? "Not Public" : "Public"}</td>
                        {/* <td>{li.description}</td>*/}
                        <td>
                          <input
                            type="button"
                            value="Add User"
                            className="btn approve_btn"
                            onClick={() => handelClick(li.slug)}
                          />
                          <input
                            type="button"
                            value="Users"
                            className="btn approve_btn mg-l"
                            onClick={() => handelUserClick(li.slug)}
                          />
                          <input
                            type="button"
                            value={
                              li.is_public == 0 ? "Make Public" : "Stop Public"
                            }
                            className="btn approve_btn mg-l"
                            onClick={() => handelPublicClick(li.id)}
                          />
                          <input
                            type="button"
                            value={"Start"}
                            className="btn approve_btn mg-l"
                            onClick={() => handelStartMeetingClick(li.slug)}
                          />
                        </td>
                      </tr>
                    ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      }
    />
  );
};

export default ShowAllTrainings;