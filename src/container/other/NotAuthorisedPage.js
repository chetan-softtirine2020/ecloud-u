import React from "react";
import { useNavigate } from "react-router-dom";
const NotAuthorisedPage = () => {
  const navigate = useNavigate();
  return (
    <div className="error-box">
      <h1 className="error-hedtxt">403</h1>
      <h3 className="text-uppercase">Yor Are Not Authrized!</h3>
      <p className="error-info">You seem to be trying to find his way home</p>
      <button onClick={() => navigate(-1)} className="btn-common">
        Back To Home
      </button>
    </div>
  );
};

export default NotAuthorisedPage;
