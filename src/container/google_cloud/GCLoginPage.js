import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import AppBody from "../components/AppBody";
import { authorizeGCAccount, resetStatus } from "../../actions/google_cloud/gc_action";
import {useNavigate,Navigate} from "react-router-dom";
const GCLoginPage = () => {
  const navigate = useNavigate();
  const [login, setRegister] = useState({
    username: "",
    password: "",
  });

  const dispatch = useDispatch();
  const state = useSelector((state) => state.gcReducer);
  useEffect(() => {
    dispatch(resetStatus());
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(authorizeGCAccount(login));
  };

  if (state.is_done) {
   // dispatch(resetStatus());
   setInterval(() => {
    return <Navigate to="/create-vm" />;
  }, 1000);  
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
                  Authorize Cloud Account
                </h4>
              </div>
              {state.is_done && (
                <div className="alert alert-success" role="alert">
                  Login successfully go to create vairtul machine!
                </div>
              )}
              {state.errors&& state.errors.other_error && (
                <div className="alert alert-danger" role="alert">
                 {state.errors.other_error}
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
                          value={login.username}
                          onChange={(e) =>
                            setRegister({
                              ...login,
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
                          Password
                        </label>
                        <input
                          type="password"
                          className="form-control"
                          value={login.password}
                          onChange={(e) =>
                            setRegister({
                              ...login,
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
                    <div className="col-lg-12 my-3">
                      <input
                        type="submit"
                        name="submit"
                        value="Authorize"
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

export default GCLoginPage;
