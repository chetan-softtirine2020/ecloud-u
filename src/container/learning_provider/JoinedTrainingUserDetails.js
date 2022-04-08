import React, { useEffect } from "react";
import AppBody from "../components/AppBody";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router";
import { getAllTrainingUsers } from "../../actions/learning_provider/lp_users_action";
import { Link } from "react-router-dom";
const JoinedTrainingUserDetails = () => {
  const state = useSelector((state) => state.trainingUserReducer);
  const dispatch = useDispatch();
  let { slug } = useParams();
  useEffect(() => {
    dispatch(getAllTrainingUsers({ slug: slug }));
  }, []);

 
  return (
    <AppBody
      loading={state.loading}
      content={
        <div className="middle-sidebar-left">
          <div className="card w-100 border-0 shadow-xs p-0 mb-4">
            <div className="card-header p-3 w-100 border-0 d-flex rounded-lg">
              <Link to={"/completed-trainings"} className="d-inline-block mt-2">
                <i className="ti-arrow-left font-sm text-white"></i>
              </Link>
              <h4 className="font-xs text-white fw-600 ml-4 mb-0 mt-2">
                Completed Training User
              </h4>
            </div>
            <div className="card-body p-4 w-100 border-0 ">
              <div className="table-responsive">
                <table className="table table-bordered">
                  <thead>
                    <tr>
                      <th>Sr.No</th>
                      <th>User Name</th>
                      <th>Name</th>
                      <th>Date</th>
                      <th>Join Status</th>
                      <th>Min</th>
                    </tr>
                  </thead>
                  <tbody>
                    {state.list &&
                      state.list.map((li, i) => (
                        <tr key={i}>
                          <td>{i + 1}</td>
                          <td>{li.user_name}</td>
                          <td>{li.name}</td>
                          <td>{li.date}</td>
                          <td>{li.join}</td>
                          <td>{li.min > 60 ? Math.floor(li.min / 60) : 0}</td>
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

export default JoinedTrainingUserDetails;
