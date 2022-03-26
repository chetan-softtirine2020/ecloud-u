import React from "react";
import GoogleLogin from "react-google-login";
import FacebookLogin from "react-facebook-login";
const SocialLogin = () => {
  return (
    <div>
      
   <GoogleLogin
      clientId={"562569246348-qi9gp14pklickevv0ti7hk4f9bei812k.apps.googleusercontent.com"}
      render={props => (
          <div className="btn btn-block text-white" style={{backgroundColor: ""}}
               onClick={props.onClick}>
              <i className="fa fa-google pull-left"/>
              Sign in with Google
          </div>
      )}
      buttonText="Login"
      onSuccess={(a) => this.props.socialGoogleRegisterLogin(a.profileObj)}
      onFailure={b => console.log(b)}
      cookiePolicy={'single_host_origin'}
  />
    
    <GoogleLogin
        clientId="562569246348-qi9gp14pklickevv0ti7hk4f9bei812k.apps.googleusercontent.com"
        buttonText="Login"
        onSuccess={() => console.log("Google success")}
        onFailure={() => console.log("Google fal")}
        cookiePolicy={"single_host_origin"}
      />
      <FacebookLogin
        appId="1088597931155576"
        autoLoad={true}
        fields="name,email,picture"
        onClick={() => console.log("Click Face Boo")}
        callback={() => console.log("Call back google")}
      />
    </div>
  );
};
export default SocialLogin;
