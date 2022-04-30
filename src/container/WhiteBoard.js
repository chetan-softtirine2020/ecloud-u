import React from "react";
import { Whiteboard } from "react-fabricjs-whiteboard";
import AppBody from "./components/AppBody";

const WhiteBoard = () => {

  setTimeout(function(){
    if (window.location.href.indexOf("white") > -1) {
      document.getElementById("navbarTraning").click();
    }
  },50);

  return (
    <AppBody
      loading={false}
      content={
        <div className="middle-sidebar-left">
          <div className="">
            <div className="card w-100 border-0 shadow-xs p-0 mb-4">
              <div className="card-header p-3 w-100 border-0 d-flex rounded-lg">
              <button id="navbarTraning"
                className="navbar-toggler"
                type="button"
                data-toggle="collapse"
                data-target="#navbarNavDropdown2"
                aria-controls="navbarNavDropdown2"
                aria-expanded="true"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon"></span>
              </button>
                <h4 className="font-xs text-white fw-600 ml-4 mb-0 mt-2">
                  WhiteBoard
                </h4>
              </div>         
              <Whiteboard />
            </div>
          </div>
        </div>
      }
    />
  );   
};
export default WhiteBoard;
