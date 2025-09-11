import React, { useState } from 'react'
import VideoUploadingModel from './VideoUploadingModel'
import { UploadIcon } from '../Icons'

function UploadVideo({ createVideoModel, setCreateVideoModel }) {

    // if (!createVideoModel) return null
    const [videoUploadingModel, setVideoUploadingModel] = useState(false)

    return (
        <>
            {
                createVideoModel &&
                <div className="absolute w-fit m-auto inset-0 z-10 bg-black/50 px-4 pb-[86px] pt-4  sm:px-14 sm:pt-28 sm:pb-8">
                    <div className="h-auto overflow-auto border bg-[#121212]">
                        <div className="flex items-center justify-between border-b p-4">
                            <h2 className="text-xl font-semibold">Upload Videos</h2>
                            <button
                                onClick={() => {
                                    setCreateVideoModel(false)
                                    setVideoUploadingModel(true)
                                }}
                                className="group/btn mr-1 flex w-auto items-center gap-x-2 bg-[#ae7aff] px-3 py-2 text-center font-bold text-black shadow-[5px_5px_0px_0px_#4f4e4e] transition-all duration-150 ease-in-out active:translate-x-[5px] active:translate-y-[5px] active:shadow-[0px_0px_0px_0px_#4f4e4e]">
                                Save
                            </button>
                        </div>
                        <div className="mx-auto flex w-full max-w-3xl flex-col gap-y-4 p-4">
                            <div className="w-full border-2 border-dashed px-4 py-12 text-center">
                                <UploadIcon />
                                <h6 className="mb-2 font-semibold">
                                    Drag and drop video files to upload
                                </h6>
                                <p className="text-gray-400">
                                    Your videos will be private untill you publish them.
                                </p>
                                <label
                                    htmlFor="upload-video"
                                    className="group/btn mt-4 inline-flex w-auto cursor-pointer items-center gap-x-2 bg-[#ae7aff] px-3 py-2 text-center font-bold text-black shadow-[5px_5px_0px_0px_#4f4e4e] transition-all duration-150 ease-in-out active:translate-x-[5px] active:translate-y-[5px] active:shadow-[0px_0px_0px_0px_#4f4e4e]"
                                >
                                    <input type="file" id="upload-video" className="sr-only" />
                                    Select Files
                                </label>
                            </div>
                            <div className="w-full">
                                <label htmlFor="thumbnail" className="mb-1 inline-block">
                                    Thumbnail
                                    <sup>*</sup>
                                </label>
                                <input
                                    id="thumbnail"
                                    type="file"
                                    className="w-full border p-1 file:mr-4 file:border-none file:bg-[#ae7aff] file:px-3 file:py-1.5"
                                />
                            </div>
                            <div className="w-full">
                                <label htmlFor="title" className="mb-1 inline-block">
                                    Title
                                    <sup>*</sup>
                                </label>
                                <input
                                    id="title"
                                    type="text"
                                    className="w-full border bg-transparent px-2 py-1 outline-none"
                                />
                            </div>
                            <div className="w-full">
                                <label htmlFor="desc" className="mb-1 inline-block">
                                    Description
                                    <sup>*</sup>
                                </label>
                                <textarea
                                    id="desc"
                                    className="h-40 w-full resize-none border bg-transparent px-2 py-1 outline-none"
                                    defaultValue={""}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            }
            <VideoUploadingModel videoUploadingModel={videoUploadingModel} setVideoUploadingModel={setVideoUploadingModel} />
        </>
    )
}

export default UploadVideo