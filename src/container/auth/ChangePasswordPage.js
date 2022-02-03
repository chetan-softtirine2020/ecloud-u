import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import AppBody from "../components/AppBody";
import "react-datepicker/dist/react-datepicker.css";
import { Navigate } from "react-router-dom";
import { changePassword } from "../../actions/auth_action";
const ChangePasswordPage = () => {
  
  const [password, setPassword] = useState({
    current_password: "",
    password: "",
    password_confirmation: "",
  });
  
  const dispatch = useDispatch();
  const state = useSelector((state) => state.authReducer);
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(changePassword(password));
  };

  if (state.is_done) {
    // setPassword({
    //   current_password: "",
    //   password: "",
    //   password_confirmation: "",
    // });
   // return <Navigate to="/change-password" />;
  }

  return (
    <AppBody
      loading={state.loading}
      content={
        <div className="middle-sidebar-left">
          <div className="">
            <div className="card w-100 border-0 bg-white shadow-xs p-0 mb-4">
              <div className="card-body p-3 w-100 bg-current border-0 d-flex rounded-lg">
                <a href="default-settings.html" className="d-inline-block mt-2">
                  <i className="ti-arrow-left font-sm text-white"></i>
                </a>
                <h4 className="font-xs text-white fw-600 ml-4 mb-0 mt-2">
                  Change Password
                </h4>
              </div>
            
              <div className="alert alert-success" role="alert">
                   Password change successfully!
              </div>
            
              <div className="card-body p-4 w-100 border-0 ">
                <form onSubmit={handleSubmit}>
                  <div className="row">
                    <div className="col-lg-6 mb-2">
                      <div className="form-group">
                        <label className="mont-font fw-600 font-xsss">
                          Current Password
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          value={password.current_password}
                          onChange={(e) =>
                            setPassword({
                              ...password,
                              current_password: e.target.value,
                            })
                          }
                        />
                        <span className="error-msg">
                          {state.errors ? state.errors.current_password : ""}
                        </span>
                      </div>
                    </div>

                    <div className="col-lg-6 mb-2">
                      <div className="form-group">
                        <label className="mont-font fw-600 font-xsss">
                          New Password
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          value={password.password}
                          onChange={(e) =>
                            setPassword({
                              ...password,
                              password: e.target.value,
                            })
                          }
                        />
                        <span className="error-msg">
                          {state.errors ? state.errors.password : ""}
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-lg-6 mb-2">
                      <label className="mont-font fw-600 font-xsss">
                        Confim Password
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        value={password.password_confirmation}
                        onChange={(e) =>
                          setPassword({
                            ...password,
                            password_confirmation: e.target.value,
                          })
                        }
                      />
                      <span className="error-msg">
                        {state.errors ? state.errors.password_confirmation : ""}
                      </span>
                    </div>

                    <div className="col-lg-12">
                      <input
                        type="submit"
                        name="submit"
                        value="Submit"
                        className="bg-current text-center text-white font-xsss fw-600 p-3 w175 rounded-lg d-inline-block"
                      />
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      }
    />
  );
};

export default ChangePasswordPage;
