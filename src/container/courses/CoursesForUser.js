import React, { useEffect } from "react";
import AppBody from "../components/AppBody";
import { useSelector, useDispatch } from "react-redux";
import { getCourseForUser } from "../../actions/course/course_action";
const CoursesForUser = () => {
  const state = useSelector((state) => state.courseReducer);
  const dispatch = useDispatch();

  useEffect(() => {
    if (localStorage.getItem("token")) dispatch(getCourseForUser());
  }, []);

  return (
    <AppBody
      loading={state.loading}
      content={
        <div className="middle-sidebar-left lrn-provider">
          <div className="row">
            <div className="col-lg-12">
              <h1 className="dash-heading">Courese</h1>
            </div>

            <div className="col-lg-4 mt-3">
              <div className="card bg-theme-color shadow-lg">
                <div className="card-header">
                  <div className="row">
                    <div className="col-7">
                      <h4 className="fw-700 font-xss my-1">{"My Course"}</h4>
                    </div>
                    <div className="col-5 pl-0">
                      <button className="btn-common">View Details</button>
                    </div>
                  </div>
                </div>
                <div className="card-body p-2">
                  <div className="row">
                    <div className="col-12">
                      <span>
                        <strong>Date :</strong>
                      </span>
                      <span> {}</span>
                    </div>
                  </div>
                  <div className="row my-1">
                    <div className="col-12">
                      <div className="paths-list-details">
                        <ul>
                          <li>
                            <span
                              className="ti-video-camera paths-icon"
                              alt="Number of Modules"
                            ></span>
                            <span>18 Trainigs</span>
                          </li>
                          <li>
                            <span
                              className="ti-time paths-icon"
                              alt="Topics"
                            ></span>
                            <span>65 hours</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      }
    />
  );
};

export default CoursesForUser;
