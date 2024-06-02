import React from "react";
import { Navigate } from "react-router-dom";
import { userLocal } from "../service/userLocal";

const AuthWrapper = ({ children }) => {
  const userId = JSON.parse(userLocal.getUserId()); // or get it from a context or global state

  if (!userId) {
    return <Navigate to="/auth/login" />;
  }

  return children;
};

export default AuthWrapper;