import React from "react";
import { Outlet, Navigate, useLocation } from "react-router-dom";

export const PrivateRoute = ({ allowedRoles }) => {
  const userData = JSON.parse(localStorage.getItem("data"));
  const location = useLocation();
  return userData?.roles?.find((role) => allowedRoles?.includes(role)) ? (
    <Outlet />
  ) : userData?.token ? (
    <Navigate to={"/not-authorized"} state={{ form: location }} replace />
  ) : (
    <Navigate to={"/"} state={{ form: location }} replace />
  );
};
