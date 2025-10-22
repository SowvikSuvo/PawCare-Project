import React from "react";
import { Outlet } from "react-router";
import Footer from "../componenets/Footer";
import Navbar from "../componenets/Navbar";

const HomeLayout = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <div className="">
        <Navbar></Navbar>
      </div>

      <div className=" flex-1 container mx-auto">
        <Outlet></Outlet>
      </div>

      <Footer></Footer>
    </div>
  );
};

export default HomeLayout;
