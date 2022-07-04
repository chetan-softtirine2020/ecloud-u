import React, { useState, useEffect } from "react";
import AppBody from "../components/AppBody";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import {
  getCoureseList,
  getCoureseWiseModuleList,
  createAllCourse,
} from "../../actions/course/course_action";
import CourseCreateModel from "./CourseCreateModel";
import ModuleCreateModel from "./ModuleCreateModel";

const CreateCourse = () => {
  let { slug } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const state = useSelector((state) => state.courseReducer);

  // Call Course and MOdule list API here page load time

  useEffect(() => {
    dispatch(getCoureseList());
  }, []);

  // Course on  change  call module list

  const [user, setUser] = useState({
    first_name: "",
    last_name: "",
    mobile_no: "",
    email: "",
    slug: slug,
    file: [],
    is_file: false,
  });

  const courseOnChnage = (id) => {
    dispatch(getCoureseWiseModuleList({ course_id: id }));
  };

  const [topic, setAddTopic] = useState({
    module_id: "",
    name: "",
    course_url: [],
    description: "",
  });

  const [course, setCourse] = useState("");

  const onSubmit = (data) => {
    const formData = new FormData();
    formData.append("course_url", data.file[0]);
    formData.append("module_id", topic.module_id);
    formData.append("name", topic.name);
    formData.append("description", topic.description);
    dispatch(createAllCourse(formData));
  };

  const [show, setShow] = useState(false);
  const [popupTitile, setPopupTitle] = useState("");

  const clickOnAdd = (act) => {
    setPopupTitle(act);
    setShow(true);
  };

  const resetPopup = () => {
    setPopupTitle("");
    setShow(false);
  };
  // console.log("Modi"+state.moduleList);
  if (state.isAllCourseCreated) {
    navigate("/all-courses");
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
                  Create Course
                </h4>
              </div>

              {show ? (
                popupTitile === 1 ? (
                  <CourseCreateModel
                    show={show}
                    onAddClick={(a) => resetPopup(a)}
                  />
                ) : (
                  <ModuleCreateModel
                    show={show}
                    courseId={course}
                    onAddClick={(a) => resetPopup(a)}
                  />
                )
              ) : (
                <div />
              )}

              <div className="card-body  p-4 w-100 border-0 ">
                <form
                  onSubmit={handleSubmit(onSubmit)}
                  enctype="multipart/form-data"
                >
                  <div className="row">
                    <div className="col-lg-4 mb-3">
                      <div className="form-group">
                        <label className="mont-font fw-600 font-xsss">
                          Select Course Name
                        </label>
                        <select
                          className="form-control"
                          name={"course_id"}
                          onChange={(e) => {
                            courseOnChnage(e.target.value);
                            setCourse(e.target.value);
                          }}
                        >
                          <option value={""}>Select Course</option>
                          {state.courseList &&
                            state.courseList.map((li, i) => (
                              <option value={li.id} key={i + 1}>
                                {li.name}
                              </option>
                            ))}
                        </select>
                        <span className="error-msg">
                          {state.errors.course_id ? state.errors.course_id : ""}
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
                          Select Module Name
                        </label>
                        <select
                          className="form-control"
                          name={"module_id"}
                          onChange={(e) =>
                            setAddTopic({ ...topic, module_id: e.target.value })
                          }
                        >
                          <option value={""}>Select Module</option>
                          {state.moduleList &&
                            state.moduleList.map((li, i) => (
                              <option key={i + 1} value={li.id}>
                                {li.name}
                              </option>
                            ))}
                        </select>
                        <span className="error-msg">
                          {state.errors.module_id ? state.errors.module_id : ""}
                        </span>
                      </div>
                    </div>
                    <div className="col-lg-2 pt-2">
                      <input
                        type="button"
                        name="submit"
                        onClick={() => clickOnAdd(2)}
                        value="Add New"
                        className="btn-common px-3 mt-30"
                      />
                    </div>
                  </div>

                  <div className="row">
                    <div className="col-lg-6 mb-3">
                      <div className="form-group">
                        <label className="mont-font fw-600 font-xsss">
                          Topic Name
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          value={topic.name}
                          onChange={(e) =>
                            setAddTopic({ ...topic, name: e.target.value })
                          }
                        />
                        <span className="error-msg">
                          {state.errors.name ? state.errors.name : ""}
                        </span>
                      </div>
                    </div>

                    <div className="col-lg-6 mb-2">
                      <label className="mont-font fw-600 font-xsss">
                        Upload Video
                      </label>
                      <div class="custom-file">
                        <input
                          type="file"
                          class="custom-file-input"
                          accept="video/mp4,video/x-m4v,video/*"
                          {...register("file", { required: true })}
                        />
                        <label class="custom-file-label" htmlFor="customFile">
                          Chosose Course Video
                        </label>

                        <span className="error-msg">
                          {state.errors.course_url
                            ? state.errors.course_url
                            : ""}
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="row">
                    <div className="col-lg-12 mb-12">
                      <div className="form-group">
                        <label className="mont-font fw-600 font-xsss">
                          Topic Description
                        </label>
                        <textarea
                          name="description"
                          className="form-control"
                          rows={3}
                          cols={4}
                          onChange={(e) =>
                            setAddTopic({
                              ...topic,
                              description: e.target.value,
                            })
                          }
                        >
                          {" "}
                        </textarea>
                        <span className="error-msg">
                          {state.errors.description
                            ? state.errors.description
                            : ""}
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="row">
                    <div className="col-lg-12 text-center">
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

export default CreateCourse;
