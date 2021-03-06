import React from "react";
import logo1 from "../../images/logo/logo.svg";
import {Link } from "react-router-dom";
//import {redirectUser} from "../../config/redirect"; 
const NavBar = () => {
  // if (localStorage.getItem("token")) {
  //   redirectUser();
  // }
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
              <Link to={"/"}>
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
                    <Link className="nav-link active" to={"/"}>
                      Home
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to={"/register-organization"}>
                      Organization Register
                    </Link>
                  </li>
                  <li className="d-block d-sm-none nav-item">
                  <Link to={"/login"} className="header-btn">
                    Login
                  </Link>
              
                  </li>
                  <li className="d-block d-sm-none nav-item">
                  <Link to={"/register"} className="header-btn">
                    Register
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
            <div className="col-lg-3 d-none d-lg-block text-right header-btn ">
              <Link to={"/login"} className="header-btn">
                Login
              </Link>
              <Link to={"/register"} className="header-btn">
                Register
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
