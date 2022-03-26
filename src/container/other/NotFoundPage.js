import React from "react";

const NotFoundPage = () => {
  return (
    <div className="error-box">
      <h1 className="error-hedtxt">404</h1>
      <h3 className="text-uppercase">page not found !</h3>
      <p className="error-info">You seem to be trying to find his way home</p>
      <a href="/" className="btn-common">
        Back To Home
      </a>
    </div>
  );
};

export default NotFoundPage;
