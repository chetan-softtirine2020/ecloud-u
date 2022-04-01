import React, {
  useState,
  useEffect 
} from "react";
import AppBody from "./components/AppBody";
import { useParams } from "react-router";
import { useLocation  } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { joinConferanceCheckCount } from "../actions/conferance_action";
import ConferencePage from "./ConferencePage";
function EducloundMeet() {
  const location = useLocation();
  const dispatch = useDispatch();
  const state = useSelector((state) => state.conferanceReducer);
  const [time, setTime] = useState({
    seconds: 0,
  });

  const [meetingStatus, setMeetingStatus] = useState(false);
  if (!localStorage.getItem("token") && !localStorage.getItem("token")) {
    localStorage.setItem("redirectLink", location.pathname);
  }
  const [loading, setLoading] = useState(false);
  let { slug } = useParams();
  const userData = JSON.parse(localStorage.getItem("data"));

  useEffect(() => {
    dispatch(joinConferanceCheckCount({ is_start: true, slug: slug }));
    //startConference();
    const unloadCallback = (event) => {
      dispatch(joinConferanceCheckCount({ is_end: true, slug: slug,min: time.seconds}));
      event.preventDefault();
      if (typeof event == 'undefined') {
        event = window.event;
     }
      event.returnValue = "";
      return "";
    };
    //beforeunload
    window.addEventListener("beforeunload", unloadCallback);
    return () => {
      window.removeEventListener("beforeunload", unloadCallback);
    };
  }, []);

  useEffect(() => {  
    const advanceTime = () => {
    setTimeout(() => {
      let nSeconds = time.seconds;
      nSeconds++;
      setTime({ seconds: nSeconds });
    },1000);        
  };
  advanceTime();  
  return () => { 
    }

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
              {state.joinCount === 1 && !state.loading && (
                  <ConferencePage/>
              )}
               {state.joinCount >1 && !state.loading && (                         
                <div className="card-body p-lg-5 p-4 w-100 border-0" onLoad={()=>alert("dsdsad")}>
                  <div style={containerStyle}>
                    <h1 className="color-white">
                      Training already open in another tab or browser please
                      check{" "}                     
                    </h1>
                      <button className="btn btn-danger text-center" onClick={()=> window.close()}>Close</button>
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
//https://www.youtube.com/watch?v=rSUvYHAAMqY&list=RDqr8YUtUCRx8&index=27
