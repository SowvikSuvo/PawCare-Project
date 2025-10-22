import React, { use, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router";
import { AuthContext } from "../AuthProvider/AuthProvider";
import { toast } from "react-toastify";
import { FaEye } from "react-icons/fa";

import { IoEyeOff } from "react-icons/io5";

const Register = () => {
  const { createUser, setUser } = use(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();
  const [show, setShow] = useState(false);
  const [nameError, setNameError] = useState("");
  const [passError, setPassError] = useState("");
  const handleRegister = (e) => {
    e.preventDefault();
    console.log(e.target);
    const name = e.target.name?.value;
    if (name.length < 5) {
      setNameError("Name should be more then 5 character");
      return;
    } else {
      setNameError("");
    }
    const photo = e.target.photo?.value;
    const email = e.target.email?.value;
    const password = e.target.password?.value;
    console.log({ name, photo, email, password });

    const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[^A-Za-z0-9]).{6,}$/;
    if (!regex.test(password)) {
      setPassError("Please provide valid password");
      toast.error(
        "❌ Password must be at least 6 characters long, include at least one uppercase letter, one lowercase letter, and one special character."
      );
      return;
    }

    createUser(email, password)
      .then((result) => {
        const user = result.user;
        setUser(user);
        navigate(`${location.state ? location.state : "/"}`);
        toast.success("Account Created Successfully");
        e.target.reset();
      })
      .catch((error) => {
        toast.error(error.message);
      });
  };
  return (
    <div className="flex justify-center  items-center mt-20">
      <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
        <div className="card-body">
          <form onSubmit={handleRegister}>
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
                required
              />
              {nameError && <p className="text-xs text-error">{nameError}</p>}
              {/* photo Url */}
              <label className="label">Photo</label>
              <input
                type="text"
                name="photo"
                className="input"
                placeholder="Photo URL"
                required
              />
              {/* email */}
              <label className="label">Email</label>
              <input
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
              {passError && <p className="text-xs text-error">{passError}</p>}

              <button type="submit" className="btn btn-neutral mt-4">
                Register
              </button>
            </fieldset>
          </form>
          <p className="text-center text-sm text-black/80 pt-5 font-medium">
            Already have an account?{" "}
            <Link
              to="/auth/login"
              className="text-pink-500 hover:text-pink-700 underline"
            >
              LogIn
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;
