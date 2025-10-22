import React, { use } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";
import { toast } from "react-toastify";

const MyProfile = () => {
  const { setUser, updateUser, user } = use(AuthContext);

  const handleUpdateProfile = (e) => {
    const name = e.target.name?.value;
    const photo = e.target.photo?.value;

    e.preventDefault();
    updateUser({ displayName: name, photoURL: photo })
      .then((result) => {
        const user = result.user;
        setUser({ ...user, displayName: name, photoURL: photo });
        toast.success("Profile Updated Successfully");
      })
      .catch((error) => {
        console.log(error);
        setUser(user);
      });
  };
  return (
    <div className="min-h-screen bg-gradient-to-b from-pink-100 to-white flex items-center justify-center px-4 py-8">
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

          <div className="text-center space-y-1 ">
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
              placeholder="Enter your name"
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
              placeholder="Enter your photo URL"
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
            <button
              type="button"
              className="btn btn-outline border-pink-500 text-pink-600 hover:bg-pink-50 rounded-xl"
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default MyProfile;
