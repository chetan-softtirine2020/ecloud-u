import React, { useEffect } from "react";
import AppBody from "../components/AppBody";
import { useSelector, useDispatch } from "react-redux";
import {
  getAllNewOrganization,
  updateApproveOrganization,
} from "../../actions/admin/admin_org_action";
import {Link, useNavigate} from "react-router-dom";
import { redirectUser } from "../../config/redirect";
const NewRegisterOrganizations = () => {
  const state = useSelector((state) => state.adminOrgReducer);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  useEffect(() => {
    dispatch(getAllNewOrganization());
  }, []);

  const handelClick = (id, status) => {
    dispatch(updateApproveOrganization({ org_id: id, is_approved: status }));
  };
   if(state.is_done){
    navigate("/admin/organizations");
   }
   if (localStorage.getItem("token")) {
     redirectUser();   
   }
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
            
            <a href="default-settings.html" className="d-inline-block mt-2">
                <i className="ti-arrow-left font-sm text-white"></i>
              </a>
              <h4 className="font-xs text-white fw-600 ml-4 mb-0 mt-2">
                Approve Organizations
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
                    <th>Status</th>
                    <th>Approve</th>
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
                        <td>{li.is_approved === 1 ? "Approved" : "Approve"}</td>
                        <td>
                          <input
                            type="button"
                            value={"Yes"}
                            className="btn approve_btn"
                            onClick={() => handelClick(li.id, 1)}
                          />
                          <input
                            type="button"
                            value={"No"}
                            className="btn approve_btn"
                            onClick={() => handelClick(li.id, 0)}
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

export default NewRegisterOrganizations;
