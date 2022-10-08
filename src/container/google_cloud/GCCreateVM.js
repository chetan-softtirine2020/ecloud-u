import React, { useState, useEffect, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import AppBody from "../components/AppBody";
import {
  gcCreateVM,
  getGCAccountExist,
  resetStatus,
} from "../../actions/google_cloud/gc_action";
import { InstanceImagess, softwares, ZONES } from "../../config/api";
import MultiSelect from "react-multiple-select-dropdown-lite";
import { Navigate } from "react-router-dom";
import "react-multiple-select-dropdown-lite/dist/index.css";
import { gcPayload } from "../../config/gc_payload";
const GCCreateVM = () => {
  const [vm, setVm] = useState({
    image: "",
    protocol: "",
    zone: "",
    count: 1,
    softwares: [],
    storage: "",
    ram: 2,
  });
  const [price, setPrice] = useState("");
  const dispatch = useDispatch();
  const state = useSelector((state) => state.gcReducer);
  useEffect(() => {
    dispatch(resetStatus());
    dispatch(getGCAccountExist());
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(gcCreateVM(vm));
  };

  if (state.is_done) {
    return <Navigate to="/vm-list" />;
  }

  const handleOnchange = (val) => {
    setVm({
      ...vm,
      softwares: val,
    });
  };

  const calculatePrice = (image, storage, ram, noOfvm) => {

    setTimeout(function () {
      const priceData = gcPayload(image, storage, ram, noOfvm);
      if (priceData) {
        setPrice(priceData);
      }
    }, 1000);
  };
  console.log("Is Create" + state.is_created);
  if (state.is_created === false) {
    return <Navigate to="/register-cloud-account" />;
  }
  // if (state.is_created === false) {
  //   return <Navigate to="/register-cloud-account" />;
  // }

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
              <div className="alert alert-warning" role="alert">
                <strong>
                  1) Minimum Ram that should be allocated 2 GB - Linux, 4 GB
                  Windows. <br />
                  2) Minimum Storage that should be allocated 10 GB - Linux, 50
                  GB Windows.
                </strong>
              </div>
              {state.is_done && (
                <div className="alert alert-success" role="alert">
                  VM Created successfully!
                </div>
              )}

              {state.errors.other_error && (
                <div className="alert alert-danger" role="alert">
                  Your token is expire go to authorize and login your account.
                </div>
              )}

              <div className="card-body p-4 w-100 border-0 ">
                <form onSubmit={handleSubmit}>
                  <div className="row">
                    <div className="col-lg-4 mb-2">
                      <div className="form-group">
                        <label className="mont-font fw-600 font-xsss">
                          Image
                        </label>
                        <select
                          className="form-control"
                          name={"image"}
                          id={"image"}
                          onChange={(e) => {
                            setVm({
                              ...vm,
                              image: e.target.value,
                              protocol:
                                e.target.value === "windows" ? "rdp" : "ssh",
                              storage: e.target.value === "windows" ? 50 : 10,
                            });
                            calculatePrice(
                              e.target.value,
                              e.target.value === "windows" ? 50 : 10,
                              e.target.value === "windows" ? 4 : 2,
                              1
                            );
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

                    <div className="col-lg-4 mb-2">
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
                    <div className="col-lg-4 mb-2">
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
                  </div>

                  <div className="row">
                    <div className="col-lg-2 mb-2">
                      <div className="form-group">
                        <label className="mont-font fw-600 font-xsss">
                          No Of VM
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          value={vm.count}
                          onChange={(e) => {
                            setVm({
                              ...vm,
                              count: e.target.value,
                            });
                            calculatePrice(
                              vm.image,
                              vm.storage,
                              vm.ram,
                              e.target.value
                            );
                          }}

                          // onKeyUp={(e) =>
                          //   calculatePrice(
                          //     vm.image,
                          //     vm.storage,
                          //     vm.ram,
                          //     e.target.value
                          //   )
                          // }
                        />
                        <span className="error-msg">
                          {state.errors ? state.errors.count : ""}
                        </span>
                      </div>
                    </div>

                    <div className="col-lg-3 mb-2">
                      <div className="form-group">
                        <label className="mont-font fw-600 font-xsss">
                          Storage{" "}
                          {vm.image === "windows" ? "(Min 50GB)" : "(Min 10GB)"}
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          value={vm.storage}
                          onChange={(e) => {
                            setVm({
                              ...vm,
                              storage: e.target.value,
                            });
                          }}
                          onKeyUp={(e) =>
                            calculatePrice(
                              vm.image,
                              e.target.value,
                              vm.ram,
                              vm.count
                            )
                          }
                        />
                        <span className="error-msg">
                          {state.errors ? state.errors.storage : ""}
                        </span>
                      </div>
                    </div>

                    <div className="col-lg-3 mb-2">
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
                            calculatePrice(
                              vm.image,
                              vm.storage,
                              e.target.value,
                              vm.count
                            );
                            //courseOnChnage(e.target.value);
                            //setCourse(e.target.value);
                          }}
                        >
                          <option
                            value={2}
                            selected={vm.image === "ubuntu" && true}
                            key={3}
                          >
                            2
                          </option>
                          <option
                            value={4}
                            key={4}
                            selected={vm.image === "windows" && true}
                          >
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
                    <div className="col-lg-6 mb-2">
                      <span>
                        <strong>STORAGE PER GB MONTH</strong>:${" "}
                        {price && price.totalStoragePrice}
                      </span>
                    </div>

                    <div className="col-lg-6 mb-2">
                      <span>
                        <strong>CPU Price(Hour/USD)</strong>: $
                        {price && price.vmPerMonthPrice}
                      </span>
                    </div>

                    {/*<div className="col-lg-4 mb-2">
                      <span>
                        <strong>Total Per Month</strong>: $
                      </span>
                        </div>*/}
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
