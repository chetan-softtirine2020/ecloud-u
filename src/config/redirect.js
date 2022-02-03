import { Navigate } from "react-router-dom";

export function redirectUser() {
  const userData = JSON.parse(localStorage.getItem("data"));
  if (userData.roles.includes("user")) {
    return "/users";
  }
  if (userData.roles.includes("provider")) {
    return "/learning-provider";
  }
  if (userData.roles.includes("organization")) {
    return "/organization";
  }
  if (userData.roles.includes("organization_user")) {
    return "/ou/home";
  }
  if (userData.roles.includes("admin")) {
    return "/admin/home";
  }
  if (userData.roles.includes("provider_user")) {
    return "/lpu-home";
  }
}
