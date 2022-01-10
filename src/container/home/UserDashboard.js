import React from 'react'
import AppBody from "../components/AppBody";
import { useSelector } from "react-redux";
const UserDashboard = () => {
  const auth = useSelector((state) => state.authReducer);
        console.log(auth);
  return (
        <AppBody
        content={
          <div>
            <h1>User Dashboard</h1>
          </div>
        }
      />
    )
}

export default UserDashboard
