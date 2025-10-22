import React, { use } from "react";
import { Link } from "react-router";
import { AuthContext } from "../AuthProvider/AuthProvider";

const Register = () => {
  const { createUser, setUser } = use(AuthContext);
  const handleRegister = (e) => {
    e.preventDefault();
    console.log(e.target);
    const name = e.target.name?.value;
    const photo = e.target.photo?.value;
    const email = e.target.email?.value;
    const password = e.target.password?.value;
    console.log({ name, photo, email, password });
    createUser(email, password)
      .then((result) => {
        const user = result.user;
        // console.log(result.user);
        setUser(user);
      })
      .catch((error) => {
        alert(error.message);
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
              <label className="label">Password</label>
              <input
                type="password"
                name="password"
                className="input"
                placeholder="Password"
                required
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
