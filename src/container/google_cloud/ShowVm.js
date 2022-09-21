import React, { Fragment, useState } from "react";
import { useSelector } from "react-redux";
import AppBody from "../components/AppBody";
import { Link, useNavigate } from "react-router-dom";
import Guacamole from "guacamole-common-js";
import SiteBar from "../components/SiteBar";
const ShowVm = () => {
  const state = useSelector((state) => state.gcReducer);
  const [gua, setGua] = useState(null);
  const navigate = useNavigate();
  const startVm = () => {
    let mouse;
    let keyboard;
    var display = document.getElementById("displayyy");
    let guac = new Guacamole.Client(
      // new Guacamole.WebSocketTunnel(
      //   "ws://34.93.116.53/ws/chat/robert-tillis/1000/460"
      // )
      new Guacamole.WebSocketTunnel(
        "ws://34.93.116.53/ws/chat/greg-close/1200/460"
      )
    );
    if (guac) {
      setGua(guac);
    }
    display.appendChild(guac.getDisplay().getElement());
    if (!mouse) mouse = new Guacamole.Mouse(guac.getDisplay().getElement());
    if (!keyboard) keyboard = new Guacamole.Keyboard(document);
    // Error handler
    guac.onerror = function (error) {
      alert(JSON.stringify(error));
    };
    // Connect
    guac.connect();
    mouse.onmousedown =
      mouse.onmouseup =
      mouse.onmousemove =
        function (mouseState) {
          // console.log(mouseState)
          guac.sendMouseState(mouseState);
        };

    keyboard.onkeydown = function (keysym) {
      // console.log(keysym)
      guac.sendKeyEvent(1, keysym);
    };
    keyboard.onkeyup = function (keysym) {
      // console.log(keysym)
      guac.sendKeyEvent(0, keysym);
    };
  };

  const stopVm = () => {
    if (gua) {
      gua.disconnect();
      console.log(gua);
      navigate("/vm-list");
    }
  };

  return (
    <AppBody
      content={
        <div className="card-body p-4 w-100 border-0 ">
          <div id="displayyy"></div>
          <button onClick={() => startVm()}>Start Connection</button>
          <button onClick={() => stopVm()}> Close Connection</button>
        </div>
      }
    />
  );
};

export default ShowVm;

// <AppBody
// loading={state.loading}
// content={
//   <div className="middle-sidebar-left">
//     <div className="card w-100 border-0 shadow-xs p-0 mb-4">
//       <div className="card-header p-3 w-100 border-0 d-flex rounded-lg">
//         <Link to={"/create-training"} className="d-inline-block mt-2">
//           <i className="ti-arrow-left font-sm text-white"></i>
//         </Link>
//         <h4 className="font-xs text-white fw-600 ml-4 mb-0 mt-2">
//           Virtul Machine
//         </h4>
//       </div>

//       <div className="card-body p-4 w-100 border-0 ">
//         <div id="displayyy"></div>
//         <button onClick={() => startVm()}>Start Connection</button>
//         <button onClick={() => stopVm()}> Close Connection</button>
//       </div>
//     </div>
//   </div>
// }
// />
