import React from 'react'
import { useNavigate } from 'react-router-dom'
import { Close, Logo, Manu } from './Icons'

function AuthHeader() {
    const navigate = useNavigate()
    return (
        <div>
            <header className="sticky inset-x-0 top-0 z-50 w-full border-b border-white bg-[#121212] px-4">
                <nav className="mx-auto flex max-w-7xl items-center py-2">
                    <div className="mr-4 w-12 shrink-0 sm:w-16">
                        <Logo />
                    </div>


                    <button className="group peer ml-4 flex w-6 shrink-0 flex-wrap gap-y-1.5 sm:hidden">
                        <Manu />
                    </button>
                    <div className="fixed inset-y-0 right-0 flex w-full max-w-xs shrink-0 translate-x-full flex-col border-l border-white bg-[#121212] duration-200 hover:translate-x-0 peer-focus:translate-x-0 sm:static sm:ml-4 sm:w-auto sm:translate-x-0 sm:border-none">
                        <div className="relative flex w-full items-center justify-between border-b border-white px-4 py-2 sm:hidden">
                            <button className="inline-block w-8">
                                <Close />
                            </button>
                        </div>

                        <div className="mb-8 mt-auto flex w-full flex-wrap gap-4 px-4 sm:mb-0 sm:mt-0 sm:items-center sm:px-0">
                            <button
                            onClick={()=>{
                                navigate('/login-page')
                            }} 
                            className="w-full bg-[#383737] px-3 py-2 hover:bg-[#4f4e4e] sm:w-auto sm:bg-transparent">Log in</button>
                            <button 
                             onClick={()=>{
                                navigate('/register-page')
                            }} 
                            className="mr-1 w-full bg-[#ae7aff] px-3 py-2 text-center font-bold text-black shadow-[5px_5px_0px_0px_#4f4e4e] transition-all duration-150 ease-in-out active:translate-x-[5px] active:translate-y-[5px] active:shadow-[0px_0px_0px_0px_#4f4e4e] sm:w-auto">
                                Sign up
                            </button>
                        </div>

                    </div>
                </nav>
            </header>
        </div>
    )
}

export default AuthHeader