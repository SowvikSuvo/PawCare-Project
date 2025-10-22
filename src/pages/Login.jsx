import React from "react";
import { Link } from "react-router";

const Login = () => {
  const handleLogin = (e) => {
    e.preventDefault();
    const email = e.target.email?.value;
    const password = e.target.password?.value;
    console.log({ email, password });
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
                type="email"
                name="email"
                className="input"
                placeholder="Email"
              />

              {/* password */}
              <label className="label">Password</label>
              <input
                type="password"
                className="input"
                name="password"
                placeholder="Password"
              />
              <div>
                <a className="link link-hover">Forgot password?</a>
              </div>
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
                onClick={"handleGoogleSignin"}
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
