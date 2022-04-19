import React from "react";
import { Whiteboard } from "react-fabricjs-whiteboard";
import AppBody from "./components/AppBody";

const WhiteBoard = () => {
  return <AppBody content={<Whiteboard />} />;
};
export default WhiteBoard;
