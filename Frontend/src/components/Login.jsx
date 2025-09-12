import { useState } from "react"
import { Logo } from "./Icons"
import { EMAIL_REGEX } from "../utils/constent"
import axios from "axios"
import { ROOT_URL } from "../utils/rootURL"
import { useNavigate } from 'react-router-dom';
import { setCookie } from "../utils/cookie"

function Login() {

  const navigate = useNavigate()
  const [showPassword, setShowPassword] = useState(false)
  const [fromData, setFromData] = useState({
    email: '',
    password: ''
  })
  const [validation, setValidation] = useState({
    email: false,
    password: false
  })
  const [loading, setLoading] = useState(false)

  const handleChange = e => {
    const { name, value } = e.target;

    setFromData(prev => ({ ...prev, [name]: value }))
    setValidation(prev => ({ ...prev, [name]: false }))
  }
  const checkValidation = () => {
    if (!fromData.email.trim() || !EMAIL_REGEX.test(fromData.email)) {
      setValidation(prev => ({ ...prev, email: true }))
      return
    }
    if (!fromData.password || fromData.password < 8) {
      setValidation(prev => ({ ...prev, password: true }))
      return
    }

    onsubmit()

  }

  const onsubmit = async () => {
    if (loading) return

    try {
      setLoading(true)
      const res = await axios.post(`${ROOT_URL}/users/login`, {
        ...fromData
      })
      if (res.data?.success) {
        setCookie("accessToken", res.data.data.accessToken);
        setCookie("refreshToken", res.data.data.refreshToken);
        navigate('/')
      }
    } catch (error) {
      console.error("❌ login failed:", error.response?.data || error.message);
    }
    finally {
      setLoading(false)
    }
  }

  return (
    <>
      <div className=" overflow-auto bg-[#121212] text-white" style={{ height: "calc(100vh - 82.02px)" }} >
        <div className="mx-auto my-8 flex w-full max-w-sm flex-col px-4  ">

          {/* Logo */}
          <div className="mx-auto inline-block w-16 mb-6">
            <Logo />
          </div>
          {/* Title */}
          <div className="mb-6 w-full text-center text-2xl font-semibold uppercase">
            Log In
          </div>

          {/* Email */}
          <label htmlFor="email" className="mb-1 inline-block text-gray-300">
            Email*
          </label>
          <input
            id="email"
            type="email"
            name="email"
            value={fromData.email}
            onChange={handleChange}
            placeholder="Enter your email"
            className="mb-4 rounded-lg border bg-transparent px-3 py-2"
          />
          {validation.email && (
            fromData.email ? (
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
              value={fromData.password}
              onChange={handleChange}
              placeholder="Enter your password"
              className="bg-transparent password "
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
          {
            validation.password && (
              fromData.password ? (
                <span className='error-message'>Invalid Password</span>
              ) : (
                <span className='error-message'>Password is required</span>
              )
            )
          }

          {/* Submit Button */}
          <button onClick={checkValidation} disabled={loading} className="bg-[#ae7aff] px-4 py-3 text-black font-medium rounded-lg">
            Login Account
          </button>
        </div>
      </div>
    </>
  )
}

export default Login