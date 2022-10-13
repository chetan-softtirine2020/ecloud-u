import React, { useState, Fragment, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  signUp,
  getAllOrganizationRegister,
  resetErorrs,
  getLineOfBusiness,
  sendOtp,
} from "../../actions/auth_action";
import { Navigate, Link } from "react-router-dom";
import LoadingOverlay from "react-loading-overlay";
import NavBar from "../components/NavBar";
import lognbg from "../../images/login/login-bg.jpg";
import AddLineOfBuniessModel from "./AddLineOfBuniessModel";
const SignUp = () => {
  const auth = useSelector((state) => state.authReducer);
  const [user, setUser] = useState({
    first_name: "",
    last_name: "",
    password: "",
    mobile_no: "",
    email: "",
    user_type: 2,
    org_id: "",
    lob_id: "",
    enterdOtp: "",
  });

  useEffect(() => {
    dispatch(getAllOrganizationRegister());
    dispatch(getLineOfBusiness());
    dispatch(resetErorrs());
  }, []);
  const [show, setPopupShow] = useState(false);
  const [otp, setCurrentOtp] = useState("");
  if (otp === "" && auth.otp) {
    setCurrentOtp(auth.otp);
  }

  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (otp !== user.enterdOtp) {
      alert("Incorrect OTP");
      return false;
    }

    dispatch(signUp(user));
    // setUser({
    //   first_name: "",
    //   last_name: "",
    //   mobile_no: "",
    //   password: "",
    //   email: "",
    //   user_type: 2,
    //   org_id: "",
    // });
  };

  // if (localStorage.getItem("token")) {
  //   return <Navigate to={redirectUser()} />;
  // }

  if (auth.is_done) {
    return <Navigate to={"/login"} />;
  }
  const handelClick = () => {
    setPopupShow(true);
  };

  const resetPopup = () => {
    setPopupShow(false);
  };

  if (auth.isAddLob && auth.lob.length === 0) {
    setPopupShow(true);
    dispatch(getLineOfBusiness());
  }

  //const [currentOtp, setCurrentOtp] = useState('');

  const handelSendOtp = () => {
    let mobile_no = user.mobile_no;
    dispatch(sendOtp({ mobile_no: mobile_no }));
  };

  const verifyMobileOtp = () => {
    if (otp !== user.enterdOtp) {
      alert("Incorrect OTP");
    }
  };

  const [chartData, setChartData] = ({
    options: {
      chart: {
        id: "apexchart-example",
      },
      xaxis: {
        categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999],
      },
    },
    series: [
      {
        name: "series-1",
        data: [30, 40, 35, 50, 49, 60, 70, 91, 125],
      },
    ],
  });

 

  return (
    <LoadingOverlay active={auth.loading} spinner text="Loading...">
      <div className="main-wrap">
        <NavBar />
        <div className="container login-reg top-margin">
          <div className="row">
            <div className="d-none d-lg-block col-lg-6 text-right pr-0">
              <img className="loginbg pr-0" src={lognbg} />
            </div>
            <div className="col-sm-12 col-lg-6 align-items-left my-4 rounded-lg pl-0">
              <div className="card shadow-none border-0">
                <div className="card-body rounded-0 text-left login_border">
                  <h2 className="fw-700 font-xl display2-md-size login_heading">
                    Register Account <br />
                  </h2>

                  {auth.isRegister && (
                    <div
                      class="alert alert-success alert-dismissible fade show"
                      role="alert"
                    >
                      <strong>
                        {" "}
                        {user.user_type == 2
                          ? "Your account successfully register!"
                          : "Wait for account approval you will get mail."}
                      </strong>
                      <button
                        type="button"
                        class="close"
                        data-dismiss="alert"
                        aria-label="Close"
                      >
                        <span aria-hidden="true">&times;</span>
                      </button>
                    </div>
                  )}

                  {show && (
                    <AddLineOfBuniessModel
                      show={show}
                      onAddClick={() => resetPopup()}
                    />
                  )}
                  <span className="error-msg">
                    {auth.errors && auth.errors.other_error
                      ? auth.errors.other_error
                      : ""}{" "}
                  </span>
                  <form onSubmit={handleSubmit}>
                    <div className="form-group icon-input mb-3">
                      <select
                        name="user_type"
                        className="style2-input pl-5 form-control font-xss ls-3"
                        onChange={(e) =>
                          setUser({ ...user, user_type: e.target.value })
                        }
                      >
                        <option value="">Select Account</option>
                        <option value={2} selected={true}>
                          User
                        </option>
                        <option value={3}>Learning Provider</option>
                        <option value={6}>Organization</option>
                      </select>
                      <i className="font-sm ti-user text-grey-500 pr-0"></i>
                      <span className="error-msg">
                        {auth.errors && auth.errors.user_type
                          ? auth.errors.user_type
                          : ""}
                      </span>
                    </div>

                    {user.user_type == 6 && (
                      <Fragment>
                        <div className="form-group icon-input mb-1">
                          <select
                            name="org_id"
                            className="style2-input pl-5 form-control  font-xss ls-3"
                            onChange={(e) =>
                              setUser({ ...user, org_id: e.target.value })
                            }
                          >
                            <option value="" key={0}>
                              Select Organization
                            </option>
                            {auth.list &&
                              auth.list.map((li, i) => (
                                <Fragment>
                                  <option value={li.id} key={li.id + 1}>
                                    {li.name}
                                  </option>
                                </Fragment>
                              ))}
                          </select>
                          <i className="font-sm ti-lock text-grey-500 pr-0"></i>
                        </div>

                        <div className="form-group icon-input mb-1">
                          <select
                            name="org_id"
                            className="style2-input pl-5 form-control  font-xss ls-3"
                            onChange={(e) =>
                              setUser({ ...user, lob_id: e.target.value })
                            }
                          >
                            <option value="" key={0}>
                              Select Line Of Business
                            </option>
                            {auth.lob &&
                              auth.lob.map((li, i) => (
                                <Fragment>
                                  <option value={li.id} key={li.id + 1}>
                                    {li.name}
                                  </option>
                                </Fragment>
                              ))}
                          </select>
                          <i className="font-sm ti-lock text-grey-500 pr-0"></i>
                        </div>
                        <input
                          type="button"
                          value="Add"
                          title="Add new line of business"
                          className="btn approve_btn btn-common"
                          onClick={() => handelClick()}
                        />
                      </Fragment>
                    )}
                    <div className="form-group icon-input mb-3">
                      <i className="font-sm ti-user text-grey-500 pr-0"></i>
                      <input
                        type="text"
                        className="style2-input pl-5 form-control font-xsss fw-600"
                        placeholder="First Name"
                        value={user.first_name}
                        required
                        onChange={(e) =>
                          setUser({ ...user, first_name: e.target.value })
                        }
                      />
                      <span className="error-msg">
                        {auth.errors && auth.errors.first_name
                          ? auth.errors.first_name
                          : ""}{" "}
                      </span>
                    </div>

                    <div className="form-group icon-input mb-3">
                      <i className="font-sm ti-user text-grey-500 pr-0"></i>
                      <input
                        type="text"
                        className="style2-input pl-5 form-control font-xsss fw-600"
                        required
                        placeholder="Last Name"
                        value={user.last_name}
                        onChange={(e) =>
                          setUser({ ...user, last_name: e.target.value })
                        }
                      />
                      <span className="error-msg">
                        {auth.errors && auth.errors.last_name
                          ? auth.errors.last_name
                          : ""}{" "}
                      </span>
                    </div>
                    <div className="form-group icon-input mb-3">
                      <i className="font-sm ti-email text-grey-500 pr-0"></i>
                      <input
                        type="text"
                        className="style2-input pl-5 form-control  font-xsss fw-600"
                        required
                        placeholder="Email Address"
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

                    <div className="form-group icon-input mb-3">
                      <i className="font-sm ti-headphone-alt text-grey-500 pr-0"></i>
                      <input
                        type="text"
                        className="style2-input pl-5 form-control  font-xsss fw-600"
                        placeholder="Mobile Number"
                        value={user.mobile_no}
                        required
                        onChange={(e) =>
                          setUser({ ...user, mobile_no: e.target.value })
                        }
                      />
                      <input
                        type="text"
                        className="style2-input pl-5 form-control  font-xsss fw-600"
                        placeholder="OTP"
                        value={user.opt}
                        required
                        onChange={(e) =>
                          setUser({ ...user, enterdOtp: e.target.value })
                        }
                      />
                      {!otp ? (
                        <input
                          type="button"
                          value="Send OTP"
                          title="Send mobile number"
                          className="btn approve_btn btn-common"
                          onClick={() => handelSendOtp()}
                        />
                      ) : (
                        <input
                          type="button"
                          value="Verify OTP"
                          title="Verify mobile number"
                          className="btn approve_btn btn-common"
                          onClick={() => verifyMobileOtp()}
                        />
                      )}
                      <span className="error-msg">
                        {auth.errors && auth.errors.mobile_no
                          ? auth.errors.mobile_no
                          : ""}{" "}
                      </span>
                    </div>

                    <div className="form-group icon-input mb-1">
                      <input
                        type="Password"
                        className="style2-input pl-5 form-control  font-xss ls-3"
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
                      {/* <input
                        type="checkbox"
                        className="form-check-input mt-2"
                        id="exampleCheck1"
                      />
                      <label
                        className="form-check-label font-xsss text-grey-500"
                        htmlFor="exampleCheck1"
                      >
                        Remember me
                     </label>*/}
                      <Link
                        to="/forgot-password"
                        className="forget-pwd fw-600 font-xsss  mt-1 float-right"
                      >
                        Forgot your Password?
                      </Link>
                    </div>
                    <div className="col-sm-12 p-0 text-left">
                      <div className="form-group mb-1">
                        <input
                          type="submit"
                          name="submit"
                          value="Register"
                          className="form-control text-center style2-input text-white fw-600 btn-common border-0 p-0 "
                        />
                      </div>
                    </div>
                  </form>

                  {/* <div className="col-sm-12 p-0 text-center mt-2">
                <h6 className="mb-0 d-inline-block bg-white fw-500 font-xsss text-grey-500 mb-3">
                  Or, Sign in with your social account{" "}
                </h6>
              </div> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </LoadingOverlay>
  );
};
export default SignUp;
