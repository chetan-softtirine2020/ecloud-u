import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useCallback } from "react";
import useRazorpay from "react-razorpay";
import logo1 from "../../images/logo/logo.svg";
import AppBody from "../components/AppBody";
import {
  authorizeGCAccount,
  resetStatus,
  saveVMPaymentData,
  vmPaymentData,
} from "../../actions/google_cloud/gc_action";
const MakeVmBillings = () => {
 
  const dispatch = useDispatch();
  const state = useSelector((state) => state.gcReducer);
  useEffect(() => {
    dispatch(resetStatus());
    dispatch(vmPaymentData());
  }, []);

  const Razorpay = useRazorpay();
  const handlePayment = useCallback(() => {
    const amount = parseInt(state.totalCost) * 100;
    // rzp_live_LBhcmmFsc8Hnor live key

    const options = {
      key: "rzp_test_mwDrzPSZ8YAWXy",
      amount: 10 * 100,
      currency: "INR",
      name: "Educloudlabs",
      description: "Transaction",
      image: logo1,
      handler: (res) => {
        dispatch(
          saveVMPaymentData({
            payment_id: res.razorpay_payment_id,
          })
        );
      },
      prefill: {
        name: state.userDetails.first_name + " " + state.userDetails.last_name,
        email: state.userDetails.email,
        contact: state.userDetails.mobile_no,
      },
      notes: {
        address: "Educloudlabs Office",
      },
      theme: {
        color: "#3399cc",
      },
    };

    const rzpay = new Razorpay(options);
    rzpay.open();
  }, [Razorpay]);

  return (
    <AppBody
      loading={state.loading}
      content={
        <div className="middle-sidebar-left">
          <div className="">
            <div className="card">
              <div className="card-header p-3 w-100 border-0 d-flex rounded-lg">
                <h4 className="font-xs text-white fw-600 ml-4 mb-0 mt-2">
                  Pay VM Billing
                </h4>
              </div>

              {state.errors && state.errors.other_error && (
                <div className="alert alert-danger" role="alert">
                  {state.errors.other_error}
                </div>
              )}
              <div className="card-body p-4 w-100 border-0 ">
                <div className="row">
                  <div className="col-lg-6 my-3">
                    <h1 className="text-white">Cost: {state.totalCost}</h1>
                  </div>

                  <div className="col-lg-6 my-3">
                    <input
                      type="submit"
                      name="submit"
                      value="Pay"
                      disabled={parseFloat(state.totalCost) > 0 ? false : true}
                      className="btn-common px-5"
                      onClick={() => handlePayment()}
                    />
                  </div>
                </div>

                <div className="row">
                  <div className="col-lg-12 my-3">
                    <h2 className="text-white text-center">Details</h2>
                  </div>
                </div>
                <div className="table-responsive">
                  <table className="table table-bordered">
                    <thead>
                      <tr>
                        <th>Sr.No</th>
                        <th>VM Name</th>
                        <th>User Name</th>
                        <th>Start</th>
                        <th>End</th>
                        <th>Used Time</th>
                        <th>Cost</th>
                      </tr>
                    </thead>
                    <tbody>
                      {state.paymentData && state.paymentData.length !== 0 ? (
                        state.paymentData.map((li, i) => (
                          <tr key={i}>
                            <td>{i + 1}</td>
                            <td>{li.vm_name}</td>
                            <td>{li.first_name + " " + li.last_name}</td>
                            <td>{li.vm_start === null ? "-" : li.vm_start}</td>
                            <td>{li.vm_stop === null ? "-" : li.vm_stop}</td>
                            <td>{li.used_min}</td>
                            <td>{li.cost}</td>
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
        </div>
      }
    />
  );
};

export default MakeVmBillings;
