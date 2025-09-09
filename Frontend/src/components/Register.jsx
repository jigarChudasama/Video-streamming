import React, { useState } from 'react'

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
            <svg
              style={{ width: '100%' }}
              viewBox="0 0 63 64"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M47.25 47.458C55.9485 38.7595 55.9485 24.6565 47.25 15.958C38.5515 7.25952 24.4485 7.25952 15.75 15.958C7.05151 24.6565 7.05151 38.7595 15.75 47.458C24.4485 56.1565 38.5515 56.1565 47.25 47.458Z"
                stroke="#E9FCFF"
                strokeWidth="1.38962"
                strokeMiterlimit={10}
              />
              <path
                d="M10.5366 47.7971V17.5057C10.5366 16.9599 11.1511 16.6391 11.599 16.9495L33.4166 32.0952C33.8041 32.3639 33.8041 32.9368 33.4166 33.2076L11.599 48.3533C11.1511 48.6657 10.5366 48.3429 10.5366 47.7971Z"
                stroke="url(#paint0_linear_53_10115)"
                strokeWidth="6.99574"
                strokeMiterlimit={10}
                strokeLinecap="round"
              />
              <defs>
                <linearGradient
                  id="paint0_linear_53_10115"
                  x1="2.23416"
                  y1="20.3361"
                  x2="26.863"
                  y2="44.9649"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#007EF8" />
                  <stop offset={1} stopColor="#FF4A9A" />
                </linearGradient>
              </defs>
            </svg>
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