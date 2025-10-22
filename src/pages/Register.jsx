import React from "react";
import { Link } from "react-router";

const Register = () => {
  return (
    <div className="flex justify-center  items-center mt-20">
      <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
        <div className="card-body">
          <form>
            <fieldset className="fieldset">
              <div className="text-center">
                <h2 className="text-2xl font-semibold">
                  <span className="text-secondary font-bold">
                    Create an Account
                  </span>{" "}
                  to <br /> <span className="text-blue-500">🐾PawCare</span>{" "}
                  <span className="text-orange-500">Family🐕</span>
                </h2>
              </div>
              {/* name */}
              <label className="label">Name</label>
              <input
                type="text"
                name="name"
                className="input"
                placeholder="Name"
              />
              {/* photo Url */}
              <label className="label">Photo</label>
              <input
                type="text"
                name="photo"
                className="input"
                placeholder="Photo URL"
              />
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
                name="password"
                className="input"
                placeholder="Password"
              />

              <button type="submit" className="btn btn-neutral mt-4">
                Register
              </button>
            </fieldset>
          </form>
          <p className="text-center text-sm text-black/80 pt-5 font-medium">
            Already have an account?{" "}
            <Link
              to="/auth/login"
              className="text-blue-500 hover:text-blue-700 underline"
            >
              Login
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;
