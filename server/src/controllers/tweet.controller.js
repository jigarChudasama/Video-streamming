import mongoose, { isValidObjectId } from "mongoose"
import { Tweet } from "../models/tweet.model.js"
import { User } from "../models/user.model.js"
import { ApiError } from "../utils/ApiError.js"
import { ApiResponse } from "../utils/ApiResponse.js"
import { asyncHandler } from "../utils/asyncHandler.js"

const createTweet = asyncHandler(async (req, res) => {
    //TODO: create tweet
    const { content } = req.body

    if (!content || content.trim() === "") {
        throw new ApiError(403, "content is required")
    }

    const tweet = await Tweet.create({
        content,
        owner: req.user._id
    })

    return res
        .status(200)
        .json(
            new ApiResponse(200, tweet, "tweet created successfully")
        )
})

const getUserTweets = asyncHandler(async (req, res) => {
    // TODO: get user tweets

    const { userId } = req.parems

    if (!isValidObjectId(userId)) {
        throw new ApiError(404, "user not found")
    }

    const tweet = await Tweet.find({ owner: userId }).sort({ createdAt: -1 })

    return res.status(200)
        .json(
            new ApiResponse(200, tweet, "get all tweet")
        )

})

const updateTweet = asyncHandler(async (req, res) => {
    //TODO: update tweet

    const { tweetId } = req.parems
    const { content } = req.body

    const tweet = await Tweet.findById(tweetId)

    if (!content || content.trim() === "") {
        throw new ApiError(403, "content is required")
    }

    if (tweet.owner.toString() !== req.user._id.toString()) {
        throw new ApiError(403, "unauthorized user to update tweet")
    }


    tweet.content = content || tweet.content

    return res
        .status(200)
        .json(
            new ApiResponse(200, tweet, "tweet updeted successfully")
        )

})

const deleteTweet = asyncHandler(async (req, res) => {
    //TODO: delete tweet
    const { tweetId } = req.parems

    const tweet = await Tweet.findById(tweetId)

    if (!tweet) {
        throw new ApiError(404, "tweet not found")
    }

    if (tweet.owner.toString() !== req.user._id.toString()) {
        throw new ApiError(403, "unauthorized user to delete tweet")
    }

    await tweet.deleteOne()

    return res
        .status(200)
        .json(
            new ApiResponse(200, {}, "tweet deleted successfully")
        )

})

export {
    createTweet,
    getUserTweets,
    updateTweet,
    deleteTweet
}