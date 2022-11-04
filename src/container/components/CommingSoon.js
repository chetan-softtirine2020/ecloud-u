import React from "react";
import { useNavigate } from "react-router-dom";
import Footer from "./Footer";
import HomeNavBar from "./HomeNavBar";

function CommingSoon() {
  const navigate = useNavigate();
  return (
    <div className="main-landing-page landing-container">
      <HomeNavBar />
      <h1 style={{ color: "white" }}>Comming Soon</h1>
      <button onClick={() => navigate(-1)} className="btn-common">
        Go Back
      </button>
       <Footer/>
    </div>
  );
}
export default CommingSoon;
