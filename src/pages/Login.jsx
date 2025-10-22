import React, { use, useRef, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router";
import { AuthContext } from "../AuthProvider/AuthProvider";
import { toast } from "react-toastify";
import { FaEye } from "react-icons/fa";

import { IoEyeOff } from "react-icons/io5";

const Login = () => {
  const [error, setError] = useState("");
  const { LogIn, googleSignIn } = use(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();
  const [show, setShow] = useState(false);
  const emailRef = useRef();
  console.log(location);

  console.log(location);
  const handleLogin = (e) => {
    e.preventDefault();
    const email = e.target.email?.value;
    const password = e.target.password?.value;
    console.log({ email, password });
    LogIn(email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        navigate(`${location.state ? location.state : "/"}`);
        toast.success("Sign In SuccessFully");
        e.target.reset();
      })
      .catch((error) => {
        toast.error("User is Invalid please login valid information");
        setError(error.message);
      });
  };

  const handleGoogleSignin = () => {
    googleSignIn()
      .then((result) => {
        console.log(result.user);
        navigate(`${location.state ? location.state : "/"}`);
        const loggedInUser = result.user;
        if (!loggedInUser.email) {
          if (loggedInUser.providerData) {
            const gProvider = loggedInUser.providerData.find(
              (p) => p.providerId === "google.com"
            );
            if (gProvider && gProvider.email) {
              loggedInUser.email = gProvider.email;
            }
          }
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="flex justify-center  items-center mt-20">
      <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
        <div className="card-body">
          <form onSubmit={handleLogin}>
            <fieldset className="fieldset">
              <div className="text-center">
                <h2 className="text-2xl font-semibold">
                  <span className="text-secondary font-bold">Login</span> to
                  Continue Your{" "}
                  <span className="text-blue-500">Pet’s Journey </span>
                  🐕
                </h2>
              </div>

              {/* email */}
              <label className="label">Email</label>
              <input
                ref={emailRef}
                type="email"
                name="email"
                className="input"
                placeholder="Email"
                required
              />

              {/* password */}
              <div className="relative">
                <label className="label">Password</label>
                <input
                  type={show ? "text" : "password"}
                  name="password"
                  className="input"
                  placeholder="Password"
                  required
                />

                <span
                  onClick={() => setShow(!show)}
                  className="absolute right-[25px] top-[30px] cursor-pointer z-50 "
                >
                  {show ? <FaEye></FaEye> : <IoEyeOff></IoEyeOff>}
                </span>
              </div>
              <Link
                to="/auth/forget-password"
                state={{ email: emailRef.current?.value }}
                className="link link-hover"
              >
                Forgot password?
              </Link>

              {error && <p className="text-red-500 text-xs">{error}</p>}
              <button type="submit" className="btn btn-neutral mt-4">
                Login
              </button>

              {/* Divider */}
              <div className="flex items-center justify-center gap-2 my-2">
                <div className="h-px w-16 bg-black/30"></div>
                <span className="text-sm text-black/70">or</span>
                <div className="h-px w-16 bg-black/30"></div>
              </div>
              {/* Google Signin */}
              <button
                type="button"
                onClick={handleGoogleSignin}
                className="flex items-center justify-center gap-3 bg-gray-300 text-black px-5 py-2 rounded-lg w-full font-semibold hover:bg-secondary hover:text-white transition-colors cursor-pointer"
              >
                <img
                  src="https://www.svgrepo.com/show/475656/google-color.svg"
                  alt="google"
                  className="w-5 h-5"
                />
                Continue with Google
              </button>
            </fieldset>
          </form>
          <p className="text-center text-sm text-black/80 pt-5 font-medium">
            Don’t have an account?{" "}
            <Link
              to="/auth/register"
              className="text-pink-500 hover:text-pink-700 underline"
            >
              Sign up
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
