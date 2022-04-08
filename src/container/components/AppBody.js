import React, { useEffect } from "react";
import SiteBar from "../components/SiteBar";
import AppNavBar from "../components/AppNavBar";
import { Navigate } from "react-router-dom";
import LoadingOverlay from "react-loading-overlay";
import { useSelector, useDispatch } from "react-redux";
import { getCurrentToken, singOut } from "../../actions/auth_action";
const AppBody = (props) => {
  const dispatch = useDispatch();
  const auth = useSelector((state) => state.authReducer);
  const userData = JSON.parse(localStorage.getItem("data"));  
  useEffect(() => {
    if (     
      userData &&
      userData.email &&
      localStorage.getItem("token")
    ) {
      dispatch(getCurrentToken({ email: userData.email }));
    }
  }, []);
  let oldToken = "";
  if (userData) {
    oldToken = userData.token;
  }
  let currentToken = "";
  if (JSON.stringify(auth.currentToken)) {
    const token = JSON.stringify(auth.currentToken);
    currentToken = token.slice(1, -1);
  } 

  if(oldToken && currentToken && oldToken !== currentToken) {
    dispatch(singOut());
    localStorage.removeItem("token");
    localStorage.removeItem("data");
    window.location.replace("/");    
  }

  if (!localStorage.getItem("token") && localStorage.getItem("redirectLink")) {
    return <Navigate to="/login" />;
  }

  if (!localStorage.getItem("token")) {
    return <Navigate to="/" />;
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
