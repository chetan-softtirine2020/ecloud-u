import React,  {Fragment, useState, useEffect, useCallback, useRef } from "react";
import AppBody from "./components/AppBody";
import { useParams } from "react-router";
import { useLocation, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { joinConferanceCheckCount } from "../actions/conferance_action";


function EducloundMeet() {
  const location = useLocation();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const state = useSelector((state) => state.conferanceReducer);
  const [time, setTime] = useState({
    seconds: 0,
  });
  const [loadPage, setLoadPage] = useState(false);
  const [apiObj, setApiObj] = useState(null);
  const [meetingStatus, setMeetingStatus] = useState(false);
  if (!localStorage.getItem("token") && !localStorage.getItem("token")) {
    localStorage.setItem("redirectLink", location.pathname);
  }
  const [loading, setLoading] = useState(false);
  let { slug } = useParams();
  const userData = JSON.parse(localStorage.getItem("data"));
  const [userText, setUserText] = useState("");

  useEffect(() => {
    // dispatch(joinConferanceCheckCount({ is_start: true, slug: slug }));
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
        setTime({ seconds: nSeconds });
      }, 1000);
    };
    advanceTime();
    // return () => {
    //   dispatch(joinConferanceCheckCount({ is_end: true, slug: slug }));
    //  };
  }, []);

  if (state.joinCount === 1 && !meetingStatus) {
    if (window.JitsiMeetExternalAPI && !localStorage.getItem("redirectLink")) {
      startConference();
    } else {
      if (!localStorage.getItem("redirectLink")) {
        alert("Wait Educloudlabs meeting  Not Loaded..");
      }
    }
    setLoading(true);
    setMeetingStatus(true);
  }

  const containerStyle = {
    width: "auto",
    height: "auto",
  };
  const jitsiContainerStyle = {
    display: loading ? "none" : "block",
    width: "auto",
    height: "auto",
  };

  const api = null;
  let role = null;
  let isModerator = false;
  if (userData && userData.roles.includes("provider")) {
    role = "moderator";
    isModerator = true;
  } else {
    role = "participant";
    isModerator = false;
  }
  function startConference() {
    try {
      const domain = "educloud-meet.com";
      let options = {
        moderator: false,
        userInfo: {
          email: userData.email,
          id: userData._id,
        },
        roomName: slug,
        height: 550,
        parentNode: document.getElementById("jitsi-container"),       
        localRecording: {
          enabled: true,
          format: 'flac'
        },
        interfaceConfigOverwrite: {
          filmStripOnly: false,
          SHOW_JITSI_WATERMARK: false,
          //TOOLBAR_BUTTONS: ['localrecording'],
          SETTINGS_SECTIONS: ['devices', 'language', '-moderator', 'profile', '-calendar'],
        },
        configOverwrite: {
          prejoinPageEnabled: false,
          doNotStoreRoom:true,
          disableSimulcast: false,
          startWithVideoMuted:true,
          startWithAudioMuted:true,
          disableRemoteMute:true,
          remoteVideoMenu:{
            disableKick:true,
            disableGrantModerator: true
          }
        },
      };

      const api = new window.JitsiMeetExternalAPI(domain, options);
      setApiObj(api);
      api.executeCommand("overwriteConfig", {
      // toolbarButtons: [ 'microphone', 'camera','raisehand','tileview','hangup','mute-everyone','chat','fullscreen','select-background','shareaudio','sharedvideo','mute-video-everyone','livestreaming'],
    // toolbarButtons: ['']
    });
     
    } catch (error) {
      console.error("Failed to load Educloudlabs API", error);
    }
  }

  const closeCall = () => {
    if (apiObj) {
      apiObj.executeCommand("hangup");
    }
  };

  const microphone = () => {
    if (apiObj) {
      apiObj.executeCommand("toggleAudio");
    }
  };

  const video = () => {
    if (apiObj) {
      apiObj.executeCommand("toggleVideo");
    }
  };

  const raseHand = () => {
    if (apiObj) {
      apiObj.executeCommand("toggleRaiseHand");
    }
  };
  const chat = () => {
    if (apiObj) {
      apiObj.executeCommand("toggleChat");
    }
  };
  const screenShare = () => {
    if (apiObj) {
      apiObj.executeCommand("toggleShareScreen");
    }
  };
  const toggleVirtualBackgroundDialog = () => {
    if (apiObj) {
      apiObj.executeCommand("toggleVirtualBackgroundDialog");
    }
  };

  const tileView = () => {
    if (apiObj) {
      apiObj.executeCommand("toggleTileView");
    }
  };
  const muteAudio = () => {
    if (apiObj) {
      apiObj.executeCommand("muteEveryone", "audio");
    }
  };
  const muteVideo = () => {
    if (apiObj) {
      apiObj.executeCommand("muteEveryone", "video");
    }
  };
 
  

  const askForMeeting = () => {   
    apiObj.executeCommand('toggleLobby', true);
  };
 

  return (
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
            {/*  {!isModerator && (
                <div>
                  <button
                    type="button"
                    className="btn-success"
                    onClick={() => askForMeeting(slug)}
                  >
                    Ask For Meeting
                  </button>
                </div>
              )}
            */}

              <div className="card-body p-lg-5 p-4 w-100 border-0 ">
                <div style={containerStyle}>
                  <div id="jitsi-container" style={jitsiContainerStyle} />
                </div>
              </div>

              <div className="row">
                <table>
                  <tr>   
                         
                    <th>
                      {" "}
                      <button className="btn btn-primary" onClick={() => microphone()}>Microphone</button>
                    </th>
                    <th>
                      {" "}
                      <button className="btn btn-primary" onClick={() => video()}>Video</button>
                    </th>
                    <th>
                      {" "}
                      <button className="btn btn-primary" onClick={() => screenShare()}>
                        Screen Share
                      </button>
                    </th>
                    <th>
                      {" "}
                      <button className="btn btn-primary" onClick={() => chat()}>Chat</button>
                    </th>
                    <th>
                      {" "}
                      <button className="btn btn-primary" onClick={() => raseHand()}>Rase Hand</button>
                    </th>
                    <th>
                      <button className="btn btn-primary" onClick={() => tileView()}>Tile View</button>
                    </th>
                    <th>
                      <button className="btn btn-primary" onClick={() => toggleVirtualBackgroundDialog()}>
                        Select Background
                      </button>
                    </th>
                    {isModerator  &&
                      <Fragment>
                      <th>
                      <button onClick={() => muteAudio()}>
                        Mute Audio Everyone
                      </button>
                    </th>
                    <th>
                      <button onClick={() => muteVideo()}>
                        Mute Video Everyone
                      </button>
                    </th>
                    </Fragment>
                    }
                    <th>
                      <button
                        className="btn-danger"
                        onClick={() => closeCall()}
                      >
                        End Meeting
                      </button>
                    </th>
                  </tr>
                </table>
              </div>

              {/*  {state.joinCount !== 1 && !state.loading && (
                <div className="card-body p-lg-5 p-4 w-100 border-0 ">
                  <div style={containerStyle}>
                    <h1>
                      Training already open in another tab or browser please
                      check{" "}
                    </h1>
                  </div>
                </div>
              )}
            */}
            </div>
          </div>
        </div>
      }
    />
  );
}
export default EducloundMeet;
//https://www.youtube.com/watch?v=rSUvYHAAMqY&list=RDqr8YUtUCRx8&index=27
