import React, {
  Fragment,
  useState,
  useEffect,
  useCallback,
  useRef,
} from "react";
import AppBody from "./components/AppBody";
import { useParams } from "react-router";
import { useLocation, useNavigate, Navigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { joinConferanceCheckCount } from "../actions/conferance_action";
import jwt from "jwt-simple";
import { Beforeunload } from "react-beforeunload";

function EducloundMeet(fn) {
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

  // useEffect(() => {

  //   const onbeforeunloadFn = () => {
  //      alert("All");
  //     localStorage.setItem('color', 'red')
  //   }

  //   window.addEventListener('beforeunload', onbeforeunloadFn);
  //   return () => {
  //     window.removeEventListener('beforeunload', onbeforeunloadFn);
  //   }
  // }, [])

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
    return () => {
      //alert("hhuuuuuu");
      //dispatch(joinConferanceCheckCount({ is_end: true, slug: slug }));
    };
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
  if (userData) {
    if (
      userData.roles.includes("provider") ||
      userData.roles.includes("organization")
    ) {
      role = "moderator";
      isModerator = true;
    } else {
      role = "participant";
      isModerator = false;
    }
  }

  function startConference() {
    try {
      const domain = "educloud-meet.com";
      let options = {
        moderator: false,
        userInfo: {
          email: userData.email,
          id: userData._id,
          displayName: userData.first_name + " " + userData.last_name,
        },
        roomName: slug,
        height: 550,
        parentNode: document.getElementById("jitsi-container"),
        localRecording: {
          enabled: true,
          format: "flac",
        },
        interfaceConfigOverwrite: {
          filmStripOnly: false,
          SHOW_JITSI_WATERMARK: false,
          TOOLBAR_BUTTONS: ["camera"],
          SETTINGS_SECTIONS: [
            "devices",
            "language",
            "-moderator",
            "profile",
            "-calendar",
          ],
        },
        configOverwrite: {
          prejoinPageEnabled: false,
          doNotStoreRoom: true,
          disableSimulcast: false,
          startWithVideoMuted: false,
          startWithAudioMuted: false,
          disableRemoteMute: true,
          disableDeepLinking: true,
          remoteVideoMenu: {
            disableKick: true,
            disableGrantModerator: true,
          },
        },
      };
      const api = new window.JitsiMeetExternalAPI(domain, options);
      setApiObj(api);
      // api.executeCommand("overwriteConfig", {
      //    toolbarButtons: [ 'microphone', 'camera','raisehand','tileview','hangup','mute-everyone','chat','fullscreen','select-background','shareaudio','sharedvideo','mute-video-everyone','livestreaming'],
      //   // toolbarButtons: ['']
      // });
    } catch (error) {
      console.error("Failed to load Educloudlabs API", error);
    }
  }

  const [micStatus, setMicrophone] = useState(true);
  const [viStatus, setVideo] = useState(true);
  const [muteAudStatus, setMuteAudio] = useState(true);
  const [muteVidStatus, setMuteVideo] = useState(false);
  const [handStatus, setRaiseHand] = useState(false);
  const [toggleStatus, setToggleView] = useState(false);

  const closeCall = () => {
    if (apiObj) {
      apiObj.executeCommand("hangup");
    }
    return <Navigate to="/all-trainings" />;
  };

  const microphone = () => {
    if (apiObj) {
      setMicrophone((current) => !current);
      apiObj.executeCommand("toggleAudio");
    }
  };

  const video = () => {
    if (apiObj) {
      setVideo((current) => !current);
      apiObj.executeCommand("toggleVideo");
    }
  };

  const raseHand = () => {
    if (apiObj) {
      setRaiseHand((current) => !current);
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
      setToggleView((current) => !current);
      apiObj.executeCommand("toggleTileView");
    }
  };
  const muteAudio = () => {
    if (apiObj) {
      setMuteAudio((current) => !current);
      apiObj.executeCommand("muteEveryone", "audio");
    }
  };
  const muteVideo = () => {
    if (apiObj) {
      setMuteVideo((current) => !current);
      apiObj.executeCommand("muteEveryone", "video");
    }
  };

  const askForMeeting = () => {
    apiObj.executeCommand("toggleLobby", true);
    //apiObj.executeCommand('toggleFullScreen', true);
  };

  return (
    <Beforeunload onBeforeunload={() => "You’ll lose your data!"}>
      <AppBody
        loading={loading}
        content={
          <div className="middle-sidebar-left">
            <div className="">
              <div className="card w-100 border-0 shadow-xs p-0 mb-4">
                <div className="card-header p-3 w-100 border-0 d-flex rounded-lg">
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

                <div className="card-body p-4 w-100 border-0 traning-vido-section">
                  <div style={containerStyle}>
                    <div id="jitsi-container" style={jitsiContainerStyle} />
                  </div>
                </div>

                <div className="row">
                  <div className="col">
                    <div className="control-section">
                      {/*   <div className="d-inline-block">
                  {" "}
                  <a
                    title="Start Microphone"
                    className="btn"
                    onClick={() => askForMeeting()}
                  >
                    {micStatus ? (
                      <i class="fa fa-microphone"></i>
                    ) : (
                      <i class="fa fa-microphone-slash"></i>
                    )}
                  </a>
                    </div>*/}

                      <div className="d-inline-block">
                        {" "}
                        <a
                          title="Start Microphone"
                          className="btn"
                          onClick={() => microphone()}
                        >
                          {micStatus ? (
                            <i class="fa fa-microphone"></i>
                          ) : (
                            <i class="fa fa-microphone-slash"></i>
                          )}
                        </a>
                      </div>

                      <div className="d-inline-block">
                        {" "}
                        <a
                          title="Start Video"
                          className="btn"
                          onClick={() => video()}
                        >
                          {viStatus ? (
                            <i className="feather-video"></i>
                          ) : (
                            <i className="fa fa-video-slash"></i>
                          )}
                        </a>
                      </div>
                      <div className="d-inline-block">
                        {" "}
                        <a
                          title="Screen Share"
                          className="btn"
                          onClick={() => screenShare()}
                        >
                          <i className="feather-share"></i>
                        </a>
                      </div>
                      <div className="d-inline-block">
                        {" "}
                        <a title="Chat" className="btn" onClick={() => chat()}>
                          <i className="feather-message-square"></i>
                        </a>
                      </div>
                      <div className="d-inline-block">
                        {" "}
                        <a
                          title="Rase Hand"
                          className={
                            handStatus ? "btn btn-selected-control" : "btn"
                          }
                          onClick={() => raseHand()}
                        >
                          <i className="fa fa-hand"></i>
                        </a>
                      </div>
                      <div className="d-inline-block">
                        <a
                          title="Tile View"
                          className={
                            toggleStatus ? "btn btn-selected-control" : "btn"
                          }
                          onClick={() => tileView()}
                        >
                          <svg
                            aria-hidden="true"
                            width="20px"
                            focusable="false"
                            data-prefix="fas"
                            data-icon="grid-2"
                            role="img"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 580 512"
                            className="svg-inline--fa fa-grid-2 fa-lg"
                          >
                            <path
                              fill="currentColor"
                              d="M192 176C192 202.5 170.5 224 144 224H48C21.49 224 0 202.5 0 176V80C0 53.49 21.49 32 48 32H144C170.5 32 192 53.49 192 80V176zM192 432C192 458.5 170.5 480 144 480H48C21.49 480 0 458.5 0 432V336C0 309.5 21.49 288 48 288H144C170.5 288 192 309.5 192 336V432zM256 80C256 53.49 277.5 32 304 32H400C426.5 32 448 53.49 448 80V176C448 202.5 426.5 224 400 224H304C277.5 224 256 202.5 256 176V80zM448 432C448 458.5 426.5 480 400 480H304C277.5 480 256 458.5 256 432V336C256 309.5 277.5 288 304 288H400C426.5 288 448 309.5 448 336V432z"
                              className=""
                            ></path>
                          </svg>
                        </a>
                      </div>
                      <div className="d-inline-block">
                        <a
                          title="toggle Virtual Background"
                          className="btn"
                          onClick={() => toggleVirtualBackgroundDialog()}
                        >
                          <i className="fa fa-window-restore"></i>
                        </a>
                      </div>
                      <div className="d-inline-block">
                        {isModerator && (
                          <Fragment>
                            <div className="d-inline-block">
                              <a
                                title="Mute Everyone Audio"
                                className="btn btn-selected-control"
                                onClick={() => muteAudio()}
                              >
                                {muteAudStatus ? (
                                  <i class="fa fa-microphone"></i>
                                ) : (
                                  <i class="fa fa-microphone-slash"></i>
                                )}
                              </a>
                            </div>
                            <div className="d-inline-block">
                              <a
                                data-toggle="tooltip"
                                title="Mute Everyone Video"
                                className="btn btn-selected-control"
                                onClick={() => muteVideo()}
                              >
                                {muteVidStatus ? (
                                  <i className="feather-video"></i>
                                ) : (
                                  <i className="fa fa-video-slash"></i>
                                )}
                              </a>
                            </div>
                          </Fragment>
                        )}
                      </div>
                      <div className="d-inline-block ml-2">
                        <a className="btn-common" onClick={() => closeCall()}>
                          End Meeting
                        </a>
                      </div>
                    </div>
                  </div>
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
    </Beforeunload>
  );
}
export default EducloundMeet;
//https://www.youtube.com/watch?v=rSUvYHAAMqY&list=RDqr8YUtUCRx8&index=27
