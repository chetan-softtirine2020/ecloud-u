import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { getLPUDashboarData } from "../../../actions/learning_provider/provider_user/training_action";
import AppBody from "../../components/AppBody";

const ProviderUserDashboard = () => {
  const state = useSelector((state) => state.puTrainingReducer);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getLPUDashboarData());
  }, []);
  console.log(state);

  return (
    <AppBody
      content={
        <div className="middle-sidebar-left lrn-provider">
          {state && !state.loading && state.d_vm_data && (
            <div className="row">
              <div className="col-lg-12">
                <h1 className="dash-heading">Virtual Machine</h1>
                <div className="col-lg-4 mt-3">
                  <div className="card bg-theme-color shadow-lg">
                    <div className="card-header">
                      <div className="row">
                        <div className="col-7">
                          <h4 className="fw-700 font-xss my-1">
                            <Link
                              to={"/vm/" + state.d_vm_data.vm_name}
                              className="text-grey-900"
                            >
                              Start VM
                            </Link>
                          </h4>
                        </div>
                        <div className="col-5 pl-0">
                          <Link
                            to={"/vm/" + state.d_vm_data.vm_name}
                            className="btn-common"
                          >
                            Start VM
                          </Link>
                        </div>
                      </div>
                    </div>
                    <div className="card-body p-2">
                      <div className="row">
                        <div className="col-12">
                          <span>
                            <strong>Assing Date:</strong>
                          </span>
                          <span> {state.d_vm_data.created_at}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      }
    />
  );
};

export default ProviderUserDashboard;
