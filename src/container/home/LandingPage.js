import React, { useEffect,useState  } from "react";
import NavBar from "../components/NavBar";
import fogg from "../../images/landingPage/4.webp";
import trainer from "../../images/fogg-clip.png";
import { Navigate, useNavigate, Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { getAllHomeTrainings } from "../../actions/home/home_action";
import LoadingOverlay from "react-loading-overlay";
import { Button } from 'react-bootstrap';
import { Modal } from 'react-bootstrap';

const LandingPage = () => {
  const state = useSelector((state) => state.homeReducer);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(getAllHomeTrainings());
  }, []);

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  if (localStorage.getItem("token")) {
    const userData = JSON.parse(localStorage.getItem("data"));
    if (userData.roles.includes("user")) {
      return <Navigate to="/users" />;
    }
    if (userData.roles.includes("provider")) {
      return <Navigate to="/learning-provider" />;
    }
    if (userData.roles.includes("organization")) {
      return <Navigate to="/organization" />;
    }
    if (userData.roles.includes("admin")) {
      return <Navigate to="/home" />;
    }
    if (userData.roles.includes("provider_user")) {
      return <Navigate to="/lpu-home" />;
    }
  }

  return (
    <LoadingOverlay active={state.loading} spinner text="Loading...">
      <div className="landing-container"> 
        <NavBar />
        <div className="container-fluid top-margin">
          <div className="row">
            <div className="col-sm-12 col-lg-6">
              <div className="top-hedtxt-section">
                <p className="first-title">Take the first step 
                <br></br>
                  to learn with us
                </p>
                <p className="banner-des">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
                <a href="#." className="banner-btn">Get Started for Free</a>
              </div>
            </div>
            <div className="col-sm-12 col-lg-6">
              <div className="top-banner pt-4">
                <img src={fogg} />
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12">
              <div className="titlepage">
                <h2>Some <strong className="yellow">important facts</strong></h2>
                <span>luptatum. Libero eligendi molestias iure error animi totam laudantium, aspernatur similique id eos a
                  t consectetur illo culpa,</span>
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
          </div>
          <div className="row cource-section">
            <div className="col-12">
              <div className="titlepage">
                <h2>Our <strong className="yellow">Courses</strong></h2>
              </div>
            </div>  
            <div className="col-md-6 col-lg-4">
              <div className="box">
                <div className="row">
                  <div className="col-8">
                      <h4 className="title">
                          Course Name - <span className="course-nm">Python</span>
                      </h4>
                      <p className="course-count">10+ Courses</p>
                      <div className="">
                      <a href="#." onClick={handleShow} className="banner-btn posts-btn btn-common">Get Started</a>
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
                          Course Name - <span className="course-nm">HTML 5</span>
                      </h4>
                      <p className="course-count">10+ Courses</p>
                      <div className="">
                      <a href="#." onClick={handleShow} className="banner-btn posts-btn btn-common">Get Started</a>
                      </div>
                  </div>
                  <div className="col-4">
                    <i className="icon ti-html5"></i>
                  </div>    
                </div>  
              </div>  
            </div> 
            <div className="col-md-6 col-lg-4">
              <div className="box">
                <div className="row">
                  <div className="col-8">
                      <h4 className="title">
                          Course Name - <span className="course-nm">CSS 3</span>
                      </h4>
                      <p className="course-count">10+ Courses</p>
                      <div className="">
                      <a href="#." onClick={handleShow} className="banner-btn posts-btn btn-common">Get Started</a>
                      </div>
                  </div>
                  <div className="col-4">
                    <i className="icon ti-css3"></i>
                  </div>    
                </div>  
              </div>  
            </div>  
          </div>
          <div className="row trainer-secton">
          <div className="col-sm-12 col-lg-6">
              <div className="top-banner pt-4">
                <img src={trainer} />
              </div>
            </div>
            <div className="col-sm-12 col-lg-6">
              <div className="top-hedtxt-section">
                <p className="first-title">Watch Our Trainers
                <br></br>
                in Live Action
                </p>
                <p className="banner-des">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
                <a href="#." className="banner-btn">Click Here</a>
              </div>
            </div>
          </div>
        </div>
  
    {/*      <div className="container-fluid">
          <div className="how-to-work pb-lg--7 block-mt">
            <div className="container">
              {state.list.length>0 &&
             <div className="row justify-content-center">
                <div className="page-title style1 col-xl-6 col-lg-8 col-md-10 text-center mb-5">
                  <h2 className="block_heading">Trainings</h2>
                  <p className="fw-300 font-xsss lh-28 text-grey-500">
                    orem ipsum dolor sit amet, consectetur adipisicing elit, sed
                    do eiusmod tempor incididunt ut labore et dol ad minim
                    veniam, quis nostrud exercitation
                  </p>
                </div>
              </div>
              }
              <div className="row">
                {state.list &&
                  state.list.map((li, i) => (
                    <div className="col-lg-4 mt-3">
                      <div className="card bg-theme-color shadow-lg rounded-lg ">
                        <div className="card-body p-2">
                          <span className="font-xsss fw-700  pr-3 lh-32 text-uppercase rounded-lg ls-2 d-inline-block text-success mr-1">
                            Date
                          </span>
                          <span className="font-xss fw-700 pl-3 pr-3 ls-2 lh-32 d-inline-block text-success float-right">
                            <span className="font-xsssss" />
                            {li.date}
                          </span>
                          <h4 className="fw-700 font-xss mt-3 lh-28 mt-0">
                            <Link
                              to={"/training/" + li.slug}
                              className="text-dark text-grey-900"
                            >
                              {li.name}{" "}
                            </Link>
                          </h4>
                          <h6 className="font-xssss text-grey-500 fw-600 ml-0 mt-2">
                            {" "}
                            {li.first_name + " " + li.last_name}
                          </h6>
                          <div className="row">
                            <div className="col-xs-6 col-sm-6">
                              <a
                                href="#."
                                className="p-2 w100 d-inline-block rounded-lg font-xsss fw-700 ls-lg block_btn"
                              >
                                {" "}
                                View Details
                              </a>
                            </div>
                            <div className="col-xs-6 col-sm-6 text-right">
                              <Link
                                to={"/training/" + li.slug}
                                className="p-2 w100 d-inline-block rounded-lg font-xsss fw-700 ls-lg block_btn"
                              >
                                Join Training
                              </Link>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
              </div>
            </div>
          </div>
        </div> */}

        {/* <section className="row section-1">
        <div className="col-lg-6 mt-3 sideimg">
          <img src={section_one} width="768" height="750" />
        </div>
        <div className="col-lg-6 mt-3 sideinfo">
          <h6 className="info_heading">TOP COURSES FROM EXPERTS</h6>
          <h3 className="info_theory">
            Learn New Skills to Go Ahead for Better Future
          </h3>
          <p>
            Quisque placerat vitae lacus ut scelerisque. Fusce luctus odio ac
            nibh luctus behind the word mountains far from.
          </p>
          <div
            class="elementor-element elementor-element-bfa3448 service-about elementor-widget elementor-widget-rs-service-grid"
            data-id="bfa3448"
            data-element_type="widget"
            data-widget_type="rs-service-grid.default"
          >
            <div className="elementor-widget-container">
              <div class=" rs-addon-services services-style4">
                <div class="services-part">
                  <div class="services-icon ">
                    <img
                      src="https://demo.auburnforest.com/wordpress/firecamp/wp-content/uploads/2020/08/life.png"
                      alt="image"
                    ></img>
                  </div>
                  <div class="services-text">
                    <div class="services-title">
                      <h3 class="title"> Full Lifetime Access</h3>
                    </div>
                    <p class="services-txt">
                      {" "}
                      Quisque placerat vitae lacus ut scelerisque. Fusce luctus
                      odio ac nibh luctus.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="elementor-widget-container">
              <div class=" rs-addon-services services-style4">
                <div class="services-part">
                  <div class="services-icon ">
                    <img
                      src="https://demo.auburnforest.com/wordpress/firecamp/wp-content/uploads/2020/08/multi-1.png"
                      alt="image"
                    ></img>
                  </div>
                  <div class="services-text">
                    <div class="services-title">
                      <h3 class="title"> Multilangual For Courses</h3>
                    </div>
                    <p class="services-txt">
                      {" "}
                      Quisque placerat vitae lacus ut scelerisque. Fusce luctus
                      odio ac nibh luctus.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
  </section>*/}

        {/* <div className="container-fluid top-margin">
        <div className="class-section p-4">
          <div className="row">
            <div className="col-lg-12">
              <h2 class="block_heading">
                <center>Online Popular Course</center>
              </h2>
              <p class="fw-300 font-xsss lh-28 text-grey-500">
                orem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod tempor incididunt ut labore et dol ad minim veniam, quis
                nostrud exercitation
              </p>
            </div>       
            <div className="col-lg-3 mt-3">
              <div className="card bg-theme-color shadow-lg rounded-lg ">
                <div className="card-image mb-3 rounded-lg">
                  <a href="#." className="video-bttn position-relative d-block">
                    <img src={v4} alt="v1" />
                  </a>
                </div>
                <div className="card-body p-2">
                  <span className="font-xsssss fw-700 pl-3 pr-3 lh-32 text-uppercase rounded-lg ls-2 alert-success d-inline-block text-success mr-1">
                    Bootstrap
                  </span>
                  <span className="font-xss fw-700 pl-3 pr-3 ls-2 lh-32 d-inline-block text-success float-right">
                    <span className="font-xsssss">$</span> 100
                  </span>
                  <h4 className="fw-700 font-xss mt-3 lh-28 mt-0">
                    <a
                      href="default-course-details.html"
                      className="text-dark text-grey-900"
                    >
                      Complete Python Bootcamp From Zero to Hero in Python{" "}
                    </a>
                  </h4>
                  <h6 className="font-xssss text-grey-500 fw-600 ml-0 mt-2">
                    {" "}
                    32 Lesson{" "}
                  </h6>
                  <div className="row">
                    <div className="col-xs-6 col-sm-6">
                      <a
                        href="#."
                        className="p-2 w100 d-inline-block rounded-lg font-xsss fw-700 ls-lg block_btn"
                      >
                        Subscribe
                      </a>
                    </div>
                    <div className="col-xs-6 col-sm-6 text-right">
                      <a
                        href="#."
                        className="p-2 w100 d-inline-block rounded-lg font-xsss fw-700 ls-lg block_btn"
                      >
                        Add To Cart
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
          </div>
        </div>
  </div>*/}

        {/*<div class="subscribe-wrapper pt-5 pb-0 block_mb subscription_block">
        <div class="container-fluid">
          <div class="row">
            <div class="col-12">
              <div class="card w-100 p-lg-5 p-4 border-0 subscription_bg">
                <div class="row justify-content-center">
                  <div class="col-lg-10 text-center">
                    <h2 class="fw-700 display2-size display2-md-size lh-3 mb-3 subscription_heading">
                      Subscribe up to our newsletter
                    </h2>
                  </div>
                  <div class="col-lg-8 text-center">
                    <p class="font-xsss lh-28 subscription_info">
                      {" "}
                      Lorem ipsum dolor sit amet consectetur adipisicing, elit.
                      Neque facilis corporis perferendis, debitis error
                      exercitationem reiciendis odio.
                    </p>
                  </div>
                  <div class="col-lg-6 text-center mt-md-4 mb-3">
                    <div class="form-group icon-right-input style2-input mb-0">
                      <input
                        type="text"
                        placeholder="Enter Email Address"
                        class="form-control style2 rounded-xl bg-white border-0 font-xsss fw-500 pl-3"
                      ></input>
                      <i class="feather-mail text-icon font-lg m-1"></i>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
  </div>*/}
        <div class="footer-wrapper mt-0 pt--lg-5">
          <div class="container">
            <div class="row">
              <div class="col-sm-12">
                <div class="row">
                  <div class="col-md-12 col-lg-4 col-sm-9 col-xs-12 sm-mb-4">
                    <a href="index.html">
                      <h1 class="fredoka-font ls-3 fw-700 text-white font-xxl">
                        Educloudlabs{" "}
                        <span class="d-block font-xsssss ls-1 text-grey-500 open-font ">
                          Online Learning Course
                        </span>
                      </h1>
                    </a>
                    <p class="w-100 mt-5">
                      41 madison ave, floor 24 new work, support@mail.com
                    </p>
                    <ul class="d-flex align-items-center mt-3 float-left">
                      <li class="mr-2">
                        <a href="#" class="btn-round-md bg-facebook">
                          <i class="font-xs ti-facebook text-white"></i>
                        </a>
                      </li>
                      <li class="mr-2">
                        <a href="#" class="btn-round-md bg-twiiter">
                          <i class="font-xs ti-twitter-alt text-white"></i>
                        </a>
                      </li>
                      <li class="mr-2">
                        <a href="#" class="btn-round-md bg-linkedin">
                          <i class="font-xs ti-linkedin text-white"></i>
                        </a>
                      </li>
                      <li class="mr-2">
                        <a href="#" class="btn-round-md bg-instagram">
                          <i class="font-xs ti-instagram text-white"></i>
                        </a>
                      </li>
                      <li class="mr-2">
                        <a href="#" class="btn-round-md bg-pinterest">
                          <i class="font-xs ti-pinterest text-white"></i>
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div class="col-md-3 col-lg-2 col-sm-3 col-xs-6 sm-mb-4">
                    <h5>Language</h5>
                    <ul>
                      <li>
                        <a href="#">English</a>
                      </li>
                      <li>
                        <a href="#">Spanish</a>
                      </li>
                      <li>
                        <a href="#">Arab</a>
                      </li>
                      <li>
                        <a href="#">Urdu</a>
                      </li>
                      <li>
                        <a href="#">Brazil</a>
                      </li>
                    </ul>
                  </div>
                  <div class="col-md-3 col-lg-2 col-sm-4 col-xs-6 sm-mb-4">
                    <h5>Channel</h5>
                    <ul>
                      <li>
                        <a href="#">Makeup</a>
                      </li>
                      <li>
                        <a href="#">Dresses</a>
                      </li>
                      <li>
                        <a href="#">Girls</a>
                      </li>
                      <li>
                        <a href="#">Sandals</a>
                      </li>
                      <li>
                        <a href="#">Headphones</a>
                      </li>
                    </ul>
                  </div>
                  <div class="col-md-3 col-lg-2 col-sm-4 col-xs-6 sm-mb-4">
                    <h5>About</h5>
                    <ul>
                      <li>
                        <a href="#">FAQ</a>
                      </li>
                      <li>
                        <a href="#">Term of use</a>
                      </li>
                      <li>
                        <a href="#">Privacy Policy</a>
                      </li>
                      <li>
                        <a href="#">Feedback</a>
                      </li>
                      <li>
                        <a href="#">Careers</a>
                      </li>
                    </ul>
                  </div>
                  <div class="col-md-3 col-lg-2 col-sm-4 col-xs-6">
                    <h5 class="mb-3">Office</h5>
                    <p class="w-100">
                      41 madison ave, floor 24 new work, NY 10010 1-877-932-7111
                    </p>
                    <p class="w-100">
                      41 madison ave, floor 24 new work, NY 10010 1-877-932-7111
                    </p>
                  </div>
                </div>
                <div class="middle-footer mt-5 pt-4"></div>
              </div>
              <div class="col-sm-12 lower-footer pt-0"></div>
              <div class="col-sm-6 col-xs-12">
                <p class="copyright-text">
                  © 2021 copyright. All rights reserved.
                </p>
              </div>
              <div class="col-sm-6 col-xs-12 text-right">
                <p class="copyright-text float-right">
                  Design by{" "}
                  <a href="http://softtrine.com/" class="">
                    Softtrine
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Modal className="course-modal" size="lg" onHide={handleClose} show={show} >
        <Modal.Header>
          <Modal.Title>
            <h4 className="course-ttl">Angular</h4>
            <div className="paths-list-details">
              <ul>
                <li>
                  <span className="ti-video-camera paths-icon" alt="Number of Courses">
                  </span>
                  <span>18 courses</span></li>
                <li>
                  <span className="ti-time paths-icon" alt="Duration"></span>
                  <span>65 hours</span></li>
                <li className="has-projects tooltip-enabled" data-tooltip="Practice by applying it to real-world scenarios.">
                <span className="ti-settings paths-icon" alt="Project"></span>
                  <span>1 Project</span>
                </li>
              </ul>
            </div>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <div class="paths-content-description">
          <p>Angular is a complete JavaScript framework for creating dynamic and interactive applications in HTML. Aside from being one of the hottest frameworks on the web, Angular is easy to learn yet powerful enough to help you develop complex single-page web applications. This path includes content covering Angular 2 and beyond. For the original version, see our AngularJS path.</p>
            <div class="paths-content-highlight paths-aside-box show-for-large-up">

              <div class="paths-aside-scrollable">
                <h3>What you will learn</h3>
                <ul>
                  <li>Angular core concepts</li>
                  <li>Angular CLI</li>
                  <li>Forms</li>
                  <li>Components</li>
                  <li>Routing</li>
                  <li>Services</li>
                  <li>Dependency injection</li>
                  <li>Unit testing</li>
                  <li>Advanced workflows</li>
                </ul>
              </div>
            </div>
        </div>
        
        </Modal.Body>
        <Modal.Footer>
          <div className="row">
            <div className="col-6 text-left pl-0">
              <a href="#." className="banner-btn posts-btn btn-common">Get Started</a>
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
export default LandingPage;
