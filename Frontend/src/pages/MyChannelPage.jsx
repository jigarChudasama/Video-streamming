import React, { use, useState } from 'react'
import { BtnIcon, DislikeTweet, Edit, Emoji, LikeTweet, Logout, ThreeDot } from '../components/Icons';
import { useNavigate } from 'react-router-dom';
import LogoutModel from '../components/model/LogoutModel';

const subscribe = [
    {
        name: "Code Master",
        subs: "20K",
        img: "https://images.pexels.com/photos/3532545/pexels-photo-3532545.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        isSubscribed: true,
    },
    {
        name: "React Ninja",
        subs: "40K",
        img: "https://images.pexels.com/photos/3532552/pexels-photo-3532552.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        isSubscribed: false,
    },
    {
        name: "Async Masters",
        subs: "60K",
        img: "https://images.pexels.com/photos/3532549/pexels-photo-3532549.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        isSubscribed: true,
    },
    {
        name: "Code Crafters",
        subs: "80K",
        img: "https://images.pexels.com/photos/2522659/pexels-photo-2522659.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        isSubscribed: false,
    },
    {
        name: "Tailwind Pro",
        subs: "100K",
        img: "https://images.pexels.com/photos/2519823/pexels-photo-2519823.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        isSubscribed: true,
    },
    {
        name: "Express Learner",
        subs: "120K",
        img: "https://images.pexels.com/photos/2519812/pexels-photo-2519812.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        isSubscribed: false,
    },
    {
        name: "Redux Master",
        subs: "140K",
        img: "https://images.pexels.com/photos/18264716/pexels-photo-18264716/free-photo-of-man-people-laptop-internet.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        isSubscribed: true,
    },
    {
        name: "API Builder",
        subs: "160K",
        img: "https://images.pexels.com/photos/1739942/pexels-photo-1739942.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        isSubscribed: false,
    },
    {
        name: "React Native Dev",
        subs: "180K",
        img: "https://images.pexels.com/photos/1739856/pexels-photo-1739856.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        isSubscribed: true,
    },
    {
        name: "Hook Master",
        subs: "200K",
        img: "https://images.pexels.com/photos/1144257/pexels-photo-1144257.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        isSubscribed: false,
    },
    // ... continue adding the rest the same way
];

const videos = [
    {
        id: 1,
        title: "JavaScript Fundamentals: Variables and Data Types",
        thumbnail:
            "https://images.pexels.com/photos/3561339/pexels-photo-3561339.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        duration: "20:45",
        views: "10.3k",
        time: "44 minutes ago",
    },
    {
        id: 2,
        title: "Getting Started with Express.js",
        thumbnail:
            "https://images.pexels.com/photos/2519817/pexels-photo-2519817.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        duration: "22:18",
        views: "11k",
        time: "5 hours ago",
    },
    {
        id: 3,
        title: "Building a RESTful API with Node.js and Express",
        thumbnail:
            "https://images.pexels.com/photos/1739849/pexels-photo-1739849.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        duration: "24:33",
        views: "14.5k",
        time: "7 hours ago",
    },
    {
        id: 4,
        title: "Introduction to React Native",
        thumbnail:
            "https://images.pexels.com/photos/1739854/pexels-photo-1739854.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        duration: "19:58",
        views: "10.9k",
        time: "8 hours ago",
    },
];

const playlists = [
    {
        id: 1,
        title: "React Mastery",
        thumbnail: "https://images.pexels.com/photos/3561339/pexels-photo-3561339.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        staticName: "Playlist",
        videoCount: "12",
        views: "100K",
        time: "2 hours ago",
        description: "Master the art of building dynamic user interfaces with React."
    },
    {
        id: 2,
        title: "React Mastery",
        thumbnail: "https://images.pexels.com/photos/3561339/pexels-photo-3561339.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        staticName: "Playlist",
        videoCount: "12",
        views: "100K",
        time: "2 hours ago",
        description: "Master the art of building dynamic user interfaces with React."
    },
    {
        id: 3,
        title: "React Mastery",
        thumbnail: "https://images.pexels.com/photos/3561339/pexels-photo-3561339.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        staticName: "Playlist",
        videoCount: "12",
        views: "100K",
        time: "2 hours ago",
        description: "Master the art of building dynamic user interfaces with React."
    },
    {
        id: 4,
        title: "React Mastery",
        thumbnail: "https://images.pexels.com/photos/3561339/pexels-photo-3561339.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        staticName: "Playlist",
        videoCount: "12",
        views: "100K",
        time: "2 hours ago",
        description: "Master the art of building dynamic user interfaces with React."
    }

]

