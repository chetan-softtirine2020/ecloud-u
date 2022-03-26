import React from 'react'

const NotAuthorisedPage = () => {
    return (
        <div className="error-box">
          <h1 className="error-hedtxt">403</h1>
          <h3 className="text-uppercase">Yor Are Not Authrized!</h3>
          <p className="error-info">You seem to be trying to find his way home</p>
          <a href="/" className="btn-common">
            Back To Home
          </a>
        </div>
      );
}

export default NotAuthorisedPage
