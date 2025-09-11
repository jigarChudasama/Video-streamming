import { Logo } from "./Icons"

function Login() {
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

          {/* Submit Button */}
          <button className="bg-[#ae7aff] px-4 py-3 text-black font-medium rounded-lg">
            Login Account
          </button>
        </div>
      </div>
    </>
  )
}

export default Login