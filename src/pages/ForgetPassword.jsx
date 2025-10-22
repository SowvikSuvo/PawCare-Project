import React, { use, useEffect, useRef } from "react";
import Navbar from "../componenets/Navbar";
import { Outlet, useLocation } from "react-router";
import Footer from "../componenets/Footer";
import { toast } from "react-toastify";
import { AuthContext } from "../AuthProvider/AuthProvider";

const ForgetPassword = () => {
  const { resetPassword } = use(AuthContext);
  const emailRef = useRef();
  const location = useLocation();
  const prefilledEmail = location.state?.email || "";

  useEffect(() => {
    if (prefilledEmail && emailRef.current) {
      emailRef.current.value = prefilledEmail;
    }
  }, [prefilledEmail]);

  const handleResetPassword = (e) => {
    e.preventDefault();
    const email = emailRef.current?.value;
    if (!email) {
      toast.error("Please enter your email address");
      return;
    }
    resetPassword(email)
      .then(() => {
        toast.success(
          "📩 Reset link on its way! Check your Gmail inbox or spam folder."
        );
        setTimeout(() => {
          window.open(
            "https://mail.google.com",
            "_blank",
            "noopener,noreferrer"
          );
        }, 1200);
        e.target.reset();
      })
      .catch((error) => {
        toast.error(error.message);
      });
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-br from-sky-100 via-blue-200 to-indigo-200">
      <div className="card w-full max-w-sm bg-base-100 shadow-2xl border border-gray-100">
        <div className="card-body">
          <h2 className="text-center text-2xl font-bold text-indigo-600">
            Reset Your Password
          </h2>
          <p className="text-center text-sm text-gray-500 mb-4">
            Enter your email address below to receive a reset link.
          </p>

          <form onSubmit={handleResetPassword}>
            <div className="form-control mb-4">
              <label className="label">
                <span className="label-text font-medium">Email Address</span>
              </label>
              <input
                ref={emailRef}
                type="email"
                placeholder="example@gmail.com"
                defaultValue={prefilledEmail}
                className="input input-bordered focus:outline-none focus:ring-2 focus:ring-indigo-400"
              />
            </div>

            <button
              type="submit"
              className="btn btn-primary w-full bg-indigo-600 hover:bg-indigo-700 text-white font-semibold"
            >
              Send Reset Link
            </button>
          </form>

          <div className="text-center mt-4">
            <a
              href="/login"
              className="text-sm text-indigo-600 hover:underline"
            >
              🔙 Back to Login
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ForgetPassword;
