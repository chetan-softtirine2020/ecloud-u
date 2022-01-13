import React, { useEffect } from "react";
import SiteBar from "../components/SiteBar";
import AppNavBar from "../components/AppNavBar";
import { Navigate } from "react-router-dom";
import LoadingOverlay from "react-loading-overlay";
const AppBody = (props) => {
    console.log("call the app body page");  
  
 if(!localStorage.getItem('token')){
  return <Navigate to="/"/>   
  }

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
