import React, { useState, useEffect, useCallback, useRef } from "react";
import AppBody from "./components/AppBody";
import { useParams } from "react-router";
import { useLocation, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { joinConferanceCheckCount } from "../actions/conferance_action";
import { Beforeunload } from "react-beforeunload";

function EducloundMeet() {
  const location = useLocation();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const state = useSelector((state) => state.conferanceReducer);
  const [time, setTime] = useState({
    seconds: 0,
  });
  const [loadPage, setLoadPage] = useState(false);
  const [meetingStatus, setMeetingStatus] = useState(false);
  if (!localStorage.getItem("token") && !localStorage.getItem("token")) {
    localStorage.setItem("redirectLink", location.pathname);
  }
  const [loading, setLoading] = useState(false);
  let { slug } = useParams();
  const userData = JSON.parse(localStorage.getItem("data"));

  const beforeUnloadListener = (event) => {
    event.preventDefault();
    return event.returnValue = "Are you sure you want to exit?";
  };



  useEffect(() => {
    window.addEventListener("beforeunload", beforeUnloadListener, {capture: true});
    setLoadPage(true);
    const advanceTime = () => {
      setTimeout(() => {
        let nSeconds = time.seconds;
        nSeconds++;
        setTime({ seconds: nSeconds });
      }, 1000);
    };
    advanceTime();
    return () => {
      //window.removeEventListener("beforeunload", beforeUnloadListener, {capture: true});
      //dispatch(joinConferanceCheckCount({ is_start: true, slug: slug, call: "4" }));
      // window.onbeforeunload = function (event) {
      //   dispatch(joinConferanceCheckCount({ is_start: true, slug: slug, call: "4" }));
      // };

      // window.removeEventListener("beforeunload", unloadCallback);
      // window.removeEventListener('unload', handleTabClosing)
      // dispatch(joinConferanceCheckCount({ is_end: true, slug: slug,call:"2" }));
      console.log("time" + time.seconds);
      //dispatch(getTrainingDetailsForMeeting({ slug: slug }));
    };
   // removeEventListener("beforeunload", beforeUnloadListener, {capture: true});
    //  dispatch(getTrainingDetailsForMeeting({ slug: slug }));
  },[]);

  // if (state.joinCount === 1 && !meetingStatus) {
  //   if (window.JitsiMeetExternalAPI && !localStorage.getItem("redirectLink")) {
  //     startConference();
  //   } else {
  //     if (!localStorage.getItem("redirectLink")) {
  //       alert("Wait Educloudlabs meeting  Not Loaded..");
  //     }
  //   }
  //   setLoading(true);
  //   setMeetingStatus(true);
  // }

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
    <Beforeunload onBeforeunload={(event) => alert("Are you want to close")}>
      <AppBody
        loading={loading}
        content={
          <div className="middle-sidebar-left">
            <div className="">
              <div className="card w-100 border-0 bg-white shadow-xs p-0 mb-4">
                <div className="card-body p-4 w-100 bg-current border-0 d-flex rounded-lg">
                  <h4 className="font-xs text-white fw-600 ml-4 mb-0 mt-2">
                    Training
                  </h4>
                </div>
                <div className="card-body p-lg-5 p-4 w-100 border-0 ">
                  <div style={containerStyle}>
                    <div id="jitsi-container" style={jitsiContainerStyle} />
                  </div>
                </div>
                {state.joinCount !== 1 && !state.loading && (
                  <div className="card-body p-lg-5 p-4 w-100 border-0 ">
                    <div style={containerStyle}>
                      <h1>
                        Training already open in another tab or browser please
                        check{" "}
                      </h1>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        }
      />
    </Beforeunload>
  );
}
export default EducloundMeet;
