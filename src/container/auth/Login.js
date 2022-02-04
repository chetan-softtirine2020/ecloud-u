import React, { useState } from "react";
import NavBar from "../components/NavBar";
import { Navigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { logIn } from "../../actions/auth_action";
import LoadingOverlay from "react-loading-overlay";
import facebook from "../../images/icon-3.png";
import google from "../../images/icon-1.png";
import lognbg from "../../images/login/login-bg.jpg";

import { Link } from "react-router-dom";
import { redirectUser } from "../../config/redirect";
const Login = () => {
  const auth = useSelector((state) => state.authReducer);
  const dispatch = useDispatch();
  const [user, setUser] = useState({
    password: "",
    email: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(logIn(user));
    // setUser({
    //   password: "",
    //   email: "",
    // });
  };

  if (localStorage.getItem("redirectLink") && localStorage.getItem("token")) {
    const redirectLink = localStorage.getItem("redirectLink");
    localStorage.removeItem("redirectLink");
    return <Navigate to={redirectLink} />;
  }
  if (!localStorage.getItem("redirectLink") && localStorage.getItem("token")) {
    return <Navigate to={ redirectUser()}/>;
  }

  return (
    <LoadingOverlay active={auth.loading} spinner text="Loading...">
      <div className="main-wrap">
        <NavBar />
        <div className="container login top-margin">
          <div className="row">
            <div className="col-6 text-right pr-0">
              <img className="loginbg pr-0" src={lognbg} />
            </div>
            <div className="col-6 align-items-left my-4 rounded-lg pl-0">
              <div className="card shadow-none border-0 login-card">
                <div className="card-body rounded-0 text-left login_border">
                  <h2 className="fw-700 font-xl display2-md-size login_heading">
                    Login Account
                  </h2>
                  <span className="error-msg">
                    {auth.errors && auth.errors.other_error
                      ? auth.errors.other_error
                      : ""}{" "}
                  </span>
                  <form onSubmit={handleSubmit}>
                    <div className="form-group icon-input mb-3">
                      <i className="font-sm ti-email text-grey-500 pr-0"></i>
                      <input
                        type="text"
                        className="style2-input pl-5 form-control  font-xsss fw-600"
                        placeholder="Your Email Address"
                        required
                        value={user.email}
                        onChange={(e) =>
                          setUser({ ...user, email: e.target.value })
                        }
                      />
                      <span className="error-msg">
                        {auth.errors && auth.errors.email
                          ? auth.errors.email
                          : ""}{" "}
                      </span>
                    </div>
                    <div className="form-group icon-input mb-1">
                      <input
                        type="Password"
                        className="style2-input pl-5 form-control font-xss ls-3"
                        placeholder="Password"
                        required
                        value={user.password}
                        onChange={(e) =>
                          setUser({ ...user, password: e.target.value })
                        }
                      />
                      <span className="error-msg">
                        {auth.errors && auth.errors.password
                          ? auth.errors.password
                          : ""}{" "}
                      </span>
                      <i className="font-sm ti-lock text-grey-500 pr-0"></i>
                    </div>
                    <div className="form-check text-left mb-3">
                      <input
                        type="checkbox"
                        className="form-check-input mt-2"
                        id="exampleCheck1"
                      />
                      <label
                        className="form-check-label font-xsss text-grey-500"
                        htmlFor="exampleCheck1"
                      >
                        Remember me
                      </label>
                      <a
                        href="forgot.html"
                        className="fw-600 font-xsss text-grey-700 mt-1 float-right"
                      >
                        Forgot your Password?
                      </a>
                    </div>
                    <div className="col-sm-12 p-0 text-left">
                      <div className="form-group mb-1">
                        <input
                          type="submit"
                          name="submit"
                          value="Login"
                          className="form-control text-center style2-input text-white fw-600 btn-common border-0 p-0 "
                        />
                      </div>

                      <h6 className="text-grey-500 font-xsss fw-500 mt-0 mb-0 lh-32">
                        Dont have account{" "}
                        <Link to={"/register"} className="fw-700 ml-1">
                          Register
                        </Link>
                      </h6>
                    </div>
                  </form>

                  <div className="col-sm-12 p-0 text-center mt-2">
                    <h6 className="mb-0 d-inline-block fw-500 font-xsss text-grey-500 mb-3">
                      Or, Sign in with your social account{" "}
                    </h6>
                    <div className="row">
                      <div className="col-6">
                        <div className="form-group mb-1">
                          <a
                            href="#"
                            className="form-control text-left style2-input text-white fw-600 bg-facebook border-0 p-0 mb-2"
                          >
                            <img
                              src={google}
                              alt="icon"
                              className="ml-2 w40 mb-1 mr-1"
                            />{" "}
                            Sign in with Google
                          </a>
                        </div>
                      </div>
                      <div className="col-6 pl-0">
                        <div className="form-group mb-1">
                          <a
                            href="#"
                            className="form-control text-left style2-input text-white fw-600 bg-twiiter border-0 p-0 "
                          >
                            <img
                              src={facebook}
                              alt="icon"
                              className="ml-2 w40 mb-1 mr-1"
                            />{" "}
                            Sign in with Facebook
                          </a>
                        </div>
                      </div>
                    </div>


                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </LoadingOverlay>
  );
};
export default Login;
