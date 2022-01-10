import React, { useState } from "react";
import NavBar from "../components/NavBar";
import { useSelector, useDispatch } from "react-redux";
import { regiterOrganization } from "../../actions/organization/org_action";
import LoadingOverlay from "react-loading-overlay";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Navigate } from "react-router";
const RegisterOrganization = () => {
  const [org, setOrg] = useState({
    name: "",
    email: "",
    description: "",
  });
  const dispatch = useDispatch();
  const data = useSelector((state) => state.organizationReducer);
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(regiterOrganization(org));
    setOrg({
      name: "",
      email: "",
      description: " ",
    });
  };
  // if (data.is_done) {
  //   <Navigate to="/register"/>;
  // }

  return (
    <div>
      <LoadingOverlay active={data.loading} spinner text="Loading...">
        <NavBar />
        <div className="container top-margin">
          <div className="col-sm-12 pt-4">
            <div className="card-body p-lg-5 p-4 w-100 border-0 bg-white shadow-lg">
              {data.is_done && (
                <div class="alert alert-success">
                  <strong>
                    Your organization register on Educloudlabs you will get
                    confirmation on your register email.
                  </strong>
                </div>
              )}

              {data.errors.other_error && (
                <div class="alert alert-danger">
                  <strong>{data.errors.other_error}</strong>
                </div>
              )}

              <form onSubmit={handleSubmit}>
                <div className="row">
                  <div className="col-lg-6 mb-3">
                    <div className="form-group">
                      <label className="mont-font fw-600 font-xsss">
                        Organization Name
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        required
                        value={org.name}
                        onChange={(e) =>
                          setOrg({ ...org, name: e.target.value })
                        }
                      />
                      <span className="error-msg">
                        {data.errors.name ? data.errors.name : ""}{" "}
                      </span>
                    </div>
                  </div>

                  <div className="col-lg-6 mb-3">
                    <div className="form-group">
                      <label className="mont-font fw-600 font-xsss">
                        Email
                      </label>
                      <input
                        type="email"
                        required
                        className="form-control"
                        value={org.email}
                        onChange={(e) =>
                          setOrg({ ...org, email: e.target.value })
                        }
                      />
                      <span className="error-msg">
                        {data.errors.email ? data.errors.email : ""}{" "}
                      </span>
                    </div>
                  </div>
                </div>

                <div className="row">
                  <div className="col-lg-12 mb-3">
                    <label className="mont-font fw-600 font-xsss">
                      Description
                    </label>
                    <textarea
                      className="form-control mb-0 p-3 h100 bg-greylight lh-16"
                      rows="5"
                      placeholder="Write your message..."
                      spellCheck="false"
                      onChange={(e) =>
                        setOrg({ ...org, description: e.target.value })
                      }
                      defaultValue={org.description}
                    />
                  </div>
                  <div className="col-lg-12">
                    <div className="form-group text-right">
                      <input
                        type="submit"
                        name="submit"
                        value="Submit"
                        className="rounded-lg style1-input bg-current text-white text-center font-xss fw-500 border-2 border-0 p-0 w150"
                      />
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </LoadingOverlay>
    </div>
  );
};

export default RegisterOrganization;
