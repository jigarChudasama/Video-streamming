import React from 'react'
import { useNavigate } from 'react-router-dom'

const videos = [
    {
        id: 1,
        thumbnail: "https://images.pexels.com/photos/3561339/pexels-photo-3561339.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        duration: "20:45",
        avatar: "https://images.pexels.com/photos/3532545/pexels-photo-3532545.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        title: "JavaScript Fundamentals: Variables and Data Types",
        views: "10.3k",
        time: "44 minutes ago",
        author: "Code Master"
    },
    {
        id: 2,
        thumbnail: "https://images.pexels.com/photos/2519817/pexels-photo-2519817.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        duration: "22:18",
        avatar: "https://images.pexels.com/photos/2519812/pexels-photo-2519812.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        title: "Getting Started with Express.js",
        views: "11k",
        time: "5 hours ago",
        author: "Express Learner"
    },
    {
        id: 3,
        thumbnail: "https://images.pexels.com/photos/1739849/pexels-photo-1739849.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        duration: "24:33",
        avatar: "https://images.pexels.com/photos/1739942/pexels-photo-1739942.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        title: "Building a RESTful API with Node.js and Express",
        views: "14.5k",
        time: "7 hours ago",
        author: "API Builder"
    },
    {
        id: 4,
        thumbnail: "https://images.pexels.com/photos/1739854/pexels-photo-1739854.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        duration: "19:58",
        avatar: "https://images.pexels.com/photos/1739856/pexels-photo-1739856.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        title: "Introduction to React Native",
        views: "10.9k",
        time: "8 hours ago",
        author: "React Native Dev"
    },
    {
        id: 5,
        thumbnail: "https://images.pexels.com/photos/1144256/pexels-photo-1144256.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        duration: "16:37",
        avatar: "https://images.pexels.com/photos/1144257/pexels-photo-1144257.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        title: "Creating Custom Hooks in React",
        views: "9.3k",
        time: "9 hours ago",
        author: "Hook Master"
    },
    {
        id: 6,
        thumbnail: "https://images.pexels.com/photos/1144276/pexels-photo-1144276.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        duration: "29:30",
        avatar: "https://images.pexels.com/photos/1144277/pexels-photo-1144277.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        title: "Creating Interactive UIs with React and D3",
        views: "20.1k",
        time: "14 hours ago",
        author: "ReactD3"
    },
    {
        id: 7,
        thumbnail: "https://images.pexels.com/photos/3561339/pexels-photo-3561339.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        duration: "20:45",
        avatar: "https://images.pexels.com/photos/3532545/pexels-photo-3532545.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        title: "JavaScript Fundamentals: Variables and Data Types",
        views: "10.3k",
        time: "44 minutes ago",
        author: "Code Master"
    },
    {
        id: 8,
        thumbnail: "https://images.pexels.com/photos/2519817/pexels-photo-2519817.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        duration: "22:18",
        avatar: "https://images.pexels.com/photos/2519812/pexels-photo-2519812.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        title: "Getting Started with Express.js",
        views: "11k",
        time: "5 hours ago",
        author: "Express Learner"
    },
    {
        id: 9,
        thumbnail: "https://images.pexels.com/photos/1739849/pexels-photo-1739849.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        duration: "24:33",
        avatar: "https://images.pexels.com/photos/1739942/pexels-photo-1739942.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        title: "Building a RESTful API with Node.js and Express",
        views: "14.5k",
        time: "7 hours ago",
        author: "API Builder"
    },
    {
        id: 10,
        thumbnail: "https://images.pexels.com/photos/1739854/pexels-photo-1739854.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        duration: "19:58",
        avatar: "https://images.pexels.com/photos/1739856/pexels-photo-1739856.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        title: "Introduction to React Native",
        views: "10.9k",
        time: "8 hours ago",
        author: "React Native Dev"
    },
    {
        id: 11,
        thumbnail: "https://images.pexels.com/photos/1144256/pexels-photo-1144256.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        duration: "16:37",
        avatar: "https://images.pexels.com/photos/1144257/pexels-photo-1144257.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        title: "Creating Custom Hooks in React",
        views: "9.3k",
        time: "9 hours ago",
        author: "Hook Master"
    },
    {
        id: 12,
        thumbnail: "https://images.pexels.com/photos/1144276/pexels-photo-1144276.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        duration: "29:30",
        avatar: "https://images.pexels.com/photos/1144277/pexels-photo-1144277.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        title: "Creating Interactive UIs with React and D3",
        views: "20.1k",
        time: "14 hours ago",
        author: "ReactD3"
    },
    {
        id: 13,
        thumbnail: "https://images.pexels.com/photos/3561339/pexels-photo-3561339.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        duration: "20:45",
        avatar: "https://images.pexels.com/photos/3532545/pexels-photo-3532545.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        title: "JavaScript Fundamentals: Variables and Data Types",
        views: "10.3k",
        time: "44 minutes ago",
        author: "Code Master"
    },
    {
        id: 14,
        thumbnail: "https://images.pexels.com/photos/2519817/pexels-photo-2519817.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        duration: "22:18",
        avatar: "https://images.pexels.com/photos/2519812/pexels-photo-2519812.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        title: "Getting Started with Express.js",
        views: "11k",
        time: "5 hours ago",
        author: "Express Learner"
    },
    {
        id: 15,
        thumbnail: "https://images.pexels.com/photos/1739849/pexels-photo-1739849.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        duration: "24:33",
        avatar: "https://images.pexels.com/photos/1739942/pexels-photo-1739942.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        title: "Building a RESTful API with Node.js and Express",
        views: "14.5k",
        time: "7 hours ago",
        author: "API Builder"
    },
    {
        id: 16,
        thumbnail: "https://images.pexels.com/photos/1739854/pexels-photo-1739854.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        duration: "19:58",
        avatar: "https://images.pexels.com/photos/1739856/pexels-photo-1739856.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        title: "Introduction to React Native",
        views: "10.9k",
        time: "8 hours ago",
        author: "React Native Dev"
    },
    {
        id: 17,
        thumbnail: "https://images.pexels.com/photos/1144256/pexels-photo-1144256.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        duration: "16:37",
        avatar: "https://images.pexels.com/photos/1144257/pexels-photo-1144257.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        title: "Creating Custom Hooks in React",
        views: "9.3k",
        time: "9 hours ago",
        author: "Hook Master"
    },
    {
        id: 18,
        thumbnail: "https://images.pexels.com/photos/1144276/pexels-photo-1144276.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        duration: "29:30",
        avatar: "https://images.pexels.com/photos/1144277/pexels-photo-1144277.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        title: "Creating Interactive UIs with React and D3",
        views: "20.1k",
        time: "14 hours ago",
        author: "ReactD3"
    },

]

