import React, { useEffect, useState } from "react";
import AppBody from "../components/AppBody";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  getAllTrainings,  
} from "../../actions/learning_provider/training_action";
const ShowAllTrainingsDetails = () => {
  const state = useSelector((state) => state.trainingReducer);
  const dispatch = useDispatch();
  const navigate = useNavigate();
 

  useEffect(() => {
    if (state.list.length == 0) {
      dispatch(getAllTrainings());
    }   
  }, []);

  const handelUserClick = (slug) => {
    navigate("/completed-training-users/" + slug);
  };
 
  return (
    <AppBody
      loading={state.loading}
      content={
        <div className="middle-sidebar-left">       
        <div className="card w-100 border-0 shadow-xs p-0 mb-4">
            <div className="card-header p-3 w-100 border-0 d-flex rounded-lg">             
              <h4 className="font-xs text-white fw-600 ml-4 mb-0 mt-2">
                Completed Training 
              </h4>
            </div>
            <div className="card-body p-4 w-100 border-0 ">
              <table className="table table-bordered">
                <thead>
                  <tr>
                    <th>Sr.No</th>
                    <th>Name</th>
                    <th>Date</th>
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
                            value="View"
                            className="btn approve_btn btn-common mg-l"
                            onClick={() => handelUserClick(li.slug)}
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

export default ShowAllTrainingsDetails;
