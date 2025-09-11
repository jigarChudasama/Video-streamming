import React, { useState } from 'react'
import { Logo } from './Icons';

function Register() {

  const [avatarPreview, setAvatarPreview] = useState(null);

  const handleAvatarChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setAvatarPreview(URL.createObjectURL(file));
    }
  };

  return (
    <>
      <div className=" overflow-y-auto bg-[#121212] text-white" style={{ height: "calc(100vh - 82.02px)" }} >
        <div className="mx-auto my-8 flex w-full max-w-sm flex-col px-4">

          {/* Logo */}
          <div className="mx-auto inline-block w-16 mb-6">
            <Logo />
          </div>
          {/* Title */}
          <div className="mb-6 w-full text-center text-2xl font-semibold uppercase">
            Sign up
          </div>

          <div className="flex flex-col items-center max-w-md " >
            {/* Avatar Preview */}
            {avatarPreview && (
              <div className="mx-auto mb-6  ">
                <img
                  src={avatarPreview}
                  alt="Avatar Preview"
                  className="rounded-full object-cover"
                  style={{ width: "300px", height: "300px" }}
                />
              </div>
            )}
          </div>

          {/* Fullname */}
          <label htmlFor="fullname" className="mb-1 inline-block text-gray-300">
            Full Name*
          </label>
          <input
            id="fullname"
            type="text"
            placeholder="Enter your full name"
            className="mb-4 rounded-lg border bg-transparent px-3 py-2"
          />

          {/* Username */}
          <label htmlFor="username" className="mb-1 inline-block text-gray-300">
            Username*
          </label>
          <input
            id="username"
            type="text"
            placeholder="Enter your username"
            className="mb-4 rounded-lg border bg-transparent px-3 py-2"
          />

          {/* Email */}
          <label htmlFor="email" className="mb-1 inline-block text-gray-300">
            Email*
          </label>
          <input
            id="email"
            type="email"
            placeholder="Enter your email"
            className="mb-4 rounded-lg border bg-transparent px-3 py-2"
          />

          {/* Password */}
          <label htmlFor="password" className="mb-1 inline-block text-gray-300">
            Password*
          </label>
          <input
            id="password"
            type="password"
            placeholder="Enter your password"
            className="mb-4 rounded-lg border bg-transparent px-3 py-2"
          />

          {/* Confirm Password */}
          <label htmlFor="confirmPassword" className="mb-1 inline-block text-gray-300">
            Confirm Password*
          </label>
          <input
            id="confirmPassword"
            type="password"
            placeholder="Confirm your password"
            className="mb-6 rounded-lg border bg-transparent px-3 py-2"
          />

          {/* Avatar Upload */}
          <label htmlFor="avatar" className="mb-1 inline-block text-gray-300">
            Avatar (Profile Picture)*
          </label>
          <input
            id="avatar"
            type="file"
            accept="image/*"
            onChange={handleAvatarChange}
            className="mb-4 rounded-lg border bg-transparent px-3 py-2"
          />

          {/* Cover Image */}
          <label htmlFor="coverImage" className="mb-1 inline-block text-gray-300">
            Cover Image*
          </label>
          <input
            id="coverImage"
            type="file"
            accept="image/*"
            className="mb-4 rounded-lg border bg-transparent px-3 py-2"
          />

          {/* Submit Button */}
          <button className="bg-[#ae7aff] px-4 py-3 text-black font-medium rounded-lg">
            Register Account
          </button>
        </div>
      </div>
    </>
  )
}

export default Register