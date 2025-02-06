import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Dashboard from "../pages/Dashboard";
import Login from "../pages/Login";

const appRoutes = createBrowserRouter([
  {
    path: "/",
    index: true,
    element: <Dashboard />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  //   {
  //     path: "/email/register",
  //     element: <Register />,
  //   },
]);

export default appRoutes;
