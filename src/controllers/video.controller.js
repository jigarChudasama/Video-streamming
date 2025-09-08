import mongoose, { isValidObjectId } from "mongoose";
import { Video } from "../models/Video.model.js";
import { ApiError } from "../utils/ApiError.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import { asyncHandler } from "../utils/asyncHandler.js";
import { uploadOnCloudinary } from "../utils/cloudinary.js";
import { deleteFromCloudinary } from "../utils/OldImageDelete.js";

/**
 * GET all videos with filters, search, sort, pagination
 */
const getAllVideos = asyncHandler(async (req, res) => {
    const { page = 1, limit = 10, query, sortBy, sortType, userId } = req.query;

    let filter = {};
    if (query) {
        filter.$or = [
            { title: { $regex: query, $options: "i" } },
            { description: { $regex: query, $options: "i" } }
        ];
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

    const videos = await Video.find(filter)
        .sort(sortOptions)
        .skip(skip)
        .limit(parseInt(limit));

    const totalVideos = await Video.countDocuments(filter);

    return res.status(200).json(
        new ApiResponse(200, {
            videos,
            pagination: {
                total: totalVideos,
                page: Number(page),
                limit: Number(limit),
                totalPages: Math.ceil(totalVideos / limit),
            },
        }, "Videos fetched successfully")
    );
});

/**
 * PUBLISH a video
 */
const publishAVideo = asyncHandler(async (req, res) => {
    const { title, description } = req.body;

    if ([title, description].some((field) => !field?.trim())) {
        throw new ApiError(400, "All fields must be filled");
    }

    const localVideoPath = req.files?.video?.[0]?.path;
    const localThumbnailPath = req.files?.thumbnail?.[0]?.path;

    if (!localVideoPath || !localThumbnailPath) {
        throw new ApiError(400, "Video and thumbnail are required");
    }

    // Upload video with HLS streaming support
    const video = await uploadOnCloudinary(localVideoPath, {
        resource_type: "video",
        eager: [{ streaming_profile: "hd", format: "m3u8" }],
        eager_async: true
    });

    const thumbnail = await uploadOnCloudinary(localThumbnailPath);

    if (!video?.secure_url) {
        throw new ApiError(500, "Video upload failed");
    }
    if (!thumbnail?.secure_url) {
        throw new ApiError(500, "Thumbnail upload failed");
    }

    const videoDb = await Video.create({
        videoFile: {
            url: video.secure_url, // Cloudinary streaming link (.m3u8 will be available in eager transformations)
            public_id: video.public_id
        },
        thumbnail: {
            url: thumbnail.secure_url,
            public_id: thumbnail.public_id
        },
        owner: req.user._id,
        title,
        description,
        duration: video.duration,
        views: 0,
        isPublished: true,
    });

    return res.status(200).json(
        new ApiResponse(200, videoDb, "Video uploaded successfully")
    );
});

/**
 * GET video by ID
 */
const getVideoById = asyncHandler(async (req, res) => {
    const { videoId } = req.params;

    if (!isValidObjectId(videoId)) {
        throw new ApiError(400, "Invalid videoId");
    }

    const video = await Video.findById(videoId).populate("owner", "username email");

    if (!video) {
        throw new ApiError(404, "Video not found");
    }
    if (!video.isPublished) {
        throw new ApiError(403, "This video is not published");
    }

    return res.status(200).json(
        new ApiResponse(200, video, "Video fetched successfully")
    );
});

/**
 * UPDATE video details
 */
const updateVideo = asyncHandler(async (req, res) => {
    const { videoId } = req.params;
    const { title, description } = req.body;

    if (!isValidObjectId(videoId)) {
        throw new ApiError(400, "Invalid videoId");
    }

    let updateData = {};

    if (req.file?.path) {
        const thumbnail = await uploadOnCloudinary(req.file.path);
        if (!thumbnail?.secure_url) {
            throw new ApiError(400, "Thumbnail upload failed");
        }

        const oldVideo = await Video.findById(videoId);
        if (oldVideo?.thumbnail?.public_id) {
            await deleteFromCloudinary(oldVideo.thumbnail.public_id);
        }

        updateData.thumbnail = {
            url: thumbnail.secure_url,
            public_id: thumbnail.public_id,
        };
    }

    if (title) updateData.title = title;
    if (description) updateData.description = description;

    const video = await Video.findByIdAndUpdate(videoId, { $set: updateData }, { new: true, runValidators: true });

    if (!video) {
        throw new ApiError(404, "Video not found");
    }

    return res.status(200).json(
        new ApiResponse(200, video, "Video updated successfully")
    );
});

/**
 * DELETE video
 */
const deleteVideo = asyncHandler(async (req, res) => {
    const { videoId } = req.params;

    if (!isValidObjectId(videoId)) {
        throw new ApiError(400, "Invalid videoId");
    }

    const video = await Video.findById(videoId);
    if (!video) {
        throw new ApiError(404, "Video not found");
    }

    if (video?.videoFile?.public_id) {
        await deleteFromCloudinary(video.videoFile.public_id);
    }
    if (video?.thumbnail?.public_id) {
        await deleteFromCloudinary(video.thumbnail.public_id);
    }

    await Video.findByIdAndDelete(videoId);

    return res.status(200).json(
        new ApiResponse(200, {}, "Video deleted successfully")
    );
});

/**
 * TOGGLE publish status
 */
const togglePublishStatus = asyncHandler(async (req, res) => {
    const { videoId } = req.params;

    if (!isValidObjectId(videoId)) {
        throw new ApiError(400, "Invalid videoId");
    }

    const video = await Video.findById(videoId);
    if (!video) {
        throw new ApiError(404, "Video not found");
    }

    if (video.owner.toString() !== req.user._id.toString()) {
        throw new ApiError(401, "Unauthorized action");
    }

    video.isPublished = !video.isPublished;
    await video.save();

    return res.status(200).json(
        new ApiResponse(200, { isPublished: video.isPublished }, "Publish status updated")
    );
});

export {
    getAllVideos,
    publishAVideo,
    getVideoById,
    updateVideo,
    deleteVideo,
    togglePublishStatus
};
