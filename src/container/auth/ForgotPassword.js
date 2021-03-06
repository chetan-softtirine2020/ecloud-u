import React, { useState,useEffect } from "react";
import NavBar from "../components/NavBar";
import { Navigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { forgotPassword,resetErorrs } from "../../actions/auth_action";
import LoadingOverlay from "react-loading-overlay";
import facebook from "../../images/icon-3.png";
import google from "../../images/icon-1.png";
import lognbg from "../../images/login/login-bg.jpg";
import { Link } from "react-router-dom";
const ForgotPassword = () => {
  const auth = useSelector((state) => state.authReducer);
  const dispatch = useDispatch();
  const [user, setUser] = useState({
      email: "",
  });

  useEffect(() => {
    dispatch(resetErorrs());
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(forgotPassword(user));
    // setUser({
    //   password: "",
    //   email: "",
    // });
  };

  // if (auth.is_done) {
  //   return <Navigate to={"/login"} />;
  // }

  return (
    <LoadingOverlay active={auth.loading} spinner text="Loading...">
      <div className="main-wrap">
        <NavBar />
        <div className="container login top-margin">
          <div className="row">
            <div className="d-none d-lg-block col-lg-6 text-right pr-0">
              <img className="loginbg pr-0" src={lognbg} />
            </div>
            <div className="col-sm-12 col-lg-6 align-items-left my-4 rounded-lg pl-0">
              <div className="card shadow-none border-0 login-card">
                <div className="card-body rounded-0 text-left login_border">
                  <h2 className="fw-700 font-xl display2-md-size login_heading">
                    Forgot Password
                  </h2>
                  <span className="error-msg">
                    {auth.errors && auth.errors.other_error
                      ? auth.errors.other_error
                      : ""}{" "}
                  </span>
                  {auth.is_done && (
                    <div class="alert alert-success" role="alert">
                      We have e-mailed your password reset link!
                    </div>
                  )}
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
                    <div className="form-check text-left mb-3">
                      <input
                        type="hidden"
                        className="form-check-input mt-2"
                        id="exampleCheck1"
                      />
                      <label
                        className="form-check-label font-xsss text-grey-500"
                        htmlFor="exampleCheck1"
                      ></label>                      
                    </div>
                    <div className="col-sm-12 p-0 text-left">
                      <div className="form-group mb-1">
                        <input
                          type="submit"
                          name="submit"
                          value="Submit"
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
                      <div className="col-sm-12 col-md-6">
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
                      <div className="col-sm-12 col-md-6">
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
export default ForgotPassword;
