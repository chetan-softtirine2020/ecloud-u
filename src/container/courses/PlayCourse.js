import React, { useEffect, useState } from "react";
import AppBody from "../components/AppBody";
import Badge from "react-bootstrap/Badge";
import Accordion from "react-bootstrap/Accordion";
import { useParams } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { getPlayCourseData } from "../../actions/course/course_action";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

const PlayCourse = () => {
  let { slug } = useParams();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getPlayCourseData({ slug: slug }));
  }, []);
  const [currentUrl, setCurrrentUrl] = useState("");
  const [currentIndex, setCurrentIndex] = useState("");
  const [next, setNextVideo] = useState("");
  const [previous, setPreviousVideo] = useState("");
  const [currentPlay, setcurrentPlay] = useState({
    currentModule: "",
    currentTopic: [],
    totalTopic: 0,
    playList: [],
  });
  const state = useSelector((state) => state.courseReducer);
  const { playCourseData } = state;
  const setVideo = (url, j) => {
    setCurrentIndex(j);
    setCurrrentUrl(url);
    if (currentUrl !== url) {
      var vi = document.getElementById("video");
      vi.src = url;
      vi.load();
      vi.play();
    }
  };
  const getCurrentModule = (id, topic) => {
    const playList = [];
    topic.forEach((object) => {
      playList.push(object.url);
    });
    setcurrentPlay({
      currentModule: id,
      currentTopic: topic,
      totalTopic: topic.length,
      playList: playList,
    });
  };

  const nextPlay = () => {
    const totalUrl = currentPlay.totalTopic - 1;
    if(currentIndex <= totalUrl) {
      console.log("Playlist" + currentPlay.playList);
      var vi = document.getElementById("video");
      
      vi.src = currentPlay.playList[currentIndex + 1];
      vi.load();
      vi.play();
    }
  };

  const previousPlay = () => {
    const totalUrl = currentPlay.totalTopic - 1;
    if (currentIndex !== 0) {
      var vi = document.getElementById("video");
       console.log(currentPlay.playList[currentIndex - 1]);
      vi.src = currentPlay.playList[currentIndex - 1];
      vi.load();
      vi.play();
    }
  };

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
                    <video id="video" width="800" height="550" controls>
                      <source type="video/mp4" />
                    </video>
                    <br />
                    <br />

                    <div className="controler-section">
                      <span
                        className="ti-angle-left paths-icon"
                        onClick={() => previousPlay()}
                      ></span>
                      <span
                        className="ti-angle-right paths-icon"
                        onClick={() => nextPlay()}
                      ></span>
                    </div>
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

                    <div className="course-module">
                      <Accordion defaultActiveKey="0">
                        {playCourseData &&
                          playCourseData.data &&
                          playCourseData.data.map((li, i) => (
                            <Accordion.Item
                              className="mb-2"
                              eventKey={i}
                              onClick={() => getCurrentModule(li.id, li.topic)}
                            >
                              <Accordion.Header>
                                {li.name}
                                <div class="paths-list-details mt-0">
                                  <ul>
                                    <li>
                                      <span
                                        className="ti-video-camera paths-icon"
                                        alt="Number of Courses"
                                      ></span>
                                      <span>18 Trainigs</span>
                                    </li>
                                    <li>
                                      <span
                                        className="ti-time paths-icon"
                                        alt="Duration"
                                      ></span>
                                      <span>65 hours</span>
                                    </li>
                                  </ul>
                                </div>
                              </Accordion.Header>
                              <Accordion.Body>
                                <Accordion defaultActiveKey="0">
                                  {li.topic &&
                                    li.topic.map((tp, j) => (
                                      <Accordion.Item
                                        className="m-0"
                                        eventKey={j}
                                      >
                                        <Accordion.Header>
                                          <div
                                            className="paths-list-details"
                                            onClick={() => setVideo(tp.url, j)}
                                          >
                                            <i class="feather-play-circle mr-1"></i>{" "}
                                            <span className="txthead">
                                              {tp.name}
                                            </span>
                                            {/* <span className="ti-time paths-icon"
                                                alt="Duration"></span>
                                                <span>6 hours</span>*/}
                                          </div>
                                        </Accordion.Header>
                                        <Accordion.Body>
                                          <div className="desc">
                                            {tp.description}
                                          </div>
                                        </Accordion.Body>
                                      </Accordion.Item>
                                    ))}
                                </Accordion>
                              </Accordion.Body>
                            </Accordion.Item>
                          ))}
                      </Accordion>
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

export default PlayCourse;
