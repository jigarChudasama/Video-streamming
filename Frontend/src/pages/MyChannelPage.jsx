import React, { useState } from 'react'

function MyChannelPage() {
    const [activeTab, setActiveTab] = useState("videos")

    return (
        <div>
            <section className="w-full pb-[70px] sm:ml-[70px] sm:pb-0 lg:ml-0">
                {/* Cover Photo */}
                <div className="relative min-h-[150px] w-full pt-[16.28%]">
                    <div className="absolute inset-0 overflow-hidden">
                        <img
                            src="https://images.pexels.com/photos/1092424/pexels-photo-1092424.jpeg?auto=compress"
                            alt="cover-photo"
                        />
                    </div>
                </div>

                {/* Channel Info */}
                <div className="px-4 pb-4">
                    <div className="flex flex-wrap gap-4 pb-4 pt-6">
                        <span className="relative -mt-12 inline-block h-28 w-28 shrink-0 overflow-hidden rounded-full border-2">
                            <img
                                src="https://images.pexels.com/photos/1115816/pexels-photo-1115816.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                                alt="Channel"
                                className="h-full w-full"
                            />
                        </span>
                        <div className="mr-auto inline-block">
                            <h1 className="font-bold text-xl">React Patterns</h1>
                            <p className="text-sm text-gray-400">@reactpatterns</p>
                            <p className="text-sm text-gray-400">
                                600k Subscribers&nbsp;·&nbsp;220 Subscribed
                            </p>
                        </div>
                        <div className="inline-block">
                            <div className="inline-flex min-w-[145px] justify-end">
                                <button className="group/btn mr-1 flex w-full items-center gap-x-2 bg-[#ae7aff] px-3 py-2 text-center font-bold text-black shadow-[5px_5px_0px_0px_#4f4e4e] transition-all duration-150 ease-in-out active:translate-x-[5px] active:translate-y-[5px] active:shadow-[0px_0px_0px_0px_#4f4e4e] sm:w-auto">
                                    <span className="inline-block w-5">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            strokeWidth={2}
                                            stroke="currentColor"
                                            aria-hidden="true"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                d="M19 7.5v3m0 0v3m0-3h3m-3 0h-3m-2.25-4.125a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zM4 19.235v-.11a6.375 6.375 0 0112.75 0v.109A12.318 12.318 0 0110.374 21c-2.331 0-4.512-.645-6.374-1.766z"
                                            />
                                        </svg>
                                    </span>
                                    <span className="group-focus/btn:hidden">Subscribe</span>
                                    <span className="hidden group-focus/btn:block">Subscribed</span>
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* Tabs */}
                    <ul className="no-scrollbar sticky top-[66px] z-[2] flex flex-row gap-x-2 overflow-auto border-b-2 border-gray-400 bg-[#121212] py-2 sm:top-[82px]">
                        <li className="w-full">
                            <button
                                onClick={() => setActiveTab("videos")}
                                className={`w-full border-b-2 px-3 py-1.5 ${activeTab === "videos"
                                    ? "border-[#ae7aff] text-[#ae7aff] bg-white"
                                    : "border-transparent text-gray-400"
                                    }`}
                            >
                                Videos
                            </button>
                        </li>
                        <li className="w-full">
                            <button
                                onClick={() => setActiveTab("playlist")}
                                className={`w-full border-b-2 px-3 py-1.5 ${activeTab === "playlist"
                                    ? "border-[#ae7aff] text-[#ae7aff] bg-white"
                                    : "border-transparent text-gray-400"
                                    }`}
                            >
                                Playlist
                            </button>
                        </li>
                        <li className="w-full">
                            <button
                                onClick={() => setActiveTab("tweets")}
                                className={`w-full border-b-2 px-3 py-1.5 ${activeTab === "tweets"
                                    ? "border-[#ae7aff] text-[#ae7aff] bg-white"
                                    : "border-transparent text-gray-400"
                                    }`}
                            >
                                Tweets
                            </button>
                        </li>
                        <li className="w-full">
                            <button
                                onClick={() => setActiveTab("subscribed")}
                                className={`w-full border-b-2 px-3 py-1.5 ${activeTab === "subscribed"
                                    ? "border-[#ae7aff] text-[#ae7aff] bg-white"
                                    : "border-transparent text-gray-400"
                                    }`}
                            >
                                Subscribed
                            </button>
                        </li>
                    </ul>

                    {/* Tab Content */}
                    <div className="pt-4">
                        {activeTab === "videos" && (
                            <div className="grid grid-cols-[repeat(auto-fit,_minmax(300px,_1fr))] gap-4 pt-2">
                                <div className="w-full">
                                    <div className="relative mb-2 w-full pt-[56%]">
                                        <div className="absolute inset-0">
                                            <img src="https://images.pexels.com/photos/3561339/pexels-photo-3561339.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="JavaScript Fundamentals: Variables and Data Types" className="h-full w-full" />
                                        </div>
                                        <span className="absolute bottom-1 right-1 inline-block rounded bg-black px-1.5 text-sm">20:45</span>
                                    </div>
                                    <h6 className="mb-1 font-semibold">JavaScript Fundamentals: Variables and Data Types</h6>
                                    <p className="flex text-sm text-gray-200">10.3k&nbsp;Views · 44 minutes ago</p>
                                </div>
                                <div className="w-full">
                                    <div className="relative mb-2 w-full pt-[56%]">
                                        <div className="absolute inset-0">
                                            <img src="https://images.pexels.com/photos/2519817/pexels-photo-2519817.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Getting Started with Express.js" className="h-full w-full" />
                                        </div>
                                        <span className="absolute bottom-1 right-1 inline-block rounded bg-black px-1.5 text-sm">22:18</span>
                                    </div>
                                    <h6 className="mb-1 font-semibold">Getting Started with Express.js</h6>
                                    <p className="flex text-sm text-gray-200">11.k&nbsp;Views · 5 hours ago</p>
                                </div>
                                <div className="w-full">
                                    <div className="relative mb-2 w-full pt-[56%]">
                                        <div className="absolute inset-0">
                                            <img src="https://images.pexels.com/photos/1739849/pexels-photo-1739849.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Building a RESTful API with Node.js and Express" className="h-full w-full" />
                                        </div>
                                        <span className="absolute bottom-1 right-1 inline-block rounded bg-black px-1.5 text-sm">24:33</span>
                                    </div>
                                    <h6 className="mb-1 font-semibold">Building a RESTful API with Node.js and Express</h6>
                                    <p className="flex text-sm text-gray-200">14.5k&nbsp;Views · 7 hours ago</p>
                                </div>
                                <div className="w-full">
                                    <div className="relative mb-2 w-full pt-[56%]">
                                        <div className="absolute inset-0">
                                            <img src="https://images.pexels.com/photos/1739854/pexels-photo-1739854.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Introduction to React Native" className="h-full w-full" />
                                        </div>
                                        <span className="absolute bottom-1 right-1 inline-block rounded bg-black px-1.5 text-sm">19:58</span>
                                    </div>
                                    <h6 className="mb-1 font-semibold">Introduction to React Native</h6>
                                    <p className="flex text-sm text-gray-200">10.9k&nbsp;Views · 8 hours ago</p>
                                </div>
                            </div>
                        )}

                        {activeTab === "playlist" && (
                            <div className="grid gap-4 pt-2 sm:grid-cols-[repeat(auto-fit,_minmax(400px,_1fr))]">
                                <div className="w-full">
                                    <div className="relative mb-2 w-full pt-[56%]">
                                        <div className="absolute inset-0">
                                            <img src="https://images.pexels.com/photos/3561339/pexels-photo-3561339.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="React Mastery" className="h-full w-full" />
                                            <div className="absolute inset-x-0 bottom-0">
                                                <div className="relative border-t bg-white/30 p-4 text-white backdrop-blur-sm before:absolute before:inset-0 before:bg-black/40">
                                                    <div className="relative z-[1]">
                                                        <p className="flex justify-between">
                                                            <span className="inline-block">Playlist</span>
                                                            <span className="inline-block">12&nbsp;videos</span>
                                                        </p>
                                                        <p className="text-sm text-gray-200">100K Views&nbsp;·&nbsp;2 hours ago</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <h6 className="mb-1 font-semibold">React Mastery</h6>
                                    <p className="flex text-sm text-gray-200">Master the art of building dynamic user interfaces with React.</p>
                                </div>
                                <div className="w-full">
                                    <div className="relative mb-2 w-full pt-[56%]">
                                        <div className="absolute inset-0">
                                            <img src="https://images.pexels.com/photos/3561339/pexels-photo-3561339.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="React Mastery" className="h-full w-full" />
                                            <div className="absolute inset-x-0 bottom-0">
                                                <div className="relative border-t bg-white/30 p-4 text-white backdrop-blur-sm before:absolute before:inset-0 before:bg-black/40">
                                                    <div className="relative z-[1]">
                                                        <p className="flex justify-between">
                                                            <span className="inline-block">Playlist</span>
                                                            <span className="inline-block">12&nbsp;videos</span>
                                                        </p>
                                                        <p className="text-sm text-gray-200">100K Views&nbsp;·&nbsp;2 hours ago</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <h6 className="mb-1 font-semibold">React Mastery</h6>
                                    <p className="flex text-sm text-gray-200">Master the art of building dynamic user interfaces with React.</p>
                                </div>
                                <div className="w-full">
                                    <div className="relative mb-2 w-full pt-[56%]">
                                        <div className="absolute inset-0">
                                            <img src="https://images.pexels.com/photos/3561339/pexels-photo-3561339.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="React Mastery" className="h-full w-full" />
                                            <div className="absolute inset-x-0 bottom-0">
                                                <div className="relative border-t bg-white/30 p-4 text-white backdrop-blur-sm before:absolute before:inset-0 before:bg-black/40">
                                                    <div className="relative z-[1]">
                                                        <p className="flex justify-between">
                                                            <span className="inline-block">Playlist</span>
                                                            <span className="inline-block">12&nbsp;videos</span>
                                                        </p>
                                                        <p className="text-sm text-gray-200">100K Views&nbsp;·&nbsp;2 hours ago</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <h6 className="mb-1 font-semibold">React Mastery</h6>
                                    <p className="flex text-sm text-gray-200">Master the art of building dynamic user interfaces with React.</p>
                                </div>
                                <div className="w-full">
                                    <div className="relative mb-2 w-full pt-[56%]">
                                        <div className="absolute inset-0">
                                            <img src="https://images.pexels.com/photos/3561339/pexels-photo-3561339.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="React Mastery" className="h-full w-full" />
                                            <div className="absolute inset-x-0 bottom-0">
                                                <div className="relative border-t bg-white/30 p-4 text-white backdrop-blur-sm before:absolute before:inset-0 before:bg-black/40">
                                                    <div className="relative z-[1]">
                                                        <p className="flex justify-between">
                                                            <span className="inline-block">Playlist</span>
                                                            <span className="inline-block">12&nbsp;videos</span>
                                                        </p>
                                                        <p className="text-sm text-gray-200">100K Views&nbsp;·&nbsp;2 hours ago</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <h6 className="mb-1 font-semibold">React Mastery</h6>
                                    <p className="flex text-sm text-gray-200">Master the art of building dynamic user interfaces with React.</p>
                                </div>
                            </div>

                        )}

                        {activeTab === "tweets" && (
                            <div className="text-white">
                                <h2 className="text-lg font-bold">Tweets</h2>
                                <p>Latest tweets will appear here...</p>
                            </div>
                        )}

                        {activeTab === "subscribed" && (
                            <div className="text-white">
                                <h2 className="text-lg font-bold">Subscribed Channels</h2>
                                <p>List of subscribed channels...</p>
                            </div>
                        )}
                    </div>
                </div>
            </section>
        </div>
    )
}

export default MyChannelPage
