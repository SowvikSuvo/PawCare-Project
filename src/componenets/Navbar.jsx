import React, { use, useState } from "react";
import pawImg from "../assets/paw.png";
import { Link, NavLink } from "react-router";
import userImg from "../assets/user.png";
import { AuthContext } from "../AuthProvider/AuthProvider";
import { toast } from "react-toastify";

const Navbar = () => {
  const { user, logOut } = use(AuthContext);
  const [hover, setHover] = useState(false);

  const handleLogOut = () => {
    logOut()
      .then(() => toast.success("Logged Out Successfully"))
      .catch((err) => toast.error(err.message));
  };

  return (
    <div className="w-full bg-gradient-to-r from-pink-300 via-purple-300 to-indigo-300 shadow-md sticky top-0 z-50">
      {/* Center Content */}
      <div className="navbar container mx-auto px-4">
        {/* Left: Logo + Mobile Menu */}
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </div>

            {/* Dropdown Menu */}
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 mt-3 w-52 p-2 shadow rounded-box"
            >
              <li>
                <NavLink to="/">Home</NavLink>
              </li>
              <li>
                <NavLink to="/services">All Services</NavLink>
              </li>
              {!user && (
                <li>
                  <NavLink to="/auth/login">Login/Register</NavLink>
                </li>
              )}
              <li>
                <NavLink to="/about">About Us</NavLink>
              </li>
              <li>
                <NavLink to="/contact">Contact</NavLink>
              </li>
              <li>
                <NavLink to="/support">Support</NavLink>
              </li>
              {user && (
                <li>
                  <NavLink to="/profile">My Profile</NavLink>
                </li>
              )}
            </ul>
          </div>

          {/* Logo */}
          <Link to="/" className="text-xl font-bold">
            <img src={pawImg} className="w-50" alt="logo" />
          </Link>
        </div>

        {/* Center: Main Menu Desktop */}
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 gap-4 font-medium">
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/services">All Services</NavLink>
            </li>
            {/* {!user && (
              <li>
                <NavLink to="/auth/login">Login/Register</NavLink>
              </li>
            )} */}
            <li>
              <NavLink to="/blogs">Blogs</NavLink>
            </li>
            <li>
              <NavLink to="/about">About Us</NavLink>
            </li>
            <li>
              <NavLink to="/contact">Contact</NavLink>
            </li>
            {user && (
              <li>
                <NavLink to="/profile">My Profile</NavLink>
              </li>
            )}
          </ul>
        </div>

        {/* Right: User Avatar + Login/Logout */}
        <div className="navbar-end gap-3">
          {/* Profile Image */}
          <Link
            to="/profile"
            className="relative w-10 h-10 group"
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
          >
            {/* Tooltip */}
            <span className="absolute -left-24 top-1 bg-gray-800 text-white text-sm py-1 px-2 rounded opacity-0 group-hover:opacity-100 transition-all duration-300">
              {user ? user.displayName : "Click me"}
            </span>

            <img
              className="w-10 h-10 rounded-full cursor-pointer border-2 border-pink-600"
              src={user ? user.photoURL : userImg}
              alt=""
            />
          </Link>

          {/* Login / Logout */}
          {user ? (
            <button onClick={handleLogOut} className="btn btn-primary px-6">
              Logout
            </button>
          ) : (
            <Link to="/auth/login" className="btn btn-primary px-6">
              Login
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
