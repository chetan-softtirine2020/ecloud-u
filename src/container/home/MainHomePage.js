import React from "react";
import LoadingOverlay from "react-loading-overlay";
import Footer from "../components/Footer";
import NavBar from "../components/NavBar";
import { useSelector } from "react-redux";
function MainHomePage() {
  const state = useSelector((state) => state.homeReducer);
  return (
    <div>
      <LoadingOverlay active={state.loading} spinner text="Loading...">
        <div className="landing-container">
          <NavBar />

          <Footer />
        </div>
      </LoadingOverlay>
    </div>
  );
}
export default MainHomePage;
