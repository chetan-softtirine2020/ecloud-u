import { Navigate } from "react-router-dom";

export function redirectUser() {
  const userData = JSON.parse(localStorage.getItem("data"));
  if (userData.roles.includes("user")) {
    return <Navigate to="/users" />;
  }
  if (userData.roles.includes("provider")) {
    return <Navigate to="/learning-provider" />;
  }
  if (userData.roles.includes("organization")) {
    return <Navigate to="/organization" />;
  }
  if (userData.roles.includes("organization_user")) {
    return <Navigate to="/ou/home" />;
  }
  if (userData.roles.includes("admin")) {
    return <Navigate to="/admin/home" />;
  }
  if (userData.roles.includes("provider_user")) {
    return <Navigate to="/lpu-home" />;
  }
}
