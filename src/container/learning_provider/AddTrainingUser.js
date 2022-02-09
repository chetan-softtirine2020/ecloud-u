import React, { useState } from "react";
import AppBody from "../components/AppBody";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import { useNavigate } from "react-router-dom";
import {
  addUserTraining,
  importUserTraining,
} from "../../actions/learning_provider/lp_users_action";
import { useForm } from "react-hook-form";
const AddTrainingUser = () => {
  let { slug } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const state = useSelector((state) => state.trainingUserReducer);
  const [user, setUser] = useState({
    first_name: "",
    last_name: "",
    mobile_no: "",
    email: "",
    slug: slug,
    file: [],
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
  
  const onSubmit = (data) => {
    const formData = new FormData();
    formData.append("file", data.file[0]);
    formData.append("slug", slug);
    dispatch(importUserTraining(formData));
  };
  console.log(state);
  return (
    <AppBody
      loading={state.loading}
      content={
        <div className="middle-sidebar-left">
        <div className="">
          <div className="card">
            <div className="card-header p-3 w-100 border-0 d-flex rounded-lg">
              <a href="default-settings.html" className="d-inline-block mt-2">
                <i className="ti-arrow-left font-sm text-white"></i>
              </a>
              <h4 className="font-xs text-white fw-600 ml-4 mb-0 mt-2">
                  Add Training User
                </h4>
              </div>
              <div className="card-body p-lg-5 p-4 w-100 border-0 ">
                <form
                  onSubmit={handleSubmit(onSubmit)}
                  enctype="multipart/form-data"
                 >
                  <div class="alert alert-success">
                    <strong>
                      You can add singal user at time, Other wise you can upload
                      excel sheet
                    </strong>
                    (column name must be
                      first_name,last_name,mobile_no,email)
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
                          {...register("file", { required: true })}
                        />
                        <label class="custom-file-label" for="customFile">
                          Choose file
                        </label>
                        <span className="error-msg">
                        {state.errors.other_error
                          ? state.errors.other_error
                          : ""}
                      </span>
                      </div>
                    </div>
                    <div className="col-lg-3">
                      <input
                        type="submit"
                        name="submit"
                        value="Upload"
                        className="btn-common px-5 mt-30"
                      />
                    </div>
                  </div>
                </form>

                <h1 className="text-white">Add Single </h1>
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

export default AddTrainingUser;
