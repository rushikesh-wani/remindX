import React from "react";
import { Navigate } from "react-router-dom";

const AuthGuard = ({ children }) => {
  const authToken = localStorage.getItem("authToken");

  return authToken ? <Navigate to="/dashboard" /> : children;
};

export default AuthGuard;
