import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { Close, Logo, Manu } from './Icons'

function AuthHeader() {
    const navigate = useNavigate()
    const location = useLocation()

    return (
        <div>
            <header className="sticky inset-x-0 top-0 z-50 w-full border-b border-white bg-[#121212] px-4">
                <nav className="mx-auto flex  max-w-7xl items-center py-2">
                    <div className="mr-4 w-12 shrink-0 sm:w-16">
                        <Logo />
                    </div>

                    <div className="mb-8 justify-end mt-auto flex w-full flex-wrap gap-4 px-4 sm:mb-0 sm:mt-0 sm:items-center sm:px-0">
                        <button
                            onClick={() => {
                                if (location.pathname === "/register-page") navigate('/login-page')
                                else navigate('/register-page')
                            }}
                            className="mr-1 w-full bg-[#ae7aff] px-3 py-2 text-center font-bold text-black shadow-[5px_5px_0px_0px_#4f4e4e] transition-all duration-150 ease-in-out active:translate-x-[5px] active:translate-y-[5px] active:shadow-[0px_0px_0px_0px_#4f4e4e] sm:w-auto">
                            {location.pathname === "/register-page" ? "Log in" : "Sign up"}
                        </button>
                    </div>
                </nav>
            </header>
        </div>
    )
}

export default AuthHeader