import React from 'react'
import { useNavigate } from 'react-router-dom';

const MyContentVideos = [
    {
        id: 1,
        thumbnail:
            "https://images.pexels.com/photos/3561339/pexels-photo-3561339.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        duration: "20:45",
        title: "JavaScript Fundamentals: Variables and Data Types",
        views: "10.3k",
        time: "44 minutes ago",
        channelImg:
            "https://images.pexels.com/photos/3532545/pexels-photo-3532545.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        channelName: "Code Master",
        description:
            "Learn the basics of JavaScript, including variables, data types, and how to use them in your programs.",
    },
    {
        id: 2,
        thumbnail:
            "https://images.pexels.com/photos/2519817/pexels-photo-2519817.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        duration: "22:18",
        title: "Getting Started with Express.js",
        views: "11k",
        time: "5 hours ago",
        channelImg:
            "https://images.pexels.com/photos/2519812/pexels-photo-2519812.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        channelName: "Express Learner",
        description:
            "Learn the basics of building web applications with Node.js and Express.js framework.",
    },
    {
        id: 3,
        thumbnail:
            "https://images.pexels.com/photos/1739849/pexels-photo-1739849.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        duration: "24:33",
        title: "Building a RESTful API with Node.js and Express",
        views: "14.5k",
        time: "7 hours ago",
        channelImg:
            "https://images.pexels.com/photos/1739942/pexels-photo-1739942.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        channelName: "API Builder",
        description:
            "Learn how to create a RESTful API using Node.js and the Express framework for building web applications.",
    },
    {
        id: 4,
        thumbnail:
            "https://images.pexels.com/photos/1739854/pexels-photo-1739854.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        duration: "19:58",
        title: "Introduction to React Native",
        views: "10.9k",
        time: "8 hours ago",
        channelImg:
            "https://images.pexels.com/photos/1739856/pexels-photo-1739856.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        channelName: "React Native Dev",
        description:
            "Discover how to build mobile applications using React Native for both Android and iOS platforms.",
    },
    {
        id: 5,
        thumbnail:
            "https://images.pexels.com/photos/1144256/pexels-photo-1144256.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        duration: "16:37",
        title: "Creating Custom Hooks in React",
        views: "9.3k",
        time: "9 hours ago",
        channelImg:
            "https://images.pexels.com/photos/1144257/pexels-photo-1144257.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        channelName: "Hook Master",
        description:
            "Learn how to create and use custom hooks to share logic across multiple React components.",
    },
    {
        id: 6,
        thumbnail:
            "https://images.pexels.com/photos/1144260/pexels-photo-1144260.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        duration: "32:18",
        title: "Building Scalable Web Applications with Django",
        views: "18.9M",
        time: "12 hours ago",
        channelImg:
            "https://images.pexels.com/photos/1144269/pexels-photo-1144269.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        channelName: "Django Master",
        description:
            "Learn how to build robust and scalable web applications using the Django framework for Python.",
    },
    {
        id: 7,
        thumbnail:
            "https://images.pexels.com/photos/1144276/pexels-photo-1144276.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        duration: "29:30",
        title: "Creating Interactive UIs with React and D3",
        views: "20.1k",
        time: "14 hours ago",
        channelImg:
            "https://images.pexels.com/photos/1144277/pexels-photo-1144277.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        channelName: "ReactD3",
        description:
            "Learn how to build dynamic and interactive user interfaces with React and the D3.js data visualization library.",
    },
    {
        id: 8,
        thumbnail:
            "https://images.pexels.com/photos/1144274/pexels-photo-1144274.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        duration: "26:58",
        title: "Node.js Authentication with Passport.js",
        views: "21.2k",
        time: "15 hours ago",
        channelImg:
            "https://images.pexels.com/photos/1144270/pexels-photo-1144270.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        channelName: "Passport Pro",
        description:
            "Learn how to implement user authentication in Node.js applications using the Passport.js middleware.",
    },
    {
        id: 9,
        thumbnail:
            "https://images.pexels.com/photos/1144231/pexels-photo-1144231.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        duration: "32:14",
        title: "Data Visualization with Tableau",
        views: "24.5k",
        time: "18 hours ago",
        channelImg:
            "https://images.pexels.com/photos/18264716/pexels-photo-18264716/free-photo-of-man-people-laptop-internet.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        channelName: "Tableau Master",
        description:
            "Learn how to create stunning visualizations and dashboards using Tableau for data analysis.",
    },
    {
        id: 10,
        thumbnail:
            "https://images.pexels.com/photos/1144250/pexels-photo-1144250.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        duration: "27:37",
        title: "Building Real-Time Applications with Socket.IO",
        views: "25.6k",
        time: "19 hours ago",
        channelImg:
            "https://images.pexels.com/photos/18264716/pexels-photo-18264716/free-photo-of-man-people-laptop-internet.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        channelName: "Socket.IO Expert",
        description:
            "Learn how to create real-time applications using Socket.IO for seamless communication between clients and servers.",
    },
    {
        id: 11,
        thumbnail:
            "https://images.pexels.com/photos/1115824/pexels-photo-1115824.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        duration: "31:55",
        title: "Advanced CSS: Animations and Transitions",
        views: "28.9k",
        time: "22 hours ago",
        channelImg:
            "https://images.pexels.com/photos/18264716/pexels-photo-18264716/free-photo-of-man-people-laptop-internet.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        channelName: "CSS Animations",
        description:
            "Learn how to create captivating animations and transitions using CSS for dynamic web experiences.",
    },
    {
        id: 12,
        thumbnail:
            "https://images.pexels.com/photos/1115808/pexels-photo-1115808.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        duration: "30:25",
        title: "Advanced React Patterns",
        views: "30.1k",
        time: "1 day ago",
        channelImg:
            "https://images.pexels.com/photos/18264716/pexels-photo-18264716/free-photo-of-man-people-laptop-internet.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        channelName: "React Patterns",
        description:
            "Explore advanced patterns and techniques for building scalable and maintainable React applications.",
    },
];

