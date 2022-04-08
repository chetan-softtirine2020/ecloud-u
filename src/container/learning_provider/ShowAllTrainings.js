import React, { useEffect } from "react";
import AppBody from "../components/AppBody";
import { useSelector, useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import {
  getAllTrainings,
  addMakePublicTraining,
  deleteTraining,
} from "../../actions/learning_provider/training_action";
import { UI_URL } from "../../config/api";
import { reactiveUserTraining } from "../../actions/learning_provider/lp_users_action";
const ShowAllTrainings = () => {
  const state = useSelector((state) => state.trainingReducer);
  const traningReducer = useSelector((state) => state.trainingUserReducer);
  
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

  const checkCallFun = (slug) => {
    window.open(UI_URL + "/training/" + slug); 
  };

  const getDeleteTraining = (slug) => {
    dispatch(deleteTraining({ slug: slug }));
  };

  const handelActiveClick = (slug) => {    
    dispatch(reactiveUserTraining({ slug: slug }));
  };

  if (state.is_done) {
    dispatch(getAllTrainings());
  }  
 
  return (
    <AppBody
      loading={state.loading ||traningReducer.loading}
      content={
        <div className="middle-sidebar-left">
          <div className="card w-100 border-0 shadow-xs p-0 mb-4">
            <div className="card-header p-3 w-100 border-0 d-flex rounded-lg">
              <Link to={"/create-training"} className="d-inline-block mt-2">
                <i className="ti-arrow-left font-sm text-white"></i>
              </Link>
              <h4 className="font-xs text-white fw-600 ml-4 mb-0 mt-2">
                Upcoming Trainings
              </h4>
            </div>
            <div className="card-body p-4 w-100 border-0 ">
              <div className="table-responsive">
                <table className="table table-bordered">
                  <thead>
                    <tr>
                      <th>Sr.No</th>
                      <th>Name</th>
                      <th>Date</th>
                      <th>Availbale</th>
                      <th>Status</th>
                      {/* <th>Description</th>*/}
                      <th className="tblaction">Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {state.list &&
                      state.list.map((li, i) => (
                        <tr key={i}>
                          <td>{i + 1}</td>
                          <td>{li.name}</td>
                          <td>{li.date}</td>
                          <td>
                            {li.is_public === 0 ? "Not Public" : "Public"}
                          </td>
                          <td>
                            {li.status === 0 && "Schedule"}
                            {li.status === 1 && "Start"}
                            {li.status === 2 && "Completed"}
                          </td>
                          {/* <td>{li.description}</td>*/}
                          <td className="tblaction">
                            <input
                              type="button"
                              value="Add User"
                              className="btn approve_btn btn-common"
                              onClick={() => handelClick(li.slug)}
                            />
                            <input
                              type="button"
                              value="Users"
                              className="btn approve_btn mg-l  btn-common"
                              onClick={() => handelUserClick(li.slug)}
                            />
                            <input
                              type="button"
                              value={
                                li.is_public == 0
                                  ? "Make Public"
                                  : "Stop Public"
                              }
                              className="btn approve_btn mg-l btn-common"
                              onClick={() => handelPublicClick(li.id)}
                            />

                            <input
                              type="button"
                              value={"Start"}
                              readOnly={li.status === 1 ? true : false}
                              className="btn approve_btn mg-l btn-common"
                              onClick={() => checkCallFun(li.slug)}
                            />

                            {li.status === 1 && (
                              <input
                                type="button"
                                value={"Delete"}
                                className="btn approve_btn mg-l btn-common"
                                onClick={() => getDeleteTraining(li.slug)}
                              />
                            )} 
                             <input
                              type="button"
                              value="Re-Active"
                              className="btn approve_btn btn-common mg-l"
                              onClick={() => handelActiveClick(li.slug)}
                            />
                          </td>
                        </tr>
                      ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      }
    />
  );
};

export default ShowAllTrainings;
