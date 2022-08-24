import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import AppBody from "../components/AppBody";
import { gcCreateVM, resetStatus } from "../../actions/google_cloud/gc_action";
import { InstanceImagess, softwares, ZONES } from "../../config/api";
import MultiSelect from "react-multiple-select-dropdown-lite";
import "react-multiple-select-dropdown-lite/dist/index.css";
const GCCreateVM = () => {
  const [vm, setVm] = useState({
    image: "",
    protocol: "",
    zone: "",
    count: 1,
    softwares: [1],
    storage: "",
    ram: 2,
  });

  const dispatch = useDispatch();
  const state = useSelector((state) => state.gcReducer);
  useEffect(() => {
    dispatch(resetStatus());
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(gcCreateVM(vm));
  };

  if (state.is_done) {
    // setPassword({
    //   current_password: "",
    //   password: "",
    //   password_confirmation: "",
    // });
    // return <Navigate to="/change-password" />;
  }

  const handleOnchange = (val) => {
    setVm({
      ...vm,
      softwares: val.split(","),
    });
  };


  return (
    <AppBody
      loading={state.loading}
      content={
        <div className="middle-sidebar-left">
          <div className="">
            <div className="card">
              <div className="card-header p-3 w-100 border-0 d-flex rounded-lg">
                <h4 className="font-xs text-white fw-600 ml-4 mb-0 mt-2">
                  Create Virtul Machines
                </h4>
              </div>
              {state.is_done && (
                <div className="alert alert-success" role="alert">
                  VM Created successfully!
                </div>
              )}
              <div className="card-body p-4 w-100 border-0 ">
                <form onSubmit={handleSubmit}>
                  <div className="row">
                    <div className="col-lg-6 mb-2">
                      <div className="form-group">
                        <label className="mont-font fw-600 font-xsss">
                          Image
                        </label>
                        <select
                          className="form-control"
                          name={"image"}
                          onChange={(e) => {
                            setVm({
                              ...vm,
                              image: e.target.value,
                              protocol:
                                e.target.value === "windows" ? "rdp" : "ssh",
                              storage: e.target.value === "windows" ? 50 : 10,
                            });
                          }}
                        >
                          <option value={""}>Select Image</option>
                          {InstanceImagess &&
                            InstanceImagess.map((li, i) => (
                              <option value={li.value} key={i + 1}>
                                {li.name}
                              </option>
                            ))}
                        </select>
                        <span className="error-msg">
                          {state.errors ? state.errors.image : ""}
                        </span>
                      </div>
                    </div>

                    <div className="col-lg-6 mb-2">
                      <div className="form-group">
                        <label className="mont-font fw-600 font-xsss">
                          Protocols
                        </label>
                        <input
                          type="text"
                          readOnly={true}
                          className="form-control"
                          value={vm.image === "windows" ? "rdp" : "ssh"}
                        />
                        <span className="error-msg">
                          {state.errors ? state.errors.protocol : ""}
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="row">
                    <div className="col-lg-6 mb-2">
                      <div className="form-group">
                        <label className="mont-font fw-600 font-xsss">
                          Select Zone
                        </label>
                        <select
                          className="form-control"
                          name={"image"}
                          onChange={(e) => {
                            setVm({
                              ...vm,
                              zone: e.target.value,
                            });
                            //courseOnChnage(e.target.value);
                            //setCourse(e.target.value);
                          }}
                        >
                          <option value={""}>Select Zone</option>
                          {ZONES &&
                            ZONES.map((li, i) => (
                              <option value={li.value} key={i + 1}>
                                {li.name}
                              </option>
                            ))}
                        </select>
                        <span className="error-msg">
                          {state.errors ? state.errors.zone : ""}
                        </span>
                      </div>
                    </div>

                    <div className="col-lg-6 mb-2">
                      <div className="form-group">
                        <label className="mont-font fw-600 font-xsss">
                          No Of VM
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          value={vm.count}
                          onChange={(e) =>
                            setVm({
                              ...vm,
                              count: e.target.value,
                            })
                          }
                        />
                        <span className="error-msg">
                          {state.errors ? state.errors.count : ""}
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="row">
                    <div className="col-lg-4 mb-2">
                      <div className="form-group">
                        <label className="mont-font fw-600 font-xsss">
                          Storage{" "}
                          {vm.image === "windows" ? "(Min 50GB)" : "(Min 10GB)"}
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          value={vm.storage}
                          onChange={(e) =>
                            setVm({
                              ...vm,
                              storage: e.target.value,
                            })
                          }
                        />
                        <span className="error-msg">
                          {state.errors ? state.errors.storage : ""}
                        </span>
                      </div>
                    </div>

                    <div className="col-lg-4 mb-2">
                      <div className="form-group">
                        <label className="mont-font fw-600 font-xsss">
                          Ram (GB)
                        </label>
                        <select
                          className="form-control"
                          name={"ram"}
                          onChange={(e) => {
                            setVm({
                              ...vm,
                              ram: e.target.value,
                            });
                            //courseOnChnage(e.target.value);
                            //setCourse(e.target.value);
                          }}
                        >
                          <option value={0.5} key={1}>
                            0.5
                          </option>
                          <option value={2} key={3}>
                            2
                          </option>
                          <option value={4} key={4}>
                            4
                          </option>
                          <option value={8} key={5}>
                            8
                          </option>
                          <option value={16} key={6}>
                            16
                          </option>
                          <option value={32} key={7}>
                            32
                          </option>
                          <option value={64} key={8}>
                            64
                          </option>
                        </select>
                        <span className="error-msg">
                          {state.errors ? state.errors.ram : ""}
                        </span>
                      </div>
                    </div>

                    <div className="col-lg-4 mb-2">
                      <div className="form-group">
                        <label className="mont-font fw-600 font-xsss">
                          Softwares
                        </label>
                        <MultiSelect
                          onChange={handleOnchange}
                          options={softwares}
                        />
                      </div>
                    </div>
                  </div>

                  <div className="row">
                    <div className="col-lg-12 my-3">
                      <input
                        type="submit"
                        name="submit"
                        value="Submit"
                        className="btn-common px-5"
                      />
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      }
    />
  );
};

export default GCCreateVM;
