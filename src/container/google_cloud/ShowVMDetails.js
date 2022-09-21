import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import AppBody from "../components/AppBody";
import {
  getVmDetails,
  resetStatus,
} from "../../actions/google_cloud/gc_action";
import { Link, useParams } from "react-router-dom";
const ShowVMDetails = () => {
  const dispatch = useDispatch();
  const state = useSelector((state) => state.gcReducer);
  const name = useParams();

  useEffect(() => {
    dispatch(getVmDetails(name));
    dispatch(resetStatus());
  }, []);

  return (
    <AppBody
      loading={state.loading}
      content={
        <div className="middle-sidebar-left">
          <div className="card w-100 border-0 shadow-xs p-0 mb-4">
            <div className="card-header p-3 w-100 border-0 d-flex rounded-lg">
              <Link to={"/create-training"} className="d-inline-block mt-2">
                <i className="ti-arrow-left font-sm text-white"></i>
              </Link>
              <h4 className="font-xs text-white fw-600 ml-4 mb-0 mt-2">
                VM Used Details
              </h4>
            </div>
            <div className="card-body p-4 w-100 border-0 ">
              <div className="table-responsive">
                <table className="table table-bordered">
                  <thead>
                    <tr>
                      <th>Sr.No</th>
                      <th>User Name</th>
                      <th>Start</th>
                      <th>End</th>
                      <th>Used Time</th>
                      <th>Cost</th>
                      <th>Status</th>                     
                    </tr>
                  </thead>
                  <tbody>
                    {state.vm_details && state.vm_details.length!==0 ?
                      state.vm_details.map((li, i) => (
                        <tr key={i}>
                          <td>{i + 1}</td>
                          <td>{li.first_name + " " + li.last_name}</td>
                          <td>{li.vm_start === null ? "-" : li.vm_start}</td>
                          <td>{li.vm_stop === null? "-" : li.vm_stop}</td>
                          <td>{li.used_min}</td>
                          <td>{li.cost}</td>
                          <td>
                            {li.status === 1 && "Assgin"}
                            {li.status === 2 && "Start"}
                            {li.status === 3 && "Stop"}
                          </td>
                         </tr>
                      ))   
                      :                     
                     <h1 className={"no-data-found"}>No Data Found</h1>
                    }
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

export default ShowVMDetails;
