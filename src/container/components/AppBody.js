import React from "react";
import SiteBar from "../components/SiteBar";
import AppNavBar from "../components/AppNavBar";
import { Navigate } from "react-router-dom";
import LoadingOverlay from "react-loading-overlay";
import { redirectUser } from "../../config/redirect";
const AppBody = (props) => {
 
  if (!localStorage.getItem("token") && localStorage.getItem("redirectLink")) {
    return <Navigate to="/login" />;
  }

  if (!localStorage.getItem("token")) {
    return <Navigate to="/" />;
  }
  // if (localStorage.getItem("token")) {
  //   return <Navigate to={redirectUser()} />;
  // }

  return (
    <LoadingOverlay active={props.loading} spinner text="Loading...">
      <div>
        <SiteBar />
        <div class="main-content">
          <AppNavBar />
          <div class="middle-sidebar-bottom bg-lightblue">{props.content}</div>
        </div>
      </div>
    </LoadingOverlay>
  );
};

export default AppBody;