function MyContentPage() {

    const navigate = useNavigate()

    return (
        <div>
            <section className="w-full pb-[70px] sm:ml-[70px] sm:pb-0 lg:ml-0">
                <button className="mt-4 ml-4 inline-flex items-center gap-x-2 bg-[#ae7aff] px-3 py-2 font-semibold text-black  ">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={2}
                        stroke="currentColor"
                        aria-hidden="true"
                        className="h-5 w-5"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M12 4.5v15m7.5-7.5h-15"
                        />
                    </svg>
                    New video
                </button>

                <div className="flex flex-col gap-4 p-4">
                    {
                        MyContentVideos.map((MyContentVideo) => (
                            <div key={MyContentVideo.id}
                                onClick={() => {
                                    navigate('/my-content-page/video-detail')
                                }}
                                className="w-full max-w-3xl gap-x-4 md:flex">
                                <div className="relative mb-2 w-full md:mb-0 md:w-5/12">
                                    <div className="w-full pt-[56%]">
                                        <div className="absolute inset-0">
                                            <img
                                                src={MyContentVideo.thumbnail}
                                                alt={MyContentVideo.title}
                                                className="h-full w-full"
                                            />
                                        </div>
                                        <span className="absolute bottom-1 right-1 inline-block rounded bg-black px-1.5 text-sm">
                                            {MyContentVideo.duration}
                                        </span>
                                    </div>
                                </div>
                                <div className="flex gap-x-2 md:w-7/12">
                                    <div className="h-10 w-10 shrink-0 md:hidden">
                                        <img
                                            src={MyContentVideo.channelImg}
                                            alt={MyContentVideo.channelName}
                                            className="h-full w-full rounded-full"
                                        />
                                    </div>
                                    <div className="w-full">
                                        <h6 className="mb-1 font-semibold md:max-w-[75%]">
                                            {MyContentVideo.title}
                                        </h6>
                                        <p className="flex text-sm text-gray-200 sm:mt-3">
                                            {MyContentVideo.views}&nbsp;Views · {MyContentVideo.time}
                                        </p>
                                        <div className="flex items-center gap-x-4">
                                            <div className="mt-2 hidden h-10 w-10 shrink-0 md:block">
                                                <img
                                                    src="https://images.pexels.com/photos/3532545/pexels-photo-3532545.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                                                    alt="codemaster"
                                                    className="h-full w-full rounded-full"
                                                />
                                            </div>
                                            <p className="text-sm text-gray-200">{MyContentVideo.channelName}</p>
                                        </div>
                                        <p className="mt-2 hidden text-sm md:block">
                                            {MyContentVideo.description}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </section>

        </div>
    )
}

export default MyContentPage