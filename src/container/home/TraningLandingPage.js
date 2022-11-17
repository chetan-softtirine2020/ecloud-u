import React, { useEffect, useState } from "react";
import NavBar from "../components/NavBar";
import fogg from "../../images/landingPage/4.svg";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Container from "react-bootstrap/Container";
import logo from "../../images/logo/logo.svg";
import trainer from "../../images/landingPage/fogg-clip.svg";
import java from "../../images/landingPage/java.svg";
import online from "../../images/landingPage/online.svg";
import { Link, Navigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { getAllHomeTrainings } from "../../actions/home/home_action";
import LoadingOverlay from "react-loading-overlay";
import { Button } from "react-bootstrap";
import { Modal } from "react-bootstrap";
import { redirectUser } from "../../config/redirect";
import Carousel from "react-elastic-carousel";
import { useRef } from "react";
import Footer from "../components/Footer";
import HomeNavBar from "../components/HomeNavBar";
const TraningLandingPage = () => {
  const state = useSelector((state) => state.homeReducer);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllHomeTrainings());
  }, []);

  const [show, setShow] = useState({
    show: false,
    data: {},
  });
  const handleClose = () => {
    setShow({ show: false, data: {} });
  };
  const handleShow = (li) => {
    setShow({ show: true, data: li });
  };

  const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 550, itemsToShow: 2, itemsToScroll: 2 },
    { width: 768, itemsToShow: 3 },
    { width: 1200, itemsToShow: 4 },
  ];

  const itemsPerPage = 3;
  const items = [];
  const carouselRef = useRef(null);
  const totalPages = Math.ceil(items.length / itemsPerPage);
  let resetTimeout;

  if (localStorage.getItem("token")) {
    return <Navigate to={redirectUser()} />;
  }

  return (
    <LoadingOverlay active={state.loading} spinner text="Loading...">
      <div className="main-landing-page traning-landing-page landing-container">
        {/* navbar */}
        <HomeNavBar />
        <div className="container-fluid">
          <div className="row">
            <div className="col-sm-12 col-lg-6">
              <div className="top-hedtxt-section">
                <h4 className="hed-txt">Training Solutions</h4>
                <p className="first-title">
                  Take the first step
                  <br></br>
                  to learn with us
                </p>
                <p className="banner-des">
                  We are the one stop shop for all your training needs. We as
                  your IT training and consulting partner can support both older
                  and newer technology, and also assist you to figure out how to
                  integrate them. With our battery of trainers, we support all
                  your endeavours and infuse confidence in your workforces’
                  human assets so that they can soar HIGH.
                </p>
                <a href="#." className="banner-btn">
                  Enroll for Free
                </a>
              </div>
            </div>
            <div className="col-sm-12 col-lg-6">
              <div className="top-banner pt-4">
                <img src={fogg} />
              </div>
            </div>
          </div>

          {/*  <div className="row">
            <div className="col-md-12">
              <div className="titlepage">
                <h2>
                  Some <strong className="yellow">important facts</strong>
                </h2>
                <span>
                  luptatum. Libero eligendi molestias iure error animi totam
                  laudantium, aspernatur similique id eos a t consectetur illo
                  culpa,
                </span>
              </div>
            </div>
            <div className="col-12">
              <div className="important_bg">
                <div className="container">
                  <div className="row">
                    <div className="col col-xs-12">
                      <div className="important_box">
                        <h3>200+</h3>
                        <span>Teachers</span>
                      </div>
                    </div>
                    <div className="col col-xs-12">
                      <div className="important_box">
                        <h3>20+</h3>
                        <span>Colleges</span>
                      </div>
                    </div>
                    <div className="col col-xs-12">
                      <div className="important_box">
                        <h3>50+</h3>
                        <span>Courses</span>
                      </div>
                    </div>
                    <div className="col col-xs-12">
                      <div className="important_box">
                        <h3>200+</h3>
                        <span>Members</span>
                      </div>
                    </div>
                    <div className="col col-xs-12">
                      <div className="important_box">
                        <h3>10+</h3>
                        <span>countries</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
  </div>*/}

          <div className="row cource-section">
            <div className="col-12">
              <div className="titlepage">
                <h4>Trending Courses</h4>
                <h1>Browse Our Top Trending Courses</h1>
              </div>
            </div>

            {/* {state.list &&
              state.list.map((li, i) => (
                <div className="col-md-6 col-lg-4" key={i + 1}>
                  <div className="box">
                    <div className="row">
                      <div className="col-8">
                        <h4 className="title">
                          Training Name -{" "}
                          <span className="course-nm">{li.name}</span>
                        </h4>
                        <p className="course-count">10+ Courses</p>
                      </div>
                      <div className="col-4">
                        <i className="icon ti-desktop"></i>
                      </div>
                      <div className="col-12">
                        <a
                          href="#."
                          onClick={() => handleShow(li)}
                          className="banner-btn posts-btn btn-common"
                        >
                          Enroll
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              ))} */}

            {/* <div className="col-md-6 col-lg-4">
              <div className="box">
                <div className="row">
                  <div className="col-8">
                    <h4 className="title">
                      Training Name -{" "}
                      <span className="course-nm">{".NET"}</span>
                    </h4>
                    <p className="course-count">10+ Courses</p>
                    <div className="">
                      <a href="#." className="banner-btn posts-btn btn-common">
                        Enroll
                      </a>
                    </div>
                  </div>
                  <div className="col-4">
                    <i className="icon ti-desktop"></i>
                  </div>
                </div>
              </div>
            </div> */}

            {/* <div className="col-md-6 col-lg-4">
              <div className="box">
                <div className="row">
                  <div className="col-8">
                    <h4 className="title">
                      Training Name -{" "}
                      <span className="course-nm">{"Python"}</span>
                    </h4>
                    <p className="course-count">10+ Courses</p>
                    <div className="">
                      <a href="#." className="banner-btn posts-btn btn-common">
                        Enroll
                      </a>
                    </div>
                  </div>
                  <div className="col-4">
                    <i className="icon ti-desktop"></i>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-md-6 col-lg-4">
              <div className="box">
                <div className="row">
                  <div className="col-8">
                    <h4 className="title">
                      Training Name -{" "}
                      <span className="course-nm">{"MySql"}</span>
                    </h4>
                    <p className="course-count">10+ Courses</p>
                    <div className="">
                      <a href="#." className="banner-btn posts-btn btn-common">
                        Enroll
                      </a>
                    </div>
                  </div>
                  <div className="col-4">
                    <i className="icon ti-desktop"></i>
                  </div>
                </div>
              </div>
            </div> */}
          </div>

          <div className="row cource-section">
            <div className="col-12 carousel-section">
              <Carousel
                breakPoints={breakPoints}
                enableAutoPlay
                autoPlaySpeed={1500} // same time
                onNextEnd={({ index }) => {
                  clearTimeout(resetTimeout);
                  if (index + 1 === totalPages) {
                    resetTimeout = setTimeout(() => {
                      carouselRef.current.goTo(0);
                    }, 1500); // same time
                  }
                }}
              >
                <div>
                  <div className="box">
                    <div className="row">
                      <div className="col-xs-12 col-8">
                        <h4 className="title">
                          <span className="course-nm">Angular</span>
                        </h4>
                        <p className="course-count">10+ Courses</p>
                      </div>
                      <div className="col-xs-12 col-4">
                        <img className="" src={java} alt="First slide" />
                      </div>
                      <div className="col-12">
                        <a
                          href="#."
                          className="banner-btn posts-btn btn-common"
                        >
                          Enroll
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div>
                  <div className="box">
                    <div className="row">
                      <div className="col-xs-12 col-8">
                        <h4 className="title">
                          <span className="course-nm">JAVA</span>
                        </h4>
                        <p className="course-count">10+ Courses</p>
                      </div>
                      <div className="col-xs-12 col-4">
                        <img className="" src={online} alt="First slide" />
                      </div>
                      <div className="col-12">
                        <a
                          href="#."
                          className="banner-btn posts-btn btn-common"
                        >
                          Enroll
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div>
                  <div className="box">
                    <div className="row">
                      <div className="col-xs-12 col-8">
                        <h4 className="title">
                          <span className="course-nm">C#</span>
                        </h4>
                        <p className="course-count">10+ Courses</p>
                      </div>
                      <div className="col-xs-12 col-4">
                        <img className="" src={online} alt="First slide" />
                      </div>
                      <div className="col-12">
                        <a
                          href="#."
                          className="banner-btn posts-btn btn-common"
                        >
                          Enroll
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div>
                  <div className="box">
                    <div className="row">
                      <div className="col-xs-12 col-8">
                        <h4 className="title">
                          <span className="course-nm">CSS</span>
                        </h4>
                        <p className="course-count">10+ Courses</p>
                      </div>
                      <div className="col-xs-12 col-4">
                        <img className="" src={online} alt="First slide" />
                      </div>
                      <div className="col-12">
                        <a
                          href="#."
                          className="banner-btn posts-btn btn-common"
                        >
                          Enroll
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div>
                  <div className="box">
                    <div className="row">
                      <div className="col-xs-12 col-8">
                        <h4 className="title">
                          <span className="course-nm">HTML</span>
                        </h4>
                        <p className="course-count">10+ Courses</p>
                      </div>
                      <div className="col-xs-12   col-4">
                        <img className="" src={online} alt="First slide" />
                      </div>
                      <div className="col-12">
                        <a
                          href="#."
                          className="banner-btn posts-btn btn-common"
                        >
                          Enroll
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </Carousel>
            </div>
          </div>

          {/* recent cource */}
          <div className="row cource-section">
            <div className="col-12">
              <div className="titlepage">
                <h4>Recent Courses</h4>
                <h1>Our Top Recent Courses</h1>
              </div>
            </div>
            <div className="col-12 carousel-section">
              <Carousel
                breakPoints={breakPoints}
                enableAutoPlay
                autoPlaySpeed={1500} // same time
                onNextEnd={({ index }) => {
                  clearTimeout(resetTimeout);
                  if (index + 1 === totalPages) {
                    resetTimeout = setTimeout(() => {
                      carouselRef.current.goTo(0);
                    }, 1500); // same time
                  }
                }}
              >
                <div>
                  <div className="box">
                    <div className="row">
                      <div className="col-xs-12 col-8">
                        <h4 className="title">
                          <span className="course-nm">Angular</span>
                        </h4>
                        <p className="course-count">10+ Courses</p>
                      </div>
                      <div className="col-xs-12 col-4">
                        <img className="" src={java} alt="First slide" />
                      </div>
                      <div className="col-12">
                        <a
                          href="#."
                          className="banner-btn posts-btn btn-common"
                        >
                          Enroll
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div>
                  <div className="box">
                    <div className="row">
                      <div className="col-xs-12 col-8">
                        <h4 className="title">
                          <span className="course-nm">JAVA</span>
                        </h4>
                        <p className="course-count">10+ Courses</p>
                      </div>
                      <div className="col-xs-12 col-4">
                        <img className="" src={online} alt="First slide" />
                      </div>
                      <div className="col-12">
                        <a
                          href="#."
                          className="banner-btn posts-btn btn-common"
                        >
                          Enroll
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div>
                  <div className="box">
                    <div className="row">
                      <div className="col-xs-12 col-8">
                        <h4 className="title">
                          <span className="course-nm">C#</span>
                        </h4>
                        <p className="course-count">10+ Courses</p>
                      </div>
                      <div className="col-xs-12 col-4">
                        <img className="" src={online} alt="First slide" />
                      </div>
                      <div className="col-12">
                        <a
                          href="#."
                          className="banner-btn posts-btn btn-common"
                        >
                          Enroll
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div>
                  <div className="box">
                    <div className="row">
                      <div className="col-xs-12 col-8">
                        <h4 className="title">
                          <span className="course-nm">CSS</span>
                        </h4>
                        <p className="course-count">10+ Courses</p>
                      </div>
                      <div className="col-xs-12 col-4">
                        <img className="" src={online} alt="First slide" />
                      </div>
                      <div className="col-12">
                        <a
                          href="#."
                          className="banner-btn posts-btn btn-common"
                        >
                          Enroll
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div>
                  <div className="box">
                    <div className="row">
                      <div className="col-xs-12 col-8">
                        <h4 className="title">
                          <span className="course-nm">HTML</span>
                        </h4>
                        <p className="course-count">10+ Courses</p>
                      </div>
                      <div className="col-xs-12   col-4">
                        <img className="" src={online} alt="First slide" />
                      </div>
                      <div className="col-12">
                        <a
                          href="#."
                          className="banner-btn posts-btn btn-common"
                        >
                          Enroll
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </Carousel>
            </div>
          </div>
          {/* 
          <div className="row trainer-secton">
            <div className="col-sm-12 col-lg-6">
              <div className="top-banner pt-4">
                <img src={trainer} />
              </div>
            </div>
            <div className="col-sm-12 col-lg-6">
              <div className="top-hedtxt-section">
                <h4 className="hed-txt">Live Action</h4>
                <p className="first-title">
                  Watch Our Trainers
                  <br></br>
                  in Live Action
                </p>
                <p className="banner-des">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
                <a href="#." className="banner-btn">
                  Let's Join Us
                </a>
              </div>
            </div>
          </div>
          */}
        </div>
        {/* footer */}
        <Footer />
      </div>

      <Modal
        className="course-modal"
        size="lg"
        onHide={handleClose}
        show={show.show}
      >
        <Modal.Header>
          <Modal.Title>
            <h4 className="course-ttl">{show.data.name}</h4>
            {/*
            <div className="paths-list-details">
              <ul>
                <li>
                  <span
                    className="ti-video-camera paths-icon"
                    alt="Number of Courses"
                  ></span>
                  <span>18 courses</span>
                </li>
                <li>
                  <span className="ti-time paths-icon" alt="Duration"></span>
                  <span>65 hours</span>
                </li>
                <li
                  className="has-projects tooltip-enabled"
                  data-tooltip="Practice by applying it to real-world scenarios."
                >
                  <span className="ti-settings paths-icon" alt="Project"></span>
                  <span>1 Project</span>
                </li>
              </ul>
            </div>
             */}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div class="paths-content-description">
            <p>{show.data.description}</p>
            <div class="paths-content-highlight paths-aside-box show-for-large-up">
              <div class="paths-aside-scrollable">
                <h3>What you will learn</h3>
                <ul>
                  <li>Angular core concepts</li>
                  <li>Angular CLI</li>
                  <li>Forms</li>
                </ul>
              </div>
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <div className="row">
            <div className="col-6 text-left pl-0">
              <Link
                to={"/training/" + show.data.slug}
                className="banner-btn posts-btn btn-common"
              >
                Enroll
              </Link>
            </div>
            <div className="col-6 text-right">
              <Button variant="outline-info" onClick={handleClose}>
                Close
              </Button>
            </div>
          </div>
        </Modal.Footer>
      </Modal>
    </LoadingOverlay>
  );
};
export default TraningLandingPage;
