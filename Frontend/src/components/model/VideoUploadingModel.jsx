import React from 'react'
import { Cross, Loading, Media, Success } from '../Icons'

function VideoUploadingModel({ videoUploadingModel, setVideoUploadingModel }) {
    // console.log("videoUploadingModel----->",videoUploadingModel)
    if (!videoUploadingModel) return null
    return (
        <>
            <div className="absolute inset-x-0 top-0 z-10 flex h-[calc(100vh-66px)] items-center justify-center bg-black/50 px-4 pb-[86px] pt-4 sm:h-[calc(100vh-82px)] sm:px-14 sm:py-8">
                <div className="w-full max-w-lg overflow-auto rounded-lg border border-gray-700 bg-[#121212] p-4">
                    <div className="mb-4 flex items-start justify-between">
                        <h2 className="text-xl font-semibold">
                            Uploading Video...
                            <span className="block text-sm text-gray-300">
                                Track your video uploading process.
                            </span>
                        </h2>
                        <button className="h-6 w-6"
                            onClick={() => {
                                setVideoUploadingModel(false)
                            }}
                        >
                            <Cross />
                        </button>
                    </div>
                    <div className="mb-6 flex gap-x-2 border p-3">
                        <div className="w-8 shrink-0">
                            <span className="inline-block w-full rounded-full bg-[#E4D3FF] p-1 text-[#AE7AFF]">
                                <Media />
                            </span>
                        </div>
                        <div className="flex flex-col">
                            <h6>Dashboard prototype recording.mp4</h6>
                            <p className="text-sm">16 MB</p>
                            <div className="mt-2">
                                <Loading />
                                <Success />
                                Uploading...
                            </div>
                        </div>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                        <button className="border px-4 py-3"
                            onClick={() => {
                                setVideoUploadingModel(false)
                            }}
                        >Cancel</button>
                        <button
                            onClick={() => {
                                setVideoUploadingModel(false)
                            }}
                            className="bg-[#ae7aff] px-4 py-3 text-black disabled:bg-[#E4D3FF]"
                            disabled=""
                        >
                            Finish
                        </button>
                    </div>
                </div>
            </div>

        </>
    )
}

export default VideoUploadingModel