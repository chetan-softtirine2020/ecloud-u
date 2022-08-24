import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import AppBody from "../../components/AppBody";
import { getOrgSubAdminRequestList } from "../../../actions/admin/admin_users_action";

const OrgSubAdminList = () => {
  const state = useSelector((state) => state.adminUsersReducer);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getOrgSubAdminRequestList({ type: 1 }));
  }, []);

  return (
    <AppBody
      loading={state.loading}
      content={
        <div className="middle-sidebar-left">
          <div className="card w-100 border-0 shadow-xs p-0 mb-4">
            <div className="card-header p-4 w-100 border-0 d-flex rounded-lg">
              <h4 className="font-xs text-white fw-600 ml-4 mb-0 mt-2">
                Org Sub Admin List
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
                      <th>Org Name</th>
                      <th>Line Of Business</th>
                    </tr>
                  </thead>
                  <tbody>
                    {state.list &&
                      state.list.map((li, i) => (
                        <tr key={i}>
                          <td>{i + 1}</td>
                          <td>{li.first_name + " " + li.last_name}</td>
                          <td>{li.email}</td>
                          <td>{li.oname}</td>
                          <td>{li.lob}</td>
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

export default OrgSubAdminList;
