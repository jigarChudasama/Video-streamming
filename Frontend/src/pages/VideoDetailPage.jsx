import React from 'react'
import { Correct, DislikeTweet, LikeTweet, Save } from '../components/Icons'

const Comments = [
    {
        id: 1,
        avatar:
            "https://images.pexels.com/photos/18148932/pexels-photo-18148932/free-photo-of-woman-reading-book-on-a-bench.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        fullname: "Sarah Johnson",
        username: "sarahjv",
        time: "17 hour ago",
        content:
            "This series is exactly what I've been looking for! Excited to dive into these advanced React patterns. Thanks for putting this together!"
    },
    {
        id: 2,
        avatar:
            "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        fullname: "Michael Smith",
        username: "mikes_dev",
        time: "2 days ago",
        content:
            "Really helpful breakdown. The examples make it so much easier to understand. Great job!"
    },
    {
        id: 3,
        avatar:
            "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        fullname: "Emily Davis",
        username: "emilyd",
        time: "5 hours ago",
        content:
            "Loved the way you explained custom hooks. It’s going to save me a ton of time in my projects!"
    },
    {
        id: 4,
        avatar:
            "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        fullname: "Daniel Lee",
        username: "danlee",
        time: "1 week ago",
        content:
            "I was struggling with context optimization and your explanation cleared everything up. Thanks a lot!"
    },
    {
        id: 5,
        avatar:
            "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        fullname: "Sophia Martinez",
        username: "sophiam",
        time: "30 min ago",
        content: "This is gold 🙌. I’m sharing this with my entire team!"
    },
    {
        id: 6,
        avatar:
            "https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        fullname: "James Wilson",
        username: "jamesw",
        time: "3 days ago",
        content:
            "The way you covered performance optimization is just brilliant. Subscribed right away!"
    },
    {
        id: 7,
        avatar:
            "https://images.pexels.com/photos/936229/pexels-photo-936229.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        fullname: "Olivia Brown",
        username: "oliviab",
        time: "12 hours ago",
        content:
            "Clear, concise, and practical. Honestly, this should be a paid course 👏"
    },
    {
        id: 8,
        avatar:
            "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        fullname: "William Taylor",
        username: "wtaylor",
        time: "4 days ago",
        content:
            "You explained suspense in React way better than most articles I’ve read. Thanks!"
    },
    {
        id: 9,
        avatar:
            "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        fullname: "Ava Thompson",
        username: "avath",
        time: "2 weeks ago",
        content:
            "I always avoided higher-order components, but now I finally get how useful they are!"
    },
    {
        id: 10,
        avatar:
            "https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        fullname: "Liam Anderson",
        username: "liama",
        time: "8 hour ago",
        content:
            "Big respect for breaking things down in simple terms. Super valuable content 🔥"
    }
];

const recommendedVideos = [
    {
        id: 1,
        thambnail: "https://images.pexels.com/photos/3561339/pexels-photo-3561339.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        title: "JavaScript Fundamentals: Variables and Data Types",
        duration: " 20:45",
        avatar: "https://images.pexels.com/photos/18264716/pexels-photo-18264716/free-photo-of-man-people-laptop-internet.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        username: "Code Master",
        views: "10.3k",
        time: "44 minutes ago"
    },
    {
        id: 2,
        thambnail:
            "https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        title: "Mastering React in 2025: Complete Guide",
        duration: "35:12",
        avatar:
            "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        username: "Dev Journey",
        views: "25.6k",
        time: "2 hours ago"
    },
    {
        id: 3,
        thambnail:
            "https://images.pexels.com/photos/1181263/pexels-photo-1181263.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        title: "Learn Node.js: From Beginner to Pro",
        duration: "45:30",
        avatar:
            "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        username: "Backend Boss",
        views: "42.1k",
        time: "1 day ago"
    },
    {
        id: 4,
        thambnail:
            "https://images.pexels.com/photos/546819/pexels-photo-546819.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        title: "CSS Grid & Flexbox Crash Course",
        duration: "18:20",
        avatar:
            "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        username: "Frontend Hub",
        views: "8.7k",
        time: "3 days ago"
    },
    {
        id: 5,
        thambnail:
            "https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        title: "Async JavaScript: Callbacks, Promises, Async/Await",
        duration: "27:55",
        avatar:
            "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        username: "Code Explained",
        views: "19.2k",
        time: "5 hours ago"
    },
    {
        id: 6,
        thambnail:
            "https://images.pexels.com/photos/1181354/pexels-photo-1181354.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        title: "Building REST APIs with Express.js",
        duration: "50:40",
        avatar:
            "https://images.pexels.com/photos/936229/pexels-photo-936229.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        username: "Tech with Sam",
        views: "33.5k",
        time: "6 days ago"
    },
    {
        id: 7,
        thambnail:
            "https://images.pexels.com/photos/1181676/pexels-photo-1181676.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        title: "React Hooks Explained Simply",
        duration: "14:18",
        avatar:
            "https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        username: "React Simplified",
        views: "5.9k",
        time: "12 hours ago"
    },
    {
        id: 8,
        thambnail:
            "https://images.pexels.com/photos/4144096/pexels-photo-4144096.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        title: "GraphQL Basics: Query Language for APIs",
        duration: "39:22",
        avatar:
            "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        username: "API Academy",
        views: "12.8k",
        time: "2 weeks ago"
    },
    {
        id: 9,
        thambnail:
            "https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        title: "Next.js 15 Tutorial: Full Course",
        duration: "1:10:12",
        avatar:
            "https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        username: "Fullstack World",
        views: "56.7k",
        time: "4 days ago"
    },
    {
        id: 10,
        thambnail:
            "https://images.pexels.com/photos/574071/pexels-photo-574071.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        title: "Understanding TypeScript in Depth",
        duration: "42:05",
        avatar:
            "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        username: "TS Pro",
        views: "21.4k",
        time: "1 week ago"
    }
]


