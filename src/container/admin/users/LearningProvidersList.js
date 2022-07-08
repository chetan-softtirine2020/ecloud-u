import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

import AppBody from "../../components/AppBody";
import { getAdminUsersList } from "../../../actions/admin/admin_users_action";
const LearningProvidersList = () => {
  const state = useSelector((state) => state.adminUsersReducer);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  useEffect(() => {
    dispatch(getAdminUsersList({ role: 3 }));
  }, []);

  const handelShowProviserUser = (slug) => {
    navigate("/admin/learning-provider-users-list/" + slug);
  };

  return (
    <AppBody
      loading={state.loading}
      content={
        <div className="middle-sidebar-left">
          <div className="card w-100 border-0 shadow-xs p-0 mb-4">
            <div className="card-header p-4 w-100 border-0 d-flex rounded-lg">
              <h4 className="font-xs text-white fw-600 ml-4 mb-0 mt-2">
                Learning Providers
              </h4>
            </div>
            <div className="card-body  p-4 w-100 border-0 ">
              <div className="table-responsive">
                <table class="table table-bordered">
                  <thead>
                    <tr>
                      <th>Sr.No</th>
                      <th>Name</th>
                      <th>Email</th>
                      <th>Mobile</th>
                      <th>Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {state.list &&
                      state.list.map((li, i) => (
                        <tr key={i}>
                          <td>{i + 1}</td>
                          <td>{li.first_name + " " + li.last_name}</td>
                          <td>{li.email}</td>
                          <td>{li.mobile_no}</td>
                          <td>
                            <input
                              type="button"
                              value="View Users"
                              className="btn approve_btn btn-common mg-l"
                              onClick={() => handelShowProviserUser(li.slug)}
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

export default LearningProvidersList;
