import React from 'react'
import { Collections, Content, History, Home, Like, Settings, Subscribers, Support } from '../components/Icons'
import { Link, useLocation, useNavigate } from 'react-router-dom'

function Sidebar() {
    const navigate = useNavigate()
    const location = useLocation()

    // helper: check if route is active
    const isActive = (path) => location.pathname === path

    return (
        <div>
            <aside className="group fixed inset-x-0 bottom-0 z-40 w-full shrink-0 border-t border-white bg-[#121212] px-2 py-2 sm:absolute sm:inset-y-0 sm:max-w-[70px] sm:border-r sm:border-t-0 sm:py-6 sm:hover:min-w-[250px] lg:sticky lg:min-w-[250px]">
                <ul className="flex justify-around gap-y-2 sm:sticky sm:top-[106px] sm:min-h-[calc(100vh-130px)] sm:flex-col">

                    {/* Home */}
                    <li>
                        <Link
                            to="/"
                            className={`flex flex-col items-center justify-center py-1 sm:w-full sm:flex-row sm:border sm:p-1.5 sm:group-hover:justify-start sm:group-hover:px-4 lg:justify-start lg:px-4
                ${isActive("/") ? "bg-[#ae7aff] text-black" : "hover:bg-[#ae7aff] hover:text-black"}`}
                        >
                            <span className="inline-block w-5 shrink-0 sm:group-hover:mr-4 lg:mr-4">
                                <Home />
                            </span>
                            <span className="block sm:hidden sm:group-hover:inline lg:inline">Home</span>
                        </Link>
                    </li>

                    {/* Liked Videos */}
                    <li className="hidden sm:block">
                        <button
                            onClick={() => navigate('/liked-video-page')}
                            className={`flex flex-col items-center justify-center py-1 sm:w-full sm:flex-row sm:border sm:p-1.5 sm:group-hover:justify-start sm:group-hover:px-4 lg:justify-start lg:px-4
                ${isActive("/liked-video-page") ? "bg-[#ae7aff] text-black" : "hover:bg-[#ae7aff] hover:text-black"}`}
                        >
                            <span className="inline-block w-5 shrink-0 sm:group-hover:mr-4 lg:mr-4">
                                <Like />
                            </span>
                            <span className="block sm:hidden sm:group-hover:inline lg:inline">Liked Videos</span>
                        </button>
                    </li>

                    {/* History */}
                    <li>
                        <button
                            onClick={() => navigate('/video-history-page')}
                            className={`flex flex-col items-center justify-center py-1 sm:w-full sm:flex-row sm:border sm:p-1.5 sm:group-hover:justify-start sm:group-hover:px-4 lg:justify-start lg:px-4
                ${isActive("/video-history-page") ? "bg-[#ae7aff] text-black" : "hover:bg-[#ae7aff] hover:text-black"}`}
                        >
                            <span className="inline-block w-5 shrink-0 sm:group-hover:mr-4 lg:mr-4">
                                <History />
                            </span>
                            <span className="block sm:hidden sm:group-hover:inline lg:inline">History</span>
                        </button>
                    </li>

                    {/* My Content */}
                    <li className="hidden sm:block">
                        <button
                            onClick={() => navigate('/my-content-page')}
                            className={`flex flex-col items-center justify-center py-1 sm:w-full sm:flex-row sm:border sm:p-1.5 sm:group-hover:justify-start sm:group-hover:px-4 lg:justify-start lg:px-4
                ${isActive("/my-content-page") ? "bg-[#ae7aff] text-black" : "hover:bg-[#ae7aff] hover:text-black"}`}
                        >
                            <span className="inline-block w-5 shrink-0 sm:group-hover:mr-4 lg:mr-4">
                                <Content />
                            </span>
                            <span className="block sm:hidden sm:group-hover:inline lg:inline">My Content</span>
                        </button>
                    </li>

                    {/* Support */}
                    <li className="hidden sm:block mt-auto">
                        <button
                            className={`flex flex-col items-center justify-center py-1 sm:w-full sm:flex-row sm:border sm:p-1.5 sm:group-hover:justify-start sm:group-hover:px-4 lg:justify-start lg:px-4
                ${isActive("/support") ? "bg-[#ae7aff] text-black" : "hover:bg-[#ae7aff] hover:text-black"}`}
                        >
                            <span className="inline-block w-5 shrink-0 sm:group-hover:mr-4 lg:mr-4">
                                <Support />
                            </span>
                            <span className="block sm:hidden sm:group-hover:inline lg:inline">Support</span>
                        </button>
                    </li>

                    {/* Settings */}
                    <li className="hidden sm:block">
                        <button
                            className={`flex flex-col items-center justify-center py-1 sm:w-full sm:flex-row sm:border sm:p-1.5 sm:group-hover:justify-start sm:group-hover:px-4 lg:justify-start lg:px-4
                ${isActive("/settings") ? "bg-[#ae7aff] text-black" : "hover:bg-[#ae7aff] hover:text-black"}`}
                        >
                            <span className="inline-block w-5 shrink-0 sm:group-hover:mr-4 lg:mr-4">
                                <Settings />
                            </span>
                            <span className="block sm:hidden sm:group-hover:inline lg:inline">Settings</span>
                        </button>
                    </li>
                </ul>
            </aside>
        </div>
    )
}

export default Sidebar
