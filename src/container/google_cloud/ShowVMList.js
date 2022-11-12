import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import AppBody from "../components/AppBody";
import {
  deleteVM,
  getVmList,
  resetStatus,
  startStopMultipleVm,
  updateStartStopVm,
} from "../../actions/google_cloud/gc_action";
import { Link, useNavigate } from "react-router-dom";
const ShowVMList = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const state = useSelector((state) => state.gcReducer);
  useEffect(() => {
    dispatch(getVmList());
    dispatch(resetStatus());
  }, []);

  const handelStartStopClick = (name, status) => {
    dispatch(
      updateStartStopVm({ action: status === 1 ? "stop" : "start", name: name })
    );
  };

  const handelDeleteClick = (name) => {
    dispatch(deleteVM({ name: name }));
  };

  const handelInfoClick = (name) => {
    navigate("/vm-details/" + name);
  };

  const [checkedVMNames, setCheckedVMNames] = useState([]);
  const handelCheckedValue = (e) => {
    var updatedList = [...checkedVMNames];
    if (e.target.checked) {
      updatedList = [...checkedVMNames, e.target.value];
    } else {
      updatedList.splice(checkedVMNames.indexOf(e.target.value), 1);
    }
    setCheckedVMNames(updatedList);
  };

  const startStopsVms = (action) => {
    dispatch(startStopMultipleVm({ action: action, names: checkedVMNames }));
  };

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
                Virtul Machines
              </h4>
              <div className="col text-right pr-0">
                <Link to={"/create-vm"}>
                  <a
                    className="line-height-36 custom-icon mr-2"
                    title="Create VM"
                  >
                    <i className="feather-plus-circle"></i>
                  </a>
                </Link>
                {/* <a className="line-height-36 custom-icon mr-2" title="Start">
                  <i className="feather-play-circle"></i>
                </a>
                <a className="line-height-36 custom-icon mr" title="Stop">
                  <i className="feather-stop-circle"></i>
               </a>*/}

                {/* <Link to={"/create-vm"}>
                <input
                  type="submit"
                  name="submit"
                  value="Create VM"
                  className="approve_btn btn-common mg-l float-right"
                />
              </Link>

              <input
                type="submit"
                name="submit"
                value="Start"
                readOnly={true}
                className="approve_btn btn-common mg-l float-right"
                onClick={() => startStopsVms("start")}
              />

              <input
                type="submit"
                name="submit"
                value="Stop"
                readOnly={true}
                className="approve_btn btn-common mg-l float-right"
                onClick={() => startStopsVms("stop")}
              /> */}
              </div>
            </div>

            {state.is_update && (
              <div className="alert alert-success" role="alert">
                VM Update successfully
              </div>
            )}

            {state.is_delete && (
              <div className="alert alert-success" role="alert">
                VM deleted successfully.
              </div>
            )}

            <div className="card-body p-4 w-100 border-0 ">
              <div className="table-responsive">
                <table className="table table-bordered">
                  <thead>
                    <tr>
                      <th>Sr.No</th>
                      {/* <th>Check</th>*/}
                      <th>VM Name</th>
                      <th>Image</th>
                      <th>Zone</th>
                      <th>Ram</th>
                      <th>Storage</th>
                      <th>Created At</th>
                      <th>Status</th>
                      <th className="tblaction">Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {state.list &&
                      state.list.map((li, i) => (
                        <tr key={i}>
                          <td>{i + 1}</td>
                          {/*  <td>
                            <input
                              type="checkbox"
                              value={li.vm_name}
                              onChange={(e) => handelCheckedValue(e)}
                            />
                          </td>*/}

                          <td>{li.name}</td>
                          <td>{li.image}</td>
                          <td>{li.zone}</td>
                          <td>{li.ram}</td>
                          <td>{li.storage}</td>
                          <td>{li.created}</td>
                          <td>
                            {li.status === 0 && "Create"}
                            {li.status === 1 && "Start"}
                            {li.status === 2 && "Stop"}
                            {li.status === 3 && "Deleted"}
                          </td>

                          <td className="tblaction">
                            <a
                              className="line-height-36 custom-icon mr-2"
                              title="Stop"
                              value={li.status === 1 ? "Stop" : "Start"}
                              onClick={() =>
                                handelStartStopClick(li.vm_name, li.status)
                              }
                            >
                              <i className="feather-stop-circle"></i>
                            </a>
                            {/* <input
                              type="button"
                              value={li.status === 1 ? "Stop" : "Start"}
                              className="btn approve_btn btn-common mg-l"
                              onClick={() =>
                                handelStartStopClick(li.vm_name, li.status)
                              }
                            /> */}
                            <a
                              className="line-height-36 custom-icon mr-2"
                              title="Delete"
                              onClick={() => handelDeleteClick(li.vm_name)}
                            >
                              <i className="feather-trash-2"></i>
                            </a>

                            {/* <input
                              type="button"
                              value="Delete"
                              className="btn approve_btn btn-common mg-l"
                              onClick={() => handelDeleteClick(li.vm_name)}
                            /> */}

                            <a
                              className="line-height-36 custom-icon mr-2"
                              title="Details"
                              onClick={() => handelInfoClick(li.vm_name)}
                            >
                              <i className="feather-info"></i>
                            </a>
                            {/* <input
                              type="button"
                              value="Details"
                              className="btn approve_btn btn-common mg-l"
                              onClick={() => handelInfoClick(li.vm_name)}
                            /> */}

                            <a
                              className="line-height-36 custom-icon"
                              title="Start"
                              onClick={() => navigate("/vm/" + li.vm_name)}
                            >
                              <i className="feather-play-circle"></i>
                            </a>
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
