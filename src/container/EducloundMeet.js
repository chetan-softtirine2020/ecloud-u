import React, { useState, useEffect } from "react";
import AppBody from "./components/AppBody";
import { useParams } from "react-router";
import { useSelector, useDispatch } from "react-redux";
import { getTrainingDetailsForMeeting } from "../actions/learning_provider/training_action";

function EducloundMeet() {
  const [loading, setLoading] = useState(true);
  let { slug } = useParams();
  const dispatch = useDispatch();
  const userData = JSON.parse(localStorage.getItem("data"));
     //console.log(userData);   
  useEffect(() => {
    if (window.JitsiMeetExternalAPI) startConference();
    else alert("Wait Educloud Meet Not Loaded..");
  //  dispatch(getTrainingDetailsForMeeting({ slug: slug }));
    }, []);
 // const training = useSelector((state) => state.trainingUserReducer);
 

 
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
        api.executeCommand("displayName", userData.first_name +" "+ userData.last_name);
      });
      // api.addEventListener('participantRoleChanged', function(event) {
      //   if (event.role === "moderator") {
      //       api.executeCommand('password', 'The Password');
      //      }
      //  });
    // // join a protected channel
    // api.on('passwordRequired', function (){
    //     api.executeCommand('password', 'The Password');
    // });

    } catch (error) {
      console.error("Failed to load Jitsi API", error);
    }
  }

  // useEffect(() => {
  //   // verify the JitsiMeetExternalAPI constructor is added to the global..
  //   if (window.JitsiMeetExternalAPI) startConference();
  //   else alert("Jitsi Meet API script not loaded");
  // }, []);

  const handelJoinMeeting = () => {
    if (window.JitsiMeetExternalAPI) {
      startConference();
     }else{
      alert("Jitsi Meet API script not loaded");
    }
  };

  return (
    <AppBody
      loading={false}
      content={
        <div className="middle-sidebar-left">
          <div className="">
            <div className="card w-100 border-0 bg-white shadow-xs p-0 mb-4">
              <div className="card-body p-4 w-100 bg-current border-0 d-flex rounded-lg">
                <a href="default-settings.html" className="d-inline-block mt-2">
                  <i className="ti-arrow-left font-sm text-white"></i>
                </a>
                <h4 className="font-xs text-white fw-600 ml-4 mb-0 mt-2">
                  Meetings
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
   // <button onClick={handelJoinMeeting}>Start Meeting </button>