import mongoose from "mongoose"
import { Comment } from "../models/comment.model.js"
import { ApiError } from "../utils/ApiError.js"
import { ApiResponse } from "../utils/ApiResponse.js"
import { asyncHandler } from "../utils/asyncHandler.js"

const getVideoComments = asyncHandler(async (req, res) => {
    //TODO: get all comments for a video
    const { videoId } = req.params
    const { page = 1, limit = 10 } = req.query

    const aggregate = Comment.aggregate([
        {
            $match: {
                video: new mongoose.Types.ObjectId(videoId)
            }
        },
        {
            $lookup: {
                from: 'users',
                localField: 'owner',
                foreignField: '_id',
                as: 'owner',
                pipeline: [{
                    $project: {
                        username: 1,
                        avatar: 1
                    }
                }]
            }
        },
        {
            $unwind: '$owner'
        },
        {
            $sort: {
                createdAt: -1
            }
        }
    ])

    const option = { page, limit }

    const comment = await Comment.aggregatePaginate(aggregate, option)

    return res
        .status(200)
        .json(
            new ApiResponse(200, comment, "video comment fatched successfully")
        )

})

const addComment = asyncHandler(async (req, res) => {
    // TODO: add a comment to a video

    const { videoId } = req.params
    const { content } = req.body

    if (!content) {
        throw new ApiError(400, "content is requierd")
    }

    const comment = await Comment.create({
        content,
        video: videoId,
        owner: req.user._id
    })

    return res
        .status(200)
        .json(
            new ApiResponse(200, comment, "comment added successfully")
        )

})

const updateComment = asyncHandler(async (req, res) => {
    // TODO: update a comment

    const { commentId } = req.params
    const { content } = req.body

    const comment = await Comment.findById(commentId)

    if (!comment) {
        throw new ApiError(404, "comment not found")
    }

    if (comment.owner.toString() !== req.user._id.toString()) {
        throw new ApiError(403, "unauthhorized user to update commnet")
    }

    comment.content = content || comment.content
    await comment.save()

    return res
        .status(201)
        .json(
            new ApiResponse(201, comment, "comment updeted successfully")
        )

})

const deleteComment = asyncHandler(async (req, res) => {
    // TODO: delete a comment
    const { commentId } = req.params

    const comment = await Comment.findById(commentId)

    if (!comment) {
        throw new ApiError(404, "comment not found")
    }

    if (comment.owner.toString() !== req.user._id.toString()) {
        throw new ApiError(401, "unauthorized user to delete comment")
    }

    await comment.deleteOne();

    return res
        .status(200)
        .json(
            new ApiResponse(200, {}, "comment deleted successfully ")
        )

})

export {
    getVideoComments,
    addComment,
    updateComment,
    deleteComment
}