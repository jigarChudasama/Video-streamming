import React from 'react'
import { Cross } from '../Icons'

function LogoutModel({logoutModel , setLogoutModel}) {
    if(!logoutModel) return null
    return (
        <div>
            <div className="absolute inset-x-0 top-0 z-10 flex h-[calc(100vh-66px)] items-center justify-center bg-black/50 px-4 pb-[86px] pt-4 sm:h-[calc(100vh-82px)] sm:px-14 sm:py-8">
                <div className="w-full max-w-lg overflow-auto rounded-lg border border-gray-700 bg-[#121212] p-4">
                    <div className="mb-4 flex items-start justify-between">
                        <h2 className="text-xl font-semibold">
                            Alert
                            <span className="block text-sm text-gray-300">
                                Are you sure to want to logout
                            </span>
                        </h2>
                        <button className="h-6 w-6"
                            onClick={() => {
                                setLogoutModel(false)
                            }}
                        >
                            <Cross />
                        </button>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                        <button className="border px-4 py-3"
                            onClick={() => {
                                setLogoutModel(false)
                            }}
                        >Cancel</button>
                        <button
                            onClick={() => {
                                setLogoutModel(false)
                            }}
                            className="bg-[#ae7aff] px-4 py-3 text-black disabled:bg-[#E4D3FF]"
                            disabled=""
                        >
                            Confirm
                        </button>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default LogoutModel