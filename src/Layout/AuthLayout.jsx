import React from "react";
import Navbar from "../componenets/Navbar";
import Footer from "../componenets/Footer";
import Login from "../pages/Login";
import Register from "../pages/Register";
import { Outlet } from "react-router";

const AuthLayout = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <header>
        <Navbar></Navbar>
      </header>
      <main className=" flex-1 container mx-auto">
        <Outlet></Outlet>
      </main>
      <footer className="">
        <Footer></Footer>
      </footer>
    </div>
  );
};

export default AuthLayout;
