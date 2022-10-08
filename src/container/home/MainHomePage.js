import React from "react";
import LoadingOverlay from "react-loading-overlay";
import Footer from "../components/Footer";
import NavBar from "../components/NavBar";
import { useSelector } from "react-redux";
import Carousel from "react-elastic-carousel";
import frstSliderImg from "../../images/homeMainLandingPage/1.jpg";
import scndSliderImg from "../../images/homeMainLandingPage/2.jpg";
import thrdSliderImg from "../../images/homeMainLandingPage/3.jpg";
import visionImg from "../../images/homeMainLandingPage/vision.jpg";
import startupImg from "../../images/homeMainLandingPage/startup.png";
import targetImg from "../../images/homeMainLandingPage/target.png";
import visionSkinImg from "../../images/homeMainLandingPage/visionSkin.jpg";

function MainHomePage() {
  


  const state = useSelector((state) => state.homeReducer);
  return (
    <div>
      <LoadingOverlay active={state.loading} spinner text="Loading...">
        <div className="main-home-page landing-container">
          <NavBar />
          <div class="middel-container">
          {/* <!-- Carousel --> */}
          <div className="main-carousal">
          <Carousel enableAutoPlay autoPlaySpeed={1500}>
          <div className="carousel">
              <img
                className="d-block w-100"
                src={frstSliderImg}
                alt="First slide"
              />
              <div className="carousel-caption">
                <h3>First slide label</h3>
                <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                <a class="slide-btn" href="" >Public Batches</a>
              </div>
            </div>
            <div className="carousel">
              <img
                className="d-block w-100"
                src={scndSliderImg}
                alt="Second slide"
              />

              <div className="carousel-caption">
                <h3>First slide label</h3>
                <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                <a class="slide-btn" href="" >Traning</a>
              </div>
            </div>
            <div className="carousel">
              <img
                className="d-block w-100"
                src={thrdSliderImg}
                alt="Third slide"
              />

              <div className="carousel-caption">
                <h3>First slide label</h3>
                <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                <a class="slide-btn" href="" >Public Batches</a>
              </div>
            </div>
          </Carousel>
          </div>

            {/* <!-- Carousel --> */}
            <div className="about-us">
              <h3>About Us</h3>
              <p>Within our principles of innovation, we set targets through successful implementation of our custom-designed action plans, to build purposeful defined strategies for cross-border international digital businesses</p>
            </div>
          {/* <!-- vision --> */}
          <div className="p-5 vision-container">
            <div className="visionSkinImg">
            <img
                className=""
                src={visionSkinImg}
                alt="First slide"
              />
            </div>
            <div className="row">
              <div className="col-sm-12 text-center">
                  <h3 className="visionheadTxt">Our Vision & Mission</h3>
              </div>
              <div className="col-sm-12 col-md-6 text-center">
              <img
                className="visionheadImg"
                src={startupImg}
                alt="First slide"
              />
              <h4 className="visionsubheadTxt">Mission</h4>
              </div>
              <div className="col-sm-12 col-md-6 text-center">
              <img
                className="visionheadImg"
                src={targetImg}
                alt="First slide"
              />
              <h4 className="visionsubheadTxt">Vision</h4>
              </div>
            </div>
          
          </div>
          {/* <!-- vision txt--> */}
            <div className="p-5 visiontxt">
            <div className="row">
              <div className="col-12">
                  <h3>VISION</h3>
                  <p>We raise the individual IQ bar through world-class IT solutions,
                      building trust-worthy customer-centric global companies, while
                      enabling successful business strategies and creating long-term
                      partnerships which deliver value and constant innovation.
                      </p>
              </div>
              <div className="col-12">
              <h3>MISSION</h3>
              <p>Through our hereditary core strengths of integrity, commitment,
                consistency and reliability, our clients and consultants are
                empowered to produce simple yet elegant boutique business
                      </p>
              </div>
              <div className="col-12">
              <h3>PRINCIPLES</h3>
              <p>Within our principles of innovation, we set targets through
                  successful implementation of our custom-designed action plans,
                  to build purposeful defined strategies for cross-border
                  international digital businesses

                      </p>
              </div>
              <div className="col-12 txt-practice">
                <h4>"Practice is the hardest part of learning, and training is the essence of transformation" 
                  and we do both with a flair.</h4>
              </div>
            </div>
          </div>
           {/* <!-- secure-section --> */}
           <div className="secure-section">
            <div className="col-12 text-center">
            <h3>
              Secure and GDPR-compliant cloud office for your docs and projects
              </h3>
            </div>
            <div className="col-12 mt-5">
              <div className="row">
                <div className="col-sm-4 text-center">
                <div className="col-xs-12 text-center p-3">
                        <i className="icon ti-desktop"></i>
                      </div>
                  <h4>Reliable hosting</h4>
                  <p>Amazon Web Services (AWS) provides 99,99999% stability guarantee and operates in compliance with the highest industry security standards.</p>
                </div>
                <div className="col-sm-4 text-center">
                <div className="col-xs-12 text-center p-3">
                        <i className="icon ti-desktop"></i>
                      </div>
                  <h4>Data encryption</h4>
                  <p>Your files are stored using 256-bit AES encryption and the portal access is permitted through the HTTP with SSL (Secure Sockets Layer).</p>
                </div>
                <div className="col-sm-4 text-center">
                <div className="col-xs-12 text-center p-3">
                        <i className="icon ti-desktop"></i>
                      </div>
                  <h4>Access restriction</h4>
                  <p>Set permissions to access certain documents, folders, projects, and contacts for other teammates within your cloud office.</p>
                </div>
              </div>
            </div>
          </div>
          {/* <!-- cources --> */}
          
          <div className="cource-section mt-5">
            <div className="col-12">
              <div className="titlepage">
                <h2>
                Courses We  <strong className="yellow">Offer</strong>
                </h2>
              </div>
            </div>
            <div className="col-12 carousel-section">
            <Carousel itemsToScroll={1} itemsToShow={3}>
                <div>
                  <div className="box">
                    <div className="row">
                      <div className="col-xs-12 col-8">
                        <h4 className="title">
                          Training Name -{" "}
                          <span className="course-nm">Angular</span>
                        </h4>
                        <p className="course-count">10+ Courses</p>
                      </div>
                      <div className="col-xs-12 col-4">
                        <i className="icon ti-desktop"></i>
                      </div>
                      <div className="col-12">
                        <a
                          href="#."
                          className="banner-btn posts-btn btn-common"
                        >
                          Get Started
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
                          Training Name -{" "}
                          <span className="course-nm">JAVA</span>
                        </h4>
                        <p className="course-count">10+ Courses</p>
                      </div>
                      <div className="col-xs-12 col-4">
                        <i className="icon ti-desktop"></i>
                      </div>
                      <div className="col-12">
                        <a
                          href="#."
                          className="banner-btn posts-btn btn-common"
                        >
                          Get Started
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
                          Training Name - <span className="course-nm">C#</span>
                        </h4>
                        <p className="course-count">10+ Courses</p>
                      </div>
                      <div className="col-xs-12 col-4">
                        <i className="icon ti-desktop"></i>
                      </div>
                      <div className="col-12">
                        <a
                          href="#."
                          className="banner-btn posts-btn btn-common"
                        >
                          Get Started
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
                          Training Name - <span className="course-nm">CSS</span>
                        </h4>
                        <p className="course-count">10+ Courses</p>
                      </div>
                      <div className="col-xs-12 col-4">
                        <i className="icon ti-desktop"></i>
                      </div>
                      <div className="col-12">
                        <a
                          href="#."
                          className="banner-btn posts-btn btn-common"
                        >
                          Get Started
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
                          Training Name -{" "}
                          <span className="course-nm">HTML</span>
                        </h4>
                        <p className="course-count">10+ Courses</p>
                      </div>
                      <div className="col-xs-12   col-4">
                        <i className="icon ti-desktop"></i>
                      </div>
                      <div className="col-12">
                        <a
                          href="#."
                          className="banner-btn posts-btn btn-common"
                        >
                          Get Started
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </Carousel>
            </div>
          </div>
          </div>
          <Footer />
        </div>
      </LoadingOverlay>
    </div>
  );
}
export default MainHomePage;
