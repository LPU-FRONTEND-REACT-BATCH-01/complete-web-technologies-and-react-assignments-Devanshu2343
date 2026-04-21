import React from "react";
import { Navigate } from "react-router";

const Profile = () => {
  const isAuthenticated = true;

  if (!isAuthenticated) {
    return <Navigate to={"/signup"} />;
  }

  return <div>Profile</div>;
};

export default Profile;