function VideoDetailPage() {
    return (
        <>
            <section className="w-full pb-[70px]  sm:pb-0">
                <div className="flex w-full flex-wrap gap-4 p-4 lg:flex-nowrap">
                    <div className="col-span-12 w-full">
                        <div className="relative mb-4 w-full pt-[56%]">
                            <div className="absolute inset-0">
                                <video className="h-full w-full" controls="" autoPlay="" muted="">
                                    <source
                                        src="https://res.cloudinary.com/dfw5nnic5/video/upload/v1695117968/Sample_1280x720_mp4_b4db0s.mp4"
                                        type="video/mp4"
                                    />
                                </video>
                            </div>
                        </div>
                        <div
                            className="group mb-4 w-full rounded-lg border p-4 duration-200 hover:bg-white/5 focus:bg-white/5"
                            role="button"
                            tabIndex={0}
                        >
                            <div className="flex flex-wrap gap-y-2">
                                <div className="w-full md:w-1/2 lg:w-full xl:w-1/2">
                                    <h1 className="text-lg font-bold">Advanced React Patterns</h1>
                                    <p className="flex text-sm text-gray-200">
                                        30,164&nbsp;Views ·18 hours ago
                                    </p>
                                </div>
                                <div className="w-full md:w-1/2 lg:w-full xl:w-1/2">
                                    <div className="flex items-center justify-between gap-x-4 md:justify-end lg:justify-between xl:justify-end">
                                        <div className="flex overflow-hidden rounded-lg border">
                                            <button
                                                className="group/btn flex items-center gap-x-2 border-r border-gray-700 px-4 py-1.5 after:content-[attr(data-like)] hover:bg-white/10 focus:after:content-[attr(data-like-alt)]"
                                                data-like={3050}
                                                data-like-alt={3051}
                                            >
                                                <span className="inline-block w-5 group-focus/btn:text-[#ae7aff]">
                                                    <LikeTweet />
                                                </span>
                                            </button>
                                            <button
                                                className="group/btn flex items-center gap-x-2 px-4 py-1.5 after:content-[attr(data-like)] hover:bg-white/10 focus:after:content-[attr(data-like-alt)]"
                                                data-like={20}
                                                data-like-alt={21}
                                            >
                                                <span className="inline-block w-5 group-focus/btn:text-[#ae7aff]">
                                                    <DislikeTweet />
                                                </span>
                                            </button>
                                        </div>
                                        <div className="relative block">
                                            <button className="peer flex items-center gap-x-2 rounded-lg bg-white px-4 py-1.5 text-black">
                                                <span className="inline-block w-5">
                                                    <Save />
                                                </span>
                                                Save
                                            </button>
                                            <div className="absolute right-0 top-full z-10 hidden w-64 overflow-hidden rounded-lg bg-[#121212] p-4 shadow shadow-slate-50/30 hover:block peer-focus:block">
                                                <h3 className="mb-4 text-center text-lg font-semibold">
                                                    Save to playlist
                                                </h3>
                                                <ul className="mb-4">
                                                    <li className="mb-2 last:mb-0">
                                                        <label
                                                            className="group/label inline-flex cursor-pointer items-center gap-x-3"
                                                            htmlFor="Collections-checkbox"
                                                        >
                                                            <input
                                                                type="checkbox"
                                                                className="peer hidden"
                                                                id="Collections-checkbox"
                                                            />
                                                            <span className="inline-flex h-4 w-4 items-center justify-center rounded-[4px] border border-transparent bg-white text-white group-hover/label:border-[#ae7aff] peer-checked:border-[#ae7aff] peer-checked:text-[#ae7aff]">
                                                                <Correct />
                                                            </span>
                                                            Collections
                                                        </label>
                                                    </li>
                                                    <li className="mb-2 last:mb-0">
                                                        <label
                                                            className="group/label inline-flex cursor-pointer items-center gap-x-3"
                                                            htmlFor="JavaScript Basics-checkbox"
                                                        >
                                                            <input
                                                                type="checkbox"
                                                                className="peer hidden"
                                                                id="JavaScript Basics-checkbox"
                                                            />
                                                            <span className="inline-flex h-4 w-4 items-center justify-center rounded-[4px] border border-transparent bg-white text-white group-hover/label:border-[#ae7aff] peer-checked:border-[#ae7aff] peer-checked:text-[#ae7aff]">
                                                                <Correct />
                                                            </span>
                                                            JavaScript Basics
                                                        </label>
                                                    </li>
                                                    <li className="mb-2 last:mb-0">
                                                        <label
                                                            className="group/label inline-flex cursor-pointer items-center gap-x-3"
                                                            htmlFor="C++ Tuts-checkbox"
                                                        >
                                                            <input
                                                                type="checkbox"
                                                                className="peer hidden"
                                                                id="C++ Tuts-checkbox"
                                                            />
                                                            <span className="inline-flex h-4 w-4 items-center justify-center rounded-[4px] border border-transparent bg-white text-white group-hover/label:border-[#ae7aff] peer-checked:border-[#ae7aff] peer-checked:text-[#ae7aff]">
                                                                <Correct />
                                                            </span>
                                                            C++ Tuts
                                                        </label>
                                                    </li>
                                                    <li className="mb-2 last:mb-0">
                                                        <label
                                                            className="group/label inline-flex cursor-pointer items-center gap-x-3"
                                                            htmlFor="Feel Good Music-checkbox"
                                                        >
                                                            <input
                                                                type="checkbox"
                                                                className="peer hidden"
                                                                id="Feel Good Music-checkbox"
                                                            />
                                                            <span className="inline-flex h-4 w-4 items-center justify-center rounded-[4px] border border-transparent bg-white text-white group-hover/label:border-[#ae7aff] peer-checked:border-[#ae7aff] peer-checked:text-[#ae7aff]">
                                                                <Correct />
                                                            </span>
                                                            Feel Good Music
                                                        </label>
                                                    </li>
                                                    <li className="mb-2 last:mb-0">
                                                        <label
                                                            className="group/label inline-flex cursor-pointer items-center gap-x-3"
                                                            htmlFor="Ed Sheeran-checkbox"
                                                        >
                                                            <input
                                                                type="checkbox"
                                                                className="peer hidden"
                                                                id="Ed Sheeran-checkbox"
                                                            />
                                                            <span className="inline-flex h-4 w-4 items-center justify-center rounded-[4px] border border-transparent bg-white text-white group-hover/label:border-[#ae7aff] peer-checked:border-[#ae7aff] peer-checked:text-[#ae7aff]">
                                                                <Correct />
                                                            </span>
                                                            Ed Sheeran
                                                        </label>
                                                    </li>
                                                    <li className="mb-2 last:mb-0">
                                                        <label
                                                            className="group/label inline-flex cursor-pointer items-center gap-x-3"
                                                            htmlFor="Python-checkbox"
                                                        >
                                                            <input
                                                                type="checkbox"
                                                                className="peer hidden"
                                                                id="Python-checkbox"
                                                            />
                                                            <span className="inline-flex h-4 w-4 items-center justify-center rounded-[4px] border border-transparent bg-white text-white group-hover/label:border-[#ae7aff] peer-checked:border-[#ae7aff] peer-checked:text-[#ae7aff]">
                                                                <Correct />
                                                            </span>
                                                            Python
                                                        </label>
                                                    </li>
                                                </ul>
                                                <div className="flex flex-col">
                                                    <label
                                                        htmlFor="playlist-name"
                                                        className="mb-1 inline-block cursor-pointer"
                                                    >
                                                        Name
                                                    </label>
                                                    <input
                                                        className="w-full rounded-lg border border-transparent bg-white px-3 py-2 text-black outline-none focus:border-[#ae7aff]"
                                                        id="playlist-name"
                                                        placeholder="Enter playlist name"
                                                    />
                                                    <button className="mx-auto mt-4 rounded-lg bg-[#ae7aff] px-4 py-2 text-black">
                                                        Create new playlist
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="mt-4 flex items-center justify-between">
                                <div className="flex items-center gap-x-4">
                                    <div className="mt-2 h-12 w-12 shrink-0">
                                        <img
                                            src="https://images.pexels.com/photos/18264716/pexels-photo-18264716/free-photo-of-man-people-laptop-internet.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                                            alt="reactpatterns"
                                            className="h-full w-full rounded-full"
                                        />
                                    </div>
                                    <div className="block">
                                        <p className="text-gray-200">React Patterns</p>
                                        <p className="text-sm text-gray-400">757K Subscribers</p>
                                    </div>
                                </div>
                                <div className="block">
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
                            <hr className="my-4 border-white" />
                            <div className="h-5 overflow-hidden group-focus:h-auto">
                                <p className="text-sm">
                                    🚀 Dive into the world of React with our latest tutorial series:
                                    "Advanced React Patterns"! 🛠️ Whether you're a seasoned developer or
                                    just starting out, this series is designed to elevate your React
                                    skills to the next level.
                                </p>
                            </div>
                        </div>
                        <button className="peer w-full rounded-lg border p-4 text-left duration-200 hover:bg-white/5 focus:bg-white/5 sm:hidden">
                            <h6 className="font-semibold">573 Comments...</h6>
                        </button>
                        <div className="fixed inset-x-0 top-full z-[60] h-[calc(100%-69px)] overflow-auto rounded-lg border bg-[#121212] p-4 duration-200 hover:top-[67px] peer-focus:top-[67px] sm:static sm:h-auto sm:max-h-[500px] lg:max-h-none">
                            <div className="block">
                                <h6 className="mb-4 font-semibold">573 Comments</h6>
                                <input
                                    type="text"
                                    className="w-full rounded-lg border bg-transparent px-2 py-1 placeholder-white"
                                    placeholder="Add a Comment"
                                />
                                
                            </div>
                            <hr className="my-4 border-white" />
                            {
                                Comments.map((Comment) => (
                                    <div key={Comment.id} >
                                        <div className="flex gap-x-4">
                                            <div className="mt-2 h-11 w-11 shrink-0">
                                                <img
                                                    src={Comment.avatar}
                                                    alt={Comment.username}
                                                    className="h-full w-full rounded-full"
                                                />
                                            </div>
                                            <div className="block">
                                                <p className="flex items-center text-gray-200">
                                                    {Comment.fullname}&nbsp;·&nbsp;
                                                    <span className="text-sm">{Comment.time}</span>
                                                </p>
                                                <p className="text-sm text-gray-200">@{Comment.username}</p>
                                                <p className="mt-3 text-sm">
                                                    {Comment.content}
                                                </p>
                                            </div>
                                        </div>
                                        <hr className="my-4 border-white" />
                                    </div>
                                ))
                            }

                        </div>
                    </div>
                    <div className="col-span-12 flex w-full shrink-0 flex-col gap-3 lg:w-[350px] xl:w-[400px]">
                        {
                            recommendedVideos.map((recommendedVideo) => (
                                <div key={recommendedVideo.id} className="w-full gap-x-2 border pr-2 md:flex">
                                    <div className="relative mb-2 w-full md:mb-0 md:w-5/12">
                                        <div className="w-full pt-[56%]">
                                            <div className="absolute inset-0">
                                                <img
                                                    src={recommendedVideo.thambnail}
                                                    alt={recommendedVideo.title}
                                                    className="h-full w-full"
                                                />
                                            </div>
                                            <span className="absolute bottom-1 right-1 inline-block rounded bg-black px-1.5 text-sm">
                                                {recommendedVideo.duration}
                                            </span>
                                        </div>
                                    </div>
                                    <div className="flex gap-x-2 px-2 pb-4 pt-1 md:w-7/12 md:px-0 md:py-0.5">
                                        <div className="h-12 w-12 shrink-0 md:hidden">
                                            <img
                                                src={recommendedVideo.avatar}
                                                alt={recommendedVideo.username}
                                                className="h-full w-full rounded-full"
                                            />
                                        </div>
                                        <div className="w-full pt-1 md:pt-0">
                                            <h6 className="mb-1 text-sm font-semibold">
                                                {recommendedVideo.title}
                                            </h6>
                                            <p className="mb-0.5 mt-2 text-sm text-gray-200">{recommendedVideo.username}</p>
                                            <p className="flex text-sm text-gray-200">
                                                {recommendedVideo.views}&nbsp;Views · {recommendedVideo.time}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </section>

        </>
    )
}

export default VideoDetailPage