const tweets = [
    {
        id: 1,
        thumbnail: "https://images.pexels.com/photos/1115816/pexels-photo-1115816.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        title: "React Patterns",
        time: "5 hours ago",
        description: "Exploring the latest features in JavaScript ES11! The language keeps evolving. 💡 #JavaScript #ES11",
        likeCount: "425",
        likeCountAlt: "424",
        disLikeCount: "87",
        disLikeCountAlt: "88"
    },
    {
        id: 2,
        thumbnail: "https://images.pexels.com/photos/1115816/pexels-photo-1115816.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        title: "React Patterns",
        time: "6 hours ago",
        description: "Embracing the benefits of TypeScript for stronger, more reliable code. 🚀 #TypeScript #Programming",
        likeCount: "425",
        likeCountAlt: "424",
        disLikeCount: "87",
        disLikeCountAlt: "88"
    },
    {
        id: 3,
        thumbnail: "https://images.pexels.com/photos/1115816/pexels-photo-1115816.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        title: "React Patterns",
        time: "7 hours ago",
        description: "Styling made easy with Tailwind CSS! Rapidly build beautiful, responsive interfaces. 🎨 #TailwindCSS #WebDev",
        likeCount: "425",
        likeCountAlt: "424",
        disLikeCount: "87",
        disLikeCountAlt: "88"
    },
    {
        id: 4,
        thumbnail: "https://images.pexels.com/photos/1115816/pexels-photo-1115816.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        title: "React Patterns",
        time: "8 hours ago",
        description: "Building dynamic user interfaces with React! The go-to library for modern web development. 🚀 #React #WebDev",
        likeCount: "425",
        likeCountAlt: "424",
        disLikeCount: "87",
        disLikeCountAlt: "88"
    },
    {
        id: 5,
        thumbnail: "https://images.pexels.com/photos/1115816/pexels-photo-1115816.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        title: "React Patterns",
        time: "9 hours ago",
        description: "Next.js makes server-side rendering a breeze! Boost your React app's performance with ease. 🚀 #Nextjs #React",
        likeCount: "425",
        likeCountAlt: "424",
        disLikeCount: "87",
        disLikeCountAlt: "88"
    },
    {
        id: 6,
        thumbnail: "https://images.pexels.com/photos/1115816/pexels-photo-1115816.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        title: "React Patterns",
        time: "5 hours ago",
        description: "Exploring the latest features in JavaScript ES11! The language keeps evolving. 💡 #JavaScript #ES11",
        likeCount: "425",
        likeCountAlt: "424",
        disLikeCount: "87",
        disLikeCountAlt: "88"
    },
    {
        id: 7,
        thumbnail: "https://images.pexels.com/photos/1115816/pexels-photo-1115816.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        title: "React Patterns",
        time: "6 hours ago",
        description: "Embracing the benefits of TypeScript for stronger, more reliable code. 🚀 #TypeScript #Programming",
        likeCount: "425",
        likeCountAlt: "424",
        disLikeCount: "87",
        disLikeCountAlt: "88"
    },
    {
        id: 8,
        thumbnail: "https://images.pexels.com/photos/1115816/pexels-photo-1115816.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        title: "React Patterns",
        time: "7 hours ago",
        description: "Styling made easy with Tailwind CSS! Rapidly build beautiful, responsive interfaces. 🎨 #TailwindCSS #WebDev",
        likeCount: "425",
        likeCountAlt: "424",
        disLikeCount: "87",
        disLikeCountAlt: "88"
    },
    {
        id: 9,
        thumbnail: "https://images.pexels.com/photos/1115816/pexels-photo-1115816.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        title: "React Patterns",
        time: "8 hours ago",
        description: "Building dynamic user interfaces with React! The go-to library for modern web development. 🚀 #React #WebDev",
        likeCount: "425",
        likeCountAlt: "424",
        disLikeCount: "87",
        disLikeCountAlt: "88"
    },
    {
        id: 10,
        thumbnail: "https://images.pexels.com/photos/1115816/pexels-photo-1115816.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        title: "React Patterns",
        time: "9 hours ago",
        description: "Next.js makes server-side rendering a breeze! Boost your React app's performance with ease. 🚀 #Nextjs #React",
        likeCount: "425",
        likeCountAlt: "424",
        disLikeCount: "87",
        disLikeCountAlt: "88"
    },
]

