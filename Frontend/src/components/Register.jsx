import React, { useState } from 'react'
import { Logo } from './Icons';
import axios from "axios";
import { EMAIL_REGEX, FULLNAME_REGEX, SPACE_REGEX } from '../utils/constent';
import './componentCss.css'
import { ROOT_URL } from '../utils/rootURL';
import { setCookie } from '../utils/cookie';

function Register() {
  const [avatarPreview, setAvatarPreview] = useState(null);
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState({
    password: false,
    confirmPassword: false
  });
  const [token, setToken] = useState('')

  const [formData, setFromData] = useState({
    fullname: '',
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
    avatar: null,
    coverImage: null
  });

  const [validations, setvalidations] = useState({
    fullname: false,
    username: false,
    email: false,
    password: false,
    confirmPassword: false,
    avatar: false
  });

  const handleAvatarChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setAvatarPreview(URL.createObjectURL(file));
      setFromData(prev => ({ ...prev, avatar: file }));
      setvalidations(prev => ({ ...prev, avatar: false }));
    }
  };

  const handleCoverImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setFromData(prev => ({ ...prev, coverImage: file }));
    }
  };

  const handleChange = e => {
    const { name, value } = e.target;

    if (name === 'fullname' && !FULLNAME_REGEX.test(value)) {
      return;
    }

    if (name === 'username' && !SPACE_REGEX.test(value)) {
      return;
    }

    setFromData(prev => ({ ...prev, [name]: value }));
    setvalidations(prev => ({ ...prev, [name]: false }));
  };

  const checkValidation = () => {
    if (!formData.fullname.trim()) {
      setvalidations(prev => ({ ...prev, fullname: true }));
      return;
    }
    if (!formData.username.trim()) {
      setvalidations(prev => ({ ...prev, username: true }));
      return;
    }
    if (!formData.email.trim() || !EMAIL_REGEX.test(formData.email)) {
      setvalidations(prev => ({ ...prev, email: true }));
      return;
    }
    if (!formData.password || formData.password.length < 8) {
      setvalidations(prev => ({ ...prev, password: true }));
      return;
    }
    if (!formData.confirmPassword || formData.password !== formData.confirmPassword) {
      setvalidations(prev => ({ ...prev, confirmPassword: true }));
      return;
    }
    if (!formData.avatar) {
      setvalidations(prev => ({ ...prev, avatar: true }));
      return;
    }
    onSubmit();
  };

  const onSubmit = async () => {
    console.log("Form submitted ✅", formData);
    if (loading) return;

    try {
      setLoading(true);

      // build FormData for file upload
      const formDataToSend = new FormData();
      formDataToSend.append("fullname", formData.fullname);
      formDataToSend.append("username", formData.username);
      formDataToSend.append("email", formData.email);
      formDataToSend.append("password", formData.password);
      if (formData.avatar) {
        formDataToSend.append("avatar", formData.avatar);
      }
      if (formData.coverImage) {
        formDataToSend.append("coverImage", formData.coverImage);
      }

      const res = await axios.post(`${ROOT_URL}/users/register`, formDataToSend, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      if (res.data?.success) {
        setCookie("token", res.data.data.accessToken)
        setToken(res.data.accessToken)
        setFromData(prev => ({
          ...prev,
          fullname: '', 
          username: '',
          email: '',
          password: '',
          confirmPassword: '',
          avatar: '',
          coverImage: ''
        }))
      }

      console.log("✅ User registered:", res.data);
    } catch (error) {
      console.error("❌ Registration failed:", error.response?.data || error.message);
    } finally {
      setLoading(false);
    }
  };


  return (
    <>
      <div className="overflow-y-auto bg-[#121212] text-white" style={{ height: "calc(100vh - 82.02px)" }} >
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
              <div className="mx-auto mb-6">
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
            name='fullname'
            value={formData.fullname}
            onChange={handleChange}
            placeholder="Enter your full name"
            className="mb-4 rounded-lg border bg-transparent px-3 py-2"
          />
          {validations.fullname && <span className='error-message'>Fullname is required</span>}

          {/* Username */}
          <label htmlFor="username" className="mb-1 inline-block text-gray-300">
            Username*
          </label>
          <input
            id="username"
            type="text"
            name='username'
            value={formData.username}
            onChange={handleChange}
            placeholder="Enter your username"
            className="mb-4 rounded-lg border bg-transparent px-3 py-2"
          />
          {validations.username && <span className='error-message'>Username is required</span>}

          {/* Email */}
          <label htmlFor="email" className="mb-1 inline-block text-gray-300">
            Email*
          </label>
          <input
            id="email"
            type="email"
            name='email'
            value={formData.email}
            onChange={handleChange}
            placeholder="Enter your email"
            className="mb-4 rounded-lg border bg-transparent px-3 py-2"
          />
          {validations.email && (
            formData.email ? (
              <span className='error-message'>Invalid email</span>
            ) : (
              <span className='error-message'>Email is required</span>
            )
          )}

          {/* Password */}
          <label htmlFor="password" className="mb-1 inline-block text-gray-300">
            Password*
          </label>
          <div className='border rounded-lg flex justify-between h-[42px] px-3 py-2 mb-4'>
            <input
              id="password"
              type={showPassword.password ? 'text' : 'password'}
              name='password'
              value={formData.password}
              onChange={handleChange}
              placeholder="Enter your password"
              className="bg-transparent"
            />
            <img
              src={showPassword.password ? '/images/eye-off-line.svg' : '/images/eye.svg'}
              height={20}
              width={20}
              alt='toggle-password'
              onClick={() => setShowPassword(prev => ({ ...prev, password: !prev.password }))}
              style={{ cursor: 'pointer' }}
            />
          </div>
          {validations.password && (
            formData.password ? (
              <span className='error-message'>Password must be at least 8 characters</span>
            ) : (
              <span className='error-message'>Password is required</span>
            )
          )}

          {/* Confirm Password */}
          <label htmlFor="confirmPassword" className="mb-1 inline-block text-gray-300">
            Confirm Password*
          </label>
          <div className='border rounded-lg flex justify-between h-[42px] px-3 py-2 mb-4'>
            <input
              id="confirmPassword"
              type={showPassword.confirmPassword ? 'text' : 'password'}
              name='confirmPassword'
              value={formData.confirmPassword}
              onChange={handleChange}
              placeholder="Confirm your password"
              className="bg-transparent"
            />
            <img
              src={showPassword.confirmPassword ? '/images/eye-off-line.svg' : '/images/eye.svg'}
              height={20}
              width={20}
              alt='toggle-password'
              onClick={() => setShowPassword(prev => ({ ...prev, confirmPassword: !prev.confirmPassword }))}
              style={{ cursor: 'pointer' }}
            />
          </div>
          {validations.confirmPassword && (
            formData.confirmPassword ? (
              <span className='error-message'>Passwords do not match</span>
            ) : (
              <span className='error-message'>Confirm password is required</span>
            )
          )}

          {/* Avatar Upload */}
          <label htmlFor="avatar" className="mb-1 inline-block text-gray-300">
            Avatar (Profile Picture)*
          </label>
          <input
            id="avatar"
            type="file"
            name='avatar'
            accept="image/*"
            onChange={handleAvatarChange}
            className="mb-4 rounded-lg border bg-transparent px-3 py-2"
          />
          {validations.avatar && <span className='error-message'>Avatar is required</span>}

          {/* Cover Image */}
          <label htmlFor="coverImage" className="mb-1 inline-block text-gray-300">
            Cover Image
          </label>
          <input
            id="coverImage"
            type="file"
            name='coverImage'
            accept="image/*"
            onChange={handleCoverImageChange}
            className="mb-4 rounded-lg border bg-transparent px-3 py-2"
          />

          {/* Submit Button */}
          <button
            onClick={checkValidation}
            className="bg-[#ae7aff] px-4 py-3 text-black font-medium rounded-lg"
          >
            Register Account
          </button>
        </div>
      </div>
    </>
  )
}

export default Register