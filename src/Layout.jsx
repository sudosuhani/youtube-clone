import React from "react";
import { Outlet } from "react-router-dom";
import {Header} from "./components";

const Layout = () => {
  return (
    <div className="w-screen h-screen bg-[#282828] text-white">
      <Header />
      <Outlet />
    </div>
  );
};

export default Layout;
