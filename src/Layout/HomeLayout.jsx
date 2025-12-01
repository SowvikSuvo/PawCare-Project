import React from "react";
import { Outlet } from "react-router";
import Footer from "../componenets/Footer";
import Navbar from "../componenets/Navbar";

const HomeLayout = () => {
  return (
    <div className="flex flex-col min-h-screen">
      {/* REMOVE THE EXTRA DIV HERE */}
      <Navbar />

      <div className="flex-1 container mx-auto">
        <Outlet />
      </div>

      <Footer />
    </div>
  );
};

export default HomeLayout;
