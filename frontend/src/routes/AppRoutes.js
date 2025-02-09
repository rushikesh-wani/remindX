import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Dashboard from "../pages/Dashboard";
import Login from "../pages/Login";
import ProtectedRoute from "./ProtectedRoute";
import { GoogleOAuthProvider } from "@react-oauth/google";
import AuthGuard from "./AuthGuard";
import TermsAndConditions from "../pages/TermsAndConditions";
import PrivacyPolicy from "../pages/PrivacyPolicy";

const appRoutes = createBrowserRouter([
  {
    index: true,
    element: (
      <ProtectedRoute>
        <Dashboard />
      </ProtectedRoute>
    ),
  },
  {
    path: "/dashboard",
    element: (
      <ProtectedRoute>
        <Dashboard />
      </ProtectedRoute>
    ),
  },
  {
    path: "/login",
    element: (
      <AuthGuard>
        <GoogleOAuthProvider clientId={process.env.REACT_APP_OAUTH_CLIENT_ID}>
          <Login />
        </GoogleOAuthProvider>
      </AuthGuard>
    ),
  },
  {
    path: "/terms-and-conditions",
    element: <TermsAndConditions />,
  },
  {
    path: "/privacy-policy",
    element: <PrivacyPolicy />,
  },
]);

export default appRoutes;
