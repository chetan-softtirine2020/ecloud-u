import React, { useState, useEffect } from "react";
import AppBody from "../../components/AppBody";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import { Link, useNavigate } from "react-router-dom";

const AddSubAdmin = () => {
  const state = useSelector((state) => state.trainingUserReducer);
  const [department, setDepartment] = useState("");
  const [show, setShow] = useState(false);
  const departmentOnChnage = (id) => {
    //get department  wise barnch
  };

  const clickOnAdd = (act) => {
    setShow(act);
  };

  const [user, setUser] = useState({
    first_name: "",
    last_name: "",
    mobile_no: "",
    email: "",
  });

  return (
    <AppBody
      loading={state.loading}
      content={
        <div className="middle-sidebar-left">
          <div className="">
            <div className="card">
              <div className="card-header p-3 w-100 border-0 d-flex rounded-lg">
                <Link to={"/all-trainings"} className="d-inline-block mt-2">
                  <i className="ti-arrow-left font-sm text-white"></i>
                </Link>
                <h4 className="font-xs text-white fw-600 ml-4 mb-0 mt-2">
                  Create Admin
                </h4>
              </div>
              <div className="card-body  p-4 w-100 border-0 ">
                <form enctype="multipart/form-data">
                  <div className="row">
                    <div className="col-lg-4 mb-3">
                      <div className="form-group">
                        <label className="mont-font fw-600 font-xsss">
                          Select Barnch Name
                        </label>
                        <select
                          className="form-control"
                          name={"barnch_id"}
                          onChange={(e) => {
                            departmentOnChnage(e.target.value);
                            setDepartment(e.target.value);
                          }}
                        >
                          <option value={""}>Select Banrch</option>
                          {state.branchList &&
                            state.branchList.map((li, i) => (
                              <option value={li.id} key={i + 1}>
                                {li.name}
                              </option>
                            ))}
                        </select>
                        <span className="error-msg">
                          {state.errors.barnch_id ? state.errors.barnch_id : ""}
                        </span>
                      </div>
                    </div>

                    <div className="col-lg-2 pt-2">
                      <input
                        type="button"
                        name="submit"
                        value="Add New"
                        onClick={() => clickOnAdd(1)}
                        className="btn-common px-3 mt-30"
                      />
                    </div>

                    <div className="col-lg-4 mb-3">
                      <div className="form-group">
                        <label className="mont-font fw-600 font-xsss">
                          Select Department Name
                        </label>
                        <select
                          className="form-control"
                          name={"department_id"}
                          onChange={(e) => {
                            departmentOnChnage(e.target.value);
                            setDepartment(e.target.value);
                          }}
                        >
                          <option value={""}>Select Department</option>
                          {state.departmentList &&
                            state.departmentList.map((li, i) => (
                              <option value={li.id} key={i + 1}>
                                {li.name}
                              </option>
                            ))}
                        </select>
                        <span className="error-msg">
                          {state.errors.department_id
                            ? state.errors.department_id
                            : ""}
                        </span>
                      </div>
                    </div>

                    <div className="col-lg-2 pt-2">
                      <input
                        type="button"
                        name="submit"
                        value="Add New"
                        onClick={() => clickOnAdd(1)}
                        className="btn-common px-3 mt-30"
                      />
                    </div>
                  </div>

                  <div className="row">
                    <div className="col-lg-4 mb-3">
                      <div className="form-group">
                        <label className="mont-font fw-600 font-xsss">
                          Select Section/Division
                        </label>
                        <select
                          className="form-control"
                          name={"barnch_id"}
                          onChange={(e) => {
                            departmentOnChnage(e.target.value);
                            setDepartment(e.target.value);
                          }}
                        >
                          <option value={""}>Select Section/Division</option>
                          {state.sectionList &&
                            state.sectionList.map((li, i) => (
                              <option value={li.id} key={i + 1}>
                                {li.name}
                              </option>
                            ))}
                        </select>
                        <span className="error-msg">
                          {state.errors.section_id
                            ? state.errors.section_id
                            : ""}
                        </span>
                      </div>
                    </div>

                    <div className="col-lg-2 pt-2">
                      <input
                        type="button"
                        name="submit"
                        value="Add New"
                        onClick={() => clickOnAdd(1)}
                        className="btn-common px-3 mt-30"
                      />
                    </div>
                  </div>

                  <div className="row">
                    <div className="col-lg-6 mb-3">
                      <div className="form-group">
                        <label className="mont-font fw-600 font-xsss">
                          First Name
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          value={user.first_name}
                          onChange={(e) =>
                            setUser({ ...user, first_name: e.target.value })
                          }
                        />
                        <span className="error-msg">
                          {state.errors.first_name
                            ? state.errors.first_name
                            : ""}
                        </span>
                      </div>
                    </div>

                    <div className="col-lg-6 mb-3">
                      <div className="form-group">
                        <label className="mont-font fw-600 font-xsss">
                          Last Name
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          value={user.last_name}
                          onChange={(e) =>
                            setUser({ ...user, last_name: e.target.value })
                          }
                        />
                        <span className="error-msg">
                          {state.errors.last_name ? state.errors.last_name : ""}
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="row">
                    <div className="col-lg-6 mb-3">
                      <div className="form-group">
                        <label className="mont-font fw-600 font-xsss">
                          Email
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          value={user.email}
                          onChange={(e) =>
                            setUser({ ...user, email: e.target.value })
                          }
                        />
                        <span className="error-msg">
                          {state.errors.email ? state.errors.email : ""}
                        </span>
                      </div>
                    </div>

                    <div className="col-lg-6 mb-3">
                      <div className="form-group">
                        <label className="mont-font fw-600 font-xsss">
                          Mobile No
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          value={user.mobile_no}
                          onChange={(e) =>
                            setUser({ ...user, mobile_no: e.target.value })
                          }
                        />
                        <span className="error-msg">
                          {state.errors.mobile_no ? state.errors.mobile_no : ""}
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="row">
                    <div className="col-lg-12">
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

export default AddSubAdmin;
