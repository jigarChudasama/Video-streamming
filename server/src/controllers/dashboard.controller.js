import mongoose from "mongoose"
import { Video } from "../models/video.model.js"
import { Subscription } from "../models/subscription.model.js"
import { Like } from "../models/like.model.js"
import { ApiError } from "../utils/ApiError.js"
import { ApiResponse } from "../utils/ApiResponse.js"
import { asyncHandler } from "../utils/asyncHandler.js"

const getChannelStats = asyncHandler(async (req, res) => {
    const channelId = req.user?._id

    if (!channelId) {
        throw new ApiError(401, "Unauthorized: channel not found")
    }

    // total videos
    const totalVideos = await Video.countDocuments({ owner: channelId })

    // total views
    const totalViewAgg = await Video.aggregate([
        {
            $match: { owner: new mongoose.Types.ObjectId(channelId) }
        },
        {
            $group: {
                _id: null,
                totalViews: {
                    $sum: "$views"
                }
            }
        }
    ])
    const totalViews = totalViewAgg[0]?.totalViews || 0

    // total subscribers
    const totalSubscribers = await Subscription.countDocuments({ channel: channelId })

    // total likes
    const totalLikeAgg = await Like.aggregate([
        {
            $match: {
                video: {
                    $in: await Video.find({ owner: channelId }).distinct("_id")
                }
            }
        },
        {
            $count: "totalLikes"
        }
    ])
    const totalLikes = totalLikeAgg[0]?.totalLikes || 0

    return res.status(200).json(
        new ApiResponse(
            200,
            {
                totalVideos,
                totalViews,
                totalSubscribers,
                totalLikes
            },
            "Dashboard fetched successfully"
        )
    )
})

const getChannelVideos = asyncHandler(async (req, res) => {
    const channelId = req.params.channelId || req.user?._id

    if (!channelId) {
        throw new ApiError(401, "Unauthorized: channel not found")
    }

    const allVideos = await Video.find({ owner: channelId })
        .sort({ createdAt: -1 })
        .populate("owner", "username email")
        .lean()

    return res.status(200).json(
        new ApiResponse(200, allVideos, "All videos fetched successfully")
    )
})

export {
    getChannelStats,
    getChannelVideos
}
