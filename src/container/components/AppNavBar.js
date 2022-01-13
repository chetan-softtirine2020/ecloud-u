import React from "react";
import profleIco from "../../images/female-profile.png";

const AppNavBar = () => {
  return (
    <div>
      <div class="middle-sidebar-header bg-navbar">
        <button class="header-menu"></button>
        <form action="#" class="float-left header-search">
          <div class="form-group mb-0 icon-input">
            <i class="feather-search font-lg text-grey-400"></i>
            <input
              type="text"
              placeholder="Start typing to search.."
              class="border-0 lh-32 pt-2 pb-2 pl-5 pr-3 font-xsss fw-500 rounded-xl w350"
            />
          </div>
        </form>
        <ul class="d-flex ml-auto right-menu-icon">
          <li>
            <a href="#">
              <span class="dot-count bg-warning"></span>
              <i class="feather-bell font-xl text-current"></i>
              <div class="menu-dropdown">
                <h4 class="fw-700 font-xs mb-4">Notification</h4>
                <div class="card bg-transparent-card w-100 border-0 pl-5 mb-3">
                  <img
                    src={profleIco}
                    alt="user"
                    class="w40 position-absolute left-0 rounded-circle"
                  />
                  <h5 class="font-xsss text-grey-900 mb-1 mt-0 fw-700 d-block">
                    Hendrix Stamp{" "}
                    <span class="text-grey-400 font-xsssss fw-600 float-right mt-1">
                      {" "}
                      3 min
                    </span>
                  </h5>
                  <h6 class="text-grey-500 fw-500 font-xssss lh-4">
                    There are many variations of pass..
                  </h6>
                </div>
                <div class="card bg-transparent-card w-100 border-0 pl-5 mb-3">
                  <img
                    src="https://via.placeholder.com/50x50.png"
                    alt="user"
                    class="w40 position-absolute left-0 rounded-circle"
                  />
                  <h5 class="font-xsss text-grey-900 mb-1 mt-0 fw-700 d-block">
                    Goria Coast{" "}
                    <span class="text-grey-400 font-xsssss fw-600 float-right mt-1">
                      {" "}
                      2 min
                    </span>
                  </h5>
                  <h6 class="text-grey-500 fw-500 font-xssss lh-4">
                    Mobile Apps UI Designer is require..
                  </h6>
                </div>

                <div class="card bg-transparent-card w-100 border-0 pl-5 mb-3">
                  <img
                    src="https://via.placeholder.com/50x50.png"
                    alt="user"
                    class="w40 position-absolute left-0 rounded-circle"
                  />
                  <h5 class="font-xsss text-grey-900 mb-1 mt-0 fw-700 d-block">
                    Surfiya Zakir{" "}
                    <span class="text-grey-400 font-xsssss fw-600 float-right mt-1">
                      {" "}
                      1 min
                    </span>
                  </h5>
                  <h6 class="text-grey-500 fw-500 font-xssss lh-4">
                    Mobile Apps UI Designer is require..
                  </h6>
                </div>
                <div class="card bg-transparent-card w-100 border-0 pl-5">
                  <img
                    src="https://via.placeholder.com/50x50.png"
                    alt="user"
                    class="w40 position-absolute left-0 rounded-circle"
                  />
                  <h5 class="font-xsss text-grey-900 mb-1 mt-0 fw-700 d-block">
                    Victor Exrixon{" "}
                    <span class="text-grey-400 font-xsssss fw-600 float-right mt-1">
                      {" "}
                      30 sec
                    </span>
                  </h5>
                  <h6 class="text-grey-500 fw-500 font-xssss lh-4">
                    Mobile Apps UI Designer is require..
                  </h6>
                </div>
              </div>
            </a>
          </li>
          <li>
            <a href="message.html">
              <i class="feather-message-square font-xl text-current"></i>
            </a>
          </li>
          <li>
            <a href="#">
              <i class="feather-settings animation-spin d-inline-block font-xl text-current"></i>
              <div class="menu-dropdown switchcolor-wrap">
                <h4 class="fw-700 font-xs mb-4">Settings</h4>
                <h6 class="font-xssss text-grey-500 fw-700 mb-3 d-block">
                  Choose Color Theme
                </h6>
                <ul>
                  <li class="ml-0">
                    <label class="item-radio item-content">
                      <input
                        type="radio"
                        name="color-radio"
                        value="red"
                        checked=""
                      />
                      <i class="ti-check"></i>
                      <span
                        class="circle-color bg-red"
                        style={{ backgroundColor: "#ff3b30" }}
                      ></span>
                    </label>
                  </li>
                  <li class="ml-0">
                    <label class="item-radio item-content">
                      <input type="radio" name="color-radio" value="green" />
                      <i class="ti-check"></i>
                      <span
                        class="circle-color bg-green"
                        style={{ backgroundColor: "#4cd964" }}
                      ></span>
                    </label>
                  </li>
                  <li class="ml-0">
                    <label class="item-radio item-content">
                      <input
                        type="radio"
                        name="color-radio"
                        value="blue"
                        checked=""
                      />
                      <i class="ti-check"></i>
                      <span
                        class="circle-color bg-blue"
                        style={{ backgroundColor: "#132977" }}
                      ></span>
                    </label>
                  </li>
                  <li class="ml-0">
                    <label class="item-radio item-content">
                      <input type="radio" name="color-radio" value="pink" />
                      <i class="ti-check"></i>
                      <span
                        class="circle-color bg-pink"
                        style={{ backgroundColor: "#ff2d55" }}
                      ></span>
                    </label>
                  </li>
                  <li class="ml-0">
                    <label class="item-radio item-content">
                      <input type="radio" name="color-radio" value="yellow" />
                      <i class="ti-check"></i>
                      <span
                        class="circle-color bg-yellow"
                        style={{ backgroundColor: "#ffcc00" }}
                      ></span>
                    </label>
                  </li>
                  <li class="ml-0">
                    <label class="item-radio item-content">
                      <input type="radio" name="color-radio" value="orange" />
                      <i class="ti-check"></i>
                      <span
                        class="circle-color bg-orange"
                        style={{ backgroundColor: "#ff9500" }}
                      ></span>
                    </label>
                  </li>
                  <li class="ml-0">
                    <label class="item-radio item-content">
                      <input type="radio" name="color-radio" value="gray" />
                      <i class="ti-check"></i>
                      <span
                        class="circle-color bg-gray"
                        style={{ backgroundColor: "#8e8e93" }}
                      ></span>
                    </label>
                  </li>

                  <li class="ml-0">
                    <label class="item-radio item-content">
                      <input type="radio" name="color-radio" value="brown" />
                      <i class="ti-check"></i>
                      <span
                        class="circle-color bg-brown"
                        style={{ backgroundColor: "#D2691E" }}
                      ></span>
                    </label>
                  </li>
                  <li class="ml-0">
                    <label class="item-radio item-content">
                      <input
                        type="radio"
                        name="color-radio"
                        value="darkgreen"
                      />
                      <i class="ti-check"></i>
                      <span
                        class="circle-color bg-darkgreen"
                        style={{ backgroundColor: "#228B22" }}
                      ></span>
                    </label>
                  </li>
                  <li class="ml-0">
                    <label class="item-radio item-content">
                      <input type="radio" name="color-radio" value="deeppink" />
                      <i class="ti-check"></i>
                      <span
                        class="circle-color bg-deeppink"
                        style={{ backgroundColor: "#FFC0CB" }}
                      ></span>
                    </label>
                  </li>
                  <li class="ml-0">
                    <label class="item-radio item-content">
                      <input
                        type="radio"
                        name="color-radio"
                        value="cadetblue"
                      />
                      <i class="ti-check"></i>
                      <span
                        class="circle-color bg-cadetblue"
                        style={{ backgroundColor: "#5f9ea0" }}
                      ></span>
                    </label>
                  </li>
                  <li class="ml-0 d-inline-block">
                    <label class="item-radio item-content">
                      <input
                        type="radio"
                        name="color-radio"
                        value="darkorchid"
                      />
                      <i class="ti-check"></i>
                      <span
                        class="circle-color bg-darkorchid"
                        style={{ backgroundColor: "#9932cc" }}
                      ></span>
                    </label>
                  </li>
                </ul>
                <div class="card bg-transparent-card border-0 d-block mt-3">
                  <h4 class="d-inline font-xssss mont-font fw-700">
                    Header Background
                  </h4>
                  <div class="d-inline float-right mt-1">
                    <label class="toggle toggle-menu-color">
                      <input type="checkbox" />
                      <span class="toggle-icon"></span>
                    </label>
                  </div>
                </div>
                <div class="card bg-transparent-card border-0 d-block mt-3">
                  <h4 class="d-inline font-xssss mont-font fw-700">
                    Sticky Header
                  </h4>
                  <div class="d-inline float-right mt-1">
                    <label class="toggle toggle-sticky">
                      <input type="checkbox" />
                      <span class="toggle-icon"></span>
                    </label>
                  </div>
                </div>
                <div class="card bg-transparent-card border-0 d-block mt-3">
                  <h4 class="d-inline font-xssss mont-font fw-700">
                    Full Screen
                  </h4>
                  <div class="d-inline float-right mt-1">
                    <label class="toggle toggle-screen">
                      <input type="checkbox" />
                      <span class="toggle-icon"></span>
                    </label>
                  </div>
                </div>
                <div class="card bg-transparent-card border-0 d-block mt-3">
                  <h4 class="d-inline font-xssss mont-font fw-700">
                    Menu Position
                  </h4>
                  <div class="d-inline float-right mt-1">
                    <label class="toggle toggle-menu">
                      <input type="checkbox" />
                      <span class="toggle-icon"></span>
                    </label>
                  </div>
                </div>
                <div class="card bg-transparent-card border-0 d-block mt-3">
                  <h4 class="d-inline font-xssss mont-font fw-700">
                    Dark Mode
                  </h4>
                  <div class="d-inline float-right mt-1">
                    <label class="toggle toggle-dark">
                      <input type="checkbox" />
                      <span class="toggle-icon"></span>
                    </label>
                  </div>
                </div>
              </div>
            </a>
          </li>
          <li>
            <a href="default-user-profile.html">
              <img
                src={profleIco}
                alt="user"
                class="w40 rounded-circle mt--1"
              />
            </a>
          </li>
          <li>
            <a href="#" class="menu-search-icon">
              <i class="feather-search text-grey-900 font-lg"></i>
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default AppNavBar;
