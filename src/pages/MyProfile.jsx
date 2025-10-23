import React, { use } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";
import { toast } from "react-toastify";
import { TypeAnimation } from "react-type-animation";
import { Link } from "react-router";

const MyProfile = () => {
  const { setUser, updateUser, user } = use(AuthContext);

  if (!user) {
    return (
      <div>
        <div className="flex justify-center items-center text-gray-600 text-2xl font-semibold mt-80">
          <TypeAnimation
            className="text-center text-secondary font-semibold text-lg mx-auto "
            sequence={[
              // Same substring at the start will only be typed once, initially
              "Please login to view your profile.",
              1000,
              "Please login first to view your profile.",
              1000,
              "Please login to view your profile.",
              1000,
              "Please login to view your profile.",
              1000,
            ]}
            speed={50}
            style={{ fontSize: "2em" }}
            repeat={Infinity}
          />{" "}
        </div>
        <div className="flex justify-center items-center mt-5 ">
          <Link to="/auth/login" className="btn btn-secondary  ">
            Log In
          </Link>
        </div>
      </div>
    );
  }

  const handleUpdateProfile = (e) => {
    const name = e.target.name?.value;
    const photo = e.target.photo?.value;
    e.preventDefault();

    updateUser({ displayName: name, photoURL: photo })
      .then(() => {
        setUser({ ...user, displayName: name, photoURL: photo });
        toast.success("Profile Updated Successfully");
        e.target.reset();
      })
      .catch((error) => {
        console.log(error);
        setUser(user);
      });
  };
  return (
    <div className=" bg-gradient-to-b from-pink-100 to-white flex items-center justify-center px-4 py-8">
      <div className="w-full max-w-md bg-base-100 shadow-xl rounded-2xl p-8 border border-gray-100">
        {/* Title */}
        <h2 className="text-3xl font-bold text-center text-pink-600 mb-6">
          🐾 Update Your Profile
        </h2>

        {/* Current Avatar */}
        <div className="flex flex-col items-center mb-6">
          <img
            src={user.photoURL}
            alt="User Avatar"
            className="w-24 h-24 rounded-full border-4 border-pink-200 shadow-md"
          />

          <p className="mt-2 mb-4 text-gray-600 text-sm">
            Change your display info
          </p>
          {/* name */}
          <div className="text-center mb-3">
            <p className="text-gray-600 text-xs font-medium">Your Name</p>
            {user && <p>{user.displayName}</p>}
          </div>
          {/* email */}
          <div className="text-center  ">
            <p className="text-gray-600 text-xs font-medium">Your Email</p>
            {user && <p>{user.email}</p>}
          </div>
        </div>

        {/* Form */}
        <form onSubmit={handleUpdateProfile} className="space-y-4">
          {/* Name */}
          <div>
            <label className="label">
              <span className="label-text font-semibold">Full Name</span>
            </label>
            <input
              type="text"
              name="name"
              required
              placeholder="Update your name"
              className="input input-bordered w-full focus:border-pink-500"
            />
          </div>

          {/* Photo URL */}
          <div>
            <label className="label">
              <span className="label-text font-semibold">Photo URL</span>
            </label>
            <input
              type="text"
              name="photo"
              required
              placeholder="Update your photo URL"
              className="input input-bordered w-full focus:border-pink-500"
            />
          </div>

          {/* Buttons */}
          <div className="flex flex-col gap-3 mt-6">
            <button
              type="submit"
              className="btn bg-pink-600 hover:bg-pink-700 text-white font-semibold rounded-xl"
            >
              Update Profile
            </button>
            <Link
              to={"/"}
              type="button"
              className="btn btn-outline border-pink-500 text-pink-600 hover:bg-pink-50 rounded-xl"
            >
              Cancel
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default MyProfile;
