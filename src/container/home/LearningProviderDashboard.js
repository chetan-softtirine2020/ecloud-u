import React, { useEffect } from "react";
import AppBody from "../components/AppBody";
import v1 from "../../images/v-1.png";
import { useSelector, useDispatch } from "react-redux";
import { getDashboardData } from "../../actions/learning_provider/dashborad_action";
import { Link } from "react-router-dom";
const LearningProviderDashboard = () => {
  const state = useSelector((state) => state.dashboardReducer);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getDashboardData());
  }, []);

  const statCard = [1];
  return (
    <AppBody
      loading={state.loading}
      content={
        <div className="middle-sidebar-left lrn-provider">
          <div className="row">
            <div className="col-lg-12">
              <h1 className="dash-heading">Upcomming Trainings</h1>
            </div>
            {state.list &&
              state.list.map((li, i) => (
                <div className="col-lg-4 mt-3" key={i+1}>
                  <div className="card bg-theme-color shadow-lg">
                    <div className="card-header">
                      <div className="row">
                      <div className="col-7">
                        <h4 className="fw-700 font-xss my-1">
                          <Link
                            to={"/training/" + li.slug}
                            className="text-grey-900"
                          >
                            {li.name}{" "}
                          </Link>
                        </h4>
                        </div>  
                        <div className="col-5 pl-0">
                        <Link
                            to={"/training/" + li.slug}
                            className="btn-common"
                          >
                           Join Training
                          </Link>
                        </div> 

                      </div> 
                      </div>
                    <div className="card-body p-2">
                    <div className="row">
                        <div className="col-12">
                          <span><strong>Date :</strong></span>
                          <span> {li.date}</span>
                        </div>
                      </div>
                      <div className="row my-1">
                          <div className="col-12">
                          <div className="paths-list-details">
                              <ul>
                                <li>
                                  <span className="ti-video-camera paths-icon" alt="Number of Courses">
                                  </span>
                                  <span>18 Trainigs</span></li>
                                <li>
                                  <span className="ti-time paths-icon" alt="Duration"></span>
                                  <span>65 hours</span></li>                               
                              </ul>
                            </div>
                          </div>  
                      </div>  
                    </div>
                  </div>
                </div>
              ))}

            <div className="col-lg-12 mt-3">
              <h1 className="dash-heading">Dashboard</h1>
            </div>
            {statCard.map((number) => (
              <div className="col-lg-4 mt-3" key={number}>
                <div className="card bg-theme-color shadow-lg">
                    <div className="card-header">
                      <div className="row">
                      <div className="col-7">
                        <h4 className="fw-700 font-xss my-1">
                            Angular
                        </h4>
                        </div>  
                        <div className="col-5 pl-0">
                        <Link
                            to={"/training/"}
                            className="btn-common"
                          >
                          Join Training
                          </Link>
                        </div> 

                      </div> 
                      </div>
                    <div className="card-body p-2">
                      <div className="row">
                        <div className="col-12">
                            Total User : {" "}
                        </div>
                      </div>
                      <div className="row my-1">
                          <div className="col-12">
                          <div className="paths-list-details">
                              <ul>
                                <li>
                                  <span className="ti-video-camera paths-icon" alt="Number of Courses">
                                  </span>
                                  <span>18 courses</span></li>
                                <li>
                                  <span className="ti-time paths-icon" alt="Duration"></span>
                                  <span>65 hours</span></li>
                                <li className="has-projects tooltip-enabled" data-tooltip="Practice by applying it to real-world scenarios.">
                                <span className="ti-settings paths-icon" alt="Project"></span>
                                  <span>1 Project</span>
                                </li>
                              </ul>
                            </div>
                          </div>  
                      </div>  
                    </div>
                  </div>
              </div>
            ))}
          </div>
        </div>
      }
    />
  );
};

export default LearningProviderDashboard;
