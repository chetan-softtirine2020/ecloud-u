import { Navigate } from "react-router-dom";
export const redirectUser = () => {
  const data = localStorage.getItem("data");
  if (data.roles.includes("user")) {
       console.log("call")
    return <Navigate to="/users" />;
  }

  if (data.roles.includes("provider")) {
    return <Navigate to="/learning-provider/home" />;
  }

  if (data.roles.includes("organization")) {
    return <Navigate to="/organization/home" />;
  }
  if (data.roles.includes("admin")) {
    return <Navigate to="/admin/home" />;
  }
}