function MyChannelPage() {
    const [activeTab, setActiveTab] = useState("videos")
    const [editActivetab, setEditActiveTab] = useState("PersonalInformation")
    const [logoutModel, setLogoutModel] = useState(false)

    const [channels, setChannels] = useState(subscribe);
    const [edit, setEdit] = useState(false)

    const toggleSubscribe = (index) => {
        const updated = [...channels];
        updated[index].isSubscribed = !updated[index].isSubscribed;
        setChannels(updated);
    };

    const navigate = useNavigate()

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
                    {
                        edit && (
                            <div class="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
                                <input
                                    type="file"
                                    id="cover-image"
                                    class="hidden" />
                                <label
                                    for="cover-image"
                                    class="inline-block h-10 w-10 cursor-pointer rounded-lg bg-white/60 p-1 text-[#ae7aff] hover:bg-white">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke-width="1.5"
                                        stroke="currentColor"
                                        aria-hidden="true">
                                        <path
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                            d="M12 16.5V9.75m0 0l3 3m-3-3l-3 3M6.75 19.5a4.5 4.5 0 01-1.41-8.775 5.25 5.25 0 0110.233-2.33 3 3 0 013.758 3.848A3.752 3.752 0 0118 19.5H6.75z"></path>
                                    </svg>
                                </label>
                            </div>
                        )
                    }
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
                            {
                                edit && (
                                    <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
                                        <input type="file" id="profile-image" className="hidden" />
                                        <label
                                            htmlFor="profile-image"
                                            className="inline-block h-8 w-8 cursor-pointer rounded-lg bg-white/60 p-1 text-[#ae7aff] hover:bg-white"
                                        >
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                fill="none"
                                                viewBox="0 0 24 24"
                                                strokeWidth="1.5"
                                                stroke="currentColor"
                                                aria-hidden="true"
                                            >
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    d="M12 16.5V9.75m0 0l3 3m-3-3l-3 3M6.75 19.5a4.5 4.5 0 01-1.41-8.775 5.25 5.25 0 0110.233-2.33 3 3 0 013.758 3.848A3.752 3.752 0 0118 19.5H6.75z"
                                                />
                                            </svg>
                                        </label>
                                    </div>
                                )
                            }
                        </span>
                        <div className="mr-auto inline-block">
                            <h1 className="font-bold text-xl">React Patterns</h1>
                            <p className="text-sm text-gray-400">@reactpatterns</p>
                            <p className="text-sm text-gray-400">
                                600k Subscribers&nbsp;·&nbsp;10 Subscribed
                            </p>
                        </div>
                        <div className="inline-block">
                            <div className="inline-flex min-w-[145px] justify-end">
                                {/* <button className="group/btn mr-1 flex w-full items-center gap-x-2 bg-[#ae7aff] px-3 py-2 text-center font-bold text-black shadow-[5px_5px_0px_0px_#4f4e4e] transition-all duration-150 ease-in-out active:translate-x-[5px] active:translate-y-[5px] active:shadow-[0px_0px_0px_0px_#4f4e4e] sm:w-auto">
                                    <span className="inline-block w-5">
                                        <BtnIcon />
                                    </span>
                                    <span className="group-focus/btn:hidden">Subscribe</span>
                                    <span className="hidden group-focus/btn:block">Subscribed</span>
                                </button> */}
                                <div className=" flex gap-2 ">
                                    {
                                        edit && (
                                            <button
                                                onClick={() => {
                                                    setLogoutModel(true)
                                                }}
                                                className="group/btn mr-1 flex w-full items-center gap-x-2 bg-[#ae7aff] px-3 py-2 text-center font-bold text-black shadow-[5px_5px_0px_0px_#4f4e4e] transition-all duration-150 ease-in-out active:translate-x-[5px] active:translate-y-[5px] active:shadow-[0px_0px_0px_0px_#4f4e4e] sm:w-auto">
                                                <span className="inline-block w-5">
                                                    <Logout />
                                                </span>
                                                Logout
                                            </button>
                                        )
                                    }
                                    <button
                                        onClick={() => {
                                            setEdit((prev) => !prev)
                                        }}
                                        className="group/btn mr-1 flex w-full items-center gap-x-2 bg-[#ae7aff] px-3 py-2 text-center font-bold text-black shadow-[5px_5px_0px_0px_#4f4e4e] transition-all duration-150 ease-in-out active:translate-x-[5px] active:translate-y-[5px] active:shadow-[0px_0px_0px_0px_#4f4e4e] sm:w-auto">
                                        <span className="inline-block w-5">
                                            <Edit />
                                        </span>
                                        {edit ? "Edit" : "Privew"}
                                    </button>
                                </div>

                            </div>
                        </div>
                    </div>

                    {/* Tabs */}
                    {
                        edit ? (
                            <ul class="no-scrollbar sticky top-[66px] z-[2] flex flex-row gap-x-2 overflow-auto border-b-2 border-gray-400 bg-[#121212] py-2 sm:top-[82px]">
                                <li className="w-full">
                                    <button
                                        onClick={() => setEditActiveTab("PersonalInformation")}
                                        className={`w-full border-b-2 px-3 py-1.5 ${editActivetab === "PersonalInformation"
                                            ? "border-[#ae7aff] text-[#ae7aff] bg-white"
                                            : "border-transparent text-gray-400"
                                            }`}
                                    >
                                        Personal Information
                                    </button>
                                </li>
                                <li className="w-full">
                                    <button
                                        onClick={() => setEditActiveTab("ChannelInformation")}
                                        className={`w-full border-b-2 px-3 py-1.5 ${editActivetab === "ChannelInformation"
                                            ? "border-[#ae7aff] text-[#ae7aff] bg-white"
                                            : "border-transparent text-gray-400"
                                            }`}
                                    >
                                        Channel Information
                                    </button>
                                </li>
                                <li className="w-full">
                                    <button
                                        onClick={() => setEditActiveTab("ChangePassword")}
                                        className={`w-full border-b-2 px-3 py-1.5 ${editActivetab === "ChangePassword"
                                            ? "border-[#ae7aff] text-[#ae7aff] bg-white"
                                            : "border-transparent text-gray-400"
                                            }`}
                                    >
                                        Change Password
                                    </button>
                                </li>
                            </ul>

                        ) : (
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
                        )
                    }

                    {/* Tab Content */}

                    {
                        edit ? (
                            <div className="pt-4">
                                {editActivetab === "PersonalInformation" && (
                                    <div className="flex flex-wrap justify-center gap-y-4 py-4">
                                        <div className="w-full sm:w-1/2 lg:w-1/3">
                                            <h5 className="font-semibold">Personal Info</h5>
                                            <p className="text-gray-300">Update your photo and personal details.</p>
                                        </div>
                                        <div className="w-full sm:w-1/2 lg:w-2/3">
                                            <div className="rounded-lg border">
                                                <div className="flex flex-wrap gap-y-4 p-4">
                                                    <div className="w-full lg:w-1/2 lg:pr-2">
                                                        <label htmlFor="firstname" className="mb-1 inline-block">
                                                            First name
                                                        </label>
                                                        <input
                                                            type="text"
                                                            className="w-full rounded-lg border bg-transparent px-2 py-1.5"
                                                            id="firstname"
                                                            placeholder="Enter first name"
                                                            defaultValue="React"
                                                        />
                                                    </div>
                                                    <div className="w-full lg:w-1/2 lg:pl-2">
                                                        <label htmlFor="lastname" className="mb-1 inline-block">
                                                            Last name
                                                        </label>
                                                        <input
                                                            type="text"
                                                            className="w-full rounded-lg border bg-transparent px-2 py-1.5"
                                                            id="lastname"
                                                            placeholder="Enter last name"
                                                            defaultValue="Patterns"
                                                        />
                                                    </div>
                                                    <div className="w-full">
                                                        <label htmlFor="lastname" className="mb-1 inline-block">
                                                            Email address
                                                        </label>
                                                        <div className="relative">
                                                            <div className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-300">
                                                                <svg
                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                    fill="none"
                                                                    viewBox="0 0 24 24"
                                                                    strokeWidth="1.5"
                                                                    stroke="currentColor"
                                                                    aria-hidden="true"
                                                                >
                                                                    <path
                                                                        strokeLinecap="round"
                                                                        strokeLinejoin="round"
                                                                        d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
                                                                    />
                                                                </svg>
                                                            </div>
                                                            <input
                                                                type="email"
                                                                className="w-full rounded-lg border bg-transparent py-1.5 pl-10 pr-2"
                                                                id="lastname"
                                                                placeholder="Enter email address"
                                                                defaultValue="patternsreact@gmail.com"
                                                            />
                                                        </div>
                                                    </div>
                                                </div>
                                                <hr className="border border-gray-300" />
                                                <div className="flex items-center justify-end gap-4 p-4">
                                                    <button className="inline-block rounded-lg border px-3 py-1.5 hover:bg-white/10">
                                                        Cancel
                                                    </button>
                                                    <button className="inline-block bg-[#ae7aff] px-3 py-1.5 text-black">
                                                        Save changes
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                )}

                                {editActivetab === "ChannelInformation" && (
                                    <div className="flex flex-wrap justify-center gap-y-4 py-4">
                                        <div className="w-full sm:w-1/2 lg:w-1/3">
                                            <h5 className="font-semibold">Channel Info</h5>
                                            <p className="text-gray-300">Update your Channel details here.</p>
                                        </div>
                                        <div className="w-full sm:w-1/2 lg:w-2/3">
                                            <div className="rounded-lg border">
                                                <div className="flex flex-wrap gap-y-4 p-4">
                                                    <div className="w-full">
                                                        <label className="mb-1 inline-block" htmlFor="username">
                                                            Username
                                                        </label>
                                                        <div className="flex rounded-lg border">
                                                            <p className="flex shrink-0 items-center border-r border-white px-3 align-middle">
                                                                vidplay.com/
                                                            </p>
                                                            <input
                                                                type="text"
                                                                className="w-full bg-transparent px-2 py-1.5"
                                                                id="username"
                                                                placeholder="@username"
                                                                defaultValue="reactpatterns"
                                                            />
                                                        </div>
                                                    </div>
                                                    <div className="w-full">
                                                        <label className="mb-1 inline-block" htmlFor="desc">
                                                            Description
                                                        </label>
                                                        <textarea
                                                            className="w-full rounded-lg border bg-transparent px-2 py-1.5"
                                                            rows={4}
                                                            id="desc"
                                                            placeholder="Channel Description"
                                                            defaultValue={
                                                                "I'm a Product Designer based in Melbourne, Australia. I specialise in UX/UI design, brand strategy, and Webflow development."
                                                            }
                                                        />
                                                        <p className="mt-0.5 text-sm text-gray-300">275 characters left</p>
                                                    </div>
                                                    {/* <div className="flex w-full items-center gap-3">
                                                        <div className="w-full max-w-xs rounded-lg border">
                                                            <select className="w-full border-r-8 border-transparent bg-transparent py-1.5 pl-2">
                                                                <option value="light">Light</option>
                                                                <option value="regular" selected="">
                                                                    Regular
                                                                </option>
                                                                <option value="semi-bold">Semi bold</option>
                                                                <option value="bold">Bold</option>
                                                                <option value="bolder">Bolder</option>
                                                            </select>
                                                        </div>
                                                        <button className="h-6 w-6 hover:text-[#ae7aff] focus:text-[#ae7aff]">
                                                            <svg
                                                                width={11}
                                                                height={14}
                                                                viewBox="0 0 11 14"
                                                                fill="none"
                                                                xmlns="http://www.w3.org/2000/svg"
                                                            >
                                                                <path
                                                                    d="M8.6 6.79C9.57 6.12 10.25 5.02 10.25 4C10.25 1.74 8.5 0 6.25 0H0V14H7.04C9.13 14 10.75 12.3 10.75 10.21C10.75 8.69 9.89 7.39 8.6 6.79ZM3 2.5H6C6.83 2.5 7.5 3.17 7.5 4C7.5 4.83 6.83 5.5 6 5.5H3V2.5ZM6.5 11.5H3V8.5H6.5C7.33 8.5 8 9.17 8 10C8 10.83 7.33 11.5 6.5 11.5Z"
                                                                    fill="currentColor"
                                                                />
                                                            </svg>
                                                        </button>
                                                        <button className="h-6 w-6 hover:text-[#ae7aff] focus:text-[#ae7aff]">
                                                            <svg
                                                                width={12}
                                                                height={14}
                                                                viewBox="0 0 12 14"
                                                                fill="none"
                                                                xmlns="http://www.w3.org/2000/svg"
                                                            >
                                                                <path
                                                                    d="M4 0V3H6.21L2.79 11H0V14H8V11H5.79L9.21 3H12V0H4Z"
                                                                    fill="currentColor"
                                                                />
                                                            </svg>
                                                        </button>
                                                        <button className="h-6 w-6 hover:text-[#ae7aff] focus:text-[#ae7aff]">
                                                            <svg
                                                                width={20}
                                                                height={10}
                                                                viewBox="0 0 20 10"
                                                                fill="none"
                                                                xmlns="http://www.w3.org/2000/svg"
                                                            >
                                                                <path
                                                                    d="M1.9 5C1.9 3.29 3.29 1.9 5 1.9H9V0H5C2.24 0 0 2.24 0 5C0 7.76 2.24 10 5 10H9V8.1H5C3.29 8.1 1.9 6.71 1.9 5ZM6 6H14V4H6V6ZM15 0H11V1.9H15C16.71 1.9 18.1 3.29 18.1 5C18.1 6.71 16.71 8.1 15 8.1H11V10H15C17.76 10 20 7.76 20 5C20 2.24 17.76 0 15 0Z"
                                                                    fill="currentColor"
                                                                />
                                                            </svg>
                                                        </button>
                                                        <button className="h-6 w-6 hover:text-[#ae7aff] focus:text-[#ae7aff]">
                                                            <svg
                                                                xmlns="http://www.w3.org/2000/svg"
                                                                fill="none"
                                                                viewBox="0 0 24 24"
                                                                strokeWidth="1.5"
                                                                stroke="currentColor"
                                                                aria-hidden="true"
                                                            >
                                                                <path
                                                                    strokeLinecap="round"
                                                                    strokeLinejoin="round"
                                                                    d="M8.25 6.75h12M8.25 12h12m-12 5.25h12M3.75 6.75h.007v.008H3.75V6.75zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zM3.75 12h.007v.008H3.75V12zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm-.375 5.25h.007v.008H3.75v-.008zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
                                                                />
                                                            </svg>
                                                        </button>
                                                        <button className="h-6 w-6 hover:text-[#ae7aff] focus:text-[#ae7aff]">
                                                            <svg
                                                                width={19}
                                                                height={16}
                                                                viewBox="0 0 19 16"
                                                                fill="none"
                                                                xmlns="http://www.w3.org/2000/svg"
                                                            >
                                                                <path
                                                                    d="M0 13H2V13.5H1V14.5H2V15H0V16H3V12H0V13ZM1 4H2V0H0V1H1V4ZM0 7H1.8L0 9.1V10H3V9H1.2L3 6.9V6H0V7ZM5 1V3H19V1H5ZM5 15H19V13H5V15ZM5 9H19V7H5V9Z"
                                                                    fill="currentColor"
                                                                />
                                                            </svg>
                                                        </button>
                                                    </div>
                                                    <div className="w-full">
                                                        <label className="mb-1 inline-block" htmlFor="timezone">
                                                            Timezone
                                                        </label>
                                                        <div className="relative w-full rounded-lg border">
                                                            <div className="absolute left-2 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-300">
                                                                <svg
                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                    fill="none"
                                                                    viewBox="0 0 24 24"
                                                                    strokeWidth="1.5"
                                                                    stroke="currentColor"
                                                                    aria-hidden="true"
                                                                >
                                                                    <path
                                                                        strokeLinecap="round"
                                                                        strokeLinejoin="round"
                                                                        d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"
                                                                    />
                                                                </svg>
                                                            </div>
                                                            <select
                                                                id="timezone"
                                                                className="w-full border-r-8 border-transparent bg-transparent py-1.5 pl-8"
                                                            >
                                                                <option value="UTC-12:00">
                                                                    (UTC-12:00) International Date Line West
                                                                </option>
                                                                <option value="UTC-11:00">
                                                                    (UTC-11:00) Coordinated Universal Time-11
                                                                </option>
                                                                <option value="UTC-10:00">(UTC-10:00) Hawaii</option>
                                                                <option value="UTC-09:00">(UTC-09:00) Alaska</option>
                                                                <option value="UTC-08:00">
                                                                    (UTC-08:00) Pacific Time (US &amp; Canada)
                                                                </option>
                                                                <option value="UTC-07:00">
                                                                    (UTC-07:00) Mountain Time (US &amp; Canada)
                                                                </option>
                                                                <option value="UTC-06:00">
                                                                    (UTC-06:00) Central Time (US &amp; Canada)
                                                                </option>
                                                                <option value="UTC-05:00">
                                                                    (UTC-05:00) Eastern Time (US &amp; Canada)
                                                                </option>
                                                                <option value="UTC-04:00">
                                                                    (UTC-04:00) Atlantic Time (Canada)
                                                                </option>
                                                                <option value="UTC-03:30">(UTC-03:30) Newfoundland</option>
                                                                <option value="UTC-03:00">
                                                                    (UTC-03:00) Buenos Aires, Georgetown
                                                                </option>
                                                                <option value="UTC-02:00">
                                                                    (UTC-02:00) Coordinated Universal Time-02
                                                                </option>
                                                                <option value="UTC-01:00">(UTC-01:00) Azores</option>
                                                                <option value="UTC+00:00">
                                                                    (UTC+00:00) Coordinated Universal Time
                                                                </option>
                                                                <option value="UTC+01:00">
                                                                    (UTC+01:00) Central European Time
                                                                </option>
                                                                <option value="UTC+02:00">
                                                                    (UTC+02:00) Eastern European Time
                                                                </option>
                                                                <option value="UTC+03:00">
                                                                    (UTC+03:00) Moscow, St. Petersburg
                                                                </option>
                                                                <option value="UTC+03:30">(UTC+03:30) Tehran</option>
                                                                <option value="UTC+04:00">(UTC+04:00) Abu Dhabi, Muscat</option>
                                                                <option value="UTC+04:30">(UTC+04:30) Kabul</option>
                                                                <option value="UTC+05:00">(UTC+05:00) Tashkent</option>
                                                                <option value="UTC+05:30" selected="">
                                                                    (UTC+05:30) Chennai, Kolkata, Mumbai, New Delhi
                                                                </option>
                                                                <option value="UTC+05:45">(UTC+05:45) Kathmandu</option>
                                                                <option value="UTC+06:00">(UTC+06:00) Almaty, Novosibirsk</option>
                                                                <option value="UTC+06:30">(UTC+06:30) Yangon (Rangoon)</option>
                                                                <option value="UTC+07:00">
                                                                    (UTC+07:00) Bangkok, Hanoi, Jakarta
                                                                </option>
                                                                <option value="UTC+08:00">
                                                                    (UTC+08:00) Beijing, Chongqing, Hong Kong
                                                                </option>
                                                                <option value="UTC+08:45">(UTC+08:45) Eucla</option>
                                                                <option value="UTC+09:00">
                                                                    (UTC+09:00) Osaka, Sapporo, Tokyo
                                                                </option>
                                                                <option value="UTC+09:30">(UTC+09:30) Adelaide</option>
                                                                <option value="UTC+09:45">(UTC+09:45) Darwin</option>
                                                                <option value="UTC+10:00">(UTC+10:00) Brisbane</option>
                                                                <option value="UTC+10:30">(UTC+10:30) Lord Howe Island</option>
                                                                <option value="UTC+11:00">
                                                                    (UTC+11:00) Solomon Is., New Caledonia
                                                                </option>
                                                                <option value="UTC+11:30">(UTC+11:30) Norfolk Island</option>
                                                                <option value="UTC+12:00">(UTC+12:00) Fiji</option>
                                                                <option value="UTC+12:45">(UTC+12:45) Chatham Islands</option>
                                                                <option value="UTC+13:00">(UTC+13:00) Nuku'alofa</option>
                                                                <option value="UTC+14:00">(UTC+14:00) Kiritimati</option>
                                                            </select>
                                                        </div>
                                                    </div> */}
                                                </div>
                                                <hr className="border border-gray-300" />
                                                <div className="flex items-center justify-end gap-4 p-4">
                                                    <button className="inline-block rounded-lg border px-3 py-1.5 hover:bg-white/10">
                                                        Cancel
                                                    </button>
                                                    <button className="inline-block bg-[#ae7aff] px-3 py-1.5 text-black">
                                                        Save changes
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                )}

                                {editActivetab === "ChangePassword" && (
                                    <div class="flex flex-wrap justify-center gap-y-4 py-4">
                                        <div class="w-full sm:w-1/2 lg:w-1/3">
                                            <h5 class="font-semibold">Password</h5>
                                            <p class="text-gray-300">Please enter your current password to change your password.</p>
                                        </div>
                                        <div class="w-full sm:w-1/2 lg:w-2/3">
                                            <div class="rounded-lg border">
                                                <div class="flex flex-wrap gap-y-4 p-4">
                                                    <div class="w-full">
                                                        <label
                                                            class="mb-1 inline-block"
                                                            for="old-pwd">
                                                            Current password
                                                        </label>
                                                        <input
                                                            type="password"
                                                            class="w-full rounded-lg border bg-transparent px-2 py-1.5"
                                                            id="old-pwd"
                                                            placeholder="Current password" />
                                                    </div>
                                                    <div class="w-full">
                                                        <label
                                                            class="mb-1 inline-block"
                                                            for="new-pwd">
                                                            New password
                                                        </label>
                                                        <input
                                                            type="password"
                                                            class="w-full rounded-lg border bg-transparent px-2 py-1.5"
                                                            id="new-pwd"
                                                            placeholder="New password" />
                                                        <p class="mt-0.5 text-sm text-gray-300">Your new password must be more than 8 characters.</p>
                                                    </div>
                                                    <div class="w-full">
                                                        <label
                                                            class="mb-1 inline-block"
                                                            for="cnfrm-pwd">
                                                            Confirm password
                                                        </label>
                                                        <input
                                                            type="password"
                                                            class="w-full rounded-lg border bg-transparent px-2 py-1.5"
                                                            id="cnfrm-pwd"
                                                            placeholder="Confirm password" />
                                                    </div>
                                                </div>
                                                <hr class="border border-gray-300" />
                                                <div class="flex items-center justify-end gap-4 p-4">
                                                    <button class="inline-block rounded-lg border px-3 py-1.5 hover:bg-white/10">Cancel</button>
                                                    <button class="inline-block bg-[#ae7aff] px-3 py-1.5 text-black">Update Password</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                )}
                            </div>
                        ) : (
                            <div className="pt-4">
                                {activeTab === "videos" && (
                                    <>
                                        {videos.length > 0 ? (
                                            <div className="grid grid-cols-[repeat(auto-fit,_minmax(300px,_1fr))] gap-4 pt-2">
                                                {videos.map((video) => (
                                                    <div
                                                        key={video.id}
                                                        onClick={() => {
                                                            navigate("/my-channel-page/video-detail");
                                                        }}
                                                        className="w-full"
                                                    >
                                                        <div className="relative mb-2 w-full pt-[56%]">
                                                            <div className="absolute inset-0">
                                                                <img
                                                                    src={video.thumbnail}
                                                                    alt={video.title}
                                                                    className="h-full w-full"
                                                                />
                                                            </div>
                                                            <span className="absolute bottom-1 right-1 inline-block rounded bg-black px-1.5 text-sm">
                                                                {video.duration}
                                                            </span>
                                                        </div>
                                                        <h6 className="mb-1 font-semibold">{video.title}</h6>
                                                        <p className="flex text-sm text-gray-200">
                                                            {video.views}&nbsp;Views · {video.time}
                                                        </p>
                                                    </div>
                                                ))}
                                            </div>
                                        ) : (
                                            <section className="w-full pb-[70px] sm:ml-[70px] sm:pb-0 lg:ml-0">
                                                <div className="flex h-full items-center justify-center">
                                                    <div className="w-full max-w-sm text-center">
                                                        <p className="mb-3 w-full">
                                                            <span className="inline-flex rounded-full bg-[#E4D3FF] p-2 text-[#AE7AFF]">
                                                                <svg
                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                    fill="none"
                                                                    viewBox="0 0 24 24"
                                                                    strokeWidth="1.5"
                                                                    stroke="currentColor"
                                                                    aria-hidden="true"
                                                                    className="w-6"
                                                                >
                                                                    <path
                                                                        strokeLinecap="round"
                                                                        strokeLinejoin="round"
                                                                        d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.348a1.125 1.125 0 010 1.971l-11.54 6.347a1.125 1.125 0 01-1.667-.985V5.653z"
                                                                    />
                                                                </svg>
                                                            </span>
                                                        </p>
                                                        <h5 className="mb-2 font-semibold">No videos available</h5>
                                                        <p>
                                                            There are no videos here available. Please try to search something
                                                            else.
                                                        </p>
                                                    </div>
                                                </div>
                                            </section>
                                        )}
                                    </>
                                )}

                                {activeTab === "playlist" && (
                                    <>
                                        {
                                            playlists.length > 0 ? (
                                                <div className="grid gap-4 pt-2 sm:grid-cols-[repeat(auto-fit,_minmax(400px,_1fr))]">
                                                    {
                                                        playlists.map((playlist) => (
                                                            <div key={playlist.id} className="w-full" onClick={() => {
                                                                navigate("/my-channel-page/playlist-detail")
                                                            }} >
                                                                <div className="relative mb-2 w-full pt-[56%]">
                                                                    <div className="absolute inset-0">
                                                                        <img src={playlist.thumbnail} alt={playlist.title} className="h-full w-full" />
                                                                        <div className="absolute inset-x-0 bottom-0">
                                                                            <div className="relative border-t bg-white/30 p-4 text-white backdrop-blur-sm before:absolute before:inset-0 before:bg-black/40">
                                                                                <div className="relative z-[1]">
                                                                                    <p className="flex justify-between">
                                                                                        <span className="inline-block">{playlist.staticName}</span>
                                                                                        <span className="inline-block">{playlist.videoCount}&nbsp;videos</span>
                                                                                    </p>
                                                                                    <p className="text-sm text-gray-200">{playlist.videoCount} Views&nbsp;·&nbsp;{playlist.time}</p>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <h6 className="mb-1 font-semibold">{playlist.title}</h6>
                                                                <p className="flex text-sm text-gray-200">{playlist.description}</p>
                                                            </div>
                                                        ))
                                                    }
                                                </div>
                                            ) : (
                                                <div className="flex justify-center p-4">
                                                    <div className="w-full max-w-sm text-center">
                                                        <p className="mb-3 w-full">
                                                            <span className="inline-flex rounded-full bg-[#E4D3FF] p-2 text-[#AE7AFF]">
                                                                <span className="inline-block w-6">
                                                                    <svg style={{ width: '100%' }} viewBox="0 0 22 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                        <path d="M12 5L10.8845 2.76892C10.5634 2.1268 10.4029 1.80573 10.1634 1.57116C9.95158 1.36373 9.69632 1.20597 9.41607 1.10931C9.09916 1 8.74021 1 8.02229 1H4.2C3.0799 1 2.51984 1 2.09202 1.21799C1.71569 1.40973 1.40973 1.71569 1.21799 2.09202C1 2.51984 1 3.0799 1 4.2V5M1 5H16.2C17.8802 5 18.7202 5 19.362 5.32698C19.9265 5.6146 20.3854 6.07354 20.673 6.63803C21 7.27976 21 8.11984 21 9.8V14.2C21 15.8802 21 16.7202 20.673 17.362C20.3854 17.9265 19.9265 18.3854 19.362 18.673C18.7202 19 17.8802 19 16.2 19H5.8C4.11984 19 3.27976 19 2.63803 18.673C2.07354 18.3854 1.6146 17.9265 1.32698 17.362C1 16.7202 1 15.8802 1 14.2V5Z" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                                                                    </svg>
                                                                </span>
                                                            </span>
                                                        </p>
                                                        <h5 className="mb-2 font-semibold">No playlist created</h5>
                                                        <p>There are no playlist created on this channel.</p>
                                                    </div>
                                                </div>
                                            )
                                        }
                                    </>
                                )}

                                {activeTab === "tweets" && (
                                    <div>
                                        <div className="mt-2 border pb-2">
                                            <textarea className="mb-2 h-10 w-full resize-none border-none bg-transparent px-3 pt-2 outline-none" placeholder="Write a tweet" defaultValue={""} />
                                            <div className="flex items-center justify-end gap-x-3 px-3">
                                                <button className="inline-block h-5 w-5 hover:text-[#ae7aff]">
                                                    <Emoji />
                                                </button>
                                                <button className="inline-block h-5 w-5 hover:text-[#ae7aff]">
                                                    <ThreeDot />
                                                </button>
                                                <button className="bg-[#ae7aff] px-3 py-2 font-semibold text-black">Send</button>
                                            </div>
                                        </div>
                                        <div className="py-4">
                                            {
                                                tweets.length > 0 ? (
                                                    <>
                                                        {
                                                            tweets.map((tweet) => (
                                                                <div key={tweet.id} className="flex gap-3 border-b border-gray-700 py-4 last:border-b-transparent">
                                                                    <div className="h-14 w-14 shrink-0">
                                                                        <img src={tweet.thumbnail} alt={tweet.title} className="h-full w-full rounded-full" />
                                                                    </div>
                                                                    <div className="w-full">
                                                                        <h4 className="mb-1 flex items-center gap-x-2">
                                                                            <span className="font-semibold">{tweet.title}</span>
                                                                            &nbsp;
                                                                            <span className="inline-block text-sm text-gray-400">{tweet.time}</span>
                                                                        </h4>
                                                                        <p className="mb-2">{tweet.description}</p>
                                                                        <div className="flex gap-4">
                                                                            <button className="group inline-flex items-center gap-x-1 outline-none after:content-[attr(data-like-count)] focus:after:content-[attr(data-like-count-alt)]" data-like-count={tweet.likeCount} data-like-count-alt={tweet.likeCountAlt}>
                                                                                <LikeTweet />
                                                                            </button>
                                                                            <button className="group inline-flex items-center gap-x-1 outline-none after:content-[attr(data-dislike-count)] focus:after:content-[attr(data-dislike-count-alt)]" data-dislike-count={tweet.disLikeCount} data-dislike-count-alt={tweet.disLikeCountAlt}>
                                                                                <DislikeTweet />
                                                                            </button>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            ))
                                                        }
                                                    </>
                                                ) : (
                                                    <div className="flex justify-center p-4" >
                                                        <div className="w-full max-w-sm text-center">
                                                            <p className="mb-3 w-full">
                                                                <span className="inline-flex rounded-full bg-[#E4D3FF] p-2 text-[#AE7AFF]">
                                                                    <span className="inline-block w-6">
                                                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true" className="w-6">
                                                                            <path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z" />
                                                                        </svg>
                                                                    </span>
                                                                </span>
                                                            </p>
                                                            <h5 className="mb-2 font-semibold">No Tweets</h5>
                                                            <p>
                                                                This channel has yet to make a
                                                                <strong>Tweet</strong>
                                                                .
                                                            </p>
                                                        </div>
                                                    </div >
                                                )
                                            }
                                        </div>
                                    </div>


                                )}

                                {activeTab === "subscribed" && (
                                    <>
                                        {
                                            subscribe.length > 0 ? (
                                                <div className="flex flex-col gap-y-4 py-4">
                                                    {channels.map((channel, index) => (
                                                        <div
                                                            key={index}
                                                            className="flex w-full items-center justify-between"
                                                        >
                                                            <div className="flex items-center gap-x-2">
                                                                <div className="h-14 w-14 shrink-0">
                                                                    <img
                                                                        src={channel.img}
                                                                        alt={channel.name}
                                                                        className="h-full w-full rounded-full"
                                                                    />
                                                                </div>
                                                                <div className="block">
                                                                    <h6 className="font-semibold">{channel.name}</h6>
                                                                    <p className="text-sm text-gray-300">
                                                                        {channel.subs}&nbsp;Subscribers
                                                                    </p>
                                                                </div>
                                                            </div>
                                                            <div className="block">
                                                                <button
                                                                    onClick={() => toggleSubscribe(index)}
                                                                    className={`px-3 py-2 ${channel.isSubscribed
                                                                        ? "bg-[#ae7aff] text-black focus:bg-white"
                                                                        : "bg-white text-black focus:bg-[#ae7aff]"
                                                                        }`}
                                                                >
                                                                    {channel.isSubscribed ? "Subscribed" : "Subscribe"}
                                                                </button>
                                                            </div>
                                                        </div>
                                                    ))}
                                                </div>
                                            )
                                                : (
                                                    <div className="flex justify-center p-4">
                                                        <div className="w-full max-w-sm text-center">
                                                            <p className="mb-3 w-full">
                                                                <span className="inline-flex rounded-full bg-[#E4D3FF] p-2 text-[#AE7AFF]">
                                                                    <span className="inline-block w-6">
                                                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true" className="w-6">
                                                                            <path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z" />
                                                                        </svg>
                                                                    </span>
                                                                </span>
                                                            </p>
                                                            <h5 className="mb-2 font-semibold">No people subscribe</h5>
                                                            <p>
                                                                This channel has yet to
                                                                <strong>subscribe</strong>
                                                                a new channel.
                                                            </p>
                                                        </div>
                                                    </div>
                                                )
                                        }
                                    </>
                                )}
                            </div>
                        )
                    }
                </div>
                <LogoutModel logoutModel={logoutModel} setLogoutModel={setLogoutModel} />
            </section>
        </div>
    )
}

export default MyChannelPage
