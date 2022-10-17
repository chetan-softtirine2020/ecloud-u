import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import AppBody from "../components/AppBody";
import {
  resetStatus,
  vmPaymentHirstory,
} from "../../actions/google_cloud/gc_action";
import { Link} from "react-router-dom";
const VMPaymentHistory = () => {
  const dispatch = useDispatch();
  const state = useSelector((state) => state.gcReducer);

  useEffect(() => {
    dispatch(vmPaymentHirstory());
    dispatch(resetStatus());
  }, []);

  return (
    <AppBody
      loading={state.loading}
      content={
        <div className="middle-sidebar-left">
          <div className="card w-100 border-0 shadow-xs p-0 mb-4">
            <div className="card-header p-3 w-100 border-0 d-flex rounded-lg">
              <Link to={"/vm-list"} className="d-inline-block mt-2">
                <i className="ti-arrow-left font-sm text-white"></i>
              </Link>
              <h4 className="font-xs text-white fw-600 ml-4 mb-0 mt-2">
                VM Payment History
              </h4>
            </div>
            <div className="card-body p-4 w-100 border-0 ">
              <div className="table-responsive">
                <table className="table table-bordered">
                  <thead>
                    <tr>
                      <th>Sr.No</th>
                      <th>Payment Id</th>
                      <th>Date</th>
                      <th>Amount</th>
                      <th>Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    {state.paymentHistory &&
                     state.paymentHistory.length !== 0 ? (
                      state.paymentHistory.map((li, i) => (
                        <tr key={i}>
                          <td>{i + 1}</td>
                          <td>{li.payment_id}</td>
                          <td>{li.created_at}</td>
                          <td>{li.amount}</td>
                          <td>
                            {li.status === 1 && "Success"}
                            {li.status === 2 && "Failed"}
                            {li.status === 3 && "Pending"}
                          </td>
                        </tr>
                      ))
                    ) : (
                      <h1 className={"no-data-found"}>No Data Found</h1>
                    )}
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

export default VMPaymentHistory;
