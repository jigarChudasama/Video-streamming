import React, { useState } from 'react'
import { BtnIcon, DislikeTweet, Emoji, LikeTweet, ThreeDot } from '../components/Icons';

const subscribers = [
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

    const [channels, setChannels] = useState(subscribers);

    const toggleSubscribe = (index) => {
        const updated = [...channels];
        updated[index].isSubscribed = !updated[index].isSubscribed;
        setChannels(updated);
    };

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
                                        <BtnIcon />
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
                                {
                                    videos.map((video) => (
                                        <div key={video.id} className="w-full">
                                            <div className="relative mb-2 w-full pt-[56%]">
                                                <div className="absolute inset-0">
                                                    <img src={video.thumbnail}
                                                        alt={video.title} className="h-full w-full" />
                                                </div>
                                                <span className="absolute bottom-1 right-1 inline-block rounded bg-black px-1.5 text-sm">{video.duration}</span>
                                            </div>
                                            <h6 className="mb-1 font-semibold">{video.title}</h6>
                                            <p className="flex text-sm text-gray-200">{video.views}&nbsp;Views · {video.time}</p>
                                        </div>
                                    ))
                                }
                            </div>
                            // no video found screen
                            //   <section className="w-full pb-[70px] sm:ml-[70px] sm:pb-0 lg:ml-0">
                            //     <div className="flex h-full items-center justify-center">
                            //       <div className="w-full max-w-sm text-center">
                            //         <p className="mb-3 w-full">
                            //           <span className="inline-flex rounded-full bg-[#E4D3FF] p-2 text-[#AE7AFF]">
                            //             <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true" className="w-6">
                            //               <path strokeLinecap="round" strokeLinejoin="round" d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.348a1.125 1.125 0 010 1.971l-11.54 6.347a1.125 1.125 0 01-1.667-.985V5.653z" />
                            //             </svg>
                            //           </span>
                            //         </p>
                            //         <h5 className="mb-2 font-semibold">No videos available</h5>
                            //         <p>There are no videos here available. Please try to search some thing else.</p>
                            //       </div>
                            //     </div>
                            //   </section>
                        )}

                        {activeTab === "playlist" && (
                            <div className="grid gap-4 pt-2 sm:grid-cols-[repeat(auto-fit,_minmax(400px,_1fr))]">
                                {
                                    playlists.map((playlist) => (
                                        <div key={playlist.id} className="w-full" >
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

                            // no playlist created

                            //  <div className="flex justify-center p-4">
                            //   <div className="w-full max-w-sm text-center">
                            //     <p className="mb-3 w-full">
                            //       <span className="inline-flex rounded-full bg-[#E4D3FF] p-2 text-[#AE7AFF]">
                            //         <span className="inline-block w-6">
                            //           <svg style={{width: '100%'}} viewBox="0 0 22 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            //             <path d="M12 5L10.8845 2.76892C10.5634 2.1268 10.4029 1.80573 10.1634 1.57116C9.95158 1.36373 9.69632 1.20597 9.41607 1.10931C9.09916 1 8.74021 1 8.02229 1H4.2C3.0799 1 2.51984 1 2.09202 1.21799C1.71569 1.40973 1.40973 1.71569 1.21799 2.09202C1 2.51984 1 3.0799 1 4.2V5M1 5H16.2C17.8802 5 18.7202 5 19.362 5.32698C19.9265 5.6146 20.3854 6.07354 20.673 6.63803C21 7.27976 21 8.11984 21 9.8V14.2C21 15.8802 21 16.7202 20.673 17.362C20.3854 17.9265 19.9265 18.3854 19.362 18.673C18.7202 19 17.8802 19 16.2 19H5.8C4.11984 19 3.27976 19 2.63803 18.673C2.07354 18.3854 1.6146 17.9265 1.32698 17.362C1 16.7202 1 15.8802 1 14.2V5Z" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                            //           </svg>
                            //         </span>
                            //       </span>
                            //     </p>
                            //     <h5 className="mb-2 font-semibold">No playlist created</h5>
                            //     <p>There are no playlist created on this channel.</p>
                            //   </div>
                            // </div> 




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
                                </div>
                            </div>

                            // < div className = "flex justify-center p-4" >
                            //     <div className="w-full max-w-sm text-center">
                            //         <p className="mb-3 w-full">
                            //             <span className="inline-flex rounded-full bg-[#E4D3FF] p-2 text-[#AE7AFF]">
                            //                 <span className="inline-block w-6">
                            //                     <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true" className="w-6">
                            //                         <path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z" />
                            //                     </svg>
                            //                 </span>
                            //             </span>
                            //         </p>
                            //         <h5 className="mb-2 font-semibold">No Tweets</h5>
                            //         <p>
                            //             This channel has yet to make a
                            //             <strong>Tweet</strong>
                            //             .
                            //         </p>
                            //     </div>
                            //</div >
                        )}

                        {activeTab === "subscribed" && (
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
                            // <div className="flex justify-center p-4">
                            //     <div className="w-full max-w-sm text-center">
                            //         <p className="mb-3 w-full">
                            //             <span className="inline-flex rounded-full bg-[#E4D3FF] p-2 text-[#AE7AFF]">
                            //                 <span className="inline-block w-6">
                            //                     <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true" className="w-6">
                            //                         <path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z" />
                            //                     </svg>
                            //                 </span>
                            //             </span>
                            //         </p>
                            //         <h5 className="mb-2 font-semibold">No people subscribers</h5>
                            //         <p>
                            //             This channel has yet to
                            //             <strong>subscribe</strong>
                            //             a new channel.
                            //         </p>
                            //     </div>
                            // </div>
                        )}
                    </div>
                </div>
            </section>
        </div>
    )
}

export default MyChannelPage
