import React from 'react'
import { Outlet } from 'react-router-dom'
import DashboaedHeader from '../components/DashboaedHeader'
import Sidebar from '../components/Sidebar'

function DashboardLayout() {
  return (
    <div>
         <div className="h-screen overflow-y-auto bg-[#121212] text-white">
                <DashboaedHeader />
                <div className="flex min-h-[calc(100vh-66px)] sm:min-h-[calc(100vh-82px)]">
                    <Sidebar />
                    <section className="w-full pb-[70px] sm:ml-[70px] sm:pb-0 lg:ml-0">
                        <Outlet/>
                    </section>
                </div>
            </div>
    </div>
  )
}

export default DashboardLayout