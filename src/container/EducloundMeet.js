import React, { useState, useEffect } from "react";
import AppBody from "./components/AppBody";
import { useParams } from "react-router";
import { useLocation } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { joinConferanceCheckCount } from "../actions/conferance_action";
import ConferencePage from "./ConferencePage";
import { Button } from "react-bootstrap";
import { Modal } from "react-bootstrap";
function EducloundMeet() {
  const location = useLocation();
  const dispatch = useDispatch();
  const state = useSelector((state) => state.conferanceReducer);
  const [time, setTime] = useState({
    seconds: 0,
  });

  const [isOpen, setIsOpen] = useState(false);
  const [meetingStatus, setMeetingStatus] = useState(false);
  if (!localStorage.getItem("token") && !localStorage.getItem("token")) {
    localStorage.setItem("redirectLink", location.pathname);
  }
  const [loading, setLoading] = useState(false);
  let { slug } = useParams();
  const userData = JSON.parse(localStorage.getItem("data"));

  useEffect(() => {
    const unloadCallback = (event) => {
      dispatch(
        joinConferanceCheckCount({
          is_end: true,
          slug: slug,
          min: time.seconds,
        })
      );
      event.preventDefault();
      if (typeof event == "undefined") {
        event = window.event;
      }
      event.returnValue = "";
      return "";
    };
    //beforeunload
    window.addEventListener("beforeunload", unloadCallback);
    return () => {
      dispatch(
        joinConferanceCheckCount({
          is_end: true,
          slug: slug,
          min: time.seconds ,
        })
      );
      window.removeEventListener("beforeunload", unloadCallback);
    };
  }, []);

  useEffect(() => {
    const advanceTime = () => {
      setTimeout(() => {
        let nSeconds = time.seconds;
        nSeconds++;
        setTime({ seconds: nSeconds });
      }, 1000);
    };
    advanceTime();
    return () => {};
  }, [time.seconds]);

  if (state.joinCount === 1 && !meetingStatus) {
    if (window.JitsiMeetExternalAPI && !localStorage.getItem("redirectLink")) {
      //  alert("Hiii");
      console.log("Call the start");
      //startConference();
    } else {
      if (!localStorage.getItem("redirectLink")) {
        alert("Wait meeting  Not Loaded..");
      }
    }
    setLoading(true);
    setMeetingStatus(true);
  }
  const containerStyle = {
    width: "auto",
    height: "auto",
  };

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
  const [userName, setUserName] = useState("");
  const [show, setShow] = useState(true);
  const handleClose = (traning) => {
    if (traning) {
      dispatch(joinConferanceCheckCount({ is_start: true, slug: slug }));
      setShow(false);
      setUserName(traning);
    }
  };

  const handelWindowClose = () => {
    dispatch(joinConferanceCheckCount({ is_start: true, slug: slug }));
    setIsOpen(true);
    window.close();
  };

  return (
    <AppBody
      loading={false}
      content={
        <div className="middle-sidebar-left">
          <div className="">
            <div className="card w-100 border-0 shadow-xs p-0 mb-4">
              <div className="card-header p-3 w-100 border-0 d-flex rounded-lg">
                <h4 className="font-xs text-white fw-600 ml-4 mb-0 mt-2">
                  Training
                </h4>
              </div>
              {show ? (
                <Modal show={show} onHide={handleClose}>
                  <Modal.Header>
                    <Modal.Title
                      className={"color-white"}
                      style={{ color: "aliceblue", fontWeight: 700 }}
                    >
                      Confim
                    </Modal.Title>
                  </Modal.Header>
                  <Modal.Body className="err-model-body">
                    <div className="form-group">
                      <label className="mont-font fw-600 font-xsss color-white">
                        Are you sure want to start Training?
                      </label>
                    </div>
                  </Modal.Body>
                  <Modal.Footer>
                    <Button
                      variant="primary"
                      onClick={() => {
                        handleClose("traning");
                      }}
                    >
                      Yes
                    </Button>
                    <Button
                      variant="secondary"
                      onClick={() => handelWindowClose()}
                    >
                      No
                    </Button>
                  </Modal.Footer>
                </Modal>
              ) : (
                <div />
              )}

              {userName && state.joinCount === 1 && !state.loading && (
                <ConferencePage userName={userName} />
              )}

              {userName && state.joinCount > 1 && !state.loading && (
                <div
                  className="card-body p-lg-5 p-4 w-100 border-0"
                  onLoad={() => alert("dsdsad")}
                >
                  <div style={containerStyle}>
                    <h1 className="color-white">
                      Training already open in another tab or browser please
                      check{" "}
                    </h1>
                    <button
                      className="btn btn-danger text-center"
                      onClick={() => window.close()}
                    >
                      Close
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      }
    />
  );
}
export default EducloundMeet;
