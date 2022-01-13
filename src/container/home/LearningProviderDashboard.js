import React from "react";
import AppBody from "../components/AppBody";
import v1 from "../../images/v-1.png";
const LearningProviderDashboard = () => {
  const statCard = [1, 2, 3, 4];
  const trainingCard = [1, 2, 3];
  return (
    <AppBody
      content={
        <div className="middle-sidebar-left">
          <div className="row">
            <div className="col-lg-12 mt-3">
              <h1 className="dash-heading">Dashboard</h1>
            </div>
            {statCard.map((number) => (
              <div className="col-lg-3 mt-3">
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

            <div className="col-lg-12 mt-3">
              <h1 className="dash-heading">Upcomming Trainings</h1>
            </div>
            {trainingCard.map((number) => (
              <div className="col-lg-4 mt-3">
                <div className="card bg-theme-color shadow-lg rounded-lg ">
                  <div className="card-image mb-3 rounded-lg">
                    <a
                      href="#."
                      className="video-bttn position-relative d-block"
                    >
                      <img src={v1} alt="v1" />
                    </a>
                  </div>
                  <div className="card-body p-2">
                    <span className="font-xsssss fw-700 pl-3 pr-3 lh-32 text-uppercase rounded-lg ls-2 alert-success d-inline-block text-success mr-1">
                      Bootstrap
                    </span>
                    <span className="font-xss fw-700 pl-3 pr-3 ls-2 lh-32 d-inline-block text-success float-right">
                      <span className="font-xsssss">$</span> 100
                    </span>
                    <h4 className="fw-700 font-xss mt-3 lh-28 mt-0">
                      <a
                        href="default-course-details.html"
                        className="text-dark text-grey-900"
                      >
                        Complete Python Bootcamp From Zero to Hero in Python{" "}
                      </a>
                    </h4>
                    <h6 className="font-xssss text-grey-500 fw-600 ml-0 mt-2">
                      {" "}
                      32 Lesson{" "}
                    </h6>
                    <div className="row">
                      <div className="col-xs-6 col-sm-6">
                        <a
                          href="#."
                          className="p-2 w100 d-inline-block rounded-lg font-xsss fw-700 ls-lg block_btn"
                        >
                          Subscribe
                        </a>
                      </div>
                      <div className="col-xs-6 col-sm-6 text-right">
                        <a
                          href="#."
                          className="p-2 w100 d-inline-block rounded-lg font-xsss fw-700 ls-lg block_btn"
                        >
                          Add To Cart
                        </a>
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
