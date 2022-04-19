import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getUserWiseTraining } from "../../../actions/learning_provider/provider_user/training_action";
import AppBody from "../../components/AppBody";
import { UI_URL } from "../../../config/api";
const UserWiseTraining = () => {
  const state = useSelector((state) => state.puTrainingReducer);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getUserWiseTraining());
  }, []);

  const handelStartMeetingClick = (slug) => {
    window.open(UI_URL + "/training/" + slug);
  };
  
  return (
    <AppBody
      loading={state.loading}
      content={
        <div className="middle-sidebar-left">
          <div className="card w-100 border-0 shadow-xs p-0 mb-4">
            <div className="card-header p-4 w-100 border-0 d-flex rounded-lg">             
              <h4 className="font-xs text-white fw-600 ml-4 mb-0 mt-2">
                My Trainings
              </h4>
            </div>
            <div className="card-body  p-4 w-100 border-0 ">
            <div className="table-responsive">
              <table class="table table-bordered">
                <thead>
                  <tr>
                    <th>Sr.No</th>
                    <th>Name</th>
                    <th>Date</th>
                    <th>Link</th>
                    <th>Join</th>
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
                        <td>{li.link}</td>
                        <td>{li.join}</td>
                        <td>
                          <input
                            type="button"
                            value="Start"                            
                            className="btn approve_btn btn-common mg-l"
                            target="_blank"                         
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
        </div>
      }
    />
  );
};

export default UserWiseTraining;
