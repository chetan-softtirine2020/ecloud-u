import React from "react";
import { useDispatch } from "react-redux";
import { singOut } from "../../actions/auth_action";
import { useNavigate, Link, useLocation } from "react-router-dom";
const SiteBar = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handelClick = () => {
    dispatch(singOut());
    navigate("/");
  };
  const location = useLocation();
  const userData = JSON.parse(localStorage.getItem("data"));
  return (
    <div
      className="collapse navbar-collapse sitebar-section"
      id="navbarNavDropdown2"
    >
      <nav class="navigation">
        <div class="container pl-0 pr-0">
          <div class="nav-content">
            <div class="nav-top">
              <Link to={"/"}>
                {/* <img src={logo1} /> */}
                <span class="d-inline-block fredoka-font ls-3 fw-600 text-current font-xl logo-text mb-0">
                  Educloudlabs{" "}
                </span>
              </Link>
              <a
                href="/"
                class="close-nav d-inline-block d-lg-none pl-2"
                className="navbar-toggler"
                data-toggle="collapse"
                data-target="#navbarNavDropdown2"
                aria-controls="navbarNavDropdown2"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <i class="ti-close bg-grey mb-0 btn-round-sm font-xssss fw-700 text-dark ml-auto mr-1 "></i>
              </a>
            </div>

            {userData && userData.roles.includes("provider") && (
              <ul class="site_ul">
                <li>
                  <Link
                    to={"/learning-provider"}
                    class={`nav-content-bttn open-font ${
                      location.pathname === "/learning-provider" ? "active" : ""
                    }`}
                    data-tab="favorites"
                  >
                    <i class="feather-home mr-3"></i>
                    <span>Home</span>
                  </Link>
                </li>
                
                <li className="nav-item dropdown custom-sidebar"><a href="#" className="nav-link dropdown-toggle" data-toggle="dropdown">
                  <i class="feather-play-circle mr-3"></i>
                  Training</a>
                  <ul className="dropdown-menu">
                    <li className="nav-item">
                      <Link
                        to={"/create-training"}
                        class={`nav-content-bttn open-font ${location.pathname === "/create-training" ? "active" : ""
                          }`}
                        data-tab="favorites"
                      >
                        {/* <i class="feather-play-circle mr-3"></i> */}
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path d="M543.9 96c-6.2 0-12.5 1.8-18.2 5.7L416 170.1v-58.3c0-26.4-23.2-47.8-51.8-47.8H51.8C23.2 64 0 85.4 0 111.8v288.4C0 426.6 23.2 448 51.8 448h312.4c28.6 0 51.8-21.4 51.8-47.8v-58.3l109.7 68.3c5.7 4 12.1 5.7 18.2 5.7 16.6 0 32.1-13 32.1-31.5V127.5C576 109 560.5 96 543.9 96zM368 398.9c-.6.4-1.8 1.1-3.8 1.1H51.8c-2 0-3.2-.6-3.8-1.1V113.1c.6-.4 1.8-1.1 3.8-1.1h312.4c2 0 3.2.6 3.8 1.1v285.8zm160-43.7l-112-69.8v-58.7l112-69.8v198.3zM288 232h-56v-56c0-8.8-7.2-16-16-16h-16c-8.8 0-16 7.2-16 16v56h-56c-8.8 0-16 7.2-16 16v16c0 8.8 7.2 16 16 16h56v56c0 8.8 7.2 16 16 16h16c8.8 0 16-7.2 16-16v-56h56c8.8 0 16-7.2 16-16v-16c0-8.8-7.2-16-16-16z" /></svg>
                        <span>Create Training</span>
                      </Link>
                    </li>

                    <li class="flex-lg-brackets nav-item">
                      <Link
                        to={"/all-trainings"}
                        data-tab="archived"
                        class={`nav-content-bttn open-font ${location.pathname === "/all-trainings" ? "active" : ""
                          }`}
                      >
                        <i class="feather-video mr-3"></i>
                        <span>Upcoming Trainings</span>
                      </Link>
                    </li>
                    <li class="flex-lg-brackets nav-item">
                      <Link
                        to={"/completed-trainings"}
                        data-tab="archived"
                        class={`nav-content-bttn open-font ${location.pathname === "/completed-trainings"
                            ? "active"
                            : ""
                          }`}
                      >
                        <i class="feather-video mr-3"></i>
                        <span>Completed Trainings</span>
                      </Link>
                    </li>
                  </ul>
                </li>


                <li class="">
                  <Link
                    to={"/create-course"}
                    data-tab="archived"
                    class={`nav-content-bttn open-font ${
                      location.pathname === "/create-course" ? "active" : ""
                    }`}
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path d="M543.9 96c-6.2 0-12.5 1.8-18.2 5.7L416 170.1v-58.3c0-26.4-23.2-47.8-51.8-47.8H51.8C23.2 64 0 85.4 0 111.8v288.4C0 426.6 23.2 448 51.8 448h312.4c28.6 0 51.8-21.4 51.8-47.8v-58.3l109.7 68.3c5.7 4 12.1 5.7 18.2 5.7 16.6 0 32.1-13 32.1-31.5V127.5C576 109 560.5 96 543.9 96zM368 398.9c-.6.4-1.8 1.1-3.8 1.1H51.8c-2 0-3.2-.6-3.8-1.1V113.1c.6-.4 1.8-1.1 3.8-1.1h312.4c2 0 3.2.6 3.8 1.1v285.8zm160-43.7l-112-69.8v-58.7l112-69.8v198.3zM288 232h-56v-56c0-8.8-7.2-16-16-16h-16c-8.8 0-16 7.2-16 16v56h-56c-8.8 0-16 7.2-16 16v16c0 8.8 7.2 16 16 16h56v56c0 8.8 7.2 16 16 16h16c8.8 0 16-7.2 16-16v-56h56c8.8 0 16-7.2 16-16v-16c0-8.8-7.2-16-16-16z"/></svg>
                    <span>Create Course</span>
                  </Link>
                </li>

                <li class="">
                  <Link
                    to={"/all-courses"}
                    data-tab="archived"
                    class={`nav-content-bttn open-font ${
                      location.pathname === "/all-courses" ? "active" : ""
                    }`}
                  >
                    {/* <i class="feather-video mr-3"></i> */}
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path d="M224 280.593C224 267.01 212.989 256 199.407 256H88.593C75.011 256 64 267.01 64 280.593v110.815C64 404.99 75.011 416 88.593 416h110.814C212.989 416 224 404.99 224 391.407V381l27.971 27.971a23.998 23.998 0 0 0 16.97 7.029H296c13.255 0 24-10.745 24-24V280c0-13.255-10.745-24-24-24h-27.059a24.003 24.003 0 0 0-16.97 7.029L224 291v-10.407zM192 384H96v-96h96v96zm80.255-96H288v96h-15.745L224 342.826v-13.652L272.255 288zm97.686-190.059l-83.883-83.882A47.996 47.996 0 0 0 252.118 0H48C21.49 0 0 21.49 0 48v416c0 26.51 21.49 48 48 48h288c26.51 0 48-21.49 48-48V131.882a48 48 0 0 0-14.059-33.941zM256 32.491a15.888 15.888 0 0 1 7.432 4.195l83.882 83.882a15.882 15.882 0 0 1 4.195 7.431H256V32.491zM352 464c0 8.837-7.164 16-16 16H48c-8.836 0-16-7.163-16-16V48c0-8.837 7.164-16 16-16h176v104c0 13.255 10.745 24 24 24h104v304z"/></svg>
                    <span>All Courses</span>
                  </Link>
                </li>

                <li class="">
                  <Link
                    to={"/register-cloud-account"}
                    data-tab="archived"
                    class={`nav-content-bttn open-font ${
                      location.pathname === "/register-cloud-account"
                        ? "active"
                        : ""
                    }`}
                  >
                    {/* <i class="feather-video mr-3"></i> */}
                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32"><path fill="none" d="M0 0h32v32H0z"/><path d="M23 31H9v-3c0-3.86 3.141-7 7-7s7 3.14 7 7v3zm-12-2h10v-1c0-2.757-2.243-5-5-5s-5 2.243-5 5v1z"/><path d="M16 23a5.004 5.004 0 0 1-5-5c0-2.757 2.243-5 5-5s5 2.243 5 5a5.013 5.013 0 0 1-5 5zm0-8c-1.654 0-3 1.346-3 3 0 .528.137 1.033.406 1.501A3 3 0 0 0 16 21a2.997 2.997 0 0 0 2.593-1.499A2.97 2.97 0 0 0 19 18c0-1.654-1.346-3-3-3z"/><path d="M24.5 21h-6.771l.864-1.499A2.97 2.97 0 0 0 19 18c0-1.654-1.346-3-3-3s-3 1.346-3 3c0 .528.137 1.033.406 1.501L14.271 21H7.5A6.508 6.508 0 0 1 1 14.5a6.51 6.51 0 0 1 6.229-6.495C8.142 3.956 11.768 1 16 1s7.858 2.956 8.771 7.005A6.51 6.51 0 0 1 31 14.5c0 3.584-2.916 6.5-6.5 6.5zm-3.603-2H24.5c2.481 0 4.5-2.019 4.5-4.5S26.981 10 24.5 10h-1.454l-.108-.877C22.505 5.632 19.522 3 16 3S9.495 5.632 9.062 9.123L8.954 10H7.5C5.019 10 3 12.019 3 14.5S5.019 19 7.5 19h3.603A4.94 4.94 0 0 1 11 18c0-2.757 2.243-5 5-5s5 2.243 5 5c0 .336-.035.671-.103 1z"/></svg>
                    <span>Register Cloud A/C</span>
                  </Link>
                </li>

                <li class="">
                  <Link
                    to={"/authorize-cloud-account"}
                    data-tab="archived"
                    class={`nav-content-bttn open-font ${
                      location.pathname === "/authorize-cloud-account"
                        ? "active"
                        : ""
                    }`}
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32"><path fill="none" d="M0 0h32v32H0z"/><path d="M23 31H9v-3c0-3.86 3.141-7 7-7s7 3.14 7 7v3zm-12-2h10v-1c0-2.757-2.243-5-5-5s-5 2.243-5 5v1z"/><path d="M16 23a5.004 5.004 0 0 1-5-5c0-2.757 2.243-5 5-5s5 2.243 5 5a5.013 5.013 0 0 1-5 5zm0-8c-1.654 0-3 1.346-3 3 0 .528.137 1.033.406 1.501A3 3 0 0 0 16 21a2.997 2.997 0 0 0 2.593-1.499A2.97 2.97 0 0 0 19 18c0-1.654-1.346-3-3-3z"/><path d="M24.5 21h-6.771l.864-1.499A2.97 2.97 0 0 0 19 18c0-1.654-1.346-3-3-3s-3 1.346-3 3c0 .528.137 1.033.406 1.501L14.271 21H7.5A6.508 6.508 0 0 1 1 14.5a6.51 6.51 0 0 1 6.229-6.495C8.142 3.956 11.768 1 16 1s7.858 2.956 8.771 7.005A6.51 6.51 0 0 1 31 14.5c0 3.584-2.916 6.5-6.5 6.5zm-3.603-2H24.5c2.481 0 4.5-2.019 4.5-4.5S26.981 10 24.5 10h-1.454l-.108-.877C22.505 5.632 19.522 3 16 3S9.495 5.632 9.062 9.123L8.954 10H7.5C5.019 10 3 12.019 3 14.5S5.019 19 7.5 19h3.603A4.94 4.94 0 0 1 11 18c0-2.757 2.243-5 5-5s5 2.243 5 5c0 .336-.035.671-.103 1z"/></svg>
                     <span>Authorize Cloud A/C</span>
                  </Link>
                </li>

                <li class="">
                  <Link
                    to={"/vm-list"}
                    data-tab="archived"
                    class={`nav-content-bttn open-font ${
                      location.pathname === "/vm-list" ? "active" : ""
                    }`}
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" data-name="Layer 1" viewBox="0 0 512 512"><path d="M453,110a8,8,0,0,0-8-8H67a8,8,0,0,0-8,8V352a8,8,0,0,0,8,8H445a8,8,0,0,0,8-8ZM437,344H75V118H437Z"/><path d="M498.115,372H484V117.863C484,90.531,461.919,68,434.587,68H77.413C50.081,68,28,90.531,28,117.863V372H13.885A8.054,8.054,0,0,0,6,380.175v13.962C6,421.469,28.121,444,55.452,444h401.1C483.879,444,506,421.469,506,394.137V380.175A8.054,8.054,0,0,0,498.115,372ZM44,117.863C44,99.354,58.9,84,77.413,84H434.587C453.1,84,468,99.354,468,117.863V372H316.98a8.081,8.081,0,0,0-5.882,2.666L302.661,384a33.839,33.839,0,0,1-24.682,11H234.021a33.8,33.8,0,0,1-24.682-10.955l-8.437-9.31A8.152,8.152,0,0,0,195.02,372H44ZM490,394.137C490,412.646,475.057,428,456.548,428H55.452C36.943,428,22,412.646,22,394.137V388H191.514l6.06,6.8A49.923,49.923,0,0,0,234.021,411h43.958a49.919,49.919,0,0,0,36.446-16.2l6.061-6.8H490Z"/><path d="M163.986,332.306a20.721,20.721,0,0,0,12.178-3.943h0a20.855,20.855,0,0,0,7.989-21.927l11.359-8.213,56.819,26.144a8.006,8.006,0,0,0,6.689,0l57.214-26.326,11.611,8.395a20.855,20.855,0,0,0,7.989,21.927h0a20.819,20.819,0,1,0,1.525-34.776L325,284.665V215.587a7.98,7.98,0,0,0-4.635-7.267L264,182.375V168.74a20.841,20.841,0,1,0-16,.126v13.211L190.811,208.32A8.145,8.145,0,0,0,186,215.587v69.546l-11.538,8.454a20.408,20.408,0,0,0-7.275-2.671,20.816,20.816,0,0,0-20.119,32.772A20.836,20.836,0,0,0,163.986,332.306ZM202,228.11l46,21.013v55.489l-46-20.875Zm53.676,7.085L213.4,215.612l42.28-19.455,42.28,19.455ZM264,304.612V249.123l45-21.013v55.627Zm80.127,4.04a4.83,4.83,0,1,1,1.083,6.745A4.795,4.795,0,0,1,344.127,308.652Zm-88.289-163.9a4.831,4.831,0,1,1-4.831,4.831A4.836,4.836,0,0,1,255.838,144.747ZM159.189,310.716a4.835,4.835,0,0,1,4.759-4.066,4.856,4.856,0,0,1,.777.063,4.831,4.831,0,1,1-5.536,4Z"/></svg>
                    <span>Virtul Machines</span>
                  </Link>
                </li>

                <li class="">
                  <Link
                    to={"/assign-vm-to-user"}
                    data-tab="archived"
                    class={`nav-content-bttn open-font ${
                      location.pathname === "/assign-vm-to-user" ? "active" : ""
                    }`}
                  >
                    {/* <i class="feather-video mr-3"></i> */}
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64"><g data-name="meeting, discussion, brainstorming, online, virtual"><path d="M32 29a6 6 0 10-6-6A6 6 0 0032 29zm0-10a4 4 0 11-4 4A4 4 0 0132 19zM42 35V34a3 3 0 00-3-3H25a3 3 0 00-3 3v1a1 1 0 002 0V34a1 1 0 011-1H39a1 1 0 011 1v1a1 1 0 002 0z"/><path d="M57,39V16a5,5,0,0,0-5-5H12a5,5,0,0,0-5,5V38.1A5,5,0,0,0,3,43V56a5,5,0,0,0,5,5H21a5,5,0,0,0,5-5V53h9v3a5,5,0,0,0,5,5H54a5,5,0,0,0,5-5V43A5,5,0,0,0,57,39Zm0,17a3,3,0,0,1-3,3H40a3,3,0,0,1-3-3V43a1,1,0,0,0-.2-.6L35,40h3a1,1,0,0,0,0-2H33a1,1,0,0,0-.89.55,1,1,0,0,0,.09,1.05L35,43.33V51H26V43.33l2.8-3.73a1,1,0,0,0,.09-1.05A1,1,0,0,0,28,38H23a1,1,0,0,0,0,2h3l-1.8,2.4a1,1,0,0,0-.2.6V56a3,3,0,0,1-3,3H8a3,3,0,0,1-3-3V43a3,3,0,0,1,2-2.82A2.77,2.77,0,0,1,8,40h7a1,1,0,0,0,0-2H9V16a3,3,0,0,1,3-3H52a3,3,0,0,1,3,3V38.1a4.71,4.71,0,0,0-1-.1H46a1,1,0,0,0,0,2h8a2.77,2.77,0,0,1,1,.18A3,3,0,0,1,57,43Z"/><path d="M47 50a4 4 0 10-4-4A4 4 0 0047 50zm0-6a2 2 0 11-2 2A2 2 0 0147 44zM50 52H44a3 3 0 00-3 3v1a1 1 0 002 0V55a1 1 0 011-1h6a1 1 0 011 1v1a1 1 0 002 0V55A3 3 0 0050 52zM14.1 50a4 4 0 10-4-4A4 4 0 0014.1 50zm0-6a2 2 0 11-2 2A2 2 0 0114.1 44zM17.1 52h-6a3 3 0 00-3 3v1a1 1 0 002 0V55a1 1 0 011-1h6a1 1 0 011 1v1a1 1 0 002 0V55A3 3 0 0017.1 52z"/><circle cx="12" cy="16" r="1"/><circle cx="16" cy="16" r="1"/><circle cx="20" cy="16" r="1"/><circle cx="19" cy="39" r="1"/><circle cx="42" cy="39" r="1"/></g></svg>
                    <span>Assign VMs</span>
                  </Link>
                </li>
              </ul>
            )}

            {userData && userData.roles.includes("provider_user") && (
              <ul class="">
                <li>
                  <Link
                    to={"/lpu-home"}
                    class={`nav-content-bttn open-font ${
                      location.pathname === "/lpu-home" ? "active" : ""
                    }`}
                    data-tab="favorites"
                  >
                    <i class="feather-home mr-3"></i>
                    <span>Home</span>
                  </Link>
                </li>
              </ul>
            )}

            {userData && userData.roles.includes("user") && (
              <ul class="">
                <li>
                  <Link
                    to={"/users"}
                    class={`nav-content-bttn open-font ${
                      location.pathname === "/users" ? "active" : ""
                    }`}
                    data-tab="favorites"
                  >
                    <i class="feather-play-circle mr-3"></i>
                    <span>Home</span>
                  </Link>
                </li>
              </ul>
            )}
   

            {userData && userData.roles.includes("organization") && (
              <ul>
                <li>
                  <Link
                    to={"/organization"}
                    class={`nav-content-bttn open-font ${
                      location.pathname === "/get-organizations" ? "active" : ""
                    }`}
                    data-tab="favorites"
                  >
                    <i class="feather-home mr-3"></i>
                    <span> Home</span>
                  </Link>
                </li>

                {/*  <li>

                 <Link
                    to={"/org/create-training"}
                    class={`nav-content-bttn open-font ${
                      location.pathname === "/org/create-training"
                        ? "active"
                        : ""
                    }`}
                    data-tab="favorites"
                  >
                    <i class="feather-globe mr-3"></i>
                    <span> Create Training</span>
                  </Link>
                </li>

                <li>
                  <Link
                    to={"/org/all-trainings"}
                    class={`nav-content-bttn open-font ${
                      location.pathname === "/all-trainings" ? "active" : ""
                    }`}
                    data-tab="favorites"
                  >
                    <i class="feather-globe mr-3"></i>
                    <span> All Trainings</span>
                  </Link>
                  </li>*/}
                <li>
                  <Link
                    to={"/create-training"}
                    class={`nav-content-bttn open-font ${
                      location.pathname === "/create-training" ? "active" : ""
                    }`}
                    data-tab="favorites"
                  >
                    <i class="feather-play-circle mr-3"></i>
                    <span>Create Training</span>
                  </Link>
                </li>
                <li class="flex-lg-brackets">
                  <Link
                    to={"/all-trainings"}
                    data-tab="archived"
                    class={`nav-content-bttn open-font ${
                      location.pathname === "/all-trainings" ? "active" : ""
                    }`}
                  >
                    <i class="feather-video mr-3"></i>
                    <span>Upcoming Tranings</span>
                  </Link>
                </li>
                <li class="flex-lg-brackets">
                  <Link
                    to={"/completed-trainings"}
                    data-tab="archived"
                    class={`nav-content-bttn open-font ${
                      location.pathname === "/completed-trainings"
                        ? "active"
                        : ""
                    }`}
                  >
                    <i class="feather-video mr-3"></i>
                    <span>Completed Trainings</span>
                  </Link>
                </li>
              </ul>
            )}

            {userData && userData.roles.includes("organization_user") && (
              <ul>
                <li>
                  <Link
                    to={"/ou/home"}
                    class={`nav-content-bttn open-font ${
                      location.pathname === "/get-organizations" ? "active" : ""
                    }`}
                    data-tab="favorites"
                  >
                    <i class="feather-home mr-3"></i>
                    <span> Home</span>
                  </Link>
                </li>
              </ul>
            )}

            {userData && userData.roles.includes("admin") && (
              <ul>
                <li>
                  <Link
                    to={"/admin/home"}
                    class={`nav-content-bttn open-font ${
                      location.pathname === "/admin/home" ? "active" : ""
                    }`}
                    data-tab="favorites"
                  >
                    <i class="feather-home mr-3"></i>
                    <span>Home</span>
                  </Link>
                </li>
                <li>
                  <Link
                    to={"/admin/organizations"}
                    class={`nav-content-bttn open-font ${
                      location.pathname === "/admin/organizations"
                        ? "active"
                        : ""
                    }`}
                    data-tab="favorites"
                  >
                    <i class="feather-globe mr-3"></i>
                    <span>Organizations</span>
                  </Link>
                </li>
                <li>
                  <Link
                    to={"/admin/approve-organizations"}
                    class={`nav-content-bttn open-font ${
                      location.pathname === "/admin/approve-organizations"
                        ? "active"
                        : ""
                    }`}
                    data-tab="favorites"
                  >
                    <i class="feather-briefcase mr-3"></i>
                    <span>Approve Organizations</span>
                  </Link>
                </li>

                <li>
                  <Link
                    to={"/admin/org-sub-admin-requests"}
                    class={`nav-content-bttn open-font ${
                      location.pathname === "/admin/org-sub-admin-requests"
                        ? "active"
                        : ""
                    }`}
                    data-tab="favorites"
                  >
                    <i class="feather-users mr-3"></i>
                    <span>Org SubAdmin Requests</span>
                  </Link>
                </li>

                <li>
                  <Link
                    to={"/admin/org-sub-admin"}
                    class={`nav-content-bttn open-font ${
                      location.pathname === "/admin/org-sub-admin"
                        ? "active"
                        : ""
                    }`}
                    data-tab="favorites"
                  >
                    <i class="feather-globe mr-3"></i>
                    <span>Org SubAdmin</span>
                  </Link>
                </li>

                <li>
                  <Link
                    to={"/admin/learning-provider-requests"}
                    class={`nav-content-bttn open-font ${
                      location.pathname === "/admin/learning-provider-requests"
                        ? "active"
                        : ""
                    }`}
                    data-tab="favorites"
                  >
                    <i class="feather-git-pull-request mr-3"></i>
                    <span>Learning Provider Requests</span>
                  </Link>
                </li>

                <li>
                  <Link
                    to={"/admin/learning-providers"}
                    class={`nav-content-bttn open-font ${
                      location.pathname === "/admin/learning-providers"
                        ? "active"
                        : ""
                    }`}
                    data-tab="favorites"
                  >
                    <i class="feather-user-check mr-3"></i>
                    <span>Learning Providers</span>
                  </Link>
                </li>
                <li>
                <Link
                  to={"/admin/vm-pricing-chart"}
                  class={`nav-content-bttn open-font ${
                    location.pathname === " /admin/vm-pricing-chart"
                      ? "active"
                      : ""
                  }`}
                  data-tab="favorites"
                >
                  {/* <i class="feather-globe mr-3"></i> */}
                  <svg xmlns="http://www.w3.org/2000/svg" data-name="Layer 1" viewBox="0 0 512 512"><path d="M453,110a8,8,0,0,0-8-8H67a8,8,0,0,0-8,8V352a8,8,0,0,0,8,8H445a8,8,0,0,0,8-8ZM437,344H75V118H437Z"/><path d="M498.115,372H484V117.863C484,90.531,461.919,68,434.587,68H77.413C50.081,68,28,90.531,28,117.863V372H13.885A8.054,8.054,0,0,0,6,380.175v13.962C6,421.469,28.121,444,55.452,444h401.1C483.879,444,506,421.469,506,394.137V380.175A8.054,8.054,0,0,0,498.115,372ZM44,117.863C44,99.354,58.9,84,77.413,84H434.587C453.1,84,468,99.354,468,117.863V372H316.98a8.081,8.081,0,0,0-5.882,2.666L302.661,384a33.839,33.839,0,0,1-24.682,11H234.021a33.8,33.8,0,0,1-24.682-10.955l-8.437-9.31A8.152,8.152,0,0,0,195.02,372H44ZM490,394.137C490,412.646,475.057,428,456.548,428H55.452C36.943,428,22,412.646,22,394.137V388H191.514l6.06,6.8A49.923,49.923,0,0,0,234.021,411h43.958a49.919,49.919,0,0,0,36.446-16.2l6.061-6.8H490Z"/><path d="M163.986,332.306a20.721,20.721,0,0,0,12.178-3.943h0a20.855,20.855,0,0,0,7.989-21.927l11.359-8.213,56.819,26.144a8.006,8.006,0,0,0,6.689,0l57.214-26.326,11.611,8.395a20.855,20.855,0,0,0,7.989,21.927h0a20.819,20.819,0,1,0,1.525-34.776L325,284.665V215.587a7.98,7.98,0,0,0-4.635-7.267L264,182.375V168.74a20.841,20.841,0,1,0-16,.126v13.211L190.811,208.32A8.145,8.145,0,0,0,186,215.587v69.546l-11.538,8.454a20.408,20.408,0,0,0-7.275-2.671,20.816,20.816,0,0,0-20.119,32.772A20.836,20.836,0,0,0,163.986,332.306ZM202,228.11l46,21.013v55.489l-46-20.875Zm53.676,7.085L213.4,215.612l42.28-19.455,42.28,19.455ZM264,304.612V249.123l45-21.013v55.627Zm80.127,4.04a4.83,4.83,0,1,1,1.083,6.745A4.795,4.795,0,0,1,344.127,308.652Zm-88.289-163.9a4.831,4.831,0,1,1-4.831,4.831A4.836,4.836,0,0,1,255.838,144.747ZM159.189,310.716a4.835,4.835,0,0,1,4.759-4.066,4.856,4.856,0,0,1,.777.063,4.831,4.831,0,1,1-5.536,4Z"/></svg>
                  <span>VM Pricing Chart</span>
                </Link>
              </li>   
            </ul>
            )}

            <ul>
              {userData && !userData.roles.includes("admin") && (
                <li>
                  <Link
                    to={"/my-trainings"}
                    class={`nav-content-bttn open-font ${
                      location.pathname === "/my-trainings" ? "active" : ""
                    }`}
                    data-tab="favorites"
                  >
                    {/* <i class="feather-monitor mr-3"></i> */}
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64"><g data-name="Layer 2"><path d="M48.08 11.323a.996.996 0 1 0 1.63-1.09.996.996 0 0 0-1.63 1.09zm3.99 0a.996.996 0 1 0 1.63-1.09.996.996 0 0 0-1.63 1.09zm4.22-1.09a1.004 1.004 0 0 0 1.42 1.42 1.004 1.004 0 0 0-1.42-1.42zm.71 3.71H29a1 1 0 0 0-1 1v19a1 1 0 0 0 1 1h28a1 1 0 0 0 1-1v-19a1 1 0 0 0-1-1zm-1 19H30v-17h26zm-27 7h14a1 1 0 0 0 0-2H29a1 1 0 0 0 0 2zm24 2H29a1 1 0 0 0 0 2h24a1 1 0 0 0 0-2z"/><path d="M59 5.943H5a3.003 3.003 0 0 0-3 3v37a3.003 3.003 0 0 0 3 3h1.613a31.076 31.076 0 0 0-.063 8.141 1 1 0 0 0 .924.857c1.184.079 2.313.116 3.39.116 12.817 0 18.145-5.168 18.383-5.407a1 1 0 0 0 .263-.95 15.401 15.401 0 0 0-.98-2.757H59a3.003 3.003 0 0 0 3-3v-37a3.003 3.003 0 0 0-3-3ZM8.444 55.995c-.23-2.589-.57-10.687 3.63-14.07a4.023 4.023 0 0 0 6.776.25c1.814.87 6.853 3.738 8.557 9.418-1.55 1.204-7.383 4.974-18.963 4.402ZM19.125 23.75c-2.998-1.033-6.005 1.401-7.014 3.693a3.76 3.76 0 0 0-5.039 1.934c-.895-3.526 4.933-7.644 5.006-7.59a1.008 1.008 0 0 0 .31-.314c3.147-5.035 5.747-5.744 6.963-5.744a2.345 2.345 0 0 1 .685.09c2.422 1.97.084 6.322-.911 7.93Zm-8.867 9.49c-.69-.922-2.095-2.487-1.01-3.59a1.726 1.726 0 0 1 2.59.005 1.008 1.008 0 0 0 1.65-.393c.324-1.113 2.333-4.755 5.426-3.47 6.383 13.606-.621 13.462-8.656 7.448Zm7.282 5.804a4.972 4.972 0 0 1-.12 1.556 1.998 1.998 0 0 1-3.86-.415c-.039.032-.013-2.484-.02-2.566a15.204 15.204 0 0 0 4 1.425Zm42.46 6.9a1.001 1.001 0 0 1-1 1H27.407a19.318 19.318 0 0 0-7.895-6.673 10.84 10.84 0 0 0 .028-1.14c6.24-1.395 3.62-9.18 1.196-14.182 1.217-1.868 4.495-8.034.251-10.9-.196-.097-4.81-2.273-10.178 6.179-4.079 2.633-9.666 9.416-1.885 14.503a30.524 30.524 0 0 0 2.616 1.778v3.334a11.4 11.4 0 0 0-4.529 7.1H5a1.001 1.001 0 0 1-1-1v-37a1.001 1.001 0 0 1 1-1h54a1.001 1.001 0 0 1 1 1Z"/><path d="M39.746 29.737a1.492 1.492 0 0 0 1.498.013l6.553-3.687a1.506 1.506 0 0 0 0-2.625l-6.553-3.686A1.506 1.506 0 0 0 39 21.064v7.373a1.491 1.491 0 0 0 .746 1.3ZM41 21.91l5.05 2.841-5.05 2.84Z"/></g></svg>
                    <span>My Trainings</span>
                  </Link>
                </li>
              )}
              <li class="logo d-none d-xl-block d-lg-block"></li>
              <li>
                <Link
                  to={"/change-password"}
                  class={`nav-content-bttn open-font ${
                    location.pathname === "/change-password" ? "active" : ""
                  }`}
                >
                  <i class="font-sm feather-lock mr-3 "></i>
                  <span>Change Password</span>
                </Link>
              </li>
              <li>
                <a
                  onClick={() => handelClick()}
                  class="nav-content-bttn open-font h-auto pt-2 pb-2"
                >
                  <i class="font-sm feather-log-out mr-3"></i>
                  <span>Logout</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default SiteBar;
