import React from "react";
import AppHeader from "../pages/Header/header";
import { Outlet } from "react-router-dom";

const RouteLayout: React.FC = () => {
  return (
    <>
      <AppHeader />
      <div className="w-full min-h-screen bg-gray-100 p-4">
        <Outlet />
      </div>
    </>
  );
};

export default RouteLayout;
