import React from 'react'
import { useNavigate } from 'react-router-dom';

const playlistVideos = [
  {
    id: 1,
    thumbnail:
      "https://images.pexels.com/photos/3561339/pexels-photo-3561339.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    duration: "20:45",
    avatar:
      "https://images.pexels.com/photos/3532545/pexels-photo-3532545.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    username: "Code Master",
    title: "JavaScript Fundamentals: Variables and Data Types",
    view: "10.3k",
    time: "44 minutes ago"
  },
  {
    id: 2,
    thumbnail:
      "https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    duration: "35:12",
    avatar:
      "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    username: "Frontend Hub",
    title: "Mastering React in 2025: Complete Guide",
    view: "25.6k",
    time: "2 hours ago"
  },
  {
    id: 3,
    thumbnail:
      "https://images.pexels.com/photos/1181263/pexels-photo-1181263.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    duration: "45:30",
    avatar:
      "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    username: "Backend Boss",
    title: "Learn Node.js: From Beginner to Pro",
    view: "42.1k",
    time: "1 day ago"
  },
  {
    id: 4,
    thumbnail:
      "https://images.pexels.com/photos/546819/pexels-photo-546819.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    duration: "18:20",
    avatar:
      "https://images.pexels.com/photos/936229/pexels-photo-936229.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    username: "Dev Simplified",
    title: "CSS Grid & Flexbox Crash Course",
    view: "8.7k",
    time: "3 days ago"
  },
  {
    id: 5,
    thumbnail:
      "https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    duration: "27:55",
    avatar:
      "https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    username: "Code Explained",
    title: "Async JavaScript: Callbacks, Promises, Async/Await",
    view: "19.2k",
    time: "5 hours ago"
  },
  {
    id: 6,
    thumbnail:
      "https://images.pexels.com/photos/1181354/pexels-photo-1181354.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    duration: "50:40",
    avatar:
      "https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    username: "Tech with Sam",
    title: "Building REST APIs with Express.js",
    view: "33.5k",
    time: "6 days ago"
  },
  {
    id: 7,
    thumbnail:
      "https://images.pexels.com/photos/1181676/pexels-photo-1181676.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    duration: "14:18",
    avatar:
      "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    username: "React Simplified",
    title: "React Hooks Explained Simply",
    view: "5.9k",
    time: "12 hours ago"
  },
  {
    id: 8,
    thumbnail:
      "https://images.pexels.com/photos/4144096/pexels-photo-4144096.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    duration: "39:22",
    avatar:
      "https://images.pexels.com/photos/18148932/pexels-photo-18148932/free-photo-of-woman-reading-book-on-a-bench.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    username: "API Academy",
    title: "GraphQL Basics: Query Language for APIs",
    view: "12.8k",
    time: "2 weeks ago"
  },
  {
    id: 9,
    thumbnail:
      "https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    duration: "1:10:12",
    avatar:
      "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    username: "Fullstack World",
    title: "Next.js 15 Tutorial: Full Course",
    view: "56.7k",
    time: "4 days ago"
  },
  {
    id: 10,
    thumbnail:
      "https://images.pexels.com/photos/574071/pexels-photo-574071.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    duration: "42:05",
    avatar:
      "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    username: "TS Pro",
    title: "Understanding TypeScript in Depth",
    view: "21.4k",
    time: "1 week ago"
  },
  {
    id: 11,
    thumbnail:
      "https://images.pexels.com/photos/3861958/pexels-photo-3861958.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    duration: "33:45",
    avatar:
      "https://images.pexels.com/photos/1181671/pexels-photo-1181671.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    username: "UI Dev",
    title: "Modern UI/UX with TailwindCSS",
    view: "14.1k",
    time: "3 days ago"
  },
  {
    id: 12,
    thumbnail:
      "https://images.pexels.com/photos/1181315/pexels-photo-1181315.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    duration: "28:19",
    avatar:
      "https://images.pexels.com/photos/18148932/pexels-photo-18148932/free-photo-of-woman-reading-book-on-a-bench.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    username: "Coding Mentor",
    title: "State Management with Redux Toolkit",
    view: "9.8k",
    time: "8 hours ago"
  }
];


