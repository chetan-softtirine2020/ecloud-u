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

  const statCard = [1, 2, 3, 4];

  return (
    <AppBody
      loading={state.loading}
      content={
        <div className="middle-sidebar-left">
          <div className="row">
            <div className="col-lg-12 mt-3">
              <h1 className="dash-heading">Upcomming Trainings</h1>
            </div>
            {state.list &&
              state.list.map((li, i) => (
                <div className="col-lg-4 mt-3" key={i+1}>
                  <div className="card bg-theme-color shadow-lg rounded-lg ">
                    <div className="card-body p-2">
                      <span className="font-xsss fw-700  pr-3 lh-32 text-uppercase rounded-lg ls-2 d-inline-block text-success mr-1">
                        Date
                      </span>
                      <span className="font-xss fw-700 pl-3 pr-3 ls-2 lh-32 d-inline-block text-success float-right">
                        <span className="font-xsssss" />
                        {li.date}
                      </span>
                      <h4 className="fw-700 font-xss mt-3 lh-28 mt-0">
                        <Link
                          to={"/training/" + li.slug}
                          className="text-dark text-grey-900"
                        >
                          {li.name}{" "}
                        </Link>
                      </h4>
                      <div className="row">
                        <div className="col-xs-6 col-sm-6">
                          <a
                            href="#."
                            className="p-2 w100 d-inline-block rounded-lg font-xsss fw-700 ls-lg block_btn"
                          ></a>
                        </div>
                        <div className="col-xs-6 col-sm-6 text-right">
                          <Link
                            to={"/training/" + li.slug}
                            className="p-2 w100 d-inline-block rounded-lg font-xsss fw-700 ls-lg block_btn"
                          >
                           Join Training
                          </Link>
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
              <div className="col-lg-3 mt-3" key={number}>
                <div className="card bg-theme-color shadow-lg rounded-lg ">
                  <div className="card-body p-2">
                    <span className="font-xsssss fw-700 pl-3 pr-3 lh-32 text-uppercase rounded-lg ls-2 alert-warning d-inline-block text-warning mr-1">
                      Python
                    </span>
                    <span className="font-xss fw-700 pl-3 pr-3 ls-2 lh-32 d-inline-block text-success float-right">
                      <span className="font-xsssss">$</span> 240
                    </span>
                    <h4 className="fw-700 font-xss mt-3 lh-28 mt-0">
                      <a
                        href="default-course-details.html"
                        className="text-dark text-grey-900"
                      >
                        Total User{" "}
                      </a>
                    </h4>
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
