import React from "react";
import { useNavigate } from "react-router-dom";
import Footer from "./Footer";
import HomeNavBar from "./HomeNavBar";

function CommingSoon() {
  const navigate = useNavigate();
  return (
    <div className="main-landing-page landing-container">
      <HomeNavBar />

      <div className="coming-box">
      <h1 className="error-hedtxt">Comming Soon</h1>
      <p className="error-info">You seem to be trying to find his way home</p>
      <button onClick={() => navigate(-1)} className="btn-common">
        Go Back
      </button>
    </div>
       <Footer/>
    </div>
  );
}
export default CommingSoon;
