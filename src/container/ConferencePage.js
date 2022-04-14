import React, { Fragment, useState, useEffect } from "react";
import { useParams } from "react-router";
import { useLocation, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { joinConferanceCheckCount } from "../actions/conferance_action";

function ConferencePage(props) {
  const location = useLocation();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const state = useSelector((state) => state.conferanceReducer);
  const [time, setTime] = useState({
    seconds: 0,
  });

   
  const [apiObj, setApiObj] = useState(null);

  if (!localStorage.getItem("token") && !localStorage.getItem("token")) {
    localStorage.setItem("redirectLink", location.pathname);
  }
  const [loading, setLoading] = useState(false);
  let { slug } = useParams();
  const userData = JSON.parse(localStorage.getItem("data"));
  useEffect(() => {
    const advanceTime = () => {
      setTimeout(() => {
        let nSeconds = time.seconds; 
        nSeconds++;
        setTime({ seconds: nSeconds });
      }, 1000);
    };
    advanceTime();
    return () => {
      // console.log("TImne" + time.seconds);
    };
  }, [time.seconds]);

  useEffect(() => {
    if (props.userName) {
      startConference();
    }
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

  let isModerator = state.isModerator;

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

  if (apiObj && loading) {
    startConference();
  }
  const closeCall = () => {
    if (apiObj) {
      dispatch(
        joinConferanceCheckCount({
          is_end: true,
          slug: slug,
          min: time.seconds,
        })
      );
      if (isModerator) {
        navigate("/all-trainings/");
      } else {
        navigate("/my-trainings/");
      }
      // return <Navigate to="/all-trainings"/>;
      //apiObj.executeCommand("hangup");
    }
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
      //setMuteAudio((current) => !current);
      setMicrophone(false);
      apiObj.executeCommand("muteEveryone", "audio");
    }
  };

  const muteVideo = () => {
    if (apiObj) {
      // setMuteVideo((current) => !current);
      setVideo(true);
      apiObj.executeCommand("muteEveryone", "video");
    }
  };

  return (
    <div>
      <div className="card-body p-4 w-100 border-0 traning-vido-section">
        <div style={containerStyle}>
          <div id="jitsi-container" style={jitsiContainerStyle} />
        </div>
      </div>
      <div className="row">
        <div className="col">
          <div className="control-section">
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
              <a title="Start Video" className="btn" onClick={() => video()}>
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
                className={handStatus ? "btn btn-selected-control" : "btn"}
                onClick={() => raseHand()}
              >
                <i className="fa fa-hand"></i>
              </a>
            </div>
            <div className="d-inline-block">
              <a
                title="Tile View"
                className={toggleStatus ? "btn btn-selected-control" : "btn"}
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
              {state.isModerator && (
                <Fragment>
                  <div className="d-inline-block">
                    <a
                      title="Mute Everyone Audio"
                      className="btn btn-selected-control"
                      onClick={() => muteAudio()}
                    >
                      {muteAudStatus ? (
                        <i class="fa  fa-microphone-slash"></i>
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
    </div>
  );
}
export default ConferencePage;
//https://www.youtube.com/watch?v=rSUvYHAAMqY&list=RDqr8YUtUCRx8&index=27
