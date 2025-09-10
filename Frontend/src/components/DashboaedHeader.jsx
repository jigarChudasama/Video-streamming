import React from 'react'
import { Close, Content, Like, Logo, Manu, Search, SearchBig, Settings, Support } from './Icons'
import { useNavigate } from 'react-router-dom'

function DashboaedHeader() {
    const navigate = useNavigate()
    return (
        <div>
            <header className="sticky inset-x-0 top-0 z-50 w-full border-b border-white bg-[#121212] px-4">
                <nav className="mx-auto flex max-w-7xl items-center py-2">
                    <div className="mr-4 w-12 shrink-0 sm:w-16">
                        <Logo />
                    </div>
                    <div className="relative mx-auto hidden w-full max-w-md overflow-hidden sm:block">
                        <input className="w-full border bg-transparent py-1 pl-8 pr-3 placeholder-white outline-none sm:py-2" placeholder="Search" />
                        <span className="absolute left-2.5 top-1/2 inline-block -translate-y-1/2">
                            <Search />
                        </span>
                    </div>
                    <button className="ml-auto sm:hidden">
                        <SearchBig />
                    </button>
                    <button className="group peer ml-4 flex w-6 shrink-0 flex-wrap gap-y-1.5 sm:hidden">
                        <Manu />
                    </button>
                    <div className="fixed inset-y-0 right-0 flex w-full max-w-xs shrink-0 translate-x-full flex-col border-l border-white bg-[#121212] duration-200 hover:translate-x-0 peer-focus:translate-x-0 sm:static sm:ml-4 sm:w-auto sm:translate-x-0 sm:border-none">
                        <div className="relative flex w-full items-center justify-between border-b border-white px-4 py-2 sm:hidden">
                            <span className="inline-block w-12">
                                <Logo />
                            </span>
                            <button className="inline-block w-8">
                                <Close />
                            </button>
                        </div>
                        <ul className="my-4 flex w-full flex-wrap gap-2 px-4 sm:hidden">
                            <li className="w-full">
                                <button
                                    onClick={() => {
                                        navigate('/liked-video-page')
                                    }}
                                    className="flex w-full items-center justify-start gap-x-4 border border-white px-4 py-1.5 text-left hover:bg-[#ae7aff] hover:text-black focus:border-[#ae7aff] focus:bg-[#ae7aff] focus:text-black">
                                    <span className="inline-block w-full max-w-[20px] group-hover:mr-4 lg:mr-4">
                                        <Like />
                                    </span>
                                    <span>Liked Videos</span>
                                </button>
                            </li>
                            <li className="w-full">
                                <button className="flex w-full items-center justify-start gap-x-4 border border-white px-4 py-1.5 text-left hover:bg-[#ae7aff] hover:text-black focus:border-[#ae7aff] focus:bg-[#ae7aff] focus:text-black">
                                    <span className="inline-block w-full max-w-[20px] group-hover:mr-4 lg:mr-4">
                                        <Content />
                                    </span>
                                    <span>My Content</span>
                                </button>
                            </li>
                            <li className="w-full">
                                <button className="flex w-full items-center justify-start gap-x-4 border border-white px-4 py-1.5 text-left hover:bg-[#ae7aff] hover:text-black focus:border-[#ae7aff] focus:bg-[#ae7aff] focus:text-black">
                                    <span className="inline-block w-full max-w-[20px] group-hover:mr-4 lg:mr-4">
                                        <Support />
                                    </span>
                                    <span>Support</span>
                                </button>
                            </li>
                            <li className="w-full">
                                <button className="flex w-full items-center justify-start gap-x-4 border border-white px-4 py-1.5 text-left hover:bg-[#ae7aff] hover:text-black focus:border-[#ae7aff] focus:bg-[#ae7aff] focus:text-black">
                                    <span className="inline-block w-full max-w-[20px] group-hover:mr-4 lg:mr-4">
                                        <Settings />
                                    </span>
                                    <span>Settings</span>
                                </button>
                            </li>
                        </ul>
                        <div className="mb-8 mt-auto px-4 sm:mb-0 sm:mt-0 sm:px-0">
                            <button
                             onClick={()=>{
                                navigate('/my-channel-page')
                             }}
                             className="flex w-full gap-4 text-left sm:items-center">
                                <img src="https://images.pexels.com/photos/1115816/pexels-photo-1115816.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="React-Patterns" className="h-16 w-16 shrink-0 rounded-full sm:h-12 sm:w-12" />
                                
                                <div className="w-full pt-2 sm:hidden">
                                    <h6 className="font-semibold">React Patterns</h6>
                                    <p className="text-sm text-gray-300">@reactpatterns</p>
                                </div>
                            </button>
                        </div>
                    </div>
                </nav>
            </header>

        </div>
    )
}

export default DashboaedHeader