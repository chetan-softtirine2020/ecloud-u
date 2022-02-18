import React, { useState,useEffect } from "react";
import NavBar from "../components/NavBar";
import { useSelector, useDispatch } from "react-redux";
import { resetPassword,resetErorrs } from "../../actions/auth_action";
import LoadingOverlay from "react-loading-overlay";
import facebook from "../../images/icon-3.png";
import google from "../../images/icon-1.png";
import lognbg from "../../images/login/login-bg.jpg";
import { Link } from "react-router-dom";
import { useParams } from "react-router";

const ResetPassword = () => {
  const auth = useSelector((state) => state.authReducer);
  const dispatch = useDispatch();
  const [user, setUser] = useState({
    password: "",
    password_confirmation: "",
  });
  const {i_t} = useParams();
  
  useEffect(() => {
    dispatch(resetErorrs());
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(
      resetPassword({
        password: user.password,
        password_confirmation: user.password_confirmation,     
        i_t: i_t,
      })
    );
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
                    Reset Password
                  </h2>
                  <span className="error-msg">
                    {auth.errors && auth.errors.other_error
                      ? auth.errors.other_error
                      : ""}{" "}
                  </span>
                  {auth.is_done && (
                    <div class="alert alert-success" role="alert">
                      Your password reset successfully!
                    </div>
                  )}
                  <form onSubmit={handleSubmit}>
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

                    <div className="form-group icon-input mb-1">
                      <input
                        type="Password"
                        className="style2-input pl-5 form-control font-xss ls-3"
                        placeholder="Confirm Password"
                        required
                        value={user.password_confirmation}
                        onChange={(e) =>
                          setUser({
                            ...user,
                            password_confirmation: e.target.value,
                          })
                        }
                      />
                      <span className="error-msg">
                        {auth.errors && auth.errors.password_confirmation
                          ? auth.errors.password_confirmation
                          : ""}{" "}
                      </span>
                      <i className="font-sm ti-lock text-grey-500 pr-0"></i>
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
                      <Link
                        to={"/login"}
                        className="fw-600 font-xsss text-grey-700 mt-1 float-right"
                      >
                        Login your account?
                      </Link>
                    </div>
                    <div className="col-sm-12 p-0 text-left">
                      <div className="form-group mb-1">
                        <input
                          type="submit"
                          name="submit"
                          value="Reset Password"
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
export default ResetPassword;
