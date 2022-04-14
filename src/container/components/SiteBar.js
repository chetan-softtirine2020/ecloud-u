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
    <div className="collapse navbar-collapse sitebar-section" id="navbarNavDropdown2">
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
              <a href="/" class="close-nav d-inline-block d-lg-none pl-2" className="navbar-toggler"
                data-toggle="collapse"
                data-target="#navbarNavDropdown2"
                aria-controls="navbarNavDropdown2"
                aria-expanded="false"
                aria-label="Toggle navigation">
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
                    <span>Upcoming Trainings</span>
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
                    <span>Completed Tainings</span>
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

                <li>
                  <Link
                    to={"/org/add-org-sub-admin"}
                    class={`nav-content-bttn open-font ${
                      location.pathname === "/org/add-org-sub-admin"
                        ? "active"
                        : ""
                    }`}
                    data-tab="favorites"
                  >
                    <i class="feather-home mr-3"></i>
                    <span>Org Sub Admin</span>
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
                    <span>All Tranings</span>
                  </Link>
                </li>
                <li class="flex-lg-brackets">
                  <Link
                    to={"/joined-trainings"}
                    data-tab="archived"
                    class={`nav-content-bttn open-font ${
                      location.pathname === "/joined-trainings" ? "active" : ""
                    }`}
                  >
                    <i class="feather-video mr-3"></i>
                    <span>Joined Tranings</span>
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
                    <i class="feather-globe mr-3"></i>
                    <span>Approve Organizations</span>
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
                    <i class="feather-globe mr-3"></i>
                    <span>Learning Providers</span>
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
                    <i class="feather-monitor mr-3"></i>
                    <span>My Trainigs</span>
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