function DashboardPage() {


    const navigate = useNavigate()

    return (
        <div>
            {
                videos.length > 0 ?
                    <div className="grid grid-cols-[repeat(auto-fit,_minmax(300px,_1fr))] gap-4 p-4">
                        {
                            videos.map((video) => (
                                <div key={video.id} className="w-full" onClick={() => {
                                    navigate("/video-detail")
                                }} >
                                    <div className="relative mb-2 w-full pt-[56%]">
                                        <div className="absolute inset-0">
                                            <img src={video.thumbnail} alt={video.title} className="h-full w-full" />
                                        </div>
                                        <span className="absolute bottom-1 right-1 inline-block rounded bg-black px-1.5 text-sm">{video.duration}</span>
                                    </div>
                                    <div className="flex gap-x-2">
                                        <div className="h-10 w-10 shrink-0">
                                            <img src={video.avatar} alt={video.author} className="h-full w-full rounded-full" />
                                        </div>
                                        <div className="w-full">
                                            <h6 className="mb-1 font-semibold">{video.title}</h6>
                                            <p className="flex text-sm text-gray-200">{video.views}&nbsp;Views · {video.time}</p>
                                            <p className="text-sm text-gray-200">{video.author}</p>
                                        </div>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                    :
                    <div className="flex h-full mt-4 items-center justify-center">
                        <div className="w-full max-w-sm text-center">
                            <p className="mb-3 w-full">
                                <span className="inline-flex rounded-full bg-[#E4D3FF] p-2 text-[#AE7AFF]">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true" className="w-6">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.348a1.125 1.125 0 010 1.971l-11.54 6.347a1.125 1.125 0 01-1.667-.985V5.653z" />
                                    </svg>
                                </span>
                            </p>
                            <h5 className="mb-2 font-semibold">No videos available</h5>
                            <p>There are no videos here available. Please try to search some thing else.</p>
                        </div>
                    </div>
            }
        </div>
    )
}

export default DashboardPage