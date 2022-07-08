import React, { useEffect } from "react";
import AppBody from "../components/AppBody";
import { useSelector, useDispatch } from "react-redux";
import { getAllOrganization } from "../../actions/admin/admin_org_action";
import { Link } from "react-router-dom";
const ShowAllOrg = () => {
  const state = useSelector((state) => state.adminOrgReducer);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllOrganization());
  }, []);

  const handelClick = (status) => {
    console.log(status);
  };
  return (
    <AppBody
      loading={state.loading}
      content={
        <div className="middle-sidebar-left">
          <div className="card w-100 border-0 bg-white shadow-xs p-0 mb-4">
            <div className="card-body p-3 w-100 bg-current border-0 d-flex rounded-lg">
            <Link to={"/admin/home"} className="d-inline-block mt-2">
            <i className="ti-arrow-left font-sm text-white"></i>
            </Link>
              <h4 className="font-xs text-white fw-600 ml-4 mb-0 mt-2">
                All Organizations
              </h4>
            </div>
            <div className="card-body p-4 w-100 border-0 ">
            <div className="table-responsive">
              <table class="table table-bordered">
                <thead>
                  <tr>
                    <th>Sr.No</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Description</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {state.list &&
                    state.list.map((li, i) => (
                      <tr key={i}>
                        <td>{i + 1}</td>
                        <td>{li.name}</td>
                        <td>{li.email}</td>
                        <td>{li.description}</td>
                        <td>                        
                          <input
                            type="button"
                            title={li.status===1?"Make Inactive":"Make Active"}
                            value={li.status===1?"Inactive":"Active"}
                            className="btn approve_btn btn-common"
                            onClick={() => handelClick(li.slug)}
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

export default ShowAllOrg;
