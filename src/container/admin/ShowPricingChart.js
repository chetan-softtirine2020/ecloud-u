import React, { useEffect } from "react";
import AppBody from "../components/AppBody";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { getVMPricing } from "../../actions/google_cloud/gc_action";
const ShowPricingChart = () => {
  const state = useSelector((state) => state.gcReducer);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getVMPricing());
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
                VM Pricing Chart
              </h4>
            </div>
            <div className="card-body p-4 w-100 border-0 ">
              <div className="table-responsive">
                <table class="table table-bordered">
                  <thead>
                    <tr>
                      <th>Sr.No</th>
                      <th>Ram</th>
                      <th>CPU</th>
                      <th>Windows</th>
                      <th>Ubuthu/Linux</th>
                      <th>Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {state.vm_pricing &&
                      state.vm_pricing.map((li, i) => (
                        <tr key={i}>
                          <td>{i + 1}</td>
                          <td>{li.memory}</td>
                          <td>{li.virtual_cpu}</td>
                          <td>{li.windows}</td>
                          <td>{li.linux}</td>
                          <td>
                            <input
                              type="button"
                              title={"Update Price"}
                              value={"Update"}
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

export default ShowPricingChart;
