import React from "react";
import GoogleLogin from "react-google-login";
import FacebookLogin from 'react-facebook-login';
const SocialLogin = () => {
  return (
    <div>
      <FacebookLogin
        appId="1088597931155576"
        autoLoad={true}
        fields="name,email,picture"
        onClick={()=> console.log("Click Face Boo")}
        callback={()=> console.log("Call back google")}
      />

      <GoogleLogin
        clientId="562569246348-qi9gp14pklickevv0ti7hk4f9bei812k.apps.googleusercontent.com"
        buttonText="Login"
        onSuccess={()=> console.log("Google success")}
        onFailure={()=> console.log("Google fal")}
        cookiePolicy={"single_host_origin"}
      />
    </div>
  );
};
export default SocialLogin;
