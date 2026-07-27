import React from "react";
import { Navigate } from "react-router-dom";
import { USER_ROLE } from "../app_constants/common_constants";

interface ProtectedRouteProps {
  element: React.ReactElement;
  allowedRoles: USER_ROLE[];
}

const ProtectedRoute = ({ element, allowedRoles }: ProtectedRouteProps) => {
  const userString = localStorage.getItem("user");

  if (!userString) {
    return React.createElement(Navigate, { to: "/", replace: true });
  }

  const user = JSON.parse(userString);

  if (!allowedRoles.includes(user.role)) {
    return React.createElement(Navigate, {
      to: "/unauthorized",
      replace: true,
    });
  }

  return element;
};

export default ProtectedRoute;
