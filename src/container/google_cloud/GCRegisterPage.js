import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import AppBody from "../components/AppBody";
import { resetErorrs } from "../../actions/auth_action";
import { gcRegisterAdmin } from "../../actions/google_cloud/gc_action";
const GCRegisterPage = () => {
  const [register, setRegister] = useState({
    username: "",
    first_name: "",
    last_name: "",
    email: "",
    password: "",
    password2: "",
  });

  const dispatch = useDispatch();
  const state = useSelector((state) => state.gcReducer);
  useEffect(() => {
    dispatch(resetErorrs());
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(gcRegisterAdmin(register));
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
            <div className="card">
              <div className="card-header p-3 w-100 border-0 d-flex rounded-lg">
                <h4 className="font-xs text-white fw-600 ml-4 mb-0 mt-2">
                  Register For VM
                </h4>
              </div>
              {state.is_done && (
                <div className="alert alert-success" role="alert">
                   Register successfully!
                </div>
              )}
              <div className="card-body p-4 w-100 border-0 ">
                <form onSubmit={handleSubmit}>
                  <div className="row">
                    <div className="col-lg-6 mb-2">
                      <div className="form-group">
                        <label className="mont-font fw-600 font-xsss">
                          User Name
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          value={register.username}
                          onChange={(e) =>
                            setRegister({
                              ...register,
                              username: e.target.value,
                            })
                          }
                        />
                        <span className="error-msg">
                          {state.errors ? state.errors.username : ""}
                        </span>
                      </div>
                    </div>
                    <div className="col-lg-6 mb-2">
                    <div className="form-group">
                      <label className="mont-font fw-600 font-xsss">
                        Email
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        value={register.email}
                        onChange={(e) =>
                          setRegister({
                            ...register,
                            email: e.target.value,
                          })
                        }
                      />
                      <span className="error-msg">
                        {state.errors ? state.errors.email : ""}
                      </span>
                    </div>
                  </div>
               

                  </div>

                  <div className="row">
                   
                  <div className="col-lg-6 mb-2">
                  <div className="form-group">
                    <label className="mont-font fw-600 font-xsss">
                      First Name
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      value={register.first_name}
                      onChange={(e) =>
                        setRegister({
                          ...register,
                          first_name: e.target.value,
                        })
                      }
                    />
                    <span className="error-msg">
                      {state.errors ? state.errors.first_name : ""}
                    </span>
                  </div>                      
                </div>
                  
                  <div className="col-lg-6 mb-2">
                      <div className="form-group">
                        <label className="mont-font fw-600 font-xsss">
                          Last Name
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          value={register.last_name}
                          onChange={(e) =>
                            setRegister({
                              ...register,
                              last_name: e.target.value,
                            })
                          }
                        />
                        <span className="error-msg">
                          {state.errors ? state.errors.last_name : ""}
                        </span>
                      </div>
                    </div>

                
                  </div>

                  <div className="row">
                    <div className="col-lg-6 mb-2">
                      <div className="form-group">
                        <label className="mont-font fw-600 font-xsss">
                          Password
                        </label>
                        <input
                          type="password"
                          className="form-control"
                          value={register.password}
                          onChange={(e) =>
                            setRegister({
                              ...register,
                              password: e.target.value,
                            })
                          }
                        />
                        <span className="error-msg">
                          {state.errors ? state.errors.password : ""}
                        </span>
                      </div>
                    </div>

                    <div className="col-lg-6 mb-2">
                      <div className="form-group">
                        <label className="mont-font fw-600 font-xsss">
                          Password 2
                        </label>
                        <input
                          type="password"
                          className="form-control"
                          value={register.password2}
                          onChange={(e) =>
                            setRegister({
                              ...register,
                              password2: e.target.value,
                            })
                          }
                        />
                        <span className="error-msg">
                          {state.errors ? state.errors.password2 : ""}
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-lg-12 my-3">
                      <input
                        type="submit"
                        name="submit"
                        value="Submit"
                        className="btn-common px-5"
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

export default GCRegisterPage;
