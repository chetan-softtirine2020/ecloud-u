import React from "react";
import LoadingOverlay from "react-loading-overlay";
import Footer from "../components/Footer";
import { useSelector } from "react-redux";
import Carousel from "react-elastic-carousel";
// import logo from "../../images/new-main-landng-page/Logo.png";
import frstSliderImg from "../../images/new-main-landng-page/Online learning-amico (1).svg";
import scndSliderImg from "../../images/new-main-landng-page/Study abroad-pana.svg";
import thrdSliderImg from "../../images/new-main-landng-page/Group 101.svg";
import forthSliderImg from "../../images/new-main-landng-page/Interview-amico.svg";
import { Navigate } from "react-router-dom";
import HomeNavBar from "../components/HomeNavBar";
import { redirectUser } from "../../config/redirect";
function MainHomePage2() {
  const state = useSelector((state) => state.homeReducer);
  if (localStorage.getItem("token")) {
    return <Navigate to={redirectUser()} />;
  }

  return (
    <div>
      <LoadingOverlay active={state.loading} spinner text="Loading...">
        <div className="main-landing-page landing-container">
          <HomeNavBar />
          {/* Carousel  */}
          <div className="main-carousal">
            <Carousel enableAutoPlay={false} autoPlaySpeed={5500}>
              <div className="carousel">
                <div className="row">
                  <div className="col-xs-12 col-sm-6">
                    <div className="carousel-caption">
                      <h3>Training Solutions</h3>
                      <h4>Upgrade your skills with our Training Solutions</h4>
                      <p>
                        With our thoughtfully designed end to end training
                        platform, our customers can reimagine corporate
                        trainings and undertaking education. Our learning
                        partners can schedule trainings and allocate
                        infrastructure like cloud labs on click of a button. We
                        help organization to arm their workforce with
                        certifications to make them battle ready for mission
                        critical projects.
                      </p>
                      <a class="slide-btn btn-common" href="">
                        Learn More
                      </a>
                    </div>
                  </div>
                  <div className="col-xs-12 col-sm-6">
                    <img className="" src={frstSliderImg} alt="First slide" />
                  </div>
                </div>
              </div>
              <div className="carousel">
                <div className="row">
                  <div className="col-xs-12 col-sm-6">
                    <div className="carousel-caption">
                      <h3>Re-invent Education</h3>
                      <h4>
                        Innovative study program <br></br>Re-invent Education
                      </h4>
                      <p>
                        We are pioneering innovative study abroad programs for
                        Students, Working Professionals or any anyone who wants
                        to pursue Masters or Doctorate education. Reach out to
                        our counsellors to get started.
                      </p>
                      <a class="slide-btn btn-common" href="">
                        Learn More
                      </a>
                    </div>
                  </div>
                  <div className="col-xs-12 col-sm-6">
                    <img className="" src={scndSliderImg} alt="Second slide" />
                  </div>
                </div>
              </div>
              <div className="carousel">
                <div className="row">
                  <div className="col-xs-12 col-sm-6">
                    <div className="carousel-caption">
                      <h3>Cloud Office</h3>
                      <h4>Create a virtual Cloud Office</h4>
                      <p>
                        Create a virtual cloud office with multiple business
                        tools for your team. Manage documents, projects, emails,
                        timetables, and more in one cloud-based solutions.
                      </p>
                      <a class="slide-btn btn-common" href="">
                        Learn More
                      </a>
                    </div>
                  </div>
                  <div className="col-xs-12 col-sm-6">
                    <img className="" src={thrdSliderImg} alt="Third slide" />
                  </div>
                </div>
              </div>
              <div className="carousel">
                <div className="row">
                  <div className="col-xs-12 col-sm-6">
                    <div className="carousel-caption">
                      <h3>Human Resource</h3>
                      <h4>Skilled Human Resources Managment</h4>
                      <p>
                        We provide services for recruitment, selection, training
                        of your human resource to develop synergies between
                        individuals and companies for a long-term partnership.
                      </p>
                      <a class="slide-btn btn-common" href="">
                        Learn More
                      </a>
                    </div>
                  </div>
                  <div className="col-xs-12 col-sm-6">
                    <img className="" src={forthSliderImg} alt="Third slide" />
                  </div>
                </div>
              </div>
            </Carousel>
          </div>
          {/* About us */}
          <div className="about-us">
            <h4>About Us</h4>
            <p>
              The founders of the company are rooted into the education field
              over 43 years and share a vision to create a marketplace of live
              interactive learning where curious minds and talented teachers
              share throbbing need to excel. EduCloudLabs is a fast-growing
              'Education' company that keeps culture and creativity at the heart
              of everything we do. Our mission is to provide optimum quality
              services to our customers and in the process help them scale up
              new heights using our uniquely powerful training platform.
            </p>
          </div>

          {/* our vison  */}

          <div className="our-vision px-5">
            <div className="col-xs-12 col-sm-12 text-center">
              <h1>Our Vision, Mission & Principles</h1>
            </div>
            <div className="col-xs-12 col-sm-12">
              <div className="row">
                <div className="col-xs-12 col-sm-6">
                  <div className="vision-box">
                    <div className="row">
                      <div className="col-xs-12 col-sm-8">
                        <h3>Vision</h3>
                        <p>
                          We raise the individual IQ bar through world-class IT
                          solutions, building trust-worthy customer-centric
                          global companies, while enabling successful business
                          strategies and creating long-term partnerships which
                          deliver value and constant innovation.
                        </p>
                      </div>
                      <div className="col-xs-12 col-sm-4">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="190.19"
                          height="150.448"
                          viewBox="0 0 270.19 187.448"
                        >
                          <g
                            id="Group_163"
                            data-name="Group 163"
                            transform="translate(-0.079)"
                          >
                            <rect
                              id="Rectangle_106"
                              data-name="Rectangle 106"
                              width="32.299"
                              height="9.764"
                              rx="4.882"
                              transform="translate(38.323 75.237)"
                              fill="#ff5e5e"
                              opacity="0.1"
                            />
                            <rect
                              id="Rectangle_107"
                              data-name="Rectangle 107"
                              width="32.299"
                              height="9.764"
                              rx="4.882"
                              transform="translate(72.125 85.004)"
                              fill="#ff5e5e"
                              opacity="0.1"
                            />
                            <rect
                              id="Rectangle_108"
                              data-name="Rectangle 108"
                              width="32.299"
                              height="9.764"
                              rx="4.882"
                              transform="translate(105.929 94.768)"
                              fill="#ff5e5e"
                              opacity="0.1"
                            />
                            <rect
                              id="Rectangle_109"
                              data-name="Rectangle 109"
                              width="32.299"
                              height="9.764"
                              rx="4.882"
                              transform="translate(38.323 60.591)"
                              fill="#ff5e5e"
                              opacity="0.1"
                            />
                            <rect
                              id="Rectangle_110"
                              data-name="Rectangle 110"
                              width="32.299"
                              height="9.764"
                              rx="4.882"
                              transform="translate(72.125 70.355)"
                              fill="#ff5e5e"
                              opacity="0.1"
                            />
                            <rect
                              id="Rectangle_111"
                              data-name="Rectangle 111"
                              width="32.299"
                              height="9.764"
                              rx="4.882"
                              transform="translate(105.929 80.122)"
                              fill="#ff5e5e"
                              opacity="0.1"
                            />
                            <rect
                              id="Rectangle_112"
                              data-name="Rectangle 112"
                              width="32.299"
                              height="9.764"
                              rx="4.882"
                              transform="translate(143.486 75.237)"
                              fill="#ff5e5e"
                              opacity="0.1"
                            />
                            <rect
                              id="Rectangle_113"
                              data-name="Rectangle 113"
                              width="32.299"
                              height="9.764"
                              rx="4.882"
                              transform="translate(177.287 85.004)"
                              fill="#ff5e5e"
                              opacity="0.1"
                            />
                            <rect
                              id="Rectangle_114"
                              data-name="Rectangle 114"
                              width="32.299"
                              height="9.764"
                              rx="4.882"
                              transform="translate(211.091 94.768)"
                              fill="#ff5e5e"
                              opacity="0.1"
                            />
                            <rect
                              id="Rectangle_115"
                              data-name="Rectangle 115"
                              width="32.299"
                              height="9.764"
                              rx="4.882"
                              transform="translate(143.486 60.591)"
                              fill="#ff5e5e"
                              opacity="0.1"
                            />
                            <rect
                              id="Rectangle_116"
                              data-name="Rectangle 116"
                              width="32.299"
                              height="9.764"
                              rx="4.882"
                              transform="translate(177.287 70.355)"
                              fill="#ff5e5e"
                              opacity="0.1"
                            />
                            <rect
                              id="Rectangle_117"
                              data-name="Rectangle 117"
                              width="32.299"
                              height="9.764"
                              rx="4.882"
                              transform="translate(211.091 80.122)"
                              fill="#ff5e5e"
                              opacity="0.1"
                            />
                            <rect
                              id="Rectangle_118"
                              data-name="Rectangle 118"
                              width="32.299"
                              height="9.764"
                              rx="4.882"
                              transform="translate(38.323 41.06)"
                              fill="#ff5e5e"
                              opacity="0.1"
                            />
                            <rect
                              id="Rectangle_119"
                              data-name="Rectangle 119"
                              width="32.299"
                              height="9.764"
                              rx="4.882"
                              transform="translate(72.125 50.824)"
                              fill="#ff5e5e"
                              opacity="0.1"
                            />
                            <rect
                              id="Rectangle_120"
                              data-name="Rectangle 120"
                              width="32.299"
                              height="9.764"
                              rx="4.882"
                              transform="translate(105.929 60.591)"
                              fill="#ff5e5e"
                              opacity="0.1"
                            />
                            <rect
                              id="Rectangle_121"
                              data-name="Rectangle 121"
                              width="32.299"
                              height="9.764"
                              rx="4.882"
                              transform="translate(38.323 26.412)"
                              fill="#ff5e5e"
                              opacity="0.1"
                            />
                            <rect
                              id="Rectangle_122"
                              data-name="Rectangle 122"
                              width="32.299"
                              height="9.764"
                              rx="4.882"
                              transform="translate(72.125 36.178)"
                              fill="#ff5e5e"
                              opacity="0.1"
                            />
                            <rect
                              id="Rectangle_123"
                              data-name="Rectangle 123"
                              width="32.299"
                              height="9.764"
                              rx="4.882"
                              transform="translate(105.929 45.942)"
                              fill="#ff5e5e"
                              opacity="0.1"
                            />
                            <rect
                              id="Rectangle_124"
                              data-name="Rectangle 124"
                              width="32.299"
                              height="9.764"
                              rx="4.882"
                              transform="translate(143.486 41.06)"
                              fill="#ff5e5e"
                              opacity="0.1"
                            />
                            <rect
                              id="Rectangle_125"
                              data-name="Rectangle 125"
                              width="32.299"
                              height="9.764"
                              rx="4.882"
                              transform="translate(177.287 50.824)"
                              fill="#ff5e5e"
                              opacity="0.1"
                            />
                            <rect
                              id="Rectangle_126"
                              data-name="Rectangle 126"
                              width="32.299"
                              height="9.764"
                              rx="4.882"
                              transform="translate(211.091 60.591)"
                              fill="#ff5e5e"
                              opacity="0.1"
                            />
                            <rect
                              id="Rectangle_127"
                              data-name="Rectangle 127"
                              width="32.299"
                              height="9.764"
                              rx="4.882"
                              transform="translate(143.486 26.412)"
                              fill="#ff5e5e"
                              opacity="0.1"
                            />
                            <rect
                              id="Rectangle_128"
                              data-name="Rectangle 128"
                              width="32.299"
                              height="9.764"
                              rx="4.882"
                              transform="translate(177.287 36.178)"
                              fill="#ff5e5e"
                              opacity="0.1"
                            />
                            <rect
                              id="Rectangle_129"
                              data-name="Rectangle 129"
                              width="32.299"
                              height="9.764"
                              rx="4.882"
                              transform="translate(211.091 45.942)"
                              fill="#ff5e5e"
                              opacity="0.1"
                            />
                            <ellipse
                              id="Ellipse_22"
                              data-name="Ellipse 22"
                              cx="135.095"
                              cy="24.356"
                              rx="135.095"
                              ry="24.356"
                              transform="translate(0.079 138.736)"
                              fill="#ff5e5e"
                              opacity="0.1"
                            />
                            <path
                              id="Path_3651"
                              data-name="Path 3651"
                              d="M205.365,320.624,194,390.3l51.39-5.436-2.224-5.93-40.149,3.335,9.389-61.767Z"
                              transform="translate(-146.041 -241.314)"
                              fill="#3f3d56"
                            />
                            <path
                              id="Path_3652"
                              data-name="Path 3652"
                              d="M186,.247,255.179,0l20.013,151.453-69.426,9.389Z"
                              transform="translate(-140.017)"
                              fill="#3f3d56"
                            />
                            <path
                              id="Path_3653"
                              data-name="Path 3653"
                              d="M216.5,24.5h55.838l19.518,140.829-57.567,7.906Z"
                              transform="translate(-162.982 -18.447)"
                              fill="#fff"
                            />
                            <path
                              id="Path_3654"
                              data-name="Path 3654"
                              d="M456.49,633.906a13.768,13.768,0,0,0,1.07,2c1.334,1.784,3.867,2.063,5.767,3.227a.532.532,0,0,1,.225.217c.087.205-.106.42-.292.549-1.44,1.01-3.33,1.033-5.092,1.02a6.793,6.793,0,0,1-1.762-.168c-.931-.247-1.73-.9-2.649-1.161a7.022,7.022,0,0,0-1.455-.205l-1.93-.131a4.551,4.551,0,0,1-1.5-.279,1.522,1.522,0,0,1-.949-1.124,3.23,3.23,0,0,1,.225-1.208c.247-.949.17-2.1.909-2.742a2.8,2.8,0,0,1,1.025-.494,32.7,32.7,0,0,1,4.1-1.092C455.326,632.093,455.983,632.933,456.49,633.906Z"
                              transform="translate(-350.311 -493.359)"
                              fill="#3f3d56"
                            />
                            <path
                              id="Path_3655"
                              data-name="Path 3655"
                              d="M372.2,640.148a1.805,1.805,0,0,1-.316,1.5,1.687,1.687,0,0,1-.828.371,7.237,7.237,0,0,1-5.45-.539,1.506,1.506,0,0,1-.43-.368,1.342,1.342,0,0,1-.217-.68,5.828,5.828,0,0,1,.353-2.063,36.205,36.205,0,0,0,1.05-4.88c.02-.136,4.662.741,4.971,1.2a7.9,7.9,0,0,1,.494,2.609Q372.065,638.715,372.2,640.148Z"
                              transform="translate(-287.851 -494.256)"
                              fill="#3f3d56"
                            />
                            <path
                              id="Path_3656"
                              data-name="Path 3656"
                              d="M381.666,375.891l1.235,11.486a39.991,39.991,0,0,1,.336,7.061c-.2,2.718-.959,5.435-.637,8.129.126,1.048.413,2.075.455,3.13a17.048,17.048,0,0,1-.106,2.1c-.558,6.97,1.208,13.885,2.2,20.806a9.03,9.03,0,0,1,.1,2.589c-.128.877-.385,2.028.4,2.444l-7.333,2.658c-.936-1.174-.316-3-.494-4.489a23.365,23.365,0,0,0-1.292-3.83,18.089,18.089,0,0,1-.546-3.59c-.64-6.565-2.6-12.959-3.064-19.538a8.9,8.9,0,0,0-.247-1.885,17.556,17.556,0,0,0-1.1-2.3,16.221,16.221,0,0,1-1.092-3.669l-1.569-7.35c-1.586,2.362-1.522,5.436-1.836,8.267-.44,3.953-1.423,7.839-2.224,11.743a23.334,23.334,0,0,0-.417,2.545c-.208,2.29.205,4.6-.015,6.891-.247,2.651-1.361,5.238-1.092,7.889a27.591,27.591,0,0,0,1.092,4.279,6.714,6.714,0,0,1-.012,4.341,13.342,13.342,0,0,0-6.352-.7c-2.355-2.409-2.772-5.769-2.933-9.142s.227-6.75-.193-10.09c-.123-.988-.316-1.952-.348-2.938-.1-3.16,1.416-6.117,2.172-9.189a19.444,19.444,0,0,0,.19-8.437c-.371-1.846-1.008-3.637-1.235-5.507a25,25,0,0,1,.741-7.852c.353-1.747.7-3.494,1.1-5.23a13.778,13.778,0,0,1,2.09-5.3,9.315,9.315,0,0,1,8.153-3.291,17.6,17.6,0,0,1,8.42,3.355A31.74,31.74,0,0,1,381.666,375.891Z"
                              transform="translate(-280.033 -294.291)"
                              fill="#192534"
                            />
                            <path
                              id="Path_3657"
                              data-name="Path 3657"
                              d="M402.792,208.735a2.131,2.131,0,0,0-.284.726,2.446,2.446,0,0,0,.494,1.413,7.7,7.7,0,0,1,.724,1.8,2.964,2.964,0,0,1,.106,1.2,2.9,2.9,0,0,1-.321.865,4.4,4.4,0,0,1-2.145,2.152,3.778,3.778,0,0,1-2.32.094,7.044,7.044,0,0,1-2.122-1.008,6.451,6.451,0,0,1-1.453-1.26,8.71,8.71,0,0,1-1-1.729,6.885,6.885,0,0,1-.941-3.4,1.137,1.137,0,0,1,.059-.314,1.688,1.688,0,0,1,.331-.494,6.448,6.448,0,0,0,1.512-4.484l3.6.818c.793.18,1.586.361,2.369.586a3.977,3.977,0,0,1,2.048,1.015C403.864,207.292,403.076,208.211,402.792,208.735Z"
                              transform="translate(-309.357 -171.119)"
                              fill="#fbbebe"
                            />
                            <circle
                              id="Ellipse_23"
                              data-name="Ellipse 23"
                              cx="6.542"
                              cy="6.542"
                              r="6.542"
                              transform="translate(84.965 23.919)"
                              fill="#fbbebe"
                            />
                            <path
                              id="Path_3658"
                              data-name="Path 3658"
                              d="M389.673,233.506a3.785,3.785,0,0,1,1.421-1.369,2.531,2.531,0,0,0,1.206-1.527,1.094,1.094,0,0,1,.109-.43c.21-.316.709-.158,1.008.074a7.741,7.741,0,0,1,1.7,2.152,13.691,13.691,0,0,1,2.448,8.8,18.805,18.805,0,0,1-.3,5.309,15.421,15.421,0,0,0-.768,3.276c-.082,4.084-1.5,7.988-1.6,12.072a31.308,31.308,0,0,0,.178,3.536l.232,2.651q-5.389-.309-10.747-.946a20.559,20.559,0,0,0-.771-3.585,77.806,77.806,0,0,1-2.5-14.76c-.19-2.649-.385-5.287-.679-7.926-.264-2.4-.783-4.813-.472-7.207a9.948,9.948,0,0,1,1.013-3.118,2.055,2.055,0,0,1,.791-.946,2.135,2.135,0,0,1,.558-.18,10.359,10.359,0,0,1,1.7-.2,1.171,1.171,0,0,1,.415.04,1.3,1.3,0,0,1,.566.548,10.258,10.258,0,0,0,4.484,3.741Z"
                              transform="translate(-299.218 -189.847)"
                              fill="#f2f2f2"
                            />
                            <path
                              id="Path_3659"
                              data-name="Path 3659"
                              d="M406.72,243.028c.46.657,1.433.813,1.858,1.482a3.886,3.886,0,0,1,.324.882c.259.828.783,1.547,1.1,2.355a10.1,10.1,0,0,1,.477,3.694,12.219,12.219,0,0,1-.227,2.965c-.148.61-.39,1.191-.568,1.794a8.772,8.772,0,0,0-.331,3.162,1.3,1.3,0,0,0,.178.655,1.422,1.422,0,0,0,.633.43,4.682,4.682,0,0,0,2.273.571.832.832,0,0,0,.452-.151,1.007,1.007,0,0,0,.222-.294l.494-.835a3.714,3.714,0,0,0,.741-2.49,4.943,4.943,0,0,0-.561-1.277,15.012,15.012,0,0,1-.806-1.994,27.686,27.686,0,0,1-1.764-6.955,6.113,6.113,0,0,1,.3-2.7,7.682,7.682,0,0,1,.87-1.5.645.645,0,0,0-.694-.235,4.129,4.129,0,0,0-.719.3,3.411,3.411,0,0,1-2.266-.015,3.959,3.959,0,0,0-1.038-.351C407.565,242.529,406.737,243.058,406.72,243.028Z"
                              transform="translate(-319.299 -199.893)"
                              fill="#ff5e5e"
                            />
                            <path
                              id="Path_3660"
                              data-name="Path 3660"
                              d="M422.612,232.923c-.148-.119-.378-.227-.509-.089a.572.572,0,0,0-.094.2,1.33,1.33,0,0,1-.85.65c-.343.133-.714.208-.922-.047a.559.559,0,0,1,.032-.66,2.017,2.017,0,0,1,.541-.457,5.282,5.282,0,0,0,2.154-3.39,1.611,1.611,0,0,1,.591,1.02c.082.393.091.8.173,1.191a16.712,16.712,0,0,1,.452,1.66,8.682,8.682,0,0,1,0,.914,5.611,5.611,0,0,0,.1.885A16.809,16.809,0,0,0,422.612,232.923Z"
                              transform="translate(-329.407 -189.814)"
                              fill="#f2f2f2"
                            />
                            <path
                              id="Path_3661"
                              data-name="Path 3661"
                              d="M398.3,224.009c-.247-.235-.494-.457-.741-.7a9.609,9.609,0,0,1-2.389-3.793,1.426,1.426,0,0,0-.672.988,1.514,1.514,0,0,0,.326.8,12.523,12.523,0,0,1,1.811,4.845,1.443,1.443,0,0,1,1.248-.665c.39,0,2.142,1.038,2.268.776C400.338,225.857,398.6,224.288,398.3,224.009Z"
                              transform="translate(-310.098 -182.578)"
                              fill="#f2f2f2"
                            />
                            <path
                              id="Path_3662"
                              data-name="Path 3662"
                              d="M359.056,223.609a20.506,20.506,0,0,0,8.3,5.023,1.863,1.863,0,0,1,.838.425,1.712,1.712,0,0,1,.348.766,43.48,43.48,0,0,1,1.006,7.219,4.022,4.022,0,0,1-.025,1.206,3.8,3.8,0,0,1-1.057,1.658c-1.418,1.519-3.036,3.108-3.276,5.174a8.27,8.27,0,0,1-.141,1.186c-.124.46-.4.865-.566,1.312-.825,2.2,1.04,4.867-.1,6.918a12.487,12.487,0,0,1,1.25,3.77,4.909,4.909,0,0,0,.338,1.453,7.527,7.527,0,0,0,1.584,1.729c1.673,1.715,1.878,4.339,1.977,6.733.062,1.349.042,2.9-.988,3.783a4.324,4.324,0,0,1-2.187.813,4.722,4.722,0,0,1-3.079-.215,4.946,4.946,0,0,1-1.532-1.623c-.81-1.179-1.623-2.355-2.392-3.563-1.216-1.9-2.362-4.082-2.011-6.315a14.67,14.67,0,0,1-1.7,6.579,9.054,9.054,0,0,1-5.119,4.311,6.567,6.567,0,0,1-6.387-1.408,8.632,8.632,0,0,1-1.361-1.836,17.919,17.919,0,0,1-2.011-5.117,1.99,1.99,0,0,1,.049-1.406c.111-.2.282-.353.4-.548.39-.665.015-1.5-.363-2.179-.576.054-.988-.623-.936-1.2a5.07,5.07,0,0,1,.642-1.606,8.121,8.121,0,0,0,.212-5.03,22.621,22.621,0,0,1-.823-5.043c.042-1.806-1.258-3.432-2.248-4.941-.553-.85-1.2-1.641-1.68-2.532a8.17,8.17,0,0,1-.647-6.117,16.029,16.029,0,0,1,1.354-3.019l.815-1.529a2.523,2.523,0,0,1,1.729-1.482l5.641-2.224a8.484,8.484,0,0,0,2.036-1.018c.689-.519,1.2-1.235,1.86-1.789a1.043,1.043,0,0,1,.741-.324c.529.047.717.714.771,1.235.124,1.166.988,2.154,1.282,3.289,1.591,6.263,4.959,12.04,5.883,18.434a67,67,0,0,1,3.4-7.338,6.094,6.094,0,0,0,.526-1.065,4.547,4.547,0,0,0,.175-1.653,21.614,21.614,0,0,0-.917-4.734C360.12,227.653,359.626,225.7,359.056,223.609Z"
                              transform="translate(-265.334 -184.144)"
                              fill="#3f3d56"
                            />
                            <path
                              id="Path_3663"
                              data-name="Path 3663"
                              d="M455.923,289.721c.109,1.053.215,2.108.41,3.148.227,1.2.573,2.379.917,3.555a9.252,9.252,0,0,0,.716,1.91,2.454,2.454,0,0,1,.264.566,3.256,3.256,0,0,1-.274,1.482c-.356,1.482.712,3.13.04,4.5a8.58,8.58,0,0,0-.689,1.2,3.606,3.606,0,0,0,.082,1.586,9.608,9.608,0,0,1-.8,4.415l-.85,2.406a22.326,22.326,0,0,0-2.631-4.138c-.383-.445-.8-.857-1.154-1.327a9.3,9.3,0,0,1-1.235-2.406,20.858,20.858,0,0,1-1.277-6.355,4.348,4.348,0,0,1,.21-1.828,9.731,9.731,0,0,1,.548-.988,7.989,7.989,0,0,0,.786-3.97,32.725,32.725,0,0,1,0-4.089,9.353,9.353,0,0,1,.988-3.244,4.6,4.6,0,0,1,1.342-1.673,2.417,2.417,0,0,1,1.482-.482c.808.047.623.741.692,1.411Z"
                              transform="translate(-351.452 -231.119)"
                              fill="#3f3d56"
                            />
                            <path
                              id="Path_3664"
                              data-name="Path 3664"
                              d="M320.441,273.883q-.756,2.224-1.364,4.487-.593,2.224-1.06,4.472a9.581,9.581,0,0,0-.267,2.011,9,9,0,0,0,.4,2.325,57.633,57.633,0,0,0,7.758,16,14.4,14.4,0,0,1,3.286-3,.7.7,0,0,0,.247-.247.67.67,0,0,0-.079-.578c-.9-1.848-2.33-3.476-2.779-5.485-.188-.835-.2-1.7-.408-2.535a27.241,27.241,0,0,1-1.028-3.16c-.151-1.2.247-2.51-.316-3.575a4.722,4.722,0,0,0,2.3-2.765,15.145,15.145,0,0,0,1.107-3.634,10.935,10.935,0,0,0-1.337-6.955,11.116,11.116,0,0,0-2.236-2.807c-.294-.264-.988-1.023-1.416-1.015-.571.012-.754.936-.917,1.351C321.676,270.466,321.024,272.164,320.441,273.883Z"
                              transform="translate(-252.311 -218.644)"
                              fill="#3f3d56"
                            />
                            <path
                              id="Path_3665"
                              data-name="Path 3665"
                              d="M354.113,398.384c.074.054.158.129.138.217s-.091.111-.156.148a1.917,1.917,0,0,0-.712.964,26.9,26.9,0,0,0-1.072,2.839,12.442,12.442,0,0,0-1.937-2.261,5.481,5.481,0,0,1-1.495-1.712c0-.02,1.295-.976,1.413-1.08.363-.324.82-1.221,1.2-1.418.425-.222.83.65,1.154,1A9.811,9.811,0,0,0,354.113,398.384Z"
                              transform="translate(-275.75 -315.49)"
                              fill="#fbbebe"
                            />
                            <path
                              id="Path_3666"
                              data-name="Path 3666"
                              d="M403.815,158.73a1.213,1.213,0,0,0-.306-.892,1.169,1.169,0,0,0-.741-.205c-1.44-.047-2.93.2-4.289-.289-.894-.319-1.658-.931-2.53-1.312a2.55,2.55,0,0,0-2.693.158,3.857,3.857,0,0,0-.865,1.952,11.445,11.445,0,0,1-2.132,4.23,2.624,2.624,0,0,1-1.458-1.433c-1.05-2.14-.534-4.694.212-6.962.247-.761.521-1.515.8-2.266l.6-1.66a3.241,3.241,0,0,0,2.065-1.028l.259.63a3.286,3.286,0,0,0,1.853-.655,1,1,0,0,0,1.174.368c.432-.126.805-.368,1.235-.494,1.149-.371,2.374.2,3.58.264a14.328,14.328,0,0,1,1.529.044,4.012,4.012,0,0,1,2.864,2.943c.289.914.529,2.038,1.431,2.362.02.346-.593.413-.645.741a.568.568,0,0,0,.074.314l.828,1.776a2.056,2.056,0,0,1-1.2-.059C405.09,158.134,403.852,159.4,403.815,158.73Z"
                              transform="translate(-305.36 -129.291)"
                              fill="#192534"
                            />
                            <path
                              id="Path_3667"
                              data-name="Path 3667"
                              d="M615.794,181.161a32.447,32.447,0,0,1,.988,4.133,4.2,4.2,0,0,1-.319,3.086c2.288-3.442,4.677-6.987,8.153-9.208a7.445,7.445,0,0,1-1.94-5.742,14.437,14.437,0,0,0-3.073,1c-1.008.561-1.932,1.258-2.915,1.858-.509.309-2.629,1.04-2.649,1.482,0,.284.842,1.154,1,1.453a11.277,11.277,0,0,1,.754,1.937Z"
                              transform="translate(-475.397 -147.856)"
                              fill="#fbbebe"
                            />
                            <path
                              id="Path_3668"
                              data-name="Path 3668"
                              d="M620.414,724.425a3.829,3.829,0,0,0-3.914-.3c-1.119.578-1.873,1.673-2.891,2.414-1.749,1.27-4.059,1.371-6.108,2.058a2.081,2.081,0,0,0-1.351.988,1.754,1.754,0,0,0,.1,1.376,3.563,3.563,0,0,0,1.7,1.747,7.08,7.08,0,0,0,2.994.472l8.845.1a72.438,72.438,0,0,1,8.153.4,3.054,3.054,0,0,0,1.868-.143c.9-.494,1.008-1.744.939-2.775a25.464,25.464,0,0,0-1.729-7.61c-.106-.269-.247-.576-.546-.625a.89.89,0,0,0-.588.188c-2.5,1.482-5.655,2.32-8.309,1.134"
                              transform="translate(-469.385 -561.315)"
                              fill="#fff"
                            />
                            <path
                              id="Path_3669"
                              data-name="Path 3669"
                              d="M666.117,500.03c-.988,5.739-.343,11.637.768,17.352a30.263,30.263,0,0,0,.808,3.37c.4,1.26.934,2.471,1.307,3.738.949,3.212.815,6.646.675,10l-.647,15.256a11.065,11.065,0,0,0,.282,3.81c.156.494.346,1.112-.047,1.445a1.1,1.1,0,0,1-.521.2,8.069,8.069,0,0,1-5.188-.778l-.175-15.412a99.618,99.618,0,0,0-.843-14.214c-.581-3.731-1.589-7.412-1.655-11.187a44.13,44.13,0,0,1,1.888-11.686,4.491,4.491,0,0,1,1.626-1.977,2,2,0,0,1,.791-.479C665.48,499.385,665.934,499.781,666.117,500.03Z"
                              transform="translate(-510.661 -393.351)"
                              fill="#3f3d56"
                            />
                            <path
                              id="Path_3670"
                              data-name="Path 3670"
                              d="M666.117,500.03c-.988,5.739-.343,11.637.768,17.352a30.263,30.263,0,0,0,.808,3.37c.4,1.26.934,2.471,1.307,3.738.949,3.212.815,6.646.675,10l-.647,15.256a11.065,11.065,0,0,0,.282,3.81c.156.494.346,1.112-.047,1.445a1.1,1.1,0,0,1-.521.2,8.069,8.069,0,0,1-5.188-.778l-.175-15.412a99.618,99.618,0,0,0-.843-14.214c-.581-3.731-1.589-7.412-1.655-11.187a44.13,44.13,0,0,1,1.888-11.686,4.491,4.491,0,0,1,1.626-1.977,2,2,0,0,1,.791-.479C665.48,499.385,665.934,499.781,666.117,500.03Z"
                              transform="translate(-510.661 -393.351)"
                              opacity="0.1"
                            />
                            <path
                              id="Path_3671"
                              data-name="Path 3671"
                              d="M606.7,421.829c-.366,1.5.41,3.064.324,4.61a12.063,12.063,0,0,0-.247,2.789,12.648,12.648,0,0,0,1.179,2.453,6.65,6.65,0,0,1,.4,2.194c.1,1.848.02,3.706-.049,5.547a54.574,54.574,0,0,0,.205,9.255,28.958,28.958,0,0,0,2.142,7.7,13.335,13.335,0,0,1,.8,2.073,14.79,14.79,0,0,1,.272,2.011,20.434,20.434,0,0,0,1.747,6.352c.63,1.376,1.73,2.471,2.078,3.931.331,1.4.109,2.873.348,4.289.175,1.05.6,2.043.84,3.081a36.6,36.6,0,0,1,.457,4.1c.445,3.953,2.241,7.906,1.169,11.741a5.24,5.24,0,0,0-.4,2.34,2.918,2.918,0,0,1,.178,1.149,5.441,5.441,0,0,1-.45.887,1.63,1.63,0,0,0,.455,1.712,4.867,4.867,0,0,0,1.606.949,14.459,14.459,0,0,0,5.683,1.552,1.528,1.528,0,0,0,.7-.128,1.732,1.732,0,0,0,.682-.959l1.013-2.505a1.074,1.074,0,0,0,.077-.941,1.752,1.752,0,0,0-.425-.4c-.818-.689-.633-1.977-.415-3.012a43.961,43.961,0,0,0,.919-8.079,87.975,87.975,0,0,0-1.673-16.143,33.652,33.652,0,0,0-1.235-5.5c-.615-1.779-1.522-3.491-1.374-5.339.158-2-.361-4.089,0-6.058s.931-3.9,1.3-5.863a60.6,60.6,0,0,0,.741-7.743,7.489,7.489,0,0,1,.635-3.088c.289-.549.709-1.018,1.033-1.549.835-1.381.968-3.093,1.766-4.5a15.724,15.724,0,0,0,1.176-1.962,5.484,5.484,0,0,0,.3-1.744,20.749,20.749,0,0,0-.247-4.46,29.018,29.018,0,0,0-13.589-3.153,16.12,16.12,0,0,0-5.327.838C609.877,420.858,608.4,421.7,606.7,421.829Z"
                              transform="translate(-469.796 -333.087)"
                              fill="#3f3d56"
                            />
                            <path
                              id="Path_3672"
                              data-name="Path 3672"
                              d="M609.615,743.448c-.726.9-.677,2.2-1.141,3.261a7.164,7.164,0,0,1-3.009,2.873l-7.412,4.694a2.066,2.066,0,0,0-.988,1.01,1.621,1.621,0,0,0,.037.887,3.85,3.85,0,0,0,2.589,2.629,7.663,7.663,0,0,0,2,.2l3.333.045a19.527,19.527,0,0,0,3.041-.119c.924-.133,1.823-.4,2.742-.566,1.673-.3,3.392-.277,5.067-.571a26.807,26.807,0,0,0,3.034-.783,12.1,12.1,0,0,0,3.481-1.46,1.806,1.806,0,0,0,.669-.721,2.131,2.131,0,0,0-.02-1.307l-1.591-6.992a4.168,4.168,0,0,0-.622-1.633,1.426,1.426,0,0,0-1.539-.581,3.26,3.26,0,0,0-.64.385,3.929,3.929,0,0,1-2.824.457,4.448,4.448,0,0,1-1.947-.694c-.38-.314-.494-.8-.818-1.156a2.32,2.32,0,0,0-3.447.136Z"
                              transform="translate(-462.581 -576.43)"
                              fill="#fff"
                            />
                            <circle
                              id="Ellipse_24"
                              data-name="Ellipse 24"
                              cx="8.927"
                              cy="8.927"
                              r="8.927"
                              transform="translate(133.302 14.488)"
                              fill="#fbbebe"
                            />
                            <path
                              id="Path_3673"
                              data-name="Path 3673"
                              d="M599.832,122.61c.855-.479.855-1.86,1.729-2.32s1.868.338,2.429,1.144a10.522,10.522,0,0,1,1.668,3.921,1.972,1.972,0,0,0,.455,1.117,1.748,1.748,0,0,0,1.082.353q1.692.168,3.39.306a7.328,7.328,0,0,0,3.733-.358,2.717,2.717,0,0,0,1.122-.929,4.183,4.183,0,0,0,.479-1.255,29.61,29.61,0,0,0,1.235-6.841,5.524,5.524,0,0,0-.526-2.792,5.668,5.668,0,0,1-.776-1.468c-.111-.544.247-1.235.81-1.176a3.325,3.325,0,0,1-1.482-.282,1.139,1.139,0,0,1-.62-1.263c-1.255.161-2.169-1.08-3.148-1.883a.853.853,0,0,0-.6-.247,2.154,2.154,0,0,0-.494.19c-.494.173-1.011-.156-1.517-.3-1.359-.38-3.086.539-4.094-.45.1.63-.677,1.053-1.314,1.04a5.4,5.4,0,0,0-1.9-.035,1.235,1.235,0,0,1-.707,1.769l.3.652a1.685,1.685,0,0,0-1.3,1.216,16.426,16.426,0,0,0-.168,4.474C599.664,117.782,600.235,122.39,599.832,122.61Z"
                              transform="translate(-464.49 -98.672)"
                              fill="#192534"
                            />
                            <path
                              id="Path_3674"
                              data-name="Path 3674"
                              d="M603.027,196.918c-4.484,5.043-5.626,12.141-6.582,18.824l-1.408,9.868c-.366,2.56-.741,5.119-1.06,7.686a20.25,20.25,0,0,0-.188,5.295,28.9,28.9,0,0,0,1.038,4.049,38.192,38.192,0,0,1,1.483,10.745c.3-.88,1.334-1.235,2.243-1.433a36.275,36.275,0,0,1,22.7,2.424c1.248-3.5,1.013-7.321,1.361-11.017.494-5.27,2.2-10.377,2.7-15.637.185-1.959.208-3.928.227-5.9a19.744,19.744,0,0,0-.272-4.321,18.132,18.132,0,0,0-1.779-4.447,115.9,115.9,0,0,0-6.75-11.469q-1.863-2.787-3.886-5.463-1.025-1.356-2.093-2.683c-.689-.857-.988-1.6-2.083-1.087A19.336,19.336,0,0,0,603.027,196.918Z"
                              transform="translate(-460.068 -161.998)"
                              fill="#ff5e5e"
                            />
                            <path
                              id="Path_3675"
                              data-name="Path 3675"
                              d="M620.767,375.7a24.209,24.209,0,0,1-3.279-.1,7.116,7.116,0,0,0-2.421,0,2.52,2.52,0,0,0-.941.462.709.709,0,0,0,.4,1.235l.845.074a2.375,2.375,0,0,1,1.512.494.944.944,0,0,1,.306.6c.052.576-.447.889-.894,1.129a7.086,7.086,0,0,0-1.744,1.161,2.416,2.416,0,0,0-.724,1.482.287.287,0,0,0,.42.264c.988-.494,1.633-1.959,2.718-1.715a4.4,4.4,0,0,0-2.387,1.836,1.107,1.107,0,0,0,1.482,1.564,4.893,4.893,0,0,0,.464-.309,11.425,11.425,0,0,0,1.959-2.036c-.791,1.668-1.591,3.62-.682,5.277a.526.526,0,0,0,.494.292c.287-.03.371-.3.418-.536a7.474,7.474,0,0,1,.561-2.248c.87-1.576,3.014-1.729,4.647-2.5a7.453,7.453,0,0,0,3.842-4.956,3.811,3.811,0,0,0,.1-1.883,2.133,2.133,0,0,0-3.212-1.05A6.644,6.644,0,0,1,620.767,375.7Z"
                              transform="translate(-475.238 -298.812)"
                              fill="#fbbebe"
                            />
                            <path
                              id="Path_3676"
                              data-name="Path 3676"
                              d="M630.791,232.982c1.729,2.671,4.731,4.175,7.306,6.051a6.126,6.126,0,0,1,1.616,1.537,5.275,5.275,0,0,1,.608,3.459,21.908,21.908,0,0,1-1.166,4.546l-1.08,3.224a19.97,19.97,0,0,1-2.693,5.853,2.471,2.471,0,0,0-.707,1.453,1.877,1.877,0,0,0,.316.884,5.949,5.949,0,0,0,3.778,2.7,2.882,2.882,0,0,0,1.421,0,3.849,3.849,0,0,0,1.633-1.255,43.685,43.685,0,0,0,6.053-7.82,40.916,40.916,0,0,0,3.372-9.02,18.986,18.986,0,0,0,.741-3.491,12.759,12.759,0,0,0-1.354-6.456,31.862,31.862,0,0,0-3.617-5.594,38.929,38.929,0,0,0-4.237-4.862c-2.688-2.513-5.977-3.99-9.574-2.565-2.54,1.008-3.491,3.111-3.718,5.8A8.83,8.83,0,0,0,630.791,232.982Z"
                              transform="translate(-486.997 -183.743)"
                              opacity="0.1"
                            />
                            <path
                              id="Path_3677"
                              data-name="Path 3677"
                              d="M634.4,230.321c1.73,2.671,4.734,4.175,7.306,6.051a6.143,6.143,0,0,1,1.608,1.547,5.272,5.272,0,0,1,.608,3.459,21.92,21.92,0,0,1-1.169,4.546l-1.08,3.212a20,20,0,0,1-2.693,5.853,2.475,2.475,0,0,0-.7,1.453,1.834,1.834,0,0,0,.316.882,5.947,5.947,0,0,0,3.775,2.7,2.891,2.891,0,0,0,1.423,0,3.859,3.859,0,0,0,1.633-1.253,43.775,43.775,0,0,0,6.053-7.82,40.9,40.9,0,0,0,3.372-9.023,18.792,18.792,0,0,0,.741-3.489,12.8,12.8,0,0,0-1.351-6.458,31.629,31.629,0,0,0-3.617-5.594,38.955,38.955,0,0,0-4.247-4.835c-2.686-2.51-5.974-3.99-9.571-2.562-2.542,1.008-3.491,3.108-3.721,5.8A8.838,8.838,0,0,0,634.4,230.321Z"
                              transform="translate(-489.706 -181.76)"
                              fill="#ff5e5e"
                            />
                            <path
                              id="Path_3678"
                              data-name="Path 3678"
                              d="M825.745,603.013a9.135,9.135,0,0,1-.2,1.917c-.025.119-.052.247-.079.348-.7,2.814-2.681,4.872-5.043,5h-.247c-2.5,0-4.61-2.154-5.307-5.122-.02-.079-.037-.158-.054-.247a9.136,9.136,0,0,1-.2-1.917c0-4.02,2.488-7.276,5.559-7.276S825.745,599,825.745,603.013Z"
                              transform="translate(-626.42 -465.831)"
                              fill="#3f3d56"
                            />
                            <path
                              id="Path_3679"
                              data-name="Path 3679"
                              d="M825.776,603.051a9.137,9.137,0,0,1-.2,1.917c-.025.119-.052.247-.079.348h-.247a11.323,11.323,0,0,1-1.818-.247,11.122,11.122,0,0,1-1.621.371,11.323,11.323,0,0,1-1.27.119h-.43a11.48,11.48,0,0,1-1.523-.1,3.807,3.807,0,0,0-3.678-.247c-.02-.079-.037-.158-.054-.247a9.149,9.149,0,0,1-.2-1.917c0-4.02,2.488-7.276,5.559-7.276S825.776,599.039,825.776,603.051Z"
                              transform="translate(-626.45 -465.869)"
                              opacity="0.1"
                            />
                            <path
                              id="Path_3680"
                              data-name="Path 3680"
                              d="M797.02,520.466a11.252,11.252,0,0,0-1.211-5.092l-6.538,2.033,5.739-3.375a11.3,11.3,0,0,0-8.489-4.838,11.284,11.284,0,0,0-.882-1.166l-9.389,2.923,7.7-4.529a11.3,11.3,0,0,0-17.789,6.026l8.042,9.258-8.724-6.31a15.119,15.119,0,0,0,17.347,20.139A11.311,11.311,0,0,0,796.57,524.5c0-.247,0-.494-.025-.741A11.274,11.274,0,0,0,797.02,520.466Z"
                              transform="translate(-585.835 -396.838)"
                              fill="#ff5e5e"
                            />
                            <path
                              id="Path_3681"
                              data-name="Path 3681"
                              d="M796.773,570.951a30.115,30.115,0,0,0-10.461-.133c-3.926.65-7.938,2.078-11.778,1.035-2.253-.613-4.2-2.031-6.4-2.819a12.151,12.151,0,0,0-6.609-.4,18.332,18.332,0,0,0,21.24,15.286,11.311,11.311,0,0,0,13.742-11.034c0-.247,0-.494-.025-.741A11.15,11.15,0,0,0,796.773,570.951Z"
                              transform="translate(-585.783 -445.227)"
                              opacity="0.1"
                            />
                          </g>
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-xs-12 col-sm-6">
                  <div className="vision-box">
                    <div className="row">
                      <div className="col-xs-12 col-sm-8">
                        <h3>Mission</h3>
                        <p>
                          Through our hereditary core strengths of integrity,
                          commitment, consistency and reliability, our clients
                          and consultants are empowered to produce simple yet
                          elegant boutique business
                        </p>
                      </div>
                      <div className="col-xs-12 col-sm-4">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="190.49"
                          height="150.707"
                          viewBox="0 0 260.49 183.707"
                        >
                          <g
                            id="To_the_stars-rafiki"
                            data-name="To the stars-rafiki"
                            transform="translate(0 -70.239)"
                          >
                            <g
                              id="freepik--background-complete--inject-3"
                              transform="translate(0 70.239)"
                            >
                              <rect
                                id="Rectangle_98"
                                data-name="Rectangle 98"
                                width="260.49"
                                height="0.13"
                                transform="translate(0 160.179)"
                                fill="#ebebeb"
                              />
                              <rect
                                id="Rectangle_99"
                                data-name="Rectangle 99"
                                width="17.255"
                                height="0.13"
                                transform="translate(217.134 168.562)"
                                fill="#ebebeb"
                              />
                              <rect
                                id="Rectangle_100"
                                data-name="Rectangle 100"
                                width="4.527"
                                height="0.13"
                                transform="translate(168.031 169.979)"
                                fill="#ebebeb"
                              />
                              <rect
                                id="Rectangle_101"
                                data-name="Rectangle 101"
                                width="9.998"
                                height="0.13"
                                transform="translate(206.615 163.727)"
                                fill="#ebebeb"
                              />
                              <rect
                                id="Rectangle_102"
                                data-name="Rectangle 102"
                                width="22.501"
                                height="0.13"
                                transform="translate(27.331 164.602)"
                                fill="#ebebeb"
                              />
                              <rect
                                id="Rectangle_103"
                                data-name="Rectangle 103"
                                width="3.298"
                                height="0.13"
                                transform="translate(54.474 164.602)"
                                fill="#ebebeb"
                              />
                              <rect
                                id="Rectangle_104"
                                data-name="Rectangle 104"
                                width="48.805"
                                height="0.13"
                                transform="translate(68.493 166.801)"
                                fill="#ebebeb"
                              />
                              <path
                                id="Path_3604"
                                data-name="Path 3604"
                                d="M212.934,75.15l.438.891a.349.349,0,0,0,.271.193l.985.146a.354.354,0,0,1,.193.6l-.709.7a.349.349,0,0,0-.1.313l.167.979a.354.354,0,0,1-.521.375l-.88-.464a.365.365,0,0,0-.328,0l-.886.464a.354.354,0,0,1-.521-.375l.172-.979a.365.365,0,0,0-.1-.313l-.714-.7a.354.354,0,0,1,.2-.6l.985-.146a.36.36,0,0,0,.271-.193l.438-.891a.359.359,0,0,1,.651,0Z"
                                transform="translate(-100.731 -74.942)"
                                fill="#f5f5f5"
                              />
                              <path
                                id="Path_3605"
                                data-name="Path 3605"
                                d="M88.434,216l.443.9a.354.354,0,0,0,.266.193l.985.146a.354.354,0,0,1,.2.6l-.714.693a.359.359,0,0,0-.1.318l.167.979a.354.354,0,0,1-.521.375l-.88-.464a.375.375,0,0,0-.333,0l-.88.464a.354.354,0,0,1-.521-.375l.167-.979a.359.359,0,0,0-.1-.318l-.709-.693a.354.354,0,0,1,.2-.6l.985-.146a.354.354,0,0,0,.266-.193l.443-.9a.354.354,0,0,1,.641,0Z"
                                transform="translate(-41.098 -142.416)"
                                fill="#f0f0f0"
                              />
                              <path
                                id="Path_3606"
                                data-name="Path 3606"
                                d="M72.719,121.494l.438.891a.359.359,0,0,0,.266.2l.985.141a.359.359,0,0,1,.2.61l-.714.693a.37.37,0,0,0-.1.313l.172.985a.354.354,0,0,1-.521.375l-.88-.464a.344.344,0,0,0-.333,0l-.88.464a.354.354,0,0,1-.521-.375l.167-.985a.339.339,0,0,0-.1-.313l-.709-.693a.354.354,0,0,1,.193-.61l.985-.141a.37.37,0,0,0,.271-.2l.438-.891a.359.359,0,0,1,.656,0Z"
                                transform="translate(-33.562 -97.14)"
                                fill="#f0f0f0"
                              />
                              <path
                                id="Path_3607"
                                data-name="Path 3607"
                                d="M149.486,164.572l.26.521a.219.219,0,0,0,.161.115l.589.083a.214.214,0,0,1,.115.365l-.422.417a.208.208,0,0,0-.062.188l.1.583a.208.208,0,0,1-.307.224l-.521-.276a.219.219,0,0,0-.2,0l-.521.276a.208.208,0,0,1-.307-.224l.1-.583a.208.208,0,0,0-.063-.188l-.427-.417a.214.214,0,0,1,.12-.365l.589-.083a.219.219,0,0,0,.162-.115l.26-.521a.219.219,0,0,1,.375,0Z"
                                transform="translate(-70.855 -117.826)"
                                fill="#f0f0f0"
                              />
                              <path
                                id="Path_3608"
                                data-name="Path 3608"
                                d="M118.84,295.6l.26.521a.224.224,0,0,0,.162.12l.589.083a.214.214,0,0,1,.12.365l-.427.412a.219.219,0,0,0-.063.193l.1.583a.214.214,0,0,1-.313.224l-.521-.276a.219.219,0,0,0-.2,0l-.521.276a.214.214,0,0,1-.307-.224l.1-.583a.219.219,0,0,0-.057-.193l-.427-.412a.214.214,0,0,1,.115-.365l.589-.083a.214.214,0,0,0,.162-.12l.266-.521a.214.214,0,0,1,.37,0Z"
                                transform="translate(-56.177 -180.592)"
                                fill="#f5f5f5"
                              />
                              <path
                                id="Path_3609"
                                data-name="Path 3609"
                                d="M432.951,76.789l.26.521a.2.2,0,0,0,.162.115l.589.089a.214.214,0,0,1,.12.365l-.427.412a.214.214,0,0,0-.062.188l.1.589a.214.214,0,0,1-.313.224l-.521-.276a.219.219,0,0,0-.2,0l-.521.276a.214.214,0,0,1-.307-.224l.1-.589a.214.214,0,0,0-.057-.188l-.438-.406a.214.214,0,0,1,.115-.365l.589-.089a.2.2,0,0,0,.162-.115l.266-.521a.208.208,0,0,1,.38-.005Z"
                                transform="translate(-206.637 -75.769)"
                                fill="#f5f5f5"
                              />
                              <path
                                id="Path_3610"
                                data-name="Path 3610"
                                d="M423.217,265.451l.453.922a.354.354,0,0,0,.276.2l1.042.151a.365.365,0,0,1,.2.625l-.781.719a.38.38,0,0,0-.1.328l.177,1.042a.37.37,0,0,1-.521.385l-.912-.479a.364.364,0,0,0-.344,0l-.9.469a.365.365,0,0,1-.521-.386l.172-1.042a.365.365,0,0,0-.1-.328l-.74-.719a.37.37,0,0,1,.208-.625l1.016-.151a.354.354,0,0,0,.276-.2l.458-.922a.37.37,0,0,1,.646.01Z"
                                transform="translate(-201.431 -166.106)"
                                fill="#f0f0f0"
                              />
                              <path
                                id="Path_3611"
                                data-name="Path 3611"
                                d="M317.316,99.253a.693.693,0,1,1-.693-.693A.693.693,0,0,1,317.316,99.253Z"
                                transform="translate(-151.337 -86.256)"
                                fill="#f0f0f0"
                              />
                              <path
                                id="Path_3612"
                                data-name="Path 3612"
                                d="M355.486,357.033a.688.688,0,1,1-.2-.491.693.693,0,0,1,.2.491Z"
                                transform="translate(-169.621 -209.738)"
                                fill="#f5f5f5"
                              />
                              <path
                                id="Path_3613"
                                data-name="Path 3613"
                                d="M127.3,80.584a2.964,2.964,0,1,1-2.964-2.964,2.964,2.964,0,0,1,2.964,2.964Z"
                                transform="translate(-58.139 -76.225)"
                                fill="#f0f0f0"
                              />
                              <path
                                id="Path_3614"
                                data-name="Path 3614"
                                d="M181.728,119.669a30.738,30.738,0,0,0,5.418.464,6.33,6.33,0,0,1-10.706-1.813A31.305,31.305,0,0,0,181.728,119.669Z"
                                transform="translate(-84.518 -95.721)"
                                fill="#f5f5f5"
                              />
                              <path
                                id="Path_3615"
                                data-name="Path 3615"
                                d="M182.612,106.255a29.253,29.253,0,0,0-6.252-.438,6.335,6.335,0,0,1,12.253,2.084,29.144,29.144,0,0,0-6-1.646Z"
                                transform="translate(-84.48 -87.777)"
                                fill="#f5f5f5"
                              />
                              <ellipse
                                id="Ellipse_18"
                                data-name="Ellipse 18"
                                cx="2.188"
                                cy="9.966"
                                rx="2.188"
                                ry="9.966"
                                transform="translate(87.633 20.781) rotate(-80.41)"
                                fill="#f5f5f5"
                              />
                              <path
                                id="Path_3616"
                                data-name="Path 3616"
                                d="M380.416,147.919a41.319,41.319,0,0,1-55.443,18.495c-.844-.417-1.662-.86-2.443-1.328A51.056,51.056,0,0,0,346.808,88.23a41.35,41.35,0,0,1,33.608,59.689Z"
                                transform="translate(-154.499 -81.307)"
                                fill="#f5f5f5"
                              />
                              <path
                                id="Path_3617"
                                data-name="Path 3617"
                                d="M390.136,107.63a9.378,9.378,0,0,1,3.793,7.038,23.763,23.763,0,0,0-5.168-5.21,24.2,24.2,0,0,0-6.481-3.428A9.378,9.378,0,0,1,390.136,107.63Z"
                                transform="translate(-183.12 -89.705)"
                                fill="#f0f0f0"
                              />
                              <path
                                id="Path_3618"
                                data-name="Path 3618"
                                d="M370.049,223.31a9.377,9.377,0,0,1-7.919,1.136,23.647,23.647,0,0,0,6.648-3.063,24.158,24.158,0,0,0,5.455-4.9,9.378,9.378,0,0,1-4.183,6.83Z"
                                transform="translate(-173.468 -142.742)"
                                fill="#f0f0f0"
                              />
                              <path
                                id="Path_3619"
                                data-name="Path 3619"
                                d="M399,149.391a9.341,9.341,0,0,1,0,8,23.481,23.481,0,0,0-2.084-7.018,24.158,24.158,0,0,0-4.074-6.09A9.377,9.377,0,0,1,399,149.391Z"
                                transform="translate(-188.178 -108.157)"
                                fill="#f0f0f0"
                              />
                              <path
                                id="Path_3620"
                                data-name="Path 3620"
                                d="M410.935,201.388a9.378,9.378,0,0,1-7.195,3.5,23.506,23.506,0,0,0,5.392-4.949,24.209,24.209,0,0,0,3.7-6.33A9.378,9.378,0,0,1,410.935,201.388Z"
                                transform="translate(-193.4 -131.787)"
                                fill="#f0f0f0"
                              />
                            </g>
                            <g
                              id="freepik--Shadow--inject-3"
                              transform="translate(29.232 242.151)"
                            >
                              <ellipse
                                id="freepik--path--inject-3"
                                cx="101.013"
                                cy="5.897"
                                rx="101.013"
                                ry="5.897"
                                fill="#f5f5f5"
                              />
                            </g>
                            <g
                              id="freepik--Rocket--inject-3"
                              transform="translate(55.865 80.688)"
                            >
                              <path
                                id="Path_3621"
                                data-name="Path 3621"
                                d="M254.015,127.163l-.365-.287c1.641-2.084,3.366-4.043,5.126-5.877l.328.323C257.354,123.141,255.64,125.111,254.015,127.163Z"
                                transform="translate(-177.368 -107.454)"
                                fill="#ff725e"
                              />
                              <rect
                                id="Rectangle_105"
                                data-name="Rectangle 105"
                                width="2.704"
                                height="0.458"
                                transform="translate(73.021 23.538) rotate(-51.58)"
                                fill="#ff725e"
                              />
                              <path
                                id="Path_3622"
                                data-name="Path 3622"
                                d="M254.374,138.876c11.321-18.2,12.863-36.13,4.621-41.934s-24.606,1.688-37.927,18.479L183,163.441l39.032,27.487Z"
                                transform="translate(-143.525 -94.999)"
                                fill="#ff725e"
                              />
                              <path
                                id="Path_3623"
                                data-name="Path 3623"
                                d="M277.258,140.115l-33.134,51.509-4.053-7.747,32.91-46.992c9.3-13.29,14.52-25.434,14.541-32.2a.552.552,0,0,1,1.073-.188C290.938,111.247,286.875,125.168,277.258,140.115Z"
                                transform="translate(-170.863 -99.373)"
                                fill="#fff"
                                opacity="0.1"
                              />
                              <ellipse
                                id="Ellipse_19"
                                data-name="Ellipse 19"
                                cx="16.572"
                                cy="23.871"
                                rx="16.572"
                                ry="23.871"
                                transform="matrix(0.576, -0.818, 0.818, 0.576, 29.906, 81.98)"
                                fill="#ff725e"
                              />
                              <ellipse
                                id="Ellipse_20"
                                data-name="Ellipse 20"
                                cx="16.572"
                                cy="23.871"
                                rx="16.572"
                                ry="23.871"
                                transform="matrix(0.576, -0.818, 0.818, 0.576, 29.906, 81.98)"
                                fill="#fff"
                                opacity="0.5"
                              />
                              <path
                                id="Path_3624"
                                data-name="Path 3624"
                                d="M218.7,204.687c-8.565-6.033-18.281-7.757-24.486-4.939l-9.664,12.18c5.731-6.4,17.979-5.96,28.221,1.25s14.791,18.615,10.685,26.153l8.112-13.025C232.267,219.467,227.359,210.782,218.7,204.687Z"
                                transform="translate(-144.268 -144.544)"
                                opacity="0.1"
                              />
                              <path
                                id="Path_3625"
                                data-name="Path 3625"
                                d="M274.495,135.06c-2.376,3.761-4.168,10.8,2.891,15.765s13.082.917,15.817-2.6Z"
                                transform="translate(-186.345 -114.189)"
                                opacity="0.2"
                              />
                              <path
                                id="Path_3626"
                                data-name="Path 3626"
                                d="M295.191,140.174c-.807,6.721-8.575,11.623-16.729,5.882s-6.158-14.707-.1-17.713c3.73-1.865,8.482-1.042,11.732,1.219A11.773,11.773,0,0,1,295.191,140.174Z"
                                transform="translate(-186.665 -110.478)"
                                fill="#fff"
                              />
                              <path
                                id="Path_3627"
                                data-name="Path 3627"
                                d="M281.339,146.194c-3.173-2.23-4.8-5.147-4.569-8.2a7.658,7.658,0,0,1,4.22-6.252,10.163,10.163,0,0,1,14.056,9.9,7.648,7.648,0,0,1-4.444,6.069C287.82,148.976,284.512,148.429,281.339,146.194Z"
                                transform="translate(-188.433 -112.205)"
                                fill="#ff725e"
                              />
                              <path
                                id="Path_3628"
                                data-name="Path 3628"
                                d="M281.339,146.194c-3.173-2.23-4.8-5.147-4.569-8.2a7.658,7.658,0,0,1,4.22-6.252,10.163,10.163,0,0,1,14.056,9.9,7.648,7.648,0,0,1-4.444,6.069C287.82,148.976,284.512,148.429,281.339,146.194Z"
                                transform="translate(-188.433 -112.205)"
                                opacity="0.3"
                              />
                              <path
                                id="Path_3629"
                                data-name="Path 3629"
                                d="M281.2,146.948c-3.173-2.23-4.856-5.064-4.73-7.971a6.715,6.715,0,0,1,3.918-5.814c2.725-1.261,6.658-.709,9.57,1.344s4.757,5.569,4.486,8.56a6.705,6.705,0,0,1-4.168,5.647C287.607,149.813,284.377,149.183,281.2,146.948Z"
                                transform="translate(-188.298 -112.959)"
                                fill="#ff725e"
                              />
                              <path
                                id="Path_3630"
                                data-name="Path 3630"
                                d="M281.2,146.948c-3.173-2.23-4.856-5.064-4.73-7.971a6.715,6.715,0,0,1,3.918-5.814c2.725-1.261,6.658-.709,9.57,1.344s4.757,5.569,4.486,8.56a6.705,6.705,0,0,1-4.168,5.647C287.607,149.813,284.377,149.183,281.2,146.948Z"
                                transform="translate(-188.298 -112.959)"
                                fill="#fff"
                                opacity="0.2"
                              />
                              <path
                                id="Path_3631"
                                data-name="Path 3631"
                                d="M292.164,136.89,277.5,143.36a7.47,7.47,0,0,1-1.042-4.058,6.486,6.486,0,0,1,.391-1.964l9.466-4.168a11.008,11.008,0,0,1,5.84,3.73Z"
                                transform="translate(-188.291 -113.284)"
                                fill="#fff"
                                opacity="0.3"
                              />
                              <path
                                id="Path_3632"
                                data-name="Path 3632"
                                d="M296.255,145.954,282.8,151.882a12.994,12.994,0,0,1-2.2-2.042l14.64-6.46a9.9,9.9,0,0,1,1.016,2.574Z"
                                transform="translate(-190.278 -118.174)"
                                fill="#fff"
                                opacity="0.3"
                              />
                              <path
                                id="Path_3633"
                                data-name="Path 3633"
                                d="M320.128,111.176c-.448-3.595-3.209-7.752-7.575-10.826s-9.206-4.272-12.743-3.485c6.017-2.454,11.409-2.548,15.14.078S320.41,104.684,320.128,111.176Z"
                                transform="translate(-199.48 -94.999)"
                                opacity="0.1"
                              />
                              <ellipse
                                id="Ellipse_21"
                                data-name="Ellipse 21"
                                cx="5.163"
                                cy="7.268"
                                rx="5.163"
                                ry="7.268"
                                transform="matrix(0.576, -0.818, 0.818, 0.576, 53.641, 77.115)"
                                fill="#ff725e"
                                opacity="0.5"
                              />
                              <path
                                id="Path_3634"
                                data-name="Path 3634"
                                d="M197.423,237.47c-1.641,2.329-5.632,2.35-8.914.036s-4.616-6.075-2.975-8.4,5.637-2.35,8.919-.036S199.043,235.141,197.423,237.47Z"
                                transform="translate(-144.403 -158.395)"
                                fill="#ff725e"
                                opacity="0.5"
                              />
                              <path
                                id="Path_3635"
                                data-name="Path 3635"
                                d="M241.137,268.28c-1.641,2.334-5.632,2.35-8.914.036s-4.611-6.075-2.97-8.4,5.632-2.35,8.914-.036S242.778,265.951,241.137,268.28Z"
                                transform="translate(-165.345 -173.153)"
                                fill="#ff725e"
                                opacity="0.5"
                              />
                              <path
                                id="Path_3636"
                                data-name="Path 3636"
                                d="M211.427,264.065c-1.641,2.329-5.632,2.344-8.914.036s-4.611-6.075-2.97-8.409,5.632-2.344,8.914-.036S213.047,261.731,211.427,264.065Z"
                                transform="translate(-151.113 -171.132)"
                                fill="#ff725e"
                                opacity="0.5"
                              />
                              <path
                                id="Path_3637"
                                data-name="Path 3637"
                                d="M227.4,241.69a3.7,3.7,0,0,1-.6.667c.912-2.324-.464-5.548-3.4-7.612s-6.429-2.271-8.31-.636a3.954,3.954,0,0,1,.422-.787c1.641-2.329,5.637-2.35,8.919-.036S229.037,239.356,227.4,241.69Z"
                                transform="translate(-158.897 -160.416)"
                                fill="#ff725e"
                                opacity="0.5"
                              />
                              <path
                                id="Path_3638"
                                data-name="Path 3638"
                                d="M197.686,237.468a3.836,3.836,0,0,1-.6.667c.912-2.329-.458-5.548-3.4-7.617s-6.429-2.271-8.31-.63a3.815,3.815,0,0,1,.422-.787c1.641-2.334,5.632-2.35,8.914-.036S199.306,235.134,197.686,237.468Z"
                                transform="translate(-144.665 -158.393)"
                                fill="#ff725e"
                                opacity="0.5"
                              />
                              <path
                                id="Path_3639"
                                data-name="Path 3639"
                                d="M241.4,268.283a3.8,3.8,0,0,1-.6.662c.912-2.329-.464-5.548-3.4-7.611s-6.429-2.277-8.31-.63a3.725,3.725,0,0,1,.422-.792c1.641-2.334,5.632-2.35,8.914-.037S243.042,265.949,241.4,268.283Z"
                                transform="translate(-165.603 -173.151)"
                                fill="#ff725e"
                                opacity="0.5"
                              />
                              <path
                                id="Path_3640"
                                data-name="Path 3640"
                                d="M211.686,264.065a3.443,3.443,0,0,1-.6.662c.912-2.324-.464-5.548-3.4-7.611s-6.429-2.272-8.31-.63a3.615,3.615,0,0,1,.422-.792c1.641-2.334,5.632-2.344,8.914-.036S213.306,261.731,211.686,264.065Z"
                                transform="translate(-151.372 -171.132)"
                                fill="#ff725e"
                                opacity="0.5"
                              />
                              <path
                                id="Path_3641"
                                data-name="Path 3641"
                                d="M200.74,167.859s-7.033,9.128-13.16,16.984a8.065,8.065,0,0,1-7.4,2.975c-5.35-.662-14.066,3.126-14.066,3.126S182.6,163.858,200.74,167.859Z"
                                transform="translate(-135.435 -129.707)"
                                fill="#ff725e"
                              />
                              <path
                                id="Path_3642"
                                data-name="Path 3642"
                                d="M200.74,167.859s-7.033,9.128-13.16,16.984a8.065,8.065,0,0,1-7.4,2.975c-5.35-.662-14.066,3.126-14.066,3.126S182.6,163.858,200.74,167.859Z"
                                transform="translate(-135.435 -129.707)"
                                opacity="0.3"
                              />
                              <path
                                id="Path_3643"
                                data-name="Path 3643"
                                d="M284.151,212.82s-6.194,9.7-11.555,18.109a8.059,8.059,0,0,0-.3,7.971c2.428,4.819,1.792,14.322,1.792,14.322S294.034,228.543,284.151,212.82Z"
                                transform="translate(-185.863 -151.438)"
                                fill="#ff725e"
                              />
                              <path
                                id="Path_3644"
                                data-name="Path 3644"
                                d="M284.151,212.82s-6.194,9.7-11.555,18.109a8.059,8.059,0,0,0-.3,7.971c2.428,4.819,1.792,14.322,1.792,14.322S294.034,228.543,284.151,212.82Z"
                                transform="translate(-185.863 -151.438)"
                                opacity="0.3"
                              />
                              <path
                                id="Path_3645"
                                data-name="Path 3645"
                                d="M258.058,309.618c6.507-15.921-21.626-20.433-32.759-16.437s-22.485,6.965-22.923-3.689,8.138-17.26,4.048-19.719c-2.266-1.365-2.912,1.042-4.032,4.553-3.428,10.758-22.845,13.321-13.91,28.893s4.168,12.191-10.862,18.437-7.294,24.236,7.247,24.236h87.566C312.568,345.894,274.567,269.07,258.058,309.618Z"
                                transform="translate(-137.044 -178.533)"
                                fill="#ff725e"
                              />
                              <path
                                id="Path_3646"
                                data-name="Path 3646"
                                d="M258.058,309.618c6.507-15.921-21.626-20.433-32.759-16.437s-22.485,6.965-22.923-3.689,8.138-17.26,4.048-19.719c-2.266-1.365-2.912,1.042-4.032,4.553-3.428,10.758-22.845,13.321-13.91,28.893s4.168,12.191-10.862,18.437-7.294,24.236,7.247,24.236h87.566C312.568,345.894,274.567,269.07,258.058,309.618Z"
                                transform="translate(-137.044 -178.533)"
                                fill="#fff"
                                opacity="0.6"
                              />
                              <path
                                id="Path_3647"
                                data-name="Path 3647"
                                d="M154.285,238.756c-1.167-4.053-7.481,1.042-13.7,7.216s-9.289,20.266-15.306,27.612-23.246,13.983-16.51,25.038c9.935,16.291-12.9,31.92,14.145,31.92H178.38c10.143,0,21.141-12.4,5.345-20.839s-39.459,11.232-45.846-7.528c-3.168-9.31,8.336-5.038,3.006-20.282s-4.975-19.4-2.261-26.19C145.23,239.147,156.082,244.914,154.285,238.756Z"
                                transform="translate(-107.23 -163.167)"
                                fill="#ff725e"
                              />
                              <path
                                id="Path_3648"
                                data-name="Path 3648"
                                d="M154.285,238.756c-1.167-4.053-7.481,1.042-13.7,7.216s-9.289,20.266-15.306,27.612-23.246,13.983-16.51,25.038c9.935,16.291-12.9,31.92,14.145,31.92H178.38c10.143,0,21.141-12.4,5.345-20.839s-39.459,11.232-45.846-7.528c-3.168-9.31,8.336-5.038,3.006-20.282s-4.975-19.4-2.261-26.19C145.23,239.147,156.082,244.914,154.285,238.756Z"
                                transform="translate(-107.23 -163.167)"
                                fill="#fff"
                                opacity="0.6"
                              />
                              <path
                                id="Path_3649"
                                data-name="Path 3649"
                                d="M185.264,242.525c1.375-2.511,6.1-1.006,5.991,2.282s-12.326,7.6-10.055,18.948,24.09,12.165,29.211,23.538-14.718,12.967-8.8,20.079,24.184-9.221,37.2-5.022,26.018,30.076,2.146,30.076H167.4c-15.994,0-27.674-33.025-12.306-46.612s2.97-9.174,8.706-17.88S179.987,252.152,185.264,242.525Z"
                                transform="translate(-126.711 -165.065)"
                                fill="#ff725e"
                              />
                              <path
                                id="Path_3650"
                                data-name="Path 3650"
                                d="M185.264,242.525c1.375-2.511,6.1-1.006,5.991,2.282s-12.326,7.6-10.055,18.948,24.09,12.165,29.211,23.538-14.718,12.967-8.8,20.079,24.184-9.221,37.2-5.022,26.018,30.076,2.146,30.076H167.4c-15.994,0-27.674-33.025-12.306-46.612s2.97-9.174,8.706-17.88S179.987,252.152,185.264,242.525Z"
                                transform="translate(-126.711 -165.065)"
                                fill="#fff"
                                opacity="0.8"
                              />
                            </g>
                          </g>
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* principal  */}
          <div className="principal">
            <div className="vision-box">
              <h3>Principles</h3>
              <div className="principal-img">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="200.372"
                  height="150.633"
                  viewBox="0 0 307.372 225.633"
                >
                  <g
                    id="Group_162"
                    data-name="Group 162"
                    transform="translate(7.426 0)"
                  >
                    <path
                      id="Path_2429"
                      data-name="Path 2429"
                      d="M493.753,577.574c0,7.309-5.676,13.234-12.678,13.234S468.4,584.883,468.4,577.574c0-.166,0-.33.009-.494a12.936,12.936,0,0,1,12.91-12.984c7,.136,12.569,6.171,12.438,13.479Z"
                      transform="translate(-380.154 -430.84)"
                      fill="#ff5e5e"
                    />
                    <path
                      id="Path_2431"
                      data-name="Path 2431"
                      d="M484.064,596.89l-3.651-4.869.865-.649,2.975,3.966,11.712-9.581.685.837Z"
                      transform="translate(-387.607 -444.279)"
                      fill="#fff"
                    />
                    <path
                      id="Path_3682"
                      data-name="Path 3682"
                      d="M390.093,258.709a1.18,1.18,0,1,0,0,2.36h86.139a1.18,1.18,0,1,0,0-2.36Z"
                      transform="translate(-330.85 -241.412)"
                      fill="#ccc"
                    />
                    <path
                      id="Path_3683"
                      data-name="Path 3683"
                      d="M390.089,277.351a1.18,1.18,0,0,0,0,2.36h54.458a1.18,1.18,0,0,0,0-2.36Z"
                      transform="translate(-330.846 -252.976)"
                      fill="#ccc"
                    />
                    <path
                      id="Path_2429-2"
                      data-name="Path 2429"
                      d="M599.823,226.336a4.967,4.967,0,1,1-9.924,0c0-.065,0-.129,0-.194a4.966,4.966,0,1,1,9.921.194Z"
                      transform="translate(-455.52 -218.058)"
                      fill="#ff5e5e"
                    />
                    <path
                      id="Path_2431-2"
                      data-name="Path 2431"
                      d="M596.03,233.9l-1.429-1.906.339-.254,1.164,1.552,4.584-3.75.268.328Z"
                      transform="translate(-458.437 -223.319)"
                      fill="#fff"
                    />
                    <path
                      id="Path_3684"
                      data-name="Path 3684"
                      d="M390.093,372.709a1.18,1.18,0,1,0,0,2.36h86.139a1.18,1.18,0,1,0,0-2.36Z"
                      transform="translate(-330.85 -312.126)"
                      fill="#ccc"
                    />
                    <path
                      id="Path_3685"
                      data-name="Path 3685"
                      d="M390.089,391.351a1.18,1.18,0,1,0,0,2.36h54.458a1.18,1.18,0,1,0,0-2.36Z"
                      transform="translate(-330.846 -323.69)"
                      fill="#ccc"
                    />
                    <path
                      id="Path_2429-3"
                      data-name="Path 2429"
                      d="M598.823,340.336a4.967,4.967,0,1,1-9.924,0c0-.065,0-.129,0-.194a4.966,4.966,0,1,1,9.921.194Z"
                      transform="translate(-454.9 -288.772)"
                      fill="#ff5e5e"
                    />
                    <path
                      id="Path_2431-3"
                      data-name="Path 2431"
                      d="M595.03,347.9l-1.429-1.906.338-.254,1.164,1.552,4.584-3.75.268.328Z"
                      transform="translate(-457.817 -294.032)"
                      fill="#fff"
                    />
                    <path
                      id="Path_3686"
                      data-name="Path 3686"
                      d="M390.093,486.709a1.18,1.18,0,1,0,0,2.36h86.139a1.18,1.18,0,1,0,0-2.36Z"
                      transform="translate(-330.85 -382.84)"
                      fill="#ccc"
                    />
                    <path
                      id="Path_3687"
                      data-name="Path 3687"
                      d="M390.089,505.351a1.18,1.18,0,0,0,0,2.36h54.458a1.18,1.18,0,0,0,0-2.36Z"
                      transform="translate(-330.846 -394.403)"
                      fill="#ccc"
                    />
                    <path
                      id="Path_2429-4"
                      data-name="Path 2429"
                      d="M598.823,454.336a4.967,4.967,0,1,1-9.924,0c0-.065,0-.129,0-.194a4.966,4.966,0,1,1,9.921.194Z"
                      transform="translate(-454.9 -359.486)"
                      fill="#ff5e5e"
                    />
                    <path
                      id="Path_2431-4"
                      data-name="Path 2431"
                      d="M595.03,461.9l-1.429-1.906.338-.254,1.164,1.552,4.584-3.75.268.328Z"
                      transform="translate(-457.817 -364.746)"
                      fill="#fff"
                    />
                    <ellipse
                      id="Ellipse_25"
                      data-name="Ellipse 25"
                      cx="153.686"
                      cy="13.854"
                      rx="153.686"
                      ry="13.854"
                      transform="translate(-7.426 197.926)"
                      fill="#ff5e5e"
                      opacity="0.1"
                    />
                    <g
                      id="Group_24"
                      data-name="Group 24"
                      transform="translate(174.907 0)"
                    >
                      <path
                        id="Path_552"
                        data-name="Path 552"
                        d="M704.348,382.667a5.4,5.4,0,0,1,.754.421l23.98-10.235.855-6.317,9.582-.059-.566,14.489L707.3,389.337a5.678,5.678,0,0,1-.24.646,5.472,5.472,0,1,1-2.715-7.315Z"
                        transform="translate(-696.635 -308.261)"
                        fill="#a0616a"
                      />
                      <path
                        id="Path_553"
                        data-name="Path 553"
                        d="M802.952,713.573H796.4l-3.118-25.282h9.674Z"
                        transform="translate(-756.583 -507.88)"
                        fill="#a0616a"
                      />
                      <path
                        id="Path_554"
                        data-name="Path 554"
                        d="M776.158,749.939H788.8V757.9H768.2a7.959,7.959,0,0,1,7.959-7.959h0Z"
                        transform="translate(-741.026 -546.119)"
                        fill="#2f2e41"
                      />
                      <path
                        id="Path_555"
                        data-name="Path 555"
                        d="M866.116,708.9l-6.523.642-5.582-24.855,9.627-.946Z"
                        transform="translate(-794.255 -505.056)"
                        fill="#a0616a"
                      />
                      <path
                        id="Path_556"
                        data-name="Path 556"
                        d="M844.22,745.969,856.8,744.73l.78,7.919-20.5,2.019a7.958,7.958,0,0,1,7.138-8.7Z"
                        transform="translate(-783.729 -542.889)"
                        fill="#2f2e41"
                      />
                      <circle
                        id="Ellipse_84"
                        data-name="Ellipse 84"
                        cx="13.131"
                        cy="13.131"
                        r="13.131"
                        transform="translate(35.062 5.196)"
                        fill="#a0616a"
                      />
                      <path
                        id="Path_557"
                        data-name="Path 557"
                        d="M769.67,590.443a2.392,2.392,0,0,1-2.361-1.978c-3.39-18.83-14.482-80.411-14.748-82.118a.734.734,0,0,1-.009-.118v-4.592a.8.8,0,0,1,.149-.466l1.465-2.05a.79.79,0,0,1,.612-.334c8.353-.392,35.706-1.539,37.027.112h0c1.327,1.657.855,6.687.748,7.678l.005.1,12.289,78.592a2.412,2.412,0,0,1-1.987,2.745l-7.675,1.264a2.417,2.417,0,0,1-2.687-1.654c-2.374-7.586-10.334-33.1-13.093-42.979a.266.266,0,0,0-.524.076c.138,9.413.471,33.428.588,41.722l.012.893a2.416,2.416,0,0,1-2.188,2.425l-7.4.671Q769.782,590.445,769.67,590.443Z"
                        transform="translate(-731.321 -389.863)"
                        fill="#2f2e41"
                      />
                      <path
                        id="Path_99"
                        data-name="Path 99"
                        d="M771.9,307.612c-2.292,1.362-3.663,3.865-4.45,6.417a60.783,60.783,0,0,0-2.611,14.52l-.832,14.755-10.3,39.12c8.923,7.55,14.069,5.833,26.081-.342s13.383,2.059,13.383,2.059l2.4-33.286,3.431-36.373a16.133,16.133,0,0,0-2.6-2.5,26.55,26.55,0,0,0-22.692-4.812Z"
                        transform="translate(-732.039 -270.99)"
                        fill="#ff5e5e"
                      />
                      <path
                        id="Path_558"
                        data-name="Path 558"
                        d="M780.462,399.538a5.627,5.627,0,0,1,.8.374l23.711-11.869.393-6.43,9.781-.674.524,14.657-31.686,10.48a5.614,5.614,0,1,1-3.525-6.54Z"
                        transform="translate(-743.945 -317.231)"
                        fill="#a0616a"
                      />
                      <path
                        id="Path_101"
                        data-name="Path 101"
                        d="M852.068,326.977c5.833,2.059,6.862,24.366,6.862,24.366-6.863-3.775-15.1,2.4-15.1,2.4s-1.716-5.834-3.775-13.383a13.115,13.115,0,0,1,2.745-12.354S846.234,324.917,852.068,326.977Z"
                        transform="translate(-785.271 -283.32)"
                        fill="#ff5e5e"
                      />
                      <path
                        id="Path_102"
                        data-name="Path 102"
                        d="M813.883,234.956c-1.636-1.309-3.868,1.069-3.868,1.069l-1.309-11.777s-8.18.98-13.416-.327-6.054,4.746-6.054,4.746a42,42,0,0,1-.164-7.363c.327-2.945,4.581-5.89,12.107-7.853S812.632,220,812.632,220C817.871,222.612,815.521,236.267,813.883,234.956Z"
                        transform="translate(-753.918 -213.157)"
                        fill="#2f2e41"
                      />
                    </g>
                  </g>
                </svg>
              </div>
              <div className="col-xs-12">
                <div className="row">
                  <div className="col-xs-4 col-sm-1">
                    <i className="ti-settings"></i>
                  </div>
                  <div className="col-xs-8 col-sm-11">
                    <h4>Trust</h4>
                    <p>
                      It is the beginning, the foundation upon which every
                      interaction blossoms.
                    </p>
                  </div>
                </div>
                <div className="row">
                  <div className="col-xs-4 col-sm-1">
                    <i className="ti-settings"></i>
                  </div>
                  <div className="col-xs-8 col-sm-11">
                    <h4>Quality</h4>
                    <p>
                      We strive to provide our customers with products and
                      services which meet and even exceed their expectations.
                    </p>
                  </div>
                </div>
                <div className="row">
                  <div className="col-xs-4 col-sm-1">
                    <i className="ti-settings"></i>
                  </div>
                  <div className="col-xs-8 col-sm-11">
                    <h4>Accountability</h4>
                    <p>
                      Our aim is to take full responsibility for the way we
                      work, the decisions we make, and the impact we have on
                      both our successes and our mistakes
                    </p>
                  </div>
                </div>
                <div className="row">
                  <div className="col-xs-4 col-sm-1">
                    <i className="ti-settings"></i>
                  </div>
                  <div className="col-xs-8 col-sm-11">
                    <h4>Value Creation</h4>
                    <p>
                      Our aim is to take full responsibility for the way we
                      work, the decisions we make, and the impact we have on
                      both our successes and our mistakes
                    </p>
                  </div>
                </div>
                <div className="row">
                  <div className="col-xs-4 col-sm-1">
                    <i className="ti-settings"></i>
                  </div>
                  <div className="col-xs-8 col-sm-11">
                    <h4>Adapt</h4>
                    <p>
                      Ability to quickly and successfully embrace change and
                      adapt effectively to deliver value to customers.
                    </p>
                  </div>
                </div>
                <div className="row">
                  <div className="col-xs-4 col-sm-1">
                    <i className="ti-settings"></i>
                  </div>
                  <div className="col-xs-8 col-sm-11">
                    <h4>Respect</h4>
                    <p>
                      Promotes cooperation and makes it easier for us to achieve
                      our common goals.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* moto-line  */}
          <div className="moto-line">
            <h4>
              "Practice is the hardest part of learning, and training is the
              essence of transformation" and we do both with a flair.
            </h4>
          </div>

          {/* footer */}
          <Footer />
        </div>
      </LoadingOverlay>
    </div>
  );
}
export default MainHomePage2;
