import React from 'react'
import AppBody from "../components/AppBody";
import { useSelector } from "react-redux";
const OrganizationDashboard = () => {
  const auth = useSelector((state) => state.authReducer);
  console.log(auth);
  return (
        <AppBody
        content={
          <div>
            <h1>Organization Dashboard</h1>
          </div>
        }
      />
    )
    
}

export default OrganizationDashboard
