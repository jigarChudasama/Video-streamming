import mongoose, { isValidObjectId } from "mongoose"
import { Like } from "../models/like.model.js"
import { ApiError } from "../utils/ApiError.js"
import { ApiResponse } from "../utils/ApiResponse.js"
import { asyncHandler } from "../utils/asyncHandler.js"

const toggleVideoLike = asyncHandler(async (req, res) => {
    const { videoId } = req.params
    //TODO: toggle like on video

    if (!isValidObjectId(videoId)) {
        throw new ApiError(400, "invalid video id")
    }

    const exsistingLike = await Like.findOne({
        video: videoId,
        likedBy: req.user._id
    })

    if (exsistingLike) {
        await exsistingLike.deleteOne()
        const likesCount = await Like.countDocuments({ video: videoId });

        return res
            .status(200)
            .json(
                new ApiResponse(200, { likesCount }, "video inliked successfully")
            )
    } else {
        await Like.create({
            video: videoId,
            likedBy: req.user._id
        })
        const likesCount = await Like.countDocuments({ video: videoId });
        return res
            .status(200)
            .json(
                new ApiResponse(200, { likesCount }, "video liked successfully")
            )
    }

})

const toggleCommentLike = asyncHandler(async (req, res) => {
    const { commentId } = req.params
    //TODO: toggle like on comment
    if (!isValidObjectId(commentId)) {
        throw new ApiError(400, "invalid comment id")
    }

    const exsistingLike = await Like.findOne({
        comment: commentId,
        likedBy: req.user._id
    })

    if (exsistingLike) {
        await exsistingLike.deleteOne()
        const likesCount = await Like.countDocuments({ comment: commentId });
        return res
            .status(200)
            .json(
                new ApiResponse(200, { likesCount }, "comment unliked successfully")
            )
    }
    else {
        await Like.create({
            comment: commentId,
            likedBy: req.user._id
        })
        const likesCount = await Like.countDocuments({ comment: commentId });
        return res
            .status(200)
            .json(
                new ApiResponse(200, { likesCount }, "comment liked successfully")
            )

    }

})

const toggleTweetLike = asyncHandler(async (req, res) => {
    const { tweetId } = req.params
    //TODO: toggle like on tweet

    if (!isValidObjectId(tweetId)) {
        throw new ApiError(400, "invalid tweet id")
    }

    const exsistingLike = await Like.findOne({
        tweet: tweetId,
        likedBy: req.user._id
    })

    if (exsistingLike) {
        await exsistingLike.deleteOne()
        const likesCount = await Like.countDocuments({ tweet: tweetId });
        return res
            .status(200)
            .json(
                new ApiResponse(200, { likesCount }, "tweet inliked successfully")
            )
    }
    else {
        await Like.create({
            tweet: tweetId,
            likedBy: req.user._id
        })
        const likesCount = await Like.countDocuments({ tweet: tweetId });
        return res
            .status(200)
            .json(
                new ApiResponse(200, { likesCount }, "tweet liked successfully")
            )

    }

}
)

const getLikedVideos = asyncHandler(async (req, res) => {
    //TODO: get all liked videos
    const likedVideo = await Like.find({
        likedBy: req.user._id,
        video: { $exists: true }
    }).populate("video")

    return res
        .status(200)
        .json(
            new ApiResponse(200, likedVideo, "all liked videos fetched successfully")
        );

})

export {
    toggleCommentLike,
    toggleTweetLike,
    toggleVideoLike,
    getLikedVideos
}