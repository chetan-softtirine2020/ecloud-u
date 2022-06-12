import React, { useEffect } from "react";
import AppBody from "../components/AppBody";
import Badge from "react-bootstrap/Badge";
import Accordion from "react-bootstrap/Accordion";
import { useParams } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { getPlayCourseData } from "../../actions/course/course_action";
const PlayCourse = () => {
  let { slug } = useParams();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getPlayCourseData({ slug: slug }));
  }, []);
  const state = useSelector((state) => state.courseReducer);
  const { playCourseData } = state;
  return (
    <AppBody
      content={
        <div className="middle-sidebar-left">
          <div className="">
            <div className="card">
              <div className="card-header p-3 w-100 border-0 d-flex rounded-lg">
                <h4 className="font-xs text-white fw-600 ml-4 mb-0 mt-2">
                  Courses
                </h4>
              </div>
              <div className="card-body w-100 border-0 p-1">
                <div className="chapter-section">
                  <div className="video-cotainer">
                    <button
                      className="navbar-toggler"
                      type="button"
                      data-toggle="collapse"
                      data-target="#navbarNavDropdown5"
                      aria-controls="navbarNavDropdown5"
                      aria-expanded="false"
                      aria-label="Toggle navigation"
                    >
                      <span className="navbar-toggler-icon"></span>
                    </button>
                    <iframe src="https://www.youtube.com/watch?v=k5E2AVpwsko"></iframe>
                  </div>

                  <div
                    className="chapter-container collapse"
                    id="navbarNavDropdown5"
                  >
                    <h1 className="text-white">
                      {playCourseData &&
                        playCourseData.course &&
                        playCourseData.course.name}
                    </h1>



                    <Accordion defaultActiveKey="0">
                      <Accordion.Item eventKey="0">
                        <Accordion.Header>
                          1 ) Angular
                          <div class="paths-list-details mt-1">
                            {/* <ul>
                            <li>
                              <span className="ti-video-camera paths-icon" alt="Number of Courses"></span>
                              <span>18 Trainigs</span>
                            </li>
                            <li>
                              <span className="ti-time paths-icon" alt="Duration"></span>
                              <span>65 hours</span>
                            </li>
                          </ul>*/}
                          </div>
                        </Accordion.Header>
                        <Accordion.Body>
                          <ul>
                            <li>
                              <a href="#">
                                <div className="paths-list-details">
                                  <i class="feather-play-circle mr-1"></i>{" "}
                                  Introduction
                                  <span
                                    className="ti-time paths-icon"
                                    alt="Duration"
                                  ></span>
                                  <span>5 hours</span>
                                </div>
                              </a>
                              <div className="desc">
                                Angular is a platform for building mobile and
                                desktop web applications. Join the community of
                                millions of developers who build compelling user
                                interfaces
                              </div>
                            </li>
                            <li>
                              <a href="#">
                                <div className="paths-list-details">
                                  <i class="feather-play-circle mr-1"></i>{" "}
                                  Components
                                  <span
                                    className="ti-time paths-icon"
                                    alt="Duration"
                                  ></span>
                                  <span>2 hours</span>
                                </div>
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                <div className="paths-list-details">
                                  <i class="feather-play-circle mr-1"></i>{" "}
                                  Directives
                                  <span
                                    className="ti-time paths-icon"
                                    alt="Duration"
                                  ></span>
                                  <span>6 hours</span>
                                </div>
                              </a>
                              <ul>
                                <li>
                                  <a href="#">Directive</a>
                                  <ul>
                                    <li>
                                      <a href="#">Componet</a>
                                    </li>
                                    <li>
                                      <a href="#">Structural</a>
                                    </li>
                                    <li>
                                      <a href="#">Attribute</a>
                                    </li>
                                  </ul>
                                </li>
                                <li>Employee Maint.</li>
                              </ul>
                            </li>
                          </ul>
                        </Accordion.Body>
                      </Accordion.Item>

                      

                      <Accordion.Item eventKey="1">
                        <Accordion.Header>
                          HTML
                          <div class="paths-list-details mt-1">
                            <ul>
                              <li>
                                <span
                                  className="ti-video-camera paths-icon"
                                  alt="Number of Courses"
                                ></span>
                                <span>12 Trainigs</span>
                              </li>
                              <li>
                                <span
                                  className="ti-time paths-icon"
                                  alt="Duration"
                                ></span>
                                <span>5 hours</span>
                              </li>
                            </ul>
                          </div>
                        </Accordion.Header>
                        <Accordion.Body>
                          <ul>
                            <li>
                              <a href="#">
                                <div className="paths-list-details">
                                  <i class="feather-play-circle mr-1"></i>{" "}
                                  Introduction
                                  <span
                                    className="ti-time paths-icon"
                                    alt="Duration"
                                  ></span>
                                  <span>5 hours</span>
                                </div>
                              </a>
                              <div className="desc">
                                Angular is a platform for building mobile and
                                desktop web applications. Join the community of
                                millions of developers who build compelling user
                                interfaces
                              </div>
                            </li>
                            <li>
                              <a href="#">
                                <div className="paths-list-details">
                                  <i class="feather-play-circle mr-1"></i>{" "}
                                  Components
                                  <span
                                    className="ti-time paths-icon"
                                    alt="Duration"
                                  ></span>
                                  <span>2 hours</span>
                                </div>
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                <div className="paths-list-details">
                                  <i class="feather-play-circle mr-1"></i>{" "}
                                  Directives
                                  <span
                                    className="ti-time paths-icon"
                                    alt="Duration"
                                  ></span>
                                  <span>6 hours</span>
                                </div>
                              </a>
                              <ul>
                                <li>
                                  <a href="#">Directive</a>
                                  <ul>
                                    <li>
                                      <a href="#">Componet</a>
                                    </li>
                                    <li>
                                      <a href="#">Structural</a>
                                    </li>
                                    <li>
                                      <a href="#">Attribute</a>
                                    </li>
                                  </ul>
                                </li>
                                <li>Employee Maint.</li>
                              </ul>
                            </li>
                          </ul>
                        </Accordion.Body>
                      </Accordion.Item>
                    </Accordion>
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

export default PlayCourse;