function PlaylistDetailPage() {

    const navigate = useNavigate()

    return (
        <div>
            <section className="w-full pb-[70px] sm:ml-[70px] sm:pb-0 lg:ml-0">
                <div className="flex flex-wrap gap-x-4 gap-y-10 p-4 xl:flex-nowrap">
                    <div className="w-full shrink-0 sm:max-w-md xl:max-w-sm">
                        <div className="relative mb-2 w-full pt-[56%]">
                            <div className="absolute inset-0">
                                <img
                                    src="https://images.pexels.com/photos/3561339/pexels-photo-3561339.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                                    alt="React Mastery"
                                    className="h-full w-full"
                                />
                                <div className="absolute inset-x-0 bottom-0">
                                    <div className="relative border-t bg-white/30 p-4 text-white backdrop-blur-sm before:absolute before:inset-0 before:bg-black/40">
                                        <div className="relative z-[1]">
                                            <p className="flex justify-between">
                                                <span className="inline-block">Playlist</span>
                                                <span className="inline-block">12&nbsp;videos</span>
                                            </p>
                                            <p className="text-sm text-gray-200">
                                                100K Views&nbsp;·&nbsp;2 hours ago
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <h6 className="mb-1 font-semibold">React Mastery</h6>
                        <p className="flex text-sm text-gray-200">
                            Master the art of building dynamic user interfaces with React.
                        </p>
                        <div className="mt-6 flex items-center gap-x-3">
                            <div className="h-16 w-16 shrink-0">
                                <img
                                    src="https://images.pexels.com/photos/18264716/pexels-photo-18264716/free-photo-of-man-people-laptop-internet.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                                    alt="React Patterns"
                                    className="h-full w-full rounded-full"
                                />
                            </div>
                            <div className="w-full">
                                <h6 className="font-semibold">React Patterns</h6>
                                <p className="text-sm text-gray-300">757K Subscribers</p>
                            </div>
                        </div>
                    </div>
                    <div className="flex w-full flex-col gap-y-4">
                        {
                            playlistVideos.map((playlistVideo) => (
                                <div key={playlistVideo.id}
                                onClick={()=>{
                                    navigate("/my-channel-page/playlist-detail/video-detail")
                                }} 
                                 className="border">
                                    <div className="w-full max-w-3xl gap-x-4 sm:flex">
                                        <div className="relative mb-2 w-full sm:mb-0 sm:w-5/12">
                                            <div className="w-full pt-[56%]">
                                                <div className="absolute inset-0">
                                                    <img
                                                        src={playlistVideo.thumbnail}
                                                        alt={playlistVideo.title}
                                                        className="h-full w-full"
                                                    />
                                                </div>
                                                <span className="absolute bottom-1 right-1 inline-block rounded bg-black px-1.5 text-sm">
                                                    {playlistVideo.duration}
                                                </span>
                                            </div>
                                        </div>
                                        <div className="flex gap-x-2 px-2 sm:w-7/12 sm:px-0">
                                            <div className="h-10 w-10 shrink-0 sm:hidden">
                                                <img
                                                    src={playlistVideo.avatar}
                                                    alt={playlistVideo.username}
                                                    className="h-full w-full rounded-full"
                                                />
                                            </div>
                                            <div className="w-full">
                                                <h6 className="mb-1 font-semibold sm:max-w-[75%]">
                                                    {playlistVideo.title}
                                                </h6>
                                                <p className="flex text-sm text-gray-200 sm:mt-3">
                                                    {playlistVideo.view}&nbsp;Views · {playlistVideo.time}
                                                </p>
                                                <div className="flex items-center gap-x-4">
                                                    <div className="mt-2 hidden h-10 w-10 shrink-0 sm:block">
                                                        <img
                                                            src={playlistVideo.avatar}
                                                            alt={playlistVideo.username}
                                                            className="h-full w-full rounded-full"
                                                        />
                                                    </div>
                                                    <p className="text-sm text-gray-200">{playlistVideo.username}</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </section>

        </div>
    )
}

export default PlaylistDetailPage