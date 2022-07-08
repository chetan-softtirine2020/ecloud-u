import React, { useState } from "react";
import AppBody from "../components/AppBody";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import { Link, useNavigate } from "react-router-dom";
import {
  addUserTraining,
  importUserTraining,
} from "../../actions/learning_provider/lp_users_action";
import { Button } from "react-bootstrap";
import { Modal } from "react-bootstrap";
import { useForm } from "react-hook-form";

const AddOrgSubAdmin = () => {
  let { slug } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const state = useSelector((state) => state.trainingUserReducer);
  const [addType, setAddType] = useState("");

  const [user, setUser] = useState({
    first_name: "",
    last_name: "",
    mobile_no: "",
    email: "",
    slug: slug,
    file: [],
    is_file: false,
  });

  const [mName, setSetTitle] = useState({
    name: "",
    type: "",
  });
  const handleFormSubmit = (e) => {
    e.preventDefault();
    dispatch(addUserTraining(user));
  };
  if (state.is_done) {
    navigate("/show-training-users/" + slug);
    // setUser({
    //   first_name: "",
    //   last_name: "",
    //   mobile: "",
    //   mobile_no: "",
    //   training_id: "",
    //   file: [],
    // });
  }



  const [show, setShow] = useState(false);
  const [popupTitile, setPopupTitle] = useState("");
  const handleClose = () => {
    setShow(false);
    setUser({ is_file: false });
  };

  if (state.errors.length > 0 && user.is_file && !show) {
    //
  }

  const clickOnAdd = (act) => {
    setPopupTitle(act);
    setShow(true);
  };
  const addTiles = () => {
    if (popupTitile && mName.name) {
      //call Submit API
      dispatch();
    }
  };

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
                  Add Sub Admin
                </h4>
              </div>

              {show ? (
                <Modal show={show} onHide={handleClose}>
                  <Modal.Header closeButton>
                    <Modal.Title>Add {popupTitile} </Modal.Title>
                  </Modal.Header>
                  <Modal.Body className="err-model-body">
                    <div className={"row"}>
                      <div className="col-lg-6 mb-2">
                        <div className="form-group">
                          <label className="mont-font fw-600 font-xsss">
                            {popupTitile} Name
                          </label>
                          <input
                            type="text"
                            required
                            className="form-control"
                            value={mName.name}
                            onChange={(e) =>
                              setUser({ ...mName, name: e.target.value })
                            }
                          />
                        </div>
                      </div>
                      <div className="col-lg-3">
                        <input
                          type="submit"
                          name="submit"
                          value="Submit"
                          onClick={() => addTiles()}
                          className="btn-common px-5 mt-30"
                        />
                      </div>
                    </div>
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
                <form onSubmit={handleFormSubmit}>
                  <div className="row">
                    <div className="col-lg-4 mb-3">
                      <div className="form-group">
                        <label className="mont-font fw-600 font-xsss">
                          Select Department
                        </label>
                        <select className="form-control" name={"department_id"}>
                          <option value={""}>Select Department</option>
                        </select>
                        <span className="error-msg">
                          {state.errors.first_name
                            ? state.errors.first_name
                            : ""}
                        </span>
                      </div>
                    </div>
                    <div className="col-lg-2">
                      <input
                        type="button"
                        name="submit"
                        value="Add New"
                        onClick={() => clickOnAdd("Department")}
                        className="btn-common px-5 mt-30"
                      />
                    </div>

                    <div className="col-lg-4 mb-3">
                      <div className="form-group">
                        <label className="mont-font fw-600 font-xsss">
                          Select Branch
                        </label>
                        <select className="form-control" name={"branch_id"}>
                          <option value={""}>Select Barnch</option>
                        </select>
                        <span className="error-msg">
                          {state.errors.first_name
                            ? state.errors.first_name
                            : ""}
                        </span>
                      </div>
                    </div>
                    <div className="col-lg-2">
                      <input
                        type="button"
                        name="submit"
                        onClick={() => clickOnAdd("Branch")}
                        value="Add New"
                        className="btn-common px-5 mt-30"
                      />
                    </div>
                  </div>

                  <div className="row">
                    <div className="col-lg-4 mb-3">
                      <div className="form-group">
                        <label className="mont-font fw-600 font-xsss">
                          Select Section/Division
                        </label>
                        <select className="form-control" name={"section_id"}>
                          <option value={""}>Section/Division</option>
                        </select>
                        <span className="error-msg">
                          {state.errors.first_name
                            ? state.errors.first_name
                            : ""}
                        </span>
                      </div>
                    </div>
                    <div className="col-lg-2">
                      <input
                        type="button"
                        name="submit"
                        value="Add New"
                        onClick={() => clickOnAdd("Section")}
                        className="btn-common px-5 mt-30"
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

export default AddOrgSubAdmin;
