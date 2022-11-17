import React from "react";
import logo1 from "../../images/logo/logo.png";
import { Link, useLocation } from "react-router-dom";
//import {redirectUser} from "../../config/redirect";
const NavBar = () => {
  // if (localStorage.getItem("token")) {
  //   redirectUser();
  // }
  let location = useLocation();

  return (
    <div>
      <div className="header-wrapper shadow-xss pos-fixed p-2 pt-2">
        <div className="container-fluid pl-lg--5 pr-lg--5">
          <div className="row">
            <div className="col-lg-9 navbar pt-0 pb-0">
              {/* <h1 className="fredoka-font ls-3 fw-700 text-current font-xxl">
                Educloudlabs{" "}
                <span className="d-block font-xsssss ls-1 text-grey-500 open-font ">
                  Online Learning
                </span>
              </h1> */}
              <Link to={"/training-home"}>
                <img src={logo1} className="header_logo" />
              </Link>
              <button
                className="navbar-toggler"
                type="button"
                data-toggle="collapse"
                data-target="#navbarNavDropdown"
                aria-controls="navbarNavDropdown"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse" id="navbarNavDropdown">
                <ul className="navbar-nav nav-menu float-none text-center">
                  <li className="nav-item">
                    <Link className="nav-link active" to={"/training-home"}>
                      Home
                    </Link>
                  </li>
                  {location.pathname !== "/" && (
                    <li className="nav-item">
                      <Link className="nav-link" to={"/register-organization"}>
                        Organization Register
                      </Link>
                    </li>
                  )}

                  {location.pathname === "/" && (
                    <li className="nav-item dropdown">
                      <a
                        href="#"
                        className="nav-link dropdown-toggle"
                        data-toggle="dropdown"
                      >
                        Services
                      </a>
                      <ul className="dropdown-menu">
                        <li className="nav-item">
                          <Link to={"/training-home"} className="nav-link">
                            {" "}
                            Training
                          </Link>
                        </li>
                        <li className="nav-item">
                          <a className="nav-link" href="#">
                            Cloud Labs
                          </a>
                        </li>

                        <li className="nav-item">
                          <a className="nav-link" href="#">
                            HR Solutions
                          </a>
                        </li>
                        <li className="nav-item">
                          <a className="nav-link" href="#">
                            Vendor Management
                          </a>
                        </li>
                        <li className="nav-item">
                          <a className="nav-link" href="#">
                            Project Management
                          </a>
                        </li>
                        <li className="nav-item">
                          <a className="nav-link" href="#">
                            GLocal Audit Compliance
                          </a>
                        </li>
                      </ul>
                    </li>
                  )}

                  <li className="d-block d-sm-none nav-item">
                    <Link to={"/register"} className="header-btn">
                      Register
                    </Link>
                  </li>
                  <li className="d-block d-sm-none nav-item">
                    <Link to={"/login"} className="header-btn">
                      Loging
                    </Link>
                  </li>

                  <li className="nav-item">
                    {/* <Link className="nav-link" to={"/register-organization"}>
                      Register Organization
                    </Link>
                  */}
                  </li>
                </ul>
              </div>
            </div>
            {location.pathname !== "/" && (
              <div className="col-lg-3 d-none d-lg-block text-right header-btn ">
                <Link to={"/register"} className="header-btn">
                  Register
                </Link>
                <Link to={"/login"} className="header-btn">
                  Login
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
