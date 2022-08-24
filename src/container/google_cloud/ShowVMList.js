import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import AppBody from "../components/AppBody";
import { gcCreateVM, getVmList, resetStatus } from "../../actions/google_cloud/gc_action";
import { Link } from "react-router-dom";
const ShowVMList = () => {
 
  const dispatch = useDispatch();
  const state = useSelector((state) => state.gcReducer);
  useEffect(() => {
     dispatch(getVmList());
    dispatch(resetStatus());
  }, []);

   const handelActiveClick = (slug) => {
      // dispatch()   
   };

  if (state.is_done) {
    // setPassword({
    //   current_password: "",
    //   password: "",
    //   password_confirmation: "",
    // });
    // return <Navigate to="/change-password" />;
  }
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
                VMs List
              </h4>
            </div>
            <div className="card-body p-4 w-100 border-0 ">
              <div className="table-responsive">
                <table className="table table-bordered">
                  <thead>
                    <tr>
                      <th>Sr.No</th>
                      <th>VM Name</th>
                      <th>Image</th>
                      <th>Ram</th>
                      <th>Zone</th>
                      <th>Storage</th>
                       {/* <th>Description</th>*/}
                      <th className="tblaction">Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {state.list &&
                      state.list.map((li, i) => (
                        <tr key={i}>
                          <td>{i + 1}</td>
                          <td>{li.vm_name}</td>
                          <td>{li.image}</td>
                          <td>{li.zone}</td>
                          <td>{li.ram}</td>
                          <td>{li.storage}</td>
                          <td>
                            {li.status === 0 && "Create"}
                            {li.status === 1 && "Start"}
                            {li.status === 2 && "Stop"}
                          </td>
                           <td className="tblaction">                       
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

export default ShowVMList;
