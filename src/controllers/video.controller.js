import mongoose, { isValidObjectId } from "mongoose"
import { Video } from '../models/Video.model.js';
import { User } from '../models/user.model.js';
import { ApiError } from "../utils/ApiError.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import { asyncHandler } from "../utils/asyncHandler.js"
import { uploadOnCloudinary } from "../utils/cloudinary.js"
import { deleteFromCloudinary } from "../utils/OldImageDelete.js";


const getAllVideos = asyncHandler(async (req, res) => {
    const { page = 1, limit = 10, query, sortBy, sortType, userId } = req.query;

    try {
        const filter = {};
        if (query) {
            filter = {
                $or: [
                    { title: { $regex: query, $options: "i" } },
                    { description: { $regex: query, $options: "i" } }
                ]
            }
        }
        if (userId) {
            filter.owner = userId;
        }

        const sortOptions = {};
        if (sortBy) {
            sortOptions[sortBy] = sortType === "desc" ? -1 : 1;
        } else {
            sortOptions.createdAt = -1;
        }

        const skip = (page - 1) * limit;

        const videos = await video.find(filter)
            .sort(sortOptions)
            .skip(skip)
            .limit(parseInt(limit))

        const totalVideos = await Video.countDocuments(filter);

    } catch (error) {
        throw new ApiError(
            200,
            error.message || "somethis went wrong in sort the data "
        )
    }
    return res
        .status(200)
        .json(
            new ApiResponse(200, {
                Video,
                pagination: {
                    total: totalVideos,
                    page: Number(page),
                    limit: Number(limit),
                    totalPages: Math.ceil(totalVideos / limit),
                },
            }, "Videos fetched successfully")
        );
});


const publishAVideo = asyncHandler(async (req, res) => {
    const { title, description } = req.body
    // TODO: get video, upload to cloudinary, create video
    if ([title, description].some((field) => field?.trim() === "")) {
        throw new ApiError(
            401,
            "all fields need to me filled"
        )
    }

    const localVideoPath = req.files?.video?.[0]?.path
    const localThumbnailPath = req.files?.thumbnail?.[0]?.path

    if (!localVideoPath || !localThumbnailPath) {
        throw new ApiError(
            401,
            "video and thumbnail path needed"
        )
    }

    const video = await uploadOnCloudinary(localVideoPath)
    const thumbnail = await uploadOnCloudinary(localThumbnailPath)

    if (!video) {
        throw new ApiError(
            501,
            "something went wrong while uploading an video "
        )
    }

    if (!thumbnail) {
        throw new ApiError(
            501,
            "something went wrong while uploading an thumbnail "
        )
    }

    const videoDb = Video.create({
        videoFile: video.url,
        thumbnail: thumbnail.url,
        owner: req.user._id,
        title,
        description,
        duration: video.duration,
        views: 0,
        isPublished: true,
    })

    return res
        .status(200)
        .json(
            new ApiResponse(
                200,
                videoDb,
                "video uploaded successfully"
            )
        )

})

const getVideoById = asyncHandler(async (req, res) => {
    const { videoId } = req.params
    //TODO: get video by id
    const video = Video.findById(videoId).populate('owner', 'username email')

    if (!video) {
        throw new ApiError(404, "video not found")
    }

    if (!video.isPublished) {
        throw new ApiError(401, "this video is not published")
    }

    return res
        .status(200)
        .json(
            new ApiResponse(200, video, "video fetch successfully")
        )

})

const updateVideo = asyncHandler(async (req, res) => {
    const { videoId } = req.params;
    const { title, description } = req.body;

    let updateData = {};

    // Handle thumbnail if a new one is uploaded
    if (req.file?.path) {
        const thumbnail = await uploadOnCloudinary(req.file.path);

        if (!thumbnail?.url) {
            throw new ApiError(400, "Error while uploading thumbnail");
        }

        // Find old video to delete old thumbnail (if you stored public_id earlier)
        const oldVideo = await Video.findById(videoId);
        if (oldVideo?.thumbnail?.public_id) {
            await deleteFromCloudinary(oldVideo.thumbnail.public_id);
        }

        updateData.thumbnail = thumbnail.url; // or { url: thumbnail.url, public_id: thumbnail.public_id }
    }

    // Add other fields
    if (title) updateData.title = title;
    if (description) updateData.description = description;

    // Update video
    const video = await Video.findByIdAndUpdate(
        videoId,
        { $set: updateData },
        { new: true, runValidators: true }
    );

    if (!video) {
        throw new ApiError(404, "Video not found");
    }

    return res.status(200).json(
        new ApiResponse(200, video, "Video data updated successfully")
    );
});


const deleteVideo = asyncHandler(async (req, res) => {
    //TODO: delete video
    const { videoId } = req.params
    const result = await Video.findByIdAndDelete(videoId)

    if (!result) {
        throw new ApiError(404, " video not found ")
    }

    return res
        .status(200)
        .json(
            new ApiResponse(200, {}, "video deleted successfully ")
        )
})

const togglePublishStatus = asyncHandler(async (req, res) => {
    const { videoId } = req.params

    const video = await Video.findById(videoId)

    if(!video){
        throw new ApiError(404 , "video not found")
    }

    if(video.owner.toString() !== req.user._id.toString() ){
        throw new ApiError(401 , "unauthorized user can not modify video")
    }

    video.isPublished = !video.isPublished;
    await video.save();

    return res
    .status(200)
    .json(
        new ApiResponse(200 , video?.isPublished , "toggle complate " )
    )

})

export {
    getAllVideos,
    publishAVideo,
    getVideoById,
    updateVideo,
    deleteVideo,
    togglePublishStatus
}