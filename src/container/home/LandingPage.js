import NavBar from "../components/NavBar";
import fogg from "../../images/slide1.jpg";
import section_one from "../../images/about-2.jpg";
import v1 from "../../images/v-1.png";
import v4 from "../../images/v-4.jpg";
import v6 from "../../images/v-6.jpg";
import { Navigate } from "react-router-dom";
const LandingPage = () => {
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
    <div>
      <NavBar />
      <div className="container-fluid top-margin">
        <div className="row">
          <div className="top-banner">
            <img src={fogg} />
          </div>
        </div>
      </div>
      <div className="container-fluid">
        <div class="how-to-work pb-lg--7 block-mt">
          <div class="container">
            <div class="row justify-content-center">
              <div class="page-title style1 col-xl-6 col-lg-8 col-md-10 text-center mb-5">
                <h2 class="block_heading">Online Popular Course</h2>
                <p class="fw-300 font-xsss lh-28 text-grey-500">
                  orem ipsum dolor sit amet, consectetur adipisicing elit, sed
                  do eiusmod tempor incididunt ut labore et dol ad minim veniam,
                  quis nostrud exercitation
                </p>
              </div>
            </div>
            <div class="row">
              <div class="col-xl-4 col-lg-6 col-md-6 col-sm-6 mb-4">
                <div class="card w-100 p-0 shadow-xss border-0 rounded-lg overflow-hidden mr-1">
                  <div class="card-image w-100 mb-3">
                    <a
                      href="default-course-details.html"
                      class="video-bttn position-relative d-block"
                    >
                      <img
                        src="https://via.placeholder.com/400x300.png"
                        alt="image"
                        class="w-100"
                      />
                    </a>
                  </div>
                  <div class="card-body pt-0">
                    <span class="font-xsssss fw-700 pl-3 pr-3 lh-32 text-uppercase rounded-lg ls-2 alert-danger d-inline-block text-danger mr-1">
                      Develop
                    </span>
                    <span class="font-xss fw-700 pl-3 pr-3 ls-2 lh-32 d-inline-block text-success float-right">
                      <span class="font-xsssss">$</span> 370
                    </span>
                    <h4 class="fw-700 font-xss mt-3 lh-28 mt-0">
                      <a
                        href="default-course-details.html"
                        class="text-dark text-grey-900"
                      >
                        The Data Science Course Complete Data Science{" "}
                      </a>
                    </h4>
                    <h6 class="font-xssss text-grey-500 fw-600 ml-0 mt-2">
                      {" "}
                      23 Lesson{" "}
                      <span class="float-right mt-1 font-xssss text-grey-500">
                        87%
                      </span>
                    </h6>
                    <div class="progress mt-4 h5 w-100 mb-3">
                      <div
                        class="progress-bar bg-info"
                        role="progressbar"
                        aria-valuenow="73"
                        aria-valuemin="0"
                        aria-valuemax="73"
                      ></div>
                    </div>
                    <p class="review-link mt-0 font-xssss float-right mb-2 fw-500 text-grey-500 lh-3">
                      {" "}
                      2 customer review
                    </p>
                  </div>
                </div>
              </div>
              <div class="col-xl-4 col-lg-6 col-md-6 col-sm-6 mb-4">
                <div class="card w-100 p-0 shadow-xss border-0 rounded-lg overflow-hidden mr-1">
                  <div class="card-image w-100 mb-3">
                    <a
                      href="default-course-details.html"
                      class="video-bttn position-relative d-block"
                    >
                      <img
                        src="https://via.placeholder.com/400x300.png"
                        alt="image"
                        class="w-100"
                      />
                    </a>
                  </div>
                  <div class="card-body pt-0">
                    <span class="font-xsssss fw-700 pl-3 pr-3 lh-32 text-uppercase rounded-lg ls-2 alert-danger d-inline-block text-danger mr-1">
                      Desinger
                    </span>
                    <span class="font-xss fw-700 pl-3 pr-3 ls-2 lh-32 d-inline-block text-success float-right">
                      <span class="font-xsssss">$</span> 450
                    </span>
                    <h4 class="fw-700 font-xss mt-3 lh-28 mt-0">
                      <a
                        href="default-course-details.html"
                        class="text-dark text-grey-900"
                      >
                        Complete Python Bootcamp From Zero to Hero in Python{" "}
                      </a>
                    </h4>
                    <h6 class="font-xssss text-grey-500 fw-600 ml-0 mt-2">
                      {" "}
                      24 Lesson{" "}
                      <span class="float-right mt-1 font-xssss text-grey-500">
                        65%
                      </span>
                    </h6>
                    <div class="progress mt-4 h5 w-100 mb-3">
                      <div
                        class="progress-bar bg-success"
                        role="progressbar"
                        aria-valuenow="96"
                        aria-valuemin="0"
                        aria-valuemax="96"
                      ></div>
                    </div>
                    <p class="review-link mt-0 font-xssss float-right mb-2 fw-500 text-grey-500 lh-3">
                      {" "}
                      2 customer review
                    </p>
                  </div>
                </div>
              </div>
              <div class="col-xl-4 col-lg-6 col-md-6 col-sm-6 mb-4">
                <div class="card w-100 p-0 shadow-xss border-0 rounded-lg overflow-hidden mr-1">
                  <div class="card-image w-100 mb-3">
                    <a
                      href="default-course-details.html"
                      class="video-bttn position-relative d-block"
                    >
                      <img
                        src="https://via.placeholder.com/400x300.png"
                        alt="image"
                        class="w-100"
                      />
                    </a>
                  </div>
                  <div class="card-body pt-0">
                    <span class="font-xsssss fw-700 pl-3 pr-3 lh-32 text-uppercase rounded-lg ls-2 alert-warning d-inline-block text-warning mr-1">
                      Python
                    </span>
                    <span class="font-xss fw-700 pl-3 pr-3 ls-2 lh-32 d-inline-block text-success float-right">
                      <span class="font-xsssss">$</span> 670
                    </span>
                    <h4 class="fw-700 font-xss mt-3 lh-28 mt-0">
                      <a
                        href="default-course-details.html"
                        class="text-dark text-grey-900"
                      >
                        Fundamentals for Scrum Master and Agile Projects{" "}
                      </a>
                    </h4>
                    <h6 class="font-xssss text-grey-500 fw-600 ml-0 mt-2">
                      {" "}
                      32 Lesson{" "}
                      <span class="float-right mt-1 font-xssss text-grey-500">
                        75%
                      </span>
                    </h6>
                    <div class="progress mt-4 h5 w-100 mb-3">
                      <div
                        class="progress-bar bg-warning"
                        role="progressbar"
                        aria-valuenow="75"
                        aria-valuemin="0"
                        aria-valuemax="75"
                      ></div>
                    </div>
                    <p class="review-link mt-0 font-xssss float-right mb-2 fw-500 text-grey-500 lh-3">
                      {" "}
                      2 customer review
                    </p>
                  </div>
                </div>
              </div>
              <div class="col-xl-4 col-lg-6 col-md-6 col-sm-6 mb-4">
                <div class="card w-100 p-0 shadow-xss border-0 rounded-lg overflow-hidden mr-1">
                  <div class="card-image w-100 mb-3">
                    <a
                      href="default-course-details.html"
                      class="video-bttn position-relative d-block"
                    >
                      <img
                        src="https://via.placeholder.com/400x300.png"
                        alt="image"
                        class="w-100"
                      />
                    </a>
                  </div>
                  <div class="card-body pt-0">
                    <span class="font-xsssss fw-700 pl-3 pr-3 lh-32 text-uppercase rounded-lg ls-2 alert-warning d-inline-block text-warning mr-1">
                      Python
                    </span>
                    <span class="font-xss fw-700 pl-3 pr-3 ls-2 lh-32 d-inline-block text-success float-right">
                      <span class="font-xsssss">$</span> 240
                    </span>
                    <h4 class="fw-700 font-xss mt-3 lh-28 mt-0">
                      <a
                        href="default-course-details.html"
                        class="text-dark text-grey-900"
                      >
                        Complete Python Bootcamp From Zero to Hero in Python{" "}
                      </a>
                    </h4>
                    <h6 class="font-xssss text-grey-500 fw-600 ml-0 mt-2">
                      {" "}
                      32 Lesson{" "}
                      <span class="float-right mt-1 font-xssss text-grey-500">
                        96%
                      </span>
                    </h6>
                    <div class="progress mt-4 h5 w-100 mb-3">
                      <div
                        class="progress-bar bg-primary"
                        role="progressbar"
                        aria-valuenow="65"
                        aria-valuemin="0"
                        aria-valuemax="65"
                      ></div>
                    </div>
                    <p class="review-link mt-0 font-xssss float-right mb-2 fw-500 text-grey-500 lh-3">
                      {" "}
                      2 customer review
                    </p>
                  </div>
                </div>
              </div>
              <div class="col-xl-4 col-lg-6 col-md-6 col-sm-6 mb-4">
                <div class="card w-100 p-0 shadow-xss border-0 rounded-lg overflow-hidden mr-1">
                  <div class="card-image w-100 mb-3">
                    <a
                      href="default-course-details.html"
                      class="video-bttn position-relative d-block"
                    >
                      <img
                        src="https://via.placeholder.com/400x300.png"
                        alt="image"
                        class="w-100"
                      />
                    </a>
                  </div>
                  <div class="card-body pt-0">
                    <span class="font-xsssss fw-700 pl-3 pr-3 lh-32 text-uppercase rounded-lg ls-2 alert-danger d-inline-block text-danger mr-1">
                      Desinger
                    </span>
                    <span class="font-xss fw-700 pl-3 pr-3 ls-2 lh-32 d-inline-block text-success float-right">
                      <span class="font-xsssss">$</span> 40
                    </span>
                    <h4 class="fw-700 font-xss mt-3 lh-28 mt-0">
                      <a
                        href="default-course-details.html"
                        class="text-dark text-grey-900"
                      >
                        Complete Python Bootcamp From Zero to Hero in Python{" "}
                      </a>
                    </h4>
                    <h6 class="font-xssss text-grey-500 fw-600 ml-0 mt-2">
                      {" "}
                      24 Lesson{" "}
                      <span class="float-right mt-1 font-xssss text-grey-500">
                        73%
                      </span>
                    </h6>
                    <div class="progress mt-4 h5 w-100 mb-3">
                      <div
                        class="progress-bar bg-warning"
                        role="progressbar"
                        aria-valuenow="87"
                        aria-valuemin="0"
                        aria-valuemax="87"
                      ></div>
                    </div>
                    <p class="review-link mt-0 font-xssss float-right mb-2 fw-500 text-grey-500 lh-3">
                      {" "}
                      2 customer review
                    </p>
                  </div>
                </div>
              </div>
              <div class="col-xl-4 col-lg-6 col-md-6 col-sm-6 mb-4">
                <div class="card w-100 p-0 shadow-xss border-0 rounded-lg overflow-hidden mr-1">
                  <div class="card-image w-100 mb-3">
                    <a
                      href="default-course-details.html"
                      class="video-bttn position-relative d-block"
                    >
                      <img
                        src="https://via.placeholder.com/400x300.png"
                        alt="image"
                        class="w-100"
                      />
                    </a>
                  </div>
                  <div class="card-body pt-0">
                    <span class="font-xsssss fw-700 pl-3 pr-3 lh-32 text-uppercase rounded-lg ls-2 alert-success d-inline-block text-success mr-1">
                      Bootstrap
                    </span>
                    <span class="font-xss fw-700 pl-3 pr-3 ls-2 lh-32 d-inline-block text-success float-right">
                      <span class="font-xsssss">$</span> 60
                    </span>
                    <h4 class="fw-700 font-xss mt-3 lh-28 mt-0">
                      <a
                        href="default-course-details.html"
                        class="text-dark text-grey-900"
                      >
                        Java Programming Masterclass for Developers
                      </a>
                    </h4>
                    <h6 class="font-xssss text-grey-500 fw-600 ml-0 mt-2">
                      {" "}
                      24 Lesson{" "}
                      <span class="float-right mt-1 font-xssss text-grey-500">
                        73%
                      </span>
                    </h6>
                    <div class="progress mt-4 h5 w-100 mb-3">
                      <div
                        class="progress-bar bg-success"
                        role="progressbar"
                        aria-valuenow="96"
                        aria-valuemin="0"
                        aria-valuemax="96"
                      ></div>
                    </div>
                    <p class="review-link mt-0 font-xssss float-right mb-2 fw-500 text-grey-500 lh-3">
                      {" "}
                      2 customer review
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <section className="row section-1">
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
      </section>
      <div className="container-fluid top-margin">
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
              <div className="card  bg-white shadow-lg rounded-lg ">
                <div className="card-image mb-3 rounded-lg">
                  <a href="#." className="video-bttn position-relative d-block">
                    <img src={v1} alt="v1" />
                  </a>
                </div>
                <div className="card-body p-2">
                  <span className="font-xsssss fw-700 pl-3 pr-3 lh-32 text-uppercase rounded-lg ls-2 alert-warning d-inline-block text-warning mr-1">
                    Python
                  </span>
                  <span className="font-xss fw-700 pl-3 pr-3 ls-2 lh-32 d-inline-block text-success float-right">
                    <span className="font-xsssss">$</span> 240
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
            <div className="col-lg-3 mt-3">
              <div className="card  bg-white shadow-lg rounded-lg ">
                <div className="card-image mb-3 rounded-lg">
                  <a href="#." className="video-bttn position-relative d-block">
                    <img src={v6} alt="v1" />
                  </a>
                </div>
                <div className="card-body p-2">
                  <span className="font-xsssss fw-700 pl-3 pr-3 lh-32 text-uppercase rounded-lg ls-2 alert-danger d-inline-block text-danger mr-1">
                    Desinger
                  </span>
                  <span className="font-xss fw-700 pl-3 pr-3 ls-2 lh-32 d-inline-block text-success float-right">
                    <span className="font-xsssss">$</span> 40
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
            <div className="col-lg-3 mt-3">
              <div className="card  bg-white shadow-lg rounded-lg ">
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
            <div className="col-lg-3 mt-3">
              <div className="card  bg-white shadow-lg rounded-lg ">
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
      </div>
      <div class="subscribe-wrapper pt-5 pb-0 block_mb subscription_block">
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
      </div>
      <div class="footer-wrapper mt-0 bg-dark pt--lg-5">
        <div class="container">
          <div class="row">
            <div class="col-sm-12">
              <div class="row">
                <div class="col-md-12 col-lg-4 col-sm-9 col-xs-12 sm-mb-4">
                  <a href="index.html">
                    <h1 class="fredoka-font ls-3 fw-700 text-white font-xxl">
                      Elomoas{" "}
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
                <a href="#" class="">
                  uitheme
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default LandingPage;
