import React, { useState, useEffect } from "react";
import AppBody from "../components/AppBody";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "react-bootstrap";
import { Modal } from "react-bootstrap";
import { useForm } from "react-hook-form";
import templte from "../../templete/template.xlsx";
import {
  getCountOfVirtualMachine,
  addVMTrainingUser,
  importVMTrainingUser,
} from "../../actions/google_cloud/gc_action";
const AssignUserToVM = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  useEffect(() => {
    dispatch(getCountOfVirtualMachine());
  }, []);

  const state = useSelector((state) => state.gcReducer);
  const [user, setUser] = useState({
    first_name: "",
    last_name: "",
    mobile_no: "",
    email: "",
    file: [],
    is_file: false,
  });

  const handleFormSubmit = (e) => {
    e.preventDefault();
    dispatch(addVMTrainingUser(user));
  };

  if (state.is_done) {
    navigate("/vm-list");
  }

  const onSubmit = (data) => {
    setUser({ is_file: true });
    const formData = new FormData();
    formData.append("file", data.file[0]);
    dispatch(importVMTrainingUser(formData));
  };

  const [show, setShow] = useState(false);
  const handleClose = () => {
    setShow(false);
    setUser({ is_file: false });
  };

  if (state.errors.length > 0 && user.is_file && !show) {
    setShow(true);
  }

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
                  Assign VM To User
                </h4>
              </div>
              {show ? (
                <Modal show={show} onHide={handleClose}>
                  <Modal.Header closeButton>
                    <Modal.Title>Errors</Modal.Title>
                  </Modal.Header>
                  <Modal.Body className="err-model-body">
                    {state.errors &&
                      state.errors.map((li, i) => (
                        <h4 key={i} className={"error-msg"}>
                          {"Row " +
                            li.row +
                            " " +
                            li.attribute +
                            " " +
                            li.errors}{" "}
                        </h4>
                      ))}
                  </Modal.Body>
                  <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                      Close
                    </Button>
                  </Modal.Footer>
                </Modal>
              ) : (
                <div />
              )}

              <div className="card-body  p-4 w-100 border-0 ">
                <form
                  onSubmit={handleSubmit(onSubmit)}
                  enctype="multipart/form-data"
                >
                  <div class="alert alert-warning">
                    <strong>
                      {state.vm_count} Virtual Machines are available so you can
                      Add only in Excel Sheet only {state.vm_count} Users.
                    </strong>
                  </div>

                  <div class="alert alert-success">
                    <strong>
                      You can add singal user at time, Other wise you can upload
                      excel sheet. First download template add user data.
                    </strong>
                    (column name must be firstname,lastname,mobileno,email)
                  </div>

                  <h1 className="text-white">Import Excel </h1>
                  <div className={"row"}>
                    <div className="col-lg-6 mb-2">
                      <label className="mont-font fw-600 font-xsss">
                        Upload File
                      </label>
                      <div class="custom-file">
                        <input
                          type="file"
                          class="custom-file-input"
                          //accept=".xls, .xlsx"
                          {...register("file", { required: true })}
                        />
                        <label class="custom-file-label" htmlFor="customFile">
                          Choose file
                        </label>

                        <span className="error-msg">
                          {state.errors.other_error
                            ? state.errors.other_error
                            : ""}
                        </span>
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <input
                        type="submit"
                        name="submit"
                        value="Upload"
                        readOnly={true}
                        className="btn-common px-5 mt-30"
                      />
                      <a
                        className="btn-common px-5 mt-30 temp-btn"
                        href={templte}
                        download
                        title={"Doownload excel file template"}
                        style={{ margin: "4px", padding: "12.5px" }}
                      >
                        <i class="fa fa-download"></i>
                        Download
                      </a>
                    </div>
                    <div className="col-lg-3"></div>
                  </div>
                </form>

                <h1 className="mt-2 text-white">Add Single </h1>
                <form onSubmit={handleFormSubmit}>
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

export default AssignUserToVM;
