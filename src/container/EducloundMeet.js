import React, { useState, useEffect } from "react";
import AppBody from "./components/AppBody";
import { useParams } from "react-router";
import { useLocation,useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

function EducloundMeet() {
  const location = useLocation();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  
  const [time, setTime] = useState({
    seconds: 0,
  });
  if (!localStorage.getItem("token") && !localStorage.getItem("token")) {
    localStorage.setItem("redirectLink", location.pathname);
  }
  const [loading, setLoading] = useState(true);
  let { slug } = useParams();
  const userData = JSON.parse(localStorage.getItem("data"));

  useEffect(() => { 
   
    if (window.JitsiMeetExternalAPI && !localStorage.getItem("redirectLink")) {
      startConference();
    } else {
      if (!localStorage.getItem("redirectLink")) {
        alert("Wait Educloudlabs meeting  Not Loaded..");
      }
    }
    const advanceTime = () => {
      setTimeout(() => {
        let nSeconds = time.seconds;
        nSeconds++;
        setTime({seconds:nSeconds})
      }, 1000);
    };
    advanceTime();
    return () => {
      //final time:
      console.log("time" + time.seconds);
    };
    //  dispatch(getTrainingDetailsForMeeting({ slug: slug }));
  }, []);

  const containerStyle = {
    width: "auto",
    height: "auto",
  };

  const jitsiContainerStyle = {
    display: loading ? "none" : "block",
    width: "auto",
    height: "auto",
  };

  function startConference() {
    try {
      const domain = "educloud-meet.com";
      const options = {
        roomName: slug,
        height: 550,
        parentNode: document.getElementById("jitsi-container"),
        interfaceConfigOverwrite: {
          filmStripOnly: false,
          SHOW_JITSI_WATERMARK: false,
        },
        configOverwrite: {
          disableSimulcast: false,
        },
      };

      const api = new window.JitsiMeetExternalAPI(domain, options);
      api.addEventListener("videoConferenceJoined", () => {
        console.log("Local User Joined");
        setLoading(false);
        api.executeCommand(
          "displayName",
          userData.first_name + " " + userData.last_name
        );
      });
    } catch (error) {
      console.error("Failed to load Educloudlabs API", error);
    }
  }
      
    // const  handelEndMeeting=()=>{
    //   dispatch();
    // }

  return (
    <AppBody
      loading={loading}
      content={
        <div className="middle-sidebar-left">
          <div className="">
            <div className="card w-100 border-0 bg-white shadow-xs p-0 mb-4">
              <div className="card-body p-4 w-100 bg-current border-0 d-flex rounded-lg">
                <a href="default-settings.html" className="d-inline-block mt-2">
                  <i className="ti-arrow-left font-sm text-white"></i>
                </a>
                <h4 className="font-xs text-white fw-600 ml-4 mb-0 mt-2">
                  Training
                </h4>
              </div>
              <div className="card-body p-lg-5 p-4 w-100 border-0 ">
                <div style={containerStyle}>
                  <div id="jitsi-container" style={jitsiContainerStyle} />
                </div>
              </div>
            </div>
          </div>
        </div>
      }
    />
  );
}
export default EducloundMeet;
