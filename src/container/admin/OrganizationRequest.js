import React, { useEffect } from "react";
import AppBody from "../components/AppBody";
import { useSelector, useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { getAllOrganization } from "../../actions/organization/org_action";
const OrganizationRequest = () => {
  const state = useSelector((state) => state.organizationReducer);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  useEffect(() => {
    dispatch(getAllOrganization());
  }, []);

  const handelClick = (id) => {
    // navigate("/add-training-user");
    // return < to="/add-training-user"/>
  };

  return (
    <AppBody
      loading={state.loading}
      content={
        <div className="middle-sidebar-left">
          <div className="card w-100 border-0 bg-white shadow-xs p-0 mb-4">
            <div className="card-body p-4 w-100 bg-current border-0 d-flex rounded-lg">
              <Link to={"/admin/home"} className="d-inline-block mt-2">
                <i className="ti-arrow-left font-sm text-white"></i>
              </Link>

              <h4 className="font-xs text-white fw-600 ml-4 mb-0 mt-2">
                Organizations
              </h4>
            </div>
            <div className="card-body p-lg-5 p-4 w-100 border-0 ">
              <div className="table-responsive">
                <table class="table table-bordered">
                  <thead>
                    <tr>
                      <th>Sr.No</th>
                      <th>Name</th>
                      <th>Email</th>
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
                          <td>
                            <input
                              type="button"
                              value="Approve"
                              className="btn approve_btn btn-common"
                              onClick={() => handelClick(li.id)}
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

export default OrganizationRequest;
