import mongoose, { isValidObjectId } from "mongoose"
import { User } from "../models/user.model.js"
import { Subscription } from "../models/subscription.model.js" 
import { ApiError } from "../utils/ApiError.js"
import { ApiResponse } from "../utils/ApiResponse.js"
import { asyncHandler } from "../utils/asyncHandler.js"


const toggleSubscription = asyncHandler(async (req, res) => {
    // TODO: toggle subscription
    const { channelId } = req.params
    if (!isValidObjectId(channelId)) {
        throw new ApiError(400, "unauthorized channel ")
    }

    const channel = await User.findById(channelId)

    if (!channel) {
        throw new ApiError(404, "Channel not found");
    }

    if (channel._id.toString() === req.user._id.toString()) {
        throw new ApiError(401, "user can not subscribe there channel")
    }

    const existingSubscription = await Subscription.findOne({
        subscriber: req.user._id,
        channel: channelId
    })

    if (existingSubscription) {
        await Subscription.findByIdAndDelete(existingSubscription._id)
        return res
            .status(200)
            .json(
                new ApiResponse(200, {}, "Unsubscribe successfully")
            )
    }

    else {
        const newSubscriber = await Subscription.create({
            subscriber: req.user._id,
            channel: channelId
        })

        return res
        .status(201)
        .json(
            new ApiResponse(201, newSubscriber, "Subscribe successfully")
        )

    }
})

// controller to return subscriber list of a channel
const getUserChannelSubscribers = asyncHandler(async (req, res) => {
    const { channelId } = req.params

    if (!isValidObjectId(channelId)) {
        throw new ApiError(400, "unauthorized channel ")
    }

    const channel = await User.findById(channelId)

    if(!channel){
        throw new ApiError(404 , "channel not found ")
    }

    const subscribers = await Subscription.find({channel : channelId})
    .populate("subscriber" , "username email avatar")

    return res
    .status(200)
    .json(
        new ApiResponse(200 , subscribers , "subscribers fetched successfully")
    )
})

// controller to return channel list to which user has subscribed
const getSubscribedChannels = asyncHandler(async (req, res) => {
    const { subscriberId } = req.params

    if(!isValidObjectId(subscriberId)){
        throw new ApiError(400 , "unauthorized subscriber")
    }

    const subscriber = await User.findById(subscriberId)

    if(!subscriber){
        throw new ApiError(404 , "user not found") 
    }

    const channels = await Subscription.find({subscriber : subscriberId})
    .populate("channel" , "username email avatar")

    return res
    .status(200)
    .json(
        new ApiResponse(200 , channels , "Subscribed channels fetched successfully")
    )
})

export {
    toggleSubscription,
    getUserChannelSubscribers,
    getSubscribedChannels
